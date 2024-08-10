import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

type ResponseData =
	| {
			pagination: number[];
			paginationCount: number;
			paginationSize: number;
			prev: number | null;
			next: number | null;
			currentPage: number;
	  }
	| { message: string };

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>,
) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method Not Allowed" });
	}

	const {
		currentPage = 1,
		pageSize = 20,
		filter,
	} = req.body as {
		currentPage: number;
		pageSize: number;
		filter: {
			search: "";
			country: [];
			category: [];
			subcategory: [];
			size: [];
			brands: [];
			materials: [];
			suspension: [];
			frenos: [];
			rines: [];
			years: [];
			minPrice: number;
			maxPrice: number;
		};
	};

	const filters = {
		search: filter?.search ?? "",
		country: filter?.country ?? [],
		category: filter?.category ?? [],
		subcategory: filter?.subcategory ?? [],
		size: filter?.size ?? [],
		brands: filter?.brands ?? [],
		materials: filter?.materials ?? [],
		suspension: filter?.suspension ?? [],
		frenos: filter?.frenos ?? [],
		rines: filter?.rines ?? [],
		years: filter?.years ?? [],
		minPrice: filter?.minPrice ?? Number.NEGATIVE_INFINITY,
		maxPrice: filter?.maxPrice ?? Number.POSITIVE_INFINITY,
	};

	const { data, error } = await supabase
		.from("bicis")
		.select(
			`
  id,price,title,
  models (name), filesUrl, propiedades (transmission,
  category ,
  brand, 
  material ,
  suspension,
  freno,
  rine), size, country, year,
  off,
  etiquetas (name),
  status (name),
  verified,
  subcategories:bicis_subcategory(
    id:subcategory_id
    )
`,
		)
		// .in("status", [2, 3])
		.order("id", { ascending: false });

	// Si hay un error en la consulta, devolverlo inmediatamente
	if (error) {
		return res.status(500).json({ message: error.message });
	}

	function subcategories(item) {
		return item.map((subcategory) => subcategory.id);
	}

	const resultBici = data.map((item) => ({
		id: item.id,
		price: item.price,
		title: item.title,
		models: item.models,
		filesUrl: item.filesUrl,
		size: item.size,
		country: item.country,
		year: item.year,
		verified: item.verified,
		off: item.off,
		// sold: item.status == 3 ? true : false,
		status: item.status,
		etiquetas: item.etiquetas,
		propiedades: {
			//@ts-ignore
			transmission: item.propiedades.transmission,
			//@ts-ignore
			category: item.propiedades.category,
			//@ts-ignore
			brand: item.propiedades.brand,
			//@ts-ignore
			material: item.propiedades.material,
			//@ts-ignore
			suspension: item.propiedades.suspension,
			//@ts-ignore
			freno: item.propiedades.freno,
			//@ts-ignore
			rine: item.propiedades.rine,
			subcategories:
				item.subcategories.length > 0 ? subcategories(item.subcategories) : [],
		},
	}));

	const filteredData = filteredBicis(resultBici, filters);

	const paginatedData = createPagination(filteredData, currentPage, pageSize);

	return res.status(200).json(paginatedData);
}

function filteredBicis(data, filters) {
	return (data ?? [])?.filter((datum) => {
		let passesFilter = true;

		const price = datum.off ?? datum.price;

		// verificar si la bicicleta tiene la etiqueta "Vendida"
		if (datum.etiquetas?.name.includes("Vendida")) {
			passesFilter = false;
		}

		if (datum?.status?.name.includes("Vendida")) {
			passesFilter = false;
		}

		if (
			filters.country?.length > 0 &&
			!filters.country.includes(datum.country)
		) {
			passesFilter = false;
		}

		if (
			filters.category?.length > 0 &&
			!filters.category.includes(datum.propiedades.category)
		) {
			passesFilter = false;
		}

		if (
			filters.subcategory?.length > 0 &&
			!filters.subcategory.some((sub) =>
				datum.propiedades.subcategories.includes(sub),
			)
		) {
			passesFilter = false;
		}

		if (filters.size?.length > 0 && !filters.size.includes(datum.size)) {
			passesFilter = false;
		}

		if (
			filters.brands?.length > 0 &&
			!filters.brands.includes(datum.propiedades.brand)
		) {
			passesFilter = false;
		}

		if (
			filters.materials?.length > 0 &&
			!filters.materials.includes(datum.propiedades.material)
		) {
			passesFilter = false;
		}

		if (
			filters.suspension?.length > 0 &&
			!filters.suspension.includes(datum.propiedades.suspension)
		) {
			passesFilter = false;
		}

		if (
			filters.frenos?.length > 0 &&
			!filters.frenos.includes(datum.propiedades.freno)
		) {
			passesFilter = false;
		}

		if (
			filters?.rines?.length > 0 &&
			!filters.rines.includes(datum.propiedades.rine)
		) {
			passesFilter = false;
		}

		if (filters?.years?.length > 0 && !filters.years.includes(datum.year)) {
			passesFilter = false;
		}

		if (filters?.minPrice !== null && price < filters.minPrice) {
			passesFilter = false;
		}

		if (filters?.maxPrice !== null && price > filters.maxPrice) {
			passesFilter = false;
		}

		if (!datum.title?.toLowerCase().includes(filters?.search?.toLowerCase())) {
			passesFilter = false;
		}

		return passesFilter;
	});
}

function createPagination(
	orderData = [],
	currentPage = 1,
	paginationSize = 12,
) {
	if (paginationSize <= 0) {
		return {
			pagination: [],
			paginationCount: 0,
			paginationSize: -1,
			prev: null,
			next: null,
			currentPage,
			data: orderData,
		};
	}

	const startIndex = (currentPage - 1) * paginationSize;
	const endIndex = startIndex + paginationSize;

	const paginationCount = Math.ceil(orderData.length / paginationSize);

	const paginatedData = orderData.slice(startIndex, endIndex);

	const next = paginationCount > currentPage ? currentPage + 1 : null;

	const prev = currentPage > 1 ? currentPage - 1 : null;

	return {
		pagination: Array.from({ length: paginationCount }, (_, i) => i + 1),
		paginationCount,
		paginationSize,
		prev,
		next,
		currentPage,
		data: paginatedData,
	};
}
