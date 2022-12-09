import React, { useReducer } from "react";

import BicisContext from "./BicisContext";
import BicisReducer from "./BicisReducer";
import { supabase } from 'supabase/client';

import { GET_BICI, GET_BICIS } from "../types";
import { useQuery } from '@tanstack/react-query';
import { FiNavigation } from "react-icons/fi";

const BicisState = (props) => {
  const initialState = {

    bici: [],
  };


  const [state, dispatch] = useReducer(BicisReducer, initialState);


  const getBicis = async () => {

    let { data: lista_bicis} = await supabase
    .from('lista_bicis')
    .select('*')
    return lista_bicis
  };


  const getBici = async (id) =>{
        const { data: lista_bicis, error} = (await supabase
          .from('lista_bicis')
          .select('*')
          .eq('id', id))

          lista_bicis ? (lista_bicis).length > 0 ? dispatch({ type: GET_BICI, payload: lista_bicis }) : null :null

        return lista_bicis
      }
      
    


      
  


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
        bici: state.bici,
        getBicis,
        createBici,
        getBici,
      }}
    >
      {props.children}
    </BicisContext.Provider>
  );
};

export default BicisState;
