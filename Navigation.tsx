import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import FeedScreen from "./screens/FeedScreen"
import TabBar from "./components/TabBar"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import ProfileScreen from "./screens/ProfileScreen"
import OfferScreen from "./screens/OfferScreen"
import AddOfferScreen from "./screens/AddOfferScreen"
import SearchScreen from "./screens/SearchScreen"

const Navigation = () => {
     const Stack = createStackNavigator()
     const Tab = createBottomTabNavigator()

     const Home = () => {
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
                    tabBar={() => <TabBar />}
               >
                    <Tab.Screen name="Feed" component={FeedScreen} />
                    <Tab.Screen name="Profile" component={ProfileScreen} />
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
                    {() => <Home />}
               </Stack.Screen>
               <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: "Connexion" }} />
               <Stack.Screen name="Search" component={SearchScreen} options={{ headerTitle: "Recherche" }} />
               <Stack.Screen name="Register" component={RegisterScreen} options={{ headerTitle: "Inscription" }} />
               <Stack.Screen name="AddOffer" component={AddOfferScreen} options={{ headerTitle: "Ajouter une offre" }} />
               <Stack.Screen name="Offer" options={{ headerTitle: "Présentation de l'offre" }}>
                    {({ route }) => <OfferScreen id={(route.params as { id: string }).id} />}
               </Stack.Screen>
          </Stack.Navigator>
     )
}

export default Navigation
