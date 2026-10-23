// Paste your two values from Supabase: Project Settings > API
const SUPABASE_URL = 'https://cjjjntprslqtmxqlxgob.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqampudHByc2xxdG14cWx4Z29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3MTAzMjMsImV4cCI6MjEwODI4NjMyM30.19y1ZkxTAg2vWx-aF-_OfVPjDcWAl7LrVtO8YdYbm5g'; // the anon key only. Never the service_role key.
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const CENTRES = ['K-2', '3-6', '7-8', '9-10'];
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const nm = s => `${s.first_name} ${s.last_initial}.`;
const dayLabel = d => new Date(d + 'T00:00').toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
