import { createClient } from "@supabase/supabase-js";

// credenciales JP
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY


export const supabase = createClient(supabaseUrl, ANON)