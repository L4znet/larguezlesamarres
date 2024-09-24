import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native"
import React from "react"

type OfferModalScreenProps = {}

const OfferModalScreen = (props: OfferModalScreenProps) => {
     return (
          <View style={styles.modal}>
               <Text>dsffdsqd</Text>
          </View>
     )
}

const styles = StyleSheet.create({
     modal: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFF",
     },
})

export default OfferModalScreen
