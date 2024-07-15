import { StyleSheet, TouchableOpacity, Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"
import * as RootNavigation from "../RootNavigation"

type CircleButtonProps = {
     method: () => void
}

const CircleButton = (props: CircleButtonProps) => {
     return (
          <TouchableOpacity
               style={styles.addOfferButton}
               onPress={() => {
                    props.method()
               }}
          >
               <Text style={styles.addOfferButtonText}>Ajouter une offre</Text>
               <Icon name={"plus"} size={20} color="#fff" />
          </TouchableOpacity>
     )
}

const styles = StyleSheet.create({
     addOfferButton: {
          width: 200,
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
          display: "flex",
          flexDirection: "row",
     },
     addOfferButtonText: {
          color: "white",
          fontSize: 12,
          fontWeight: "bold",
          textTransform: "uppercase",
          marginRight: 10,
     },
})

export default CircleButton
