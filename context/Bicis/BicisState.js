import React, { useReducer } from "react";

import BicisContext from "./BicisContext";
import BicisReducer from "./BicisReducer";
import { supabase } from 'supabase/client';


import { GET_BICIS } from "../types";


const BicisState = (props) => {
  const initialState = {

    bicis: [],
  };

  const [state, dispatch] = useReducer(BicisReducer, initialState);


  const getBicis = async () => {
    let { data: lista_bicis, error } = await supabase
    .from('lista_bicis')
    .select('*')
    .range(0, 30)

    dispatch({ type: GET_BICIS, payload: lista_bicis});


  };


  const createBici = async (
    Tittle, Valor,
    Descripcion, Condicion,
    Marca, Agno,
    Modelo, Talla,
    Material, Transmision,
    suspension) => {
    const { data, error } = await supabase
      .from('lista_bicis')
      .insert([
        {
          Tittle, Valor,
          Descripcion, Condicion,
          Marca, Agno,
          Modelo, Talla,
          Material, Transmision,
          suspension
        },
      ])
  }


  return (
    <BicisContext.Provider
      value={{
        bicis: state.bicis,
        getBicis,
        createBici,
      }}
    >
      {props.children}
    </BicisContext.Provider>
  );
};

export default BicisState;
