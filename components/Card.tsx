import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native"
import * as RootNavigation from "../RootNavigation"
import FavoriteButton from "./FavoriteButton"

type CardProps = {
     id: string
     title: string
     description: string
     image: any
}

const Card = (props: CardProps) => {
     const goToOffer = (id: string) => {
          console.log("sfdffdfd")
          RootNavigation.navigate("Offer", { id: id, title: props.title })
     }

     return (
          <TouchableOpacity style={styles.card} onPress={() => goToOffer(props.id)}>
               <View style={styles.cardHeader}>
                    <Image source={props.image} style={styles.image} resizeMode={"cover"} />
                    <View style={styles.overlay}>
                         <FavoriteButton offerId={props.id} />
                         <Text style={styles.title}>{props.title}</Text>
                    </View>
                    <View style={styles.details}>
                         <Text style={styles.notation}>4.3/5</Text>
                         <Text style={styles.price}>2.90 €</Text>
                    </View>
               </View>
          </TouchableOpacity>
     )
}

const styles = StyleSheet.create({
     card: {
          backgroundColor: "#f9f9f9",
          width: "90%",
          marginVertical: 10,
          borderRadius: 5,
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
     overlay: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: 10,
          height: 130,
     },
     cardHeader: {
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          overflow: "hidden",
          position: "relative",
     },
     title: {
          fontSize: 20,
          fontWeight: "bold",
          marginVertical: 20,
          textAlign: "center",
          color: "#fff",
     },
     image: {
          width: "100%",
          height: 130,
          borderRadius: 5,
     },
     details: {
          fontSize: 15,
          fontWeight: "bold",
          marginVertical: 20,
          textAlign: "center",
          color: "#000",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 20,
     },
     price: {
          color: "#fd5353",
          fontSize: 20,
          fontWeight: "bold",
     },
     notation: {
          color: "#000",
          fontSize: 20,
          fontWeight: "bold",
     },
})

export default Card
