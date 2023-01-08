import { supabase } from "supabase/client";
import { v4 } from "uuid";
import create from "zustand";
import { persist, devtools } from "zustand/middleware";

/* Recordatorio Colocar el estado del usuario para que se puede leer directamente */

export const FPState = create(
  devtools(
    persist(
      (set, get) => ({
        publication: {},

        setPublication: (data) => {
          set({ publication:{...get.publication, ...data} });
        },

        postPublication: () => {
          postBici(get.publication);
        },

        clearPublication: () => {
          set({
            publication: {},
          });
        },

        form: {},

        setForm: async (valor, parameters = "*") => {
          const data = await getData(valor, parameters);
          set({
            form: {
              ...get.form,
              ...data,
              live: true,
            },
          });
        },

        clearForm: () => {
          set({
            form: {},
          });
        },

        UpdateImages: async (files, userID) => {
          const paths = await postImages(files, userID);
          set({
            publication: { ...get.publication, filesUrl: paths },
          });
        },

        clearAll: () => {
          get.clearForm();
          get.clearPublication();
        },
      }),
      { name: "FormPublicationData" }
    ),
    { anonymousActionType: 'FormPublicationData',
        enabled: true,
        name: "FormPublicationData" }
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
  } else {
    data = {
      brands: await getDatum("brands", parameters),
      models: await getDatum("models", parameters),
      transmissions: await getDatum("transmissions", parameters),
      size: await getDatum("size", parameters),
      materials: await getDatum("materials", parameters),
      conditions: await getDatum("conditions", parameters),
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
  condition,
  year,
  model,
  brands,
  size,
  materials,
  transmission,
  title,
  description,
  price,
  filesUrl,
}) => {
  const { data, error } = await supabase.from("bicis").insert([
    {
      condition,
      year,
      model,
      size,
      transmission,
      title,
      description,
      price,
      filesUrl,
    },
  ]);

  console.log(data);
  console.log(error);
};
