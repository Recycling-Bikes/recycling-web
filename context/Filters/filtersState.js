import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialFilters = {
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
  minPrice: 0,
  maxPrice: Infinity,
};

export const filtersState = create(
  persist(
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
    }
  )
);
