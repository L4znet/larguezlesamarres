import HomeScreen from "./Screens/HomeScreen"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import FeedScreen from "./Screens/FeedScreen"
import TabBar from "./Components/TabBar"
import LoginScreen from "./Screens/LoginScreen"
import RegisterScreen from "./Screens/RegisterScreen"

const Navigation = () => {
     const Stack = createStackNavigator()
     const Tab = createBottomTabNavigator()

     const screens = [
          {
               name: "Home",
               component: HomeScreen,
          },
     ]

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
                    tabBar={(props) => <TabBar isAuthenticated={false} />}
               >
                    <Tab.Screen name="Feed" component={FeedScreen} />
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
               <Stack.Screen name="Home" component={Home} options={{ headerShown: false, headerTitle: "Feed" }} />
               <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: "Connexion" }} />
               <Stack.Screen name="Register" component={RegisterScreen} options={{ headerTitle: "Inscription" }} />
          </Stack.Navigator>
     )
}

export default Navigation
