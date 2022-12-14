import React, { useEffect, useReducer } from "react";

import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import {supabase} from 'supabase/client';


import { GET_USER } from "../types";


const UserState = (props) => {
  const initialState = {
    user: props.user,
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



  const updateUser = (userJson) => {
    const user = userJson ? JSON.stringify(userJson) : null

      dispatch({ type: GET_USER, payload: user });

  };


  const deleteUser = async () => {
    try {
      await supabase.auth.signOut()
      updateUser()
    } catch (error) {
      console.error(error); 
    }
  };


  useEffect(()=>{
    const user = localStorage.getItem("sb-iathmgighltcphggwwyp-auth-token")
    user ? updateUser(user) :null
  },[])


  return (
    <UserContext.Provider
      value={{
        user: state.user,
        getUser,
        deleteUser,
        updateUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
