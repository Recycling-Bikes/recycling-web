import { create } from "zustand";
import { persist } from "zustand/middleware";

export const filtersState = create(
    
      (set, get) => ({
      
        filters: {            
            city: [],
            category: [],
            subcategory: [],
            size: [],
            brands: [],
            materials: [],
            frenos: [],
            rine: [],
            years: [],
            minPrice: 0,
            maxPrice: Infinity,
          },

          setFilters: (data) => {
            set((state) => ({ filters: {  ...data } }));
          }
        })
  );
