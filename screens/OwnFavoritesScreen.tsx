import { Animated, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native"
import ScrollView = Animated.ScrollView
import * as RootNavigation from "../RootNavigation"
import CircleButton from "../components/CircleButton"
import FavoriteCard from "../components/FavoriteCard"
import { supabase } from "../lib/supabase"
import { useEffect, useState } from "react"

const OwnFavoritesScreen = () => {
     const openAddOfferScreen = () => {
          console.log("openAddOfferScreen")
          RootNavigation.navigate("AddOffer", "")
     }

     const [favorites, setFavorites] = useState([])
     const [loading, setLoading] = useState(true)
     const [session, setSession] = useState(null)

     supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session?.user.id)
     })

     useEffect(() => {
          getFavorites()
     }, [favorites])

     const getFavorites = async () => {
          // select * from favorites where user_id = session.user.id, and join with offers
          // join

          const { data, error } = await supabase.from("favorites").select("*").eq("user_id", session).join("offers", { "favorites.offer_id": "offers.id" })

          if (error) {
               console.log(error)
               console.error("Error fetching favorites")
               return
          }

          setFavorites(data)
          console.log(data)
     }

     return (
          <SafeAreaView style={styles.container}>
               <ScrollView style={styles.scrollView}>
                    <View style={styles.feed}>
                         <FavoriteCard id="1" title={"Lorem aaaa ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                    </View>
               </ScrollView>
               <CircleButton method={openAddOfferScreen} />
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
