import { Animated, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native"
import Card from "../Components/Card"
import ScrollView = Animated.ScrollView
import Icon from "react-native-vector-icons/FontAwesome6"

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
               <TouchableOpacity style={styles.addOfferButton}>
                    <Icon name={"plus"} size={20} color="#fff" />
               </TouchableOpacity>
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

export default FeedOffersScreen
