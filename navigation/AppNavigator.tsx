import { NavigationContainer } from "@react-navigation/native"
import Navigation from "../Navigation"
import React from "react"
import { navigationRef } from "../RootNavigation"

const AppNavigator = () => {
     return (
          <NavigationContainer ref={navigationRef}>
               <Navigation />
          </NavigationContainer>
     )
}

export default AppNavigator
