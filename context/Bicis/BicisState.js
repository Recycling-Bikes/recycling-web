import React, { useEffect, useReducer } from "react";

import BicisContext from "./BicisContext";
import BicisReducer from "./BicisReducer";
import { supabase } from "supabase/client";

import { GET_BICI, CREATE_BICI } from "../types";

const BicisState = (props) => {
  const initialState = {
    /* marcas:[], */
    bici: [],
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
    let { data: dat, error } = await supabase.from("brands").select("*");
    return dat;
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
    let { data: bici_conditions, error } = await supabase
      .from("bici_conditions")
      .select("*");
    return bici_conditions;
  };

  const getBici = async (id) => {
    const { data: bicis, error } = await supabase
      .from("bicis")
      .select("*")
      .eq("id", id);

    console.log(bicis);
    bicis
      ? bicis.length > 0
        ? dispatch({ type: GET_BICI, payload: bicis })
        : null
      : null;

    return bicis;
  };

  const createBici = (publicacion) => {
    const date = Object.assign(state.publicacion, publicacion);

    dispatch({ type: CREATE_BICI, payload: date });

    localStorage.setItem("items", JSON.stringify(state.publicacion));
  };

  const prueba = async () => {
    let { data: bicis, error } = await supabase.from("bicis").select(`
    id, price, title,
    models (name)`);
    return bicis;
  }



  const saveBici = async({
    bici_condition,
    year,
    model,
    brands,
    size,
    materials,
    transmission,
    title,
    description,
    price
}) => {


    const { data, error } = await supabase
      .from('bicis')
      .insert([{bici_condition,
        year,
        model,
        size,
        transmission,
        title,
        description,
        price}]);

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
        prueba
        /* marcas: state.marcas, */
      }}
    >
      {props.children}
    </BicisContext.Provider>
  );
};

export default BicisState;
