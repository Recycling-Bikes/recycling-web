import { useEffect, useState } from "react";
import { supabase } from "supabase/client";


export function useAdminVerification(userId) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const verifyRolAdmin = async () => {
      try {
        if(userId) {
          const {data, error} = await supabase
          .from("admins")
          .select("*")
          .eq('id', userId);

          if(error) {
          console.log('error al verificar el rol de administrador', error);
          } else {
            setIsAdmin(data.length > 0);
          }
        }
      } catch (error) {
        console.log('error al verificar el rol de administrador', error);
      }
    }

    verifyRolAdmin();
  }, [userId])

  return isAdmin;
}