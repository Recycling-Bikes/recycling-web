import { supabase } from "supabase/client";
import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export const parkingState = create(
  devtools(
    persist(
      (set, get) => ({
        bici: {},

        setBici: async (id) => {
          if (id != get().bici.id && id != undefined) {

            console.log("server")
            const data = await getBici(id);
            set({ bici: { ...get().bici, ...data } });
            return data;
          } else {

            console.log("cache")
            return { ...get().bici };
          }
        },

        clearBici: () => {
          set({
            bici: {},
          });
        },

        parking: {},

        setParking: async () => {
          const data = await getBicis();
          set({
            parking: {
              ...get.parking,
              ...data,
              live: true,
            },
          });
        },

        clearParking: () => {
          set({
            parking: {},
          });
        },

        clearAll: () => {
          get.clearParking();
          get.clearBici();
        },

        CDN: "https://mmducfdpxruujxivibfv.supabase.co/storage/v1/object/public/imagesbicis/",
      }),
      { name: "ParkingData" }
    ),
    {
      anonymousActionType: "ParkingData",
      enabled: true,
      name: "ParkingData",
    }
  )
);

const getBicis = async () => {
  let { data: bicis, error } = await supabase.from("bicis").select(`
    id,price,title,
    models (name)`);
  console.log(error);
  return error ? error : bicis;
};

const getBici = async (id) => {
  const { data: bicis, error } = id
    ? await supabase
        .from("bicis")
        .select(
          `id, price, title , filesUrl , models (name), size (name), conditions (name)`
        )
        .eq("id", id)
    : { error: { message: "id = undefined" }, bicis: [] };

  console.log(error);
  
  return error ? error : bicis[0];
};