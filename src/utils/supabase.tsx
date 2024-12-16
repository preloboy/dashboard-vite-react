
import { createClient } from '@supabase/supabase-js';
import { Database } from '../../database.types'


const supabaseUrl = import.meta.env['VITE_SUPABASE_URL']
const supabaseKey = import.meta.env['VITE_SUPABASE_ANON_KEY']
// const supabase = createClient<Database>(supabaseUrl, supabaseKey);

// console.log("API URL:", supabaseUrl);


const supabase = createClient('https://nwgthpexfpdvgzdszqvb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53Z3RocGV4ZnBkdmd6ZHN6cXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5MTc1NzQsImV4cCI6MjA0OTQ5MzU3NH0.NY-LjVae3vFtMSMEJ3Paf5AmIROXKHOc1qsr-c0rPgk');

export default supabase;

