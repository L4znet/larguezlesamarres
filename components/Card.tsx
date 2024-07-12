import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native"

import * as RootNavigation from "../RootNavigation"
import Icon from "react-native-vector-icons/FontAwesome6"
import FavoriteButton from "./FavoriteButton"

type CardProps = {
     id: string
     title: string
     description: string
     image: any
}

const Card = (props: CardProps) => {
     const goToOffer = (id: string) => {
          RootNavigation.navigate("Offer", { id: id, title: props.title })
     }

     return (
          <TouchableOpacity style={styles.card} onPress={() => goToOffer(props.id)}>
               <View style={styles.cardHeader}>
                    <Image source={props.image} style={styles.image} resizeMode={"cover"} />
                    <FavoriteButton offerId={props.id} />
               </View>

               <Text style={styles.title}>{props.title}</Text>
          </TouchableOpacity>
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
     cardHeader: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          overflow: "hidden",
          position: "relative",
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

export default Card
