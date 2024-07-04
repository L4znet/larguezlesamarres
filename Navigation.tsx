import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import FeedScreen from "./screens/FeedScreen"
import TabBar from "./components/TabBar"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import ProfileScreen from "./screens/ProfileScreen"
import { Session } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import OfferScreen from "./screens/OfferScreen"
import { ParamListBase } from "@react-navigation/native"
import AddOfferScreen from "./screens/AddOfferScreen"

type NavigationProps = {
     session: Session | null
}

type Props = {
     navigation: StackNavigationProp<ParamListBase>
}

const Navigation = (props: NavigationProps) => {
     const Stack = createStackNavigator()
     const Tab = createBottomTabNavigator()

     const [isAuthenticated, setIsAuthenticated] = useState(false)

     useEffect(() => {
          if (props.session) {
               setIsAuthenticated(true)
          } else {
               setIsAuthenticated(false)
          }
     }, [props.session])

     const Home = (props: NavigationProps) => {
          return (
               <Tab.Navigator
                    screenOptions={{
                         headerStyle: {
                              backgroundColor: "#fd5353",
                         },
                         headerTintColor: "#fff",
                         headerTitleStyle: {
                              fontWeight: "bold",
                         },
                    }}
                    tabBar={() => <TabBar isAuthenticated={isAuthenticated} />}
               >
                    <Tab.Screen name="Feed">{() => <FeedScreen session={props.session} />}</Tab.Screen>
                    <Tab.Screen name="Profile">{() => <ProfileScreen session={props.session} />}</Tab.Screen>
               </Tab.Navigator>
          )
     }

     return (
          <Stack.Navigator
               screenOptions={{
                    headerStyle: {
                         backgroundColor: "#fd5353",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                         fontWeight: "bold",
                    },
                    headerBackTitle: "Retour",
               }}
          >
               <Stack.Screen name="Home" options={{ headerShown: false, headerTitle: "Feed" }}>
                    {() => <Home session={props.session} />}
               </Stack.Screen>
               <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: "Connexion" }} />
               <Stack.Screen name="Register" component={RegisterScreen} options={{ headerTitle: "Inscription" }} />
               <Stack.Screen name="AddOffer" component={AddOfferScreen} options={{ headerTitle: "Ajouter une offre" }} />
               <Stack.Screen name="Offer" options={{ headerTitle: "Présentation de l'offre" }}>
                    {({ route }) => <OfferScreen id={(route.params as { id: string }).id} />}
               </Stack.Screen>
          </Stack.Navigator>
     )
}

export default Navigation
