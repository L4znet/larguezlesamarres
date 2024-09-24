import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import FeedOffersScreen from "./FeedOffersScreen"
import OwnOffersScreen from "./OwnOffersScreen"
import OwnFavoritesScreen from "./OwnFavoritesScreen"
import { useAuth } from "../context/AuthContext"
import React from "react"

const FeedScreen = () => {
     const Tab = createMaterialTopTabNavigator()

     const { user, signOut } = useAuth()

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
                              <FeedOffersScreen authenticated={user} />
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
                              <OwnOffersScreen authenticated={user} />
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
                              <OwnFavoritesScreen authenticated={user} />
                         </>
                    )}
               </Tab.Screen>
          </Tab.Navigator>
     )
}

export default FeedScreen
