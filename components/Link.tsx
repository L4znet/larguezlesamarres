import { TouchableOpacity, Text, StyleSheet } from "react-native"
import * as RootNavigation from "../RootNavigation"
type LinkProps = {
     label: string
     route: string
     style: string
}

const Link = (props: LinkProps) => {
     switch (props.style) {
          case "bordered":
               return (
                    <TouchableOpacity
                         style={styles.bordered}
                         onPress={() => {
                              RootNavigation.navigate(props.route, "")
                         }}
                    >
                         <Text style={styles.borderedText}>{props.label}</Text>
                    </TouchableOpacity>
               )
          case "button":
               return (
                    <TouchableOpacity
                         style={styles.buttonSolid}
                         onPress={() => {
                              RootNavigation.navigate(props.route, "")
                         }}
                    >
                         <Text style={styles.buttonSolidText}>{props.label}</Text>
                    </TouchableOpacity>
               )
          case "text":
               return (
                    <TouchableOpacity
                         style={styles.linkButton}
                         onPress={() => {
                              RootNavigation.navigate(props.route, "")
                         }}
                    >
                         <Text style={styles.linkText}>{props.label}</Text>
                    </TouchableOpacity>
               )
          default:
               return (
                    <TouchableOpacity
                         style={styles.buttonSolid}
                         onPress={() => {
                              RootNavigation.navigate(props.route, "")
                         }}
                    >
                         <Text style={styles.buttonSolidText}>{props.label}</Text>
                    </TouchableOpacity>
               )
     }
}

const styles = StyleSheet.create({
     buttonSolid: {
          backgroundColor: "#fd5353",
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          borderRadius: 5,
          marginVertical: 10,
     },
     buttonSolidText: {
          color: "white",
          fontSize: 17,
          fontWeight: "bold",
          textTransform: "uppercase",
     },
     linkButton: {
          backgroundColor: "transparent",
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          borderRadius: 5,
          marginVertical: 10,
     },
     linkText: {
          color: "#fd5353",
          fontSize: 17,
          fontWeight: "bold",
          textTransform: "uppercase",
     },
     bordered: {
          backgroundColor: "transparent",
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          borderRadius: 5,
          marginVertical: 10,
          borderWidth: 1,
          borderColor: "#fd5353",
     },
     borderedText: {
          color: "#fd5353",
          fontSize: 17,
          fontWeight: "bold",
          textTransform: "uppercase",
     },
})

export default Link
