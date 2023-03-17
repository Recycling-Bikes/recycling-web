import { supabase } from "supabase/client";
import { v4 } from "uuid";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

/* Recordatorio Colocar el estado del usuario para que se puede leer directamente */

export const FPState = create(
  devtools(
    persist(
      (set, get) => ({
        publication: {},

        setPublication: async (data) => {
          set({ publication: { ...data } });
        },

        postPublication: async (items) => {
          return await postBici(items);
        },

        clearPublication: () => {
          set(
            (state) => ({
              ...state,
              publication: {},
            }),
            true
          );
        },

        form: {},

        setForm: async (valor, parameters = "*") => {
          const data = await getData(valor, parameters);
          set({
            form: {
              ...get().form,
              ...data,
              live: true,
            },
          });
        },

        clearForm: () => {
          set(
            (state) => ({
              ...state,
              form: {},
            }),
            true
          );
        },

        UpdateImages: async (files, userID) => {
          const paths = await postImages(files, userID);

          Promise.resolve(paths).then((images) => {
            set({
              publication: { filesUrl: [...images] },
            });
          });

          return paths;
        },

        clearAll: () => {
          get().clearForm();
          get().clearPublication();
        },
      }),
      { name: "FormPublicationData" }
    ),
    {
      anonymousActionType: "FormPublicationData",
      enabled: true,
      name: "FormPublicationData",
    }
  )
);

const getDatum = async (name, parameters = "*") => {
  let { data: data, error } = await supabase.from(name).select(parameters);

  return error ? error : data;
};

export const getData = async (name = null, parameters = "*") => {
  let data = {};

  if (name !== null) {
    data[name] = await getDatum(name, parameters);

    return await data;
  } else {
    data = {
      brands: await getDatum("brands", parameters),
      models: await getDatum("models", parameters),
      transmissions: await getDatum("transmissions", parameters),
      sizes: await getDatum("sizes", parameters),
      materials: await getDatum("materials", parameters),
      conditions: await getDatum("conditions", parameters),
      category: await getDatum("category", parameters),
      years: await getDatum("years", parameters),
      frenos: await getDatum("frenos", parameters),
      subcategory: await getDatum("subcategory", parameters),
      rines: await getDatum("rines", parameters),
      country: await getDatum("country", parameters),
      suspensions: await getDatum("suspension", parameters),
    };
  }

  return data;
};

export const postImages = async (files, userID) => {
  const carpeta = v4();

  const filesUrl = files.map(async (file) => {
    const { data, error } = await supabase.storage
      .from("imagesbicis")
      .upload(userID + "/" + carpeta + "/" + v4(), file);

    return error ? (console.log(error), error) : data.path;
  });

  return await Promise.all(filesUrl);
};

const postBici = async ({
  conditions,
  year,
  model,
  category,
  brand,
  size,
  material,
  transmission,
  title,
  description,
  other,
  suspension,
  freno,
  rin,
  price,
  subcategory,
  filesUrl,
  user_id
}) => {


  const propsres = await supabase.from("propiedades").insert([
    {
      transmission,
      category,
      subcategory,
      model: other, 
      brand, 
      material,
      suspension: suspension? suspension : null,
      freno: freno ? freno : null,
      rine: rin ? rin : null ,
    },
  ]).select("*");;

  const res = await supabase.from("bicis").insert([
    {
      condition: conditions,
      year,
      model,
      size,
      title,
      description,
      price,
      filesUrl,
      user_id,
      country: 1,
      propiedades: propsres?.data[0]?.id ?? 8
    },
  ]);

  return res;
};
