import { Animated, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native"
import ScrollView = Animated.ScrollView
import OwnOfferCard from "../components/OwnOfferCard"
import Icon from "react-native-vector-icons/FontAwesome6"
import * as RootNavigation from "../RootNavigation"
import CircleButton from "../components/CircleButton"

const OwnOffersScreen = () => {
     const openAddOfferScreen = () => {
          console.log("openAddOfferScreen")
          RootNavigation.navigate("AddOffer", "")
     }
     return (
          <SafeAreaView style={styles.container}>
               <ScrollView style={styles.scrollView}>
                    <View style={styles.feed}>
                         <OwnOfferCard id="1" title={"Lorem aaaa ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                         <OwnOfferCard id="2" title={"Lorem aaaa ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                         <OwnOfferCard id="3" title={"Lorem aaaa ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                         <OwnOfferCard id="4" title={"Lorem aaaa ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                         <OwnOfferCard id="5" title={"Lorem aaaa ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                    </View>
               </ScrollView>
               <CircleButton method={openAddOfferScreen} />
          </SafeAreaView>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: "center",
          width: "100%",
     },

     scrollView: {
          flex: 1,
          width: "100%",
     },

     feed: {
          alignItems: "center",
     },
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

export default OwnOffersScreen
