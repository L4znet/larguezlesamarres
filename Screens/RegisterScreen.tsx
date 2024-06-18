import { StyleSheet, View, Text, SafeAreaView, Animated } from "react-native"
import Input from "../Components/Input"
import Button from "../Components/Button"
import Link from "../Components/Link"
import ScrollView = Animated.ScrollView

type RegisterScreenProps = {}

const RegisterScreen = (props: RegisterScreenProps) => {
     return (
          <SafeAreaView style={styles.container}>
               <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>
                         <View style={styles.header}>
                              <Text style={styles.h1}>Bienvenue !</Text>
                              <Text style={styles.h2}>Inscrivez-vous</Text>
                         </View>

                         <Input placeholder={"Nom"} />
                         <Input placeholder={"Prénom"} />
                         <Input placeholder={"E-mail"} />
                         <Input placeholder={"Mot de passe"} />
                         <Button
                              label={"Inscription"}
                              method={() => {
                                   console.log("fdsfsd")
                              }}
                         />
                         <Link style={"text"} label={"Se connecter"} route={"Register"} />
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

     header: {
          marginBottom: 20,
          height: 200,
          justifyContent: "center",
          alignItems: "center",
     },

     h1: {
          fontSize: 45,
          fontWeight: "bold",
     },
     h2: {
          fontSize: 30,
          fontWeight: "bold",
     },
})

export default RegisterScreen
