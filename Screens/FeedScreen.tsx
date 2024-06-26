import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import FeedOffersScreen from "./FeedOffersScreen"
import OwnoffersScreen from "./OwnoffersScreen"

const FeedScreen = () => {
     const Tab = createMaterialTopTabNavigator()

     return (
          <Tab.Navigator
               screenOptions={{
                    tabBarActiveTintColor: "#fd5353",
                    tabBarInactiveTintColor: "#000",

                    tabBarStyle: {
                         backgroundColor: "#fff",
                    },
                    tabBarLabelStyle: {
                         fontSize: 14,
                         fontWeight: "bold",
                    },
                    tabBarIndicatorStyle: {
                         backgroundColor: "#fd5353",
                    },
               }}
          >
               <Tab.Screen
                    options={{
                         title: "Les offres du feed",
                         tabBarItemStyle: {
                              height: "100%",
                         },
                    }}
                    name="FeedOffers"
                    component={FeedOffersScreen}
               />
               <Tab.Screen
                    options={{
                         title: "Vos offres",
                    }}
                    name="OwnOffers"
                    component={OwnoffersScreen}
               />
          </Tab.Navigator>
     )
}

export default FeedScreen
