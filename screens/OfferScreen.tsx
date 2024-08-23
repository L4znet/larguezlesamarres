import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, ActivityIndicator } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import Icon from "react-native-vector-icons/FontAwesome6"
import { supabase } from "../lib/supabase"
import React, { useEffect, useState } from "react"

type RootStackParamList = {
     id: string
}

interface Offer {
     id: string
     title: string
     description: string
     image: any
     price: string
     paiementFrequency: string
     vehiculeType: string
     isSkipperAvailable: boolean
     isTeamAvailable: boolean
     locationTime: string
     location: string
     equipments: string
}

const OfferScreen = (props: RootStackParamList) => {
     const [offer, setOffer] = useState<Offer | null>(null)
     const [refreshing, setRefreshing] = useState(false)
     const [loading, setLoading] = useState(true)

     useEffect(() => {
          getOffer(props.id)
     }, [props.id])
     const getOffer = (id: string) => {
          supabase
               .from("offers")
               .select("*")
               .eq("id", id)
               .then(({ data: offersData, error }) => {
                    if (error) {
                         console.log(error)
                         console.error("Error fetching favorites")
                         return
                    }
                    setLoading(false)
                    setRefreshing(false)
                    setOffer(offersData[0] as Offer)
               })
     }

     if (loading) {
          return (
               <View style={styles.loading}>
                    <Text style={styles.loadingMessage}>Un instant..</Text>
                    <ActivityIndicator size="large" color="#000" />
               </View>
          ) // Display loading message
     }

     if (!offer) {
          return <Text>Offer not found</Text>
     }

     const base64Image = "data:image/png;base64," + offer.image

     return (
          <ScrollView style={styles.offer}>
               <View>
                    <Text style={styles.title}>{offer.title}</Text>
                    <Image source={{ uri: base64Image }} style={styles.image} resizeMode={"cover"} />
                    <View style={styles.subDetails}>
                         <Icon name={"location-dot"} size={20} color="#fff" />
                         <Text style={styles.subDetailsText}>{offer.location} </Text>
                    </View>
                    <View style={styles.description}>
                         <Text style={styles.descriptionText}>{offer.description}</Text>
                    </View>
                    <View style={styles.question}>
                         <Text style={styles.questionTitle}>Proposez-vous un skipper avec ce véhicule ?</Text>
                         <View style={[styles.questionAnswer, offer.isSkipperAvailable ? styles.questionAnswerYes : styles.questionAnswerNo]}>
                              <Text style={styles.questionAnswerText}>{offer.isSkipperAvailable ? "Oui" : "Non"}</Text>
                         </View>
                    </View>
                    <View style={styles.question}>
                         <Text style={styles.questionTitle}>Avez-vous un équipage avec ce véhicule ?</Text>
                         <View style={[styles.questionAnswer, offer.isTeamAvailable ? styles.questionAnswerYes : styles.questionAnswerNo]}>
                              <Text style={styles.questionAnswerText}>{offer.isTeamAvailable ? "Oui" : "Non"}</Text>
                         </View>
                    </View>
                    <View style={styles.question}>
                         <Text style={styles.questionTitle}>Equipement supplémentaire disponible</Text>
                         <Text style={styles.equipment}>{offer.equipments}</Text>
                    </View>
               </View>
          </ScrollView>
     )
}

const styles = StyleSheet.create({
     offer: {
          backgroundColor: "#FFF",
          width: "100%",
          height: "100%",
          color: "#000",
     },
     safeArea: {
          backgroundColor: "#FFF",
          flex: 1,
          color: "#000",
     },
     title: {
          fontSize: 25,
          fontWeight: "bold",
          padding: 20,
          backgroundColor: "#FFF",
          width: "100%",
     },
     image: {
          width: "100%",
          height: 200,
     },
     subDetails: {
          backgroundColor: "#fd5353",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 20,
     },
     subDetailsText: {
          fontSize: 15,
          fontWeight: "bold",
          padding: 15,
          color: "#fff",
     },
     description: {
          padding: 20,
          backgroundColor: "#FFF",
          maxHeight: "40%",
          minHeight: "5%",
     },
     descriptionText: {
          fontSize: 15,
          color: "#000",
     },
     question: {
          padding: 20,
          backgroundColor: "#FFF",
     },
     questionTitle: {
          fontSize: 15,
          color: "#000",
          marginBottom: 10,
          fontWeight: "bold",
     },
     questionAnswer: {
          backgroundColor: "#fd5353",
          padding: 10,
          width: "20%",
          borderRadius: 5,
     },
     questionAnswerText: {
          color: "#fff",
          fontWeight: "bold",
          width: "100%",
          textAlign: "center",
     },
     questionAnswerYes: {
          backgroundColor: "#2ecc71",
     },
     questionAnswerNo: {
          backgroundColor: "#e74c3c",
     },
     equipment: {
          padding: 20,
          backgroundColor: "#FFF",
     },
     loading: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
     },
     loadingMessage: {
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 20,
     },
})

export default OfferScreen
