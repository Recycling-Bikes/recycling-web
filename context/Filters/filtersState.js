import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialFilters = {
  search: "",
	country: [],
	category: [],
	subcategory: [],
	size: [],
	brands: [],
	materials: [],
	suspension: [],
	frenos: [],
	rines: [],
	years: [],
	minPrice: null,
	maxPrice: Infinity,
};

export const filtersState = create(

		(set, get) => ({
			filters: initialFilters,
			
			setFilters: (fn) => {
				const data = fn(get().filters);
				set(() => ({ filters: { ...data } }));
			},

			setFiltersB: (fn) => {
				const data = fn();
				set(() => ({ filters: { ...get().filters, ...data } }));
			},

			ClearFilters: () => {
				set(() => ({
					filters: initialFilters,
				}));
			},
      
		}),
		{
			name: "filters",
		},
);
