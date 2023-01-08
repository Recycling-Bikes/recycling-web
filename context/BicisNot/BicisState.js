import React, { useContext, useEffect, useReducer } from "react";
// cspell:disable

import BicisContext from "./BicisContext";
import BicisReducer from "./BicisReducer";
import { supabase } from "supabase/client";

import { GET_BICI, CREATE_BICI, DELETE_BICI } from "../types";
import { v4 } from "uuid";

const BicisState = (props) => {
  const initialState = {
    /* marcas:[], */
    CDN: "https://mmducfdpxruujxivibfv.supabase.co/storage/v1/object/public/imagesbicis/",
    bici: {},
    publicacion: {},
  };

  const [state, dispatch] = useReducer(BicisReducer, initialState);

  const getBicis = async () => {
    let { data: bicis, error } = await supabase.from("bicis").select(`
    id,price,title,
    models (name)`);
    return bicis;
  };

  const getMarcas = async () => {
    let { data: brands, error } = await supabase.from("brands").select("*");
    return brands;
  };

  const getModels = async () => {
    let { data: models, error } = await supabase.from("models").select("*");
    return models;
  };

  const getMaterials = async () => {
    let { data: materials, error } = await supabase
      .from("materials")
      .select("*");
    return materials;
  };

  const getTallas = async () => {
    let { data: size, error } = await supabase.from("size").select("*");
    return size;
  };

  const getTransmision = async () => {
    let { data: transmissions, error } = await supabase
      .from("transmissions")
      .select("*");
    return transmissions;
  };

  const getCondicion = async () => {
    let { data: conditions, error } = await supabase
      .from("conditions")
      .select("*");
    return conditions;
  };

  const getBici = async (id) => {
    const { data: bicis, error } = await supabase
      .from("bicis")
      .select(
        `id, price, title , filesUrl , models (name), size (name), bici_conditions (name)`
      )
      .eq("id", id);

    /*   */
    bicis
      ? bicis.length > 0
        ? dispatch({ type: GET_BICI, payload: bicis })
        : null
      : null;

    return bicis ? bicis[0] : null;
  };

  const createBici = (publicacion) => {
    const data = JSON.parse(localStorage.getItem("items"));
    const datas = Object.assign(state.publicacion, data, publicacion);

    dispatch({ type: CREATE_BICI, payload: datas });

    localStorage.setItem("items", JSON.stringify(state.publicacion));
  };

  const UploadImagesBici = (files, userID) => {
    const carpeta = v4();
    let filesUrl = [];

    const promises = files.map(async (file) => {
      const { data, error } = await supabase.storage
        .from("imagesbicis")
        .upload(userID + "/" + carpeta + "/" + v4(), file);

      filesUrl.push(data.path);
      error ? console.log(error) : null;
      return null;
    });

    return Promise.all(promises).then(() => {
      return filesUrl;
    });
  };

  const prueba = async () => {
    let { data: bicis, error } = await supabase.from("bicis").select(`
    id, price, title,
    models (name)`);
    return bicis;
  };

  const saveBici = async ({
    bici_condition,
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
        bici_condition,
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

  const localDataBici = () => {
    const data = JSON.parse(localStorage.getItem("items"));
    if (data) {
      if (data !== state.publicacion) {
        dispatch({ type: CREATE_BICI, payload: data });
      }
    }

    return true;
  };

  return (
    <BicisContext.Provider
      value={{
        CDN: state.CDN,
        bici: state.bici,
        getBicis,
        createBici,
        publicacion: state.publicacion,
        getBici,
        getMarcas,
        getModels,
        localDataBici,
        getMaterials,
        getTallas,
        getTransmision,
        getCondicion,
        saveBici,
        prueba,
        UploadImagesBici,
      }}
    >
      {props.children}
    </BicisContext.Provider>
  );
};

export default BicisState;
