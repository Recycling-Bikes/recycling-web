import  {useEffect, useState} from 'react';
import { userState } from "context/User/UserState";

const useUserRole = () => {
  const [role, setRole] = useState(null);
  const getRole = userState((state) => state.getRole);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const userRole = await getRole();
        setRole(userRole);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRole();
  }, [getRole]);

  return role;
}

export default useUserRole;