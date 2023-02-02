import { getData } from "context/FormPublications/FPstate";
import { supabase } from "supabase/client";
import { create } from "zustand";
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

      parking: [],

      setParking: async () => {
        const data = await getBicis();
        console.log("🚀 ~ file: avaluadorState.js:42 ~ setParking: ~ data", data)
        set({
          parking: 
            [...data],
          
        });
        return data;
      },

      conditions: [],

      setConditions: async () => {
        const data = await getData("conditions");

        set(() => ({
          ...data,
        }));
      },
    }),
    {
      anonymousActionType: "Avaluator",
      enabled: true,
      name: "Avaluator",
    }
  )
);


const getBicis = async () => {
  const { data: bicis, error } = await supabase.from("bmodels").select(`
    id,price,name,year,brands (name), category`);
  console.log(error);
  console.log("🚀 ~ file: avaluadorState.js:74 ~ getBicis ~ error", error)
  console.log(bicis);
  return error ? error : await bicis;
};