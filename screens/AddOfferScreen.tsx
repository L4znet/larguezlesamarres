import { View, Text, StyleSheet, Switch } from "react-native"
import Input from "../components/Input"
import Button from "../components/Button"
import Link from "../components/Link"
import { useState } from "react"
import * as ImagePicker from "expo-image-picker"
import { Pressable } from "react-native"
import ImagePickerScreen from "../components/ImagePicker"

const AddOfferScreen = () => {
     const [title, setTitle] = useState("")
     const [password, setPassword] = useState("")
     const [isEnabled, setIsEnabled] = useState(false)
     const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
     return (
          <View style={styles.container}>
               <Input type={"text"} onChangeText={(title) => setTitle(title)} value={title} placeholder={"Titre de l'annonce"} />

               <ImagePickerScreen />
               <Button label={"Ajouter l'annonce"} method={async () => {}} />
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: "center",
          marginVertical: 20,
     },

     h1: {
          fontSize: 30,
          fontWeight: "bold",
     },
})

export default AddOfferScreen
