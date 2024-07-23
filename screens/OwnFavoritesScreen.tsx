import { Animated, RefreshControl, SafeAreaView, StyleSheet, View } from "react-native"
import ScrollView = Animated.ScrollView
import * as RootNavigation from "../RootNavigation"
import CircleButton from "../components/AddOfferButton"
import FavoriteCard from "../components/FavoriteCard"
import { supabase } from "../lib/supabase"
import { useCallback, useEffect, useState } from "react"
import AddOfferButton from "../components/AddOfferButton"
import TopTabBar from "../components/TopTabBar"
import { useAuth } from "../context/AuthContext"

const OwnFavoritesScreen = () => {
     const openAddOfferScreen = () => {
          console.log("openAddOfferScreen")
          RootNavigation.navigate("AddOffer", "")
     }

     type Offer = {
          id: string
          title: string
          description: string
          image: string
     }

     type Favorite = {
          offerid: string
          userid: string
          offers: Offer
     }

     const [favorites, setFavorites] = useState<Favorite[]>([])
     const [loading, setLoading] = useState(true)
     const [session, setSession] = useState<string | null>(null)

     supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session?.user.id ?? null)
     })

     useEffect(() => {
          getFavorites()
     }, [favorites])

     const [refreshing, setRefreshing] = useState(false)

     const onRefresh = useCallback(async () => {
          setRefreshing(true)
          await getFavorites()
          setRefreshing(false)
     }, [])

     const getFavorites = async () => {
          // select * from favorites where userid = session?.user.id and join offers on favorites.offerid = offers.id

          supabase
               .from("favorites")
               .select(`offerid, userid,offers ( id, title, description, image)`)
               .then(({ data, error }) => {
                    if (error) {
                         console.log(error)
                         console.error("Error fetching favorites")
                         return
                    }
                    setRefreshing(false)

                    setFavorites(data)
               })
     }

     const { isAuthenticated } = useAuth()

     return (
          <SafeAreaView style={styles.container}>
               <ScrollView style={styles.scrollView}>
                    <TopTabBar isAuthenticated={isAuthenticated} />
                    <View style={styles.feed}>
                         {favorites.map((favorite) => (
                              <FavoriteCard key={favorite.offerid} id={favorite.offers.id} title={favorite.offers.title} description={favorite.offers.description} image={null} />
                         ))}
                    </View>
               </ScrollView>
               <AddOfferButton method={openAddOfferScreen} />
          </SafeAreaView>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: "center",
          width: "100%",
     },

     scrollView: {
          flex: 1,
          width: "100%",
     },

     feed: {
          alignItems: "center",
     },
     addOfferButton: {
          width: 70,
          height: 70,
          borderRadius: 40,
          backgroundColor: "#fd5353",
          right: 20,
          bottom: 20,
          shadowColor: "#000",
          shadowOffset: {
               width: 0,
               height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
     },
})

export default OwnFavoritesScreen
