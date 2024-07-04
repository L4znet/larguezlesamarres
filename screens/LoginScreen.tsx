import { View, Text, StyleSheet, Alert } from "react-native"
import Input from "../components/Input"
import Button from "../components/Button"
import Link from "../components/Link"
import { supabase } from "../lib/supabase"
import { useState } from "react"
import * as RootNavigation from "../RootNavigation"

const LoginScreen = () => {
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const [loading, setLoading] = useState(false)

     async function signInWithEmail() {
          setLoading(true)
          const { error, data } = await supabase.auth.signInWithPassword({
               email: email,
               password: password,
          })

          if (error) Alert.alert(error.message)
          else {
               RootNavigation.navigate("Feed", "")
          }

          setLoading(false)
     }

     async function signUpWithEmail() {
          setLoading(true)
          const {
               data: { session },
               error,
          } = await supabase.auth.signUp({
               email: email,
               password: password,
          })

          if (error) Alert.alert(error.message)
          if (!session) Alert.alert("Please check your inbox for email verification!")
          setLoading(false)
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
