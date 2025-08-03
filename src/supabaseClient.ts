import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string | undefined = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey: string | undefined = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key must be defined in .env file");
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
