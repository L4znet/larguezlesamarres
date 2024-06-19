import { AppState } from "react-native"
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@env"
import "react-native-url-polyfill/auto"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { createClient } from "@supabase/supabase-js"

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
     throw new Error("Environment variables SUPABASE_URL and SUPABASE_ANON_KEY are not defined")
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
     auth: {
          storage: AsyncStorage,
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: false,
     },
})

AppState.addEventListener("change", (state) => {
     if (state === "active") {
          supabase.auth.startAutoRefresh()
     } else {
          supabase.auth.stopAutoRefresh()
     }
})
