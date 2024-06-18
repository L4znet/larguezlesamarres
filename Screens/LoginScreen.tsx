import { View, Text, StyleSheet } from "react-native"
import Input from "../Components/Input"
import Button from "../Components/Button"
import Link from "../Components/Link"

const LoginScreen = () => {
     return (
          <View style={styles.container}>
               <View style={styles.header}>
                    <Text style={styles.h1}>Bienvenue !</Text>
                    <Text style={styles.h2}>Connectez-vous</Text>
               </View>

               <Input placeholder={"E-mail"} />
               <Input placeholder={"Mot de passe"} />
               <Button
                    label={"Connexion"}
                    method={() => {
                         console.log("fdsfsd")
                    }}
               />
               <Link style={"text"} label={"S'inscrire"} route={"Register"} />
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: "center",
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

export default LoginScreen
