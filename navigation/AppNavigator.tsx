import { NavigationContainer } from "@react-navigation/native"
import Navigation from "../Navigation"
import { createStackNavigator } from "@react-navigation/stack"
import { useState } from "react"
import { Session } from "@supabase/supabase-js"
import { navigationRef } from "../RootNavigation"

const AppNavigator = () => {
     return (
          <NavigationContainer ref={navigationRef}>
               <Navigation />
          </NavigationContainer>
     )
}

export default AppNavigator
