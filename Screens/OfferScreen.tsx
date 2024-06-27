import { View, Text, StyleSheet, Image } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

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

     const { title, image } = offer
     return (
          <View style={styles.card}>
               <Image source={image} style={styles.image} resizeMode={"cover"} />
               <Text style={styles.title}>{title}</Text>
          </View>
     )
}

const styles = StyleSheet.create({
     card: {
          backgroundColor: "#f9f9f9",
          width: "90%",
          marginVertical: 10,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
               width: 0,
               height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
          marginTop: 20,
     },
     title: {
          fontSize: 20,
          fontWeight: "bold",
          marginVertical: 20,
          textAlign: "center",
     },
     image: {
          width: "100%",
          height: 200,
          borderRadius: 10,
     },
})

export default OfferScreen
