import { supabase } from "supabase/client";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const parkingState = create(

    (set, get) => ({
      bici: {},

      setBici: async (id) => {
        if (id != get().bici.id && id != undefined) {
          console.log("server");
          const data = await getBici(id);
          set({ bici: { ...data } });
          return data;
        } else {
          console.log("cache");
          return { ...get().bici };
        }
      },

      clearBici: () => {
        set(
          (state) => ({
            ...state,
            bici: {},
          }),
          true
        );
      },

      parking: [],

      pageNumber: 0,

      setPageNumber: (callback) => {
        const pageNumber = callback(get().pageNumber);

        set((state) => ({
          pageNumber: pageNumber,
        }));
      },

      setParking: async () => {
        const data = await getBicis(get().pageNumber, 20);

        set((state) => ({
          parking: [...state.parking, ...data],
        }));

        return data;
      },

      didMemoryParking: async () => {
        if (get().parking.length === 0) return false;
        const id = await getBiciDidMemory();

        if (id !== (get().parking[0]?.id ?? id)) {
          console.log("clear");
          set((state) => ({
            parking: [],
            pageNumber: 0,
          }));
          return true;
        }
        return false;
      },

      clearParking: () => {
        set(
          (state) => ({
            ...state,

            parking: [],
            pageNumber: 0,
          }),
          true
        );
      },

      clearAll: () => {
        get().clearParking();
        get().clearBici();
      },
    }),
    { name: "ParkingData3" }
);

const getBicis = async (pageNumber, pageSize) => {
  const { data, error } = await supabase
    .from("bicis")
    .select(
      `
    id,price,title,
    models (name), filesUrl, propiedades (transmission,
    category ,
    brand, 
    material ,
    suspension,
    freno,
    rine), size, country, year,
    off,
    etiquetas (name),
    verified,
    subcategories:bicis_subcategory(
      id:subcategory_id
      )
    status
  `
    )
    .in("status", [2, 3])
    .order("id", { ascending: false })
    .order("status", { ascending: true })
    .range(pageSize * (pageNumber - 1), pageSize * pageNumber - 1);

  // Si hay un error en la consulta, devolverlo inmediatamente
  if (error) {
    console.log(error);
    return { error };
  }

  function subcategories(item) {
    return item.map((subcategory) => subcategory.id);
  }

  const result = data.map((item) => ({
    id: item.id,
    price: item.price,
    title: item.title,
    models: item.models,
    filesUrl: item.filesUrl,
    size: item.size,
    country: item.country,
    year: item.year,
    verified: item.verified,
    off: item.off,
    sold: item.status == 3 ? true : false,
    etiquetas: item.etiquetas,
    propiedades: {
      transmission: item.propiedades.transmission,
      category: item.propiedades.category,
      brand: item.propiedades.brand,
      material: item.propiedades.material,
      suspension: item.propiedades.suspension,
      freno: item.propiedades.freno,
      rine: item.propiedades.rine,
      subcategories:
        item.subcategories.length > 0 ? subcategories(item.subcategories) : [],
    },
  }));

  return result;
};

const getBiciDidMemory = async () => {
  const { data, error } = await supabase
    .from("bicis")
    .select("id")
    .in("status", [2, 3])
    .order("id", { ascending: false })
    .order("status", { ascending: true })
    .limit(1);

  // Si hay un error en la consulta, devolverlo inmediatamente
  if (error) {
    console.log(error);
    return { error };
  }

  return data[0].id;
};

const getBici = async (id) => {
  console.log("🚀 ~ file: ParkingState.js:92 ~ getBici ~ id:", id);
  const { data: bicis, error } = id
    ? await supabase
        .from("bicis")
        .select(
          `
        id,price,title,
          models (name), filesUrl, propiedades (transmission (name),
          category (name, id) ,
          subcategory (name) ,
          brands (name), 
          materials (name),
          model,
          suspension (name) ,
          frenos (name),
          rines (name)),
          status,
          verified,
          size (name, relacion, ruta), 
          country (name), year  (name),
          off,
          etiquetas (name)`
        )
        .eq("id", id)
    : { error: { message: "id = undefined" }, bicis: [] };

  console.log(error);

  return error ? error : bicis[0];
};
