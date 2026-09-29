const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
);

console.log("supabase", process.env.SUPABASE_URL);

module.exports = supabase;
