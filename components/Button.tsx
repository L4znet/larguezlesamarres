import { TouchableOpacity, Text, StyleSheet } from "react-native"
import React from "react"
type ButtonProps = {
     label: string
     method: () => void
}

const Button = (props: ButtonProps) => {
     return (
          <TouchableOpacity
               style={styles.button}
               onPress={() => {
                    props.method()
               }}
          >
               <Text style={styles.buttonText}>{props.label}</Text>
          </TouchableOpacity>
     )
}

const styles = StyleSheet.create({
     button: {
          backgroundColor: "#fd5353",
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          borderRadius: 5,
          marginVertical: 10,
     },
     buttonText: {
          color: "white",
          fontSize: 17,
          fontWeight: "bold",
          textTransform: "uppercase",
     },
})

export default Button
