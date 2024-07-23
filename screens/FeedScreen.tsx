import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import FeedOffersScreen from "./FeedOffersScreen"
import OwnOffersScreen from "./OwnOffersScreen"
import OwnFavoritesScreen from "./OwnFavoritesScreen"
import { useAuth } from "../context/AuthContext"
import TopTabBar from "../components/TopTabBar"

const FeedScreen = () => {
     const Tab = createMaterialTopTabNavigator()

     const { isAuthenticated, signOut } = useAuth()

     return (
          <Tab.Navigator tabBar={(props) => <TopTabBar isAuthenticated={isAuthenticated} />}>
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
                    component={OwnOffersScreen}
               />
               <Tab.Screen
                    options={{
                         title: "Vos favoris",
                    }}
                    name="OwnFavorites"
                    component={OwnFavoritesScreen}
               />
          </Tab.Navigator>
     )
}

export default FeedScreen
