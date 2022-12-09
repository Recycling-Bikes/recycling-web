import React, { useReducer } from "react";

import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import {supabase} from 'supabase/client';


import { GET_USER } from "../types";


const UserState = (props) => {
  const initialState = {
    user: undefined,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUser = async () => {
    try {
      const {data} = await supabase.auth.getUser()
      const res = data.user

      dispatch({ type: GET_USER, payload: res });

    } catch (error) {
      console.error(error);
    }
  };
  const deleteUser = async () => {
    try {
      await supabase.auth.signOut()
      getUser()
    } catch (error) {
      console.error(error);
    }
  };





  return (
    <UserContext.Provider
      value={{
        user: state.user,
        bicis: state.bicis,
        getUser,
        deleteUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
