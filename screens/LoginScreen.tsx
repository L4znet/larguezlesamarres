import { View, Text, StyleSheet, Alert } from "react-native"
import Input from "../components/Input"
import Button from "../components/Button"
import Link from "../components/Link"
import { supabase } from "../lib/supabase"
import { useState } from "react"
import * as RootNavigation from "../RootNavigation"
import { useAuth } from "../context/AuthContext"

const LoginScreen = () => {
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const [loading, setLoading] = useState(false)

     const { signIn } = useAuth()

     async function signInWithEmail() {
          setLoading(true)
          try {
               await signIn(email, password)
          } catch (error) {
               Alert.alert("Erreur de connexion", error.error_description || error.message)
          } finally {
               setLoading(false)
          }
     }

     return (
          <View style={styles.container}>
               <View style={styles.header}>
                    <Text style={styles.h1}>Bienvenue !</Text>
                    <Text style={styles.h2}>Connectez-vous</Text>
               </View>

               <Input type={"email"} onChangeText={(email) => setEmail(email)} value={email} placeholder={"E-mail"} />
               <Input type={"password"} onChangeText={(password) => setPassword(password)} value={password} placeholder={"Mot de passe"} />
               <Button
                    label={"Connexion"}
                    method={async () => {
                         await signInWithEmail()
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
