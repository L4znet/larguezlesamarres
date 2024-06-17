import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Navigation from "./Navigation"
import { navigationRef } from "./RootNavigation"

export default function App() {
     const Stack = createStackNavigator()
     return (
          <NavigationContainer ref={navigationRef}>
               <Navigation />
          </NavigationContainer>
     )
}
