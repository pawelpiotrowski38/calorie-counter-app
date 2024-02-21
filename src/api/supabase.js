import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qxocswviuhfdtktvbsil.supabase.co';
// This key is safe to use in a browser if Row Level Security for tables is enabled and policies are configured.
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4b2Nzd3ZpdWhmZHRrdHZic2lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0NTc0MTcsImV4cCI6MjAyNDAzMzQxN30.kNsVJosRvarMyn3ufKDf9Y03Z6964_AE1Gm71eyh0OI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
