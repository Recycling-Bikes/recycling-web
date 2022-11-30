import { supabase } from 'supabase/client';

export default async function register(email, password, first_name, last_name) {
    try{
        const { data, error } = await supabase.auth.signUp(
          {
            email: email,
            password: password,
            options: {
              data: {
                first_name: first_name,
                last_name: last_name,
              }
            }
          }
        )
      
        console.log(data);
      
        }catch(error){
          console.log(error)
        }
}
