import { createClient } from "@supabase/supabase-js";
// 環境変数からSupabaseのURLとキーを取得
// SUPABASE_KEYはANONキーを使用(読み取り専用)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
