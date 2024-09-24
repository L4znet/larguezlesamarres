import { Animated, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native"
import Card from "../components/Card"
import ScrollView = Animated.ScrollView
import * as RootNavigation from "../RootNavigation"
import AddOfferButton from "../components/AddOfferButton"
import TopTabBar from "../components/TopTabBar"
import { useAuth } from "../context/AuthContext"
import { supabase } from "../lib/supabase"
import { useEffect, useState } from "react"
import React from "react"
type User = {
     id: string
}

type FeedOffersScreenProps = {
     authenticated: User | null
}
const FeedOffersScreen = (props: FeedOffersScreenProps) => {
     const openAddOfferScreen = () => {
          RootNavigation.navigate("AddOffer", "")
     }

     const user = props.authenticated

     type Offer = {
          id: string
          title: string
          image: string
          price: string
          payment_frequency: string
     }

     // props type

     const [refreshing, setRefreshing] = useState(false)
     const [offers, setOffers] = useState<Offer[]>([])

     useEffect(() => {
          getFeedOffers()
     }, [offers])

     const getFeedOffers = async () => {
          supabase
               .from("offers")
               .select("id, title, price, image, payment_frequency, image")
               .order("created_at", { ascending: false })
               .then(({ data: offersData, error }) => {
                    if (error) {
                         console.log(error)
                         console.error("Error fetching favorites")
                         return
                    }
                    setRefreshing(false)

                    setOffers(offersData as Offer[])
               })
     }

     return (
          <SafeAreaView style={styles.container}>
               <ScrollView style={styles.scrollView}>
                    <TopTabBar />
                    <View style={styles.feed}>
                         {offers.map((offer) => {
                              return <Card key={offer.id} id={offer.id} title={offer.title} price={offer.price} frequency={offer.payment_frequency} image={offer.image} />
                         })}
                    </View>
               </ScrollView>
               {user && <AddOfferButton method={openAddOfferScreen} />}
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
})

export default FeedOffersScreen
