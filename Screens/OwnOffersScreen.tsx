import { Animated, SafeAreaView, StyleSheet, View } from "react-native"
import Card from "../Components/Card"
import ScrollView = Animated.ScrollView
import OwnOfferCard from "../Components/OwnOfferCard"

const OwnOffersScreen = () => {
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
})

export default OwnOffersScreen
