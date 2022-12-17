import { createClient } from "@supabase/supabase-js";

//const supabaseUrl = "https://iathmgighltcphggwwyp.supabase.co";
//const ANON =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhdGhtZ2lnaGx0Y3BoZ2d3d3lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk0MzA0ODgsImV4cCI6MTk4NTAwNjQ4OH0.3pC2D-mAG646-IDrWP03ETkI2ecQKFH96S2c9JU-Ol4";

// credenciales JP
const supabaseUrl = "https://mmducfdpxruujxivibfv.supabase.co";
const ANON =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tZHVjZmRweHJ1dWp4aXZpYmZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEyODkxNDcsImV4cCI6MTk4Njg2NTE0N30.77jHjnJ4Vh6ITdjzxi0x1UuZMLugtjl1m1sVtrj6lXI";




export const supabase = createClient(supabaseUrl, ANON)