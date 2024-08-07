import { useInfiniteQuery } from "@tanstack/react-query";
import { filtersState } from "context/Filters/filtersState";
import { useRouter } from "next/router";
import wretch from "wretch";

export const useBicisPaginations = () => {
	const filters = filtersState((state) => state.filters);

	const router = useRouter();
	return useInfiniteQuery({
		queryKey: ["bicis", filters, router.query.page],

		initialPageParam: Number.isNaN(Number(router.query.page))
			? 1
			: Number(router.query.page),
		getNextPageParam: (lastPage) => {
			return lastPage?.next;
		},

		getPreviousPageParam: (firstPage) => {
			return firstPage?.previous;
		},
		queryFn: async ({ pageParam, signal }) => {
			const data = await wretch(`${window.location.origin}/api/allbicis`)
				.post({
					filter: filters,
					currentPage: pageParam,
					pageSize: 22,
				})
				.json();
			return data;
		},
	});
};
