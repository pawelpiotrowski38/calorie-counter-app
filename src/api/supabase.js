import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qxocswviuhfdtktvbsil.supabase.co';

let supabaseKey = null;
if (process.env.NODE_ENV === 'production') {
    supabaseKey = process.env.VITE_API_KEY;
} else {
    supabaseKey = import.meta.env.VITE_API_KEY;
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
