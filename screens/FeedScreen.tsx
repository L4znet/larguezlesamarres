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
          <Tab.Navigator tabBar={() => ""}>
               <Tab.Screen
                    options={{
                         title: "Les offres du feed",
                         tabBarItemStyle: {
                              height: "100%",
                         },
                    }}
                    name="FeedOffers"
               >
                    {() => (
                         <>
                              <FeedOffersScreen authenticated={isAuthenticated} />
                         </>
                    )}
               </Tab.Screen>

               <Tab.Screen
                    options={{
                         title: "Vos offres",
                    }}
                    name="OwnOffers"
               >
                    {() => (
                         <>
                              <OwnOffersScreen authenticated={isAuthenticated} />
                         </>
                    )}
               </Tab.Screen>
               <Tab.Screen
                    options={{
                         title: "Vos favoris",
                    }}
                    name="OwnFavorites"
               >
                    {() => (
                         <>
                              <OwnFavoritesScreen authenticated={isAuthenticated} />
                         </>
                    )}
               </Tab.Screen>
          </Tab.Navigator>
     )
}

export default FeedScreen
