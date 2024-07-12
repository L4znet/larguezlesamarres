import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import FeedOffersScreen from "./FeedOffersScreen"
import OwnOffersScreen from "./OwnOffersScreen"
import { useEffect, useState } from "react"
import { Session } from "@supabase/supabase-js"
import TopTabBar from "../components/TopTabBar"
import FavoriteCard from "../components/FavoriteCard"
import OwnFavoritesScreen from "./OwnFavoritesScreen"

interface FeedScreenProps {
     session: Session | null
}

const FeedScreen = (props: FeedScreenProps) => {
     const Tab = createMaterialTopTabNavigator()

     const [isAuthenticated, setIsAuthenticated] = useState(false)

     useEffect(() => {
          if (props.session) {
               setIsAuthenticated(true)
          } else {
               setIsAuthenticated(false)
          }
     }, [props.session])

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
