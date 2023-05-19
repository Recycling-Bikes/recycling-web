import { supabase } from "supabase/client";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const parkingState = create(
  persist(
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

      parking: {},

      setParking: async () => {
        const data = await getBicis();
        set({
          parking: {
            ...data,
          },
        });
        return data;
      },

      clearParking: () => {
        set(
          (state) => ({
            ...state,
            parking: {},
          }),
          true
        );
      },

      clearAll: () => {
        get().clearParking();
        get().clearBici();
      },

      CDN2: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/imagesbicis/`,
    }),
    { name: "ParkingData" }
  )
);

const getBicis = async () => {
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
    .order("status", { ascending: true });

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
