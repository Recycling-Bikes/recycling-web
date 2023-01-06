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

  const signInUser = async ({email, password}) => {
    const user = await supabase.auth.signInWithPassword(
      {
        email,
        password,
      }
    )
    console.log(user)
    return user
  };



  const updateUser = (user = null) => {
      dispatch({ type: GET_USER, payload: user });
  };


  const resetPasswordEmail = async ({email}) =>{


    const data = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://www.recyclingbikes.co/form/newpass',
    })
    return data
  
  }
  const postUser = async ({email, password, first_name, last_name}) => {
    const data = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name,
          last_name,
        },
      },
    });
    
    return data
    
  }

  const updatePassword = async ({password}) =>{
    const data = await supabase.auth.updateUser({
      password
    })

    return data
  
  }

  const deleteUser = async () => {
    try {
      await supabase.auth.signOut()
      updateUser()
    } catch (error) {
      console.error(error); 
    }
  };


  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("sb-mmducfdpxruujxivibfv-auth-token"))
    user ? updateUser(user.user) :null
  },[])


  return (
    <UserContext.Provider
      value={{
        user: state.user,
        getUser,
        deleteUser,
        updateUser,
        signInUser,
        resetPasswordEmail,
        updatePassword, 
        postUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
