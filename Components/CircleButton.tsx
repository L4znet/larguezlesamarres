import { StyleSheet, TouchableOpacity } from "react-native"
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
               <Icon name={"plus"} size={20} color="#fff" />
          </TouchableOpacity>
     )
}

const styles = StyleSheet.create({
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

export default CircleButton
