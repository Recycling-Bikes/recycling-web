import { create } from "zustand";
import { persist } from "zustand/middleware";


export const filtersState = create((set, get) => ({
    filters: {
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
    },

    setFilters: (fn) => {

        const data = fn(get().filters);
        set((state) => ({ filters: { ...data } }));
    },
}));

