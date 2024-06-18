import { View, Text, SafeAreaView, Animated, StyleSheet } from "react-native"
import ScrollView = Animated.ScrollView
import Card from "../Components/Card"

const FeedScreen = () => {
     return (
          <SafeAreaView style={styles.container}>
               <ScrollView style={styles.scrollView}>
                    <View style={styles.feed}>
                         <Card title={"Lorem ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                         <Card title={"Lorem ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                         <Card title={"Lorem ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                         <Card title={"Lorem ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
                         <Card title={"Lorem ipsum"} description={""} image={require("../assets/images/bateau.jpg")} />
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

export default FeedScreen
