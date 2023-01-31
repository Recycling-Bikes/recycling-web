import { getData } from "context/FormPublications/FPstate";
import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export const avaluadorState = create(
  devtools(
    (set, get) => ({
      brand: "",

      quest: { years: [] },

      setYears: (data) => {
        set({ quest: { ...data } });
      },

      clearQuest: () => {
        set(
          (state) => ({
            ...state,
            quest: {},
          }),
          true
        );
      },

      setBrand: (title) => {
        set((state) => ({
          brand: title,
        }));
      },

      clearAll: () => {
        get().clearQuest();
      },

      conditions: [],

      setConditions: async () => {
        const data = await getData("conditions");

        set(() => ({
          ...data,
        }));
      },

      /*       results: 0,

      setResults: () => {
        set((state) => ({
          results: state.results + 1,
        }))
      },

      clearResults: () => {
        set(
          (state) => ({
            ...state,
            results: 0,
          }),
          true
        );
      }, */
    }),
    {
      anonymousActionType: "Avaluator",
      enabled: true,
      name: "Avaluator",
    }
  )
);
