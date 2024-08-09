import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { filtersState } from "context/Filters/filtersState";
import { useRouter } from "next/router";
import wretch from "wretch";

export const useBicisPaginations = ({ page = 1, initialPage }) => {
	const filters = filtersState((state) => state.filters);

	return useQuery({
		queryKey: ["bicis", filters, page],
		initialData: initialPage,

		queryFn: async ({ signal }) => {
			const data = await wretch(`${window.location.origin}/api/allbicis`)
				.post({
					filter: filters,
					currentPage: page,
					pageSize: 24,
				})
				.json();
			return data;
		},
	});
};
