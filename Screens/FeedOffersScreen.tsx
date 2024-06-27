import { Animated, SafeAreaView, StyleSheet, View } from "react-native"
import Card from "../Components/Card"
import ScrollView = Animated.ScrollView

const FeedOffersScreen = () => {
     return (
          <SafeAreaView style={styles.container}>
               <ScrollView style={styles.scrollView}>
                    <View style={styles.feed}>
                         <Card id="1" title={"Lorem ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                         <Card id="2" title={"Lorem ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                         <Card id="3" title={"Lorem ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                         <Card id="4" title={"Lorem ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                         <Card id="5" title={"Lorem ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
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

export default FeedOffersScreen
