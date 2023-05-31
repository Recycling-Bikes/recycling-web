import { Spinner } from "react-bootstrap";

import { useQuery } from "@tanstack/react-query";
import { parkingState } from "context/Parking/ParkingState";
import Relleno from "utils/relleno";
import { filtersState } from "context/Filters/filtersState";
import { ComponenteBike } from "components/bicletas";
import { use, useCallback, useEffect, useState } from "react";
import { useHydrate } from "hooks/hydrate/hydrate";

export default function GetBicis(props) {
	const setParking = parkingState((state) => state.setParking);
	const parking = parkingState((state) => state.parking);
	const didMemoryParking = parkingState((state) => state.didMemoryParking);
	const filters = filtersState((state) => state.filters);
	const [lastScrollTop, setLastScrollTop] = useState(0);

	const [isLoading, setIsLoading] = useState(false);

	// useState hydrates the state with the initial value
	const [hydrate, setHydrate] = useState(false);

	useEffect(() => {
		setHydrate(true);
	}, []);

	useEffect(() => {
		if (hydrate) {
			didMemoryParking();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hydrate]);

	const [pageNumber, setPageNumber] = parkingState((state) => [
		state.pageNumber,
		state.setPageNumber,
	]);

	const fetchParking = useCallback(async () => {
		if (!isLoading) {
			setIsLoading(true);
			setPageNumber((old) => old + 1);

			try {
				await setParking();
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		(async () => {
			if (hydrate && parking.length === 0 && !isLoading) {
				await fetchParking();
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hydrate]);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;

			const scrolledPercentage =
				(document.documentElement.scrollTop + window.innerHeight) /
				document.documentElement.scrollHeight;

			if (scrolledPercentage < 0.8 || isLoading) return;

			if (scrollTop > lastScrollTop) {
				fetchParking();
			}

			setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [parking, lastScrollTop, pageNumber, hydrate, isLoading, fetchParking]);

	return (
		<div
			className="d-grid gap-3 my-4"
			style={{
				gridTemplateColumns: "repeat(auto-fit,minmax(14.8rem, 1fr))",
			}}
		>
			{hydrate &&
				filteredData(parking ?? [], filters).map((bici) => (
					<ComponenteBike
						key={bici.id}
						id={bici.id}
						name={bici.models.name}
						title={bici.title}
						price={bici.price}
						status={bici.status}
						sold={bici.sold}
						off={bici.off}
						image={bici.filesUrl[0]}
						etiqueta={bici.etiquetas?.name}
						verified={bici.verified}
					/>
				))}
			{isLoading && (
				<Spinner
					animation="border"
					variant="secondary"
					style={{
						width: "200px",
						height: "200px",
						fontSize: "90px",
					}}
				/>
			)}
			<Relleno />
		</div>
	);
}

function filteredData(data, filters) {
	return data?.filter((datum) => {
		let passesFilter = true;

		const price = datum.off ?? datum.price;

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

		passesFilter = datum.title
			?.toLowerCase()
			?.includes(filters?.search?.toLowerCase());

		return passesFilter;
	});
}
