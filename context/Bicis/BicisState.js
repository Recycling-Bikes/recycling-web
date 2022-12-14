import React, { useReducer } from "react";

import BicisContext from "./BicisContext";
import BicisReducer from "./BicisReducer";
import { supabase } from 'supabase/client';

import { GET_BICI, CREATE_BICI } from "../types";


const BicisState = (props) => {
  const initialState = {

    bici: [],
    publicacion: null,
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
      
    


      
  


const createBici = (publicacion) => {
    
  dispatch({ type: CREATE_BICI, payload: publicacion })

      
  }
  const sendBici = (publicacion) => {
    
    supabase.from('lista_bicis').insert(publicacion)
  
        
    }


  return (
    <BicisContext.Provider
      value={{
        bici: state.bici,
        puiblicacion: state.puiblicacion,
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
