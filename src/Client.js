import { createClient } from '@supabase/supabase-js';

const URL = "https://pwliphfousctxrddramn.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3bGlwaGZvdXNjdHhyZGRyYW1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU2MzQ5MTAsImV4cCI6MjAwMTIxMDkxMH0.DqGRYCSurut6Ceaosu0t3w-iTQQN6i_MlHgoO5o4pe0";

const supabase = createClient(URL, API_KEY);
export default supabase;