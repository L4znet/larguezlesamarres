import { View, StyleSheet, Pressable } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { useState } from "react"
type FavoriteButtonProps = {
     offerId: number
}
const FavoriteButton = (props: FavoriteButtonProps) => {
     const [isFavorite, setIsFavorite] = useState(false)

     const addFavorite = () => {
          console.log("Offer " + props.offerId + " is added to favorites")
          setIsFavorite(!isFavorite)
     }

     return (
          <Pressable style={styles.favoriteButton} onPress={addFavorite}>
               <Icon name={isFavorite ? "heart" : "heart-o"} size={25} color={"#FFF"} />
          </Pressable>
     )
}

const styles = StyleSheet.create({
     favoriteButton: {
          position: "absolute",
          right: 15,
          top: 15,
          backgroundColor: "#fd5353",
          padding: 15,
          borderRadius: 50,
     },
})

export default FavoriteButton
