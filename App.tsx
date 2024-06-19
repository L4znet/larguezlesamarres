import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Navigation from "./Navigation"
import { navigationRef } from "./RootNavigation"
import { useEffect, useState } from "react"
import { Session } from "@supabase/supabase-js"
import { supabase } from "./lib/supabase"

export default function App() {
     const Stack = createStackNavigator()

     const [session, setSession] = useState<Session | null>(null)

     useEffect(() => {
          supabase.auth.getSession().then(({ data: { session } }) => {
               setSession(session)
          })

          supabase.auth.onAuthStateChange((_event, session) => {
               setSession(session)
          })
     }, [])

     return (
          <NavigationContainer ref={navigationRef}>
               <Navigation session={session} />
          </NavigationContainer>
     )
}
