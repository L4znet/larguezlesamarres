import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import Icon from "react-native-vector-icons/FontAwesome6"

type RootStackParamList = {
     id: string
}

interface Offer {
     id: string
     title: string
     image: any
}

const OfferScreen = (props: RootStackParamList) => {
     const data: Offer[] = [
          {
               id: "1",
               title: "Lorem ipsum",
               image: require("../assets/images/bateau.jpg"),
          },
          {
               id: "2",
               title: "Another title",
               image: require("../assets/images/bateau.jpg"),
          },
          {
               id: "3",
               title: "Another 3 title",
               image: require("../assets/images/bateau.jpg"),
          },
          {
               id: "4",
               title: "Another 4 title",
               image: require("../assets/images/bateau.jpg"),
          },
          {
               id: "5",
               title: "Another 5 title",
               image: require("../assets/images/bateau.jpg"),
          },
     ]

     const offer = data.find((item: Offer) => item.id === props.id)

     if (!offer) {
          return <Text>Offer not found</Text>
     }

     // Here we define the answers for the questions about the offer
     const { isSkipperAvailable, isTeamAvailable } = {
          isSkipperAvailable: 1,
          isTeamAvailable: 0,
     }

     const { title, image } = offer
     return (
          <SafeAreaView>
               <ScrollView style={styles.offer}>
                    <View>
                         <Text style={styles.title}>{title}</Text>
                         <Image source={image} style={styles.image} resizeMode={"cover"} />
                         <View style={styles.subDetails}>
                              <Icon name={"location-dot"} size={20} color="#fff" />
                              <Text style={styles.subDetailsText}>Nantes </Text>
                         </View>
                         <View style={styles.description}>
                              <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci at consectetur consequatur consequuntur distinctio dolorem excepturi inventore iure magnam magni, maiores, nam odio padipisicing elit. Ad adip</Text>
                         </View>
                         <View style={styles.question}>
                              <Text style={styles.questionTitle}>Proposez-vous un skipper avec ce véhicule ?</Text>
                              <View style={[styles.questionAnswer, isSkipperAvailable ? styles.questionAnswerYes : styles.questionAnswerNo]}>
                                   <Text style={styles.questionAnswerText}>{isSkipperAvailable ? "Oui" : "Non"}</Text>
                              </View>
                         </View>
                         <View style={styles.question}>
                              <Text style={styles.questionTitle}>Avez-vous un équipage avec ce véhicule ?</Text>
                              <View style={[styles.questionAnswer, isTeamAvailable ? styles.questionAnswerYes : styles.questionAnswerNo]}>
                                   <Text style={styles.questionAnswerText}>{isTeamAvailable ? "Oui" : "Non"}</Text>
                              </View>
                         </View>
                    </View>
               </ScrollView>
          </SafeAreaView>
     )
}

const styles = StyleSheet.create({
     offer: {
          backgroundColor: "#efefef",
          width: "100%",
          height: "100%",
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
})

export default OfferScreen
