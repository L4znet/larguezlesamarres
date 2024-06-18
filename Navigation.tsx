import HomeScreen from "./Screens/HomeScreen"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import FeedScreen from "./Screens/FeedScreen"
import TabBar from "./Components/TabBar"

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
                    tabBar={(props) => <TabBar isAuthenticated={false} />}
               >
                    <Tab.Screen name="Feed" component={FeedScreen} />
               </Tab.Navigator>
          )
     }

     return (
          <Stack.Navigator>
               <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          </Stack.Navigator>
     )
}

export default Navigation
