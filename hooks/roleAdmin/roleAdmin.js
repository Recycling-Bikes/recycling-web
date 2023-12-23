import  {useEffect, useState} from 'react';
import { userState } from "context/User/UserState";
import { supabase } from 'supabase/client';

const useUserRole = () => {
  const [role, setRole] = useState(null);
  const getRole = userState((state) => state.getRole);
  const signOut = userState((state) => state.signOut);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const userRole = await getRole();
        setRole(userRole);

        // si se cierra sesion entonces se limpia el rol
      
      } catch (error) {
        console.log(error);
      }
    };

    fetchRole();

  }, [getRole]);

  // restablecer el rol cuando se cierra sesion
  useEffect(() => {
    const handleLogout = () => {
      localStorage.removeItem('UserData');
    }

    supabase.auth.onAuthStateChange((event, session) => {
      if(event === 'SIGNED_OUT'){
        handleLogout();
      }
    })
  }, []);

  return role;
}

export default useUserRole;