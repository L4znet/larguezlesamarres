import { Animated, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native"
import Card from "../components/Card"
import ScrollView = Animated.ScrollView
import CircleButton from "../components/CircleButton"
import * as RootNavigation from "../RootNavigation"

const FeedOffersScreen = () => {
     const openAddOfferScreen = () => {
          RootNavigation.navigate("AddOffer", "")
     }
     return (
          <SafeAreaView style={styles.container}>
               <ScrollView style={styles.scrollView}>
                    <View style={styles.feed}>
                         <Card id={"1"} title={"première Lorem ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                         <Card id={"2"} title={"Lorem ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                         <Card id={"3"} title={"Lorem ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                         <Card id={"4"} title={"Lorem ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                         <Card id={"5"} title={"Lorem ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
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
})

export default FeedOffersScreen
