import { StyleSheet, View, Text, SafeAreaView, Animated } from "react-native"
import Input from "../components/Input"
import Button from "../components/Button"
import Link from "../components/Link"
import ScrollView = Animated.ScrollView
import { useState } from "react"

type RegisterScreenProps = {}

const RegisterScreen = (props: RegisterScreenProps) => {
     const [lastname, setLastname] = useState("")
     const [firstname, setFirstname] = useState("")
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")

     return (
          <SafeAreaView style={styles.container}>
               <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>
                         <View style={styles.header}>
                              <Text style={styles.h1}>Bienvenue !</Text>
                              <Text style={styles.h2}>Inscrivez-vous</Text>
                         </View>

                         <Input value={lastname} onChangeText={(lastname) => setLastname(lastname)} placeholder={"Nom"} />
                         <Input value={firstname} onChangeText={(firstname) => setFirstname(firstname)} placeholder={"Prénom"} />
                         <Input value={email} onChangeText={(email) => setEmail(email)} placeholder={"E-mail"} />
                         <Input value={password} onChangeText={(password) => setPassword(email)} placeholder={"Mot de passe"} />
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
