import { View, Text, StyleSheet, Switch, SafeAreaView, ScrollView } from "react-native"
import Input from "../components/Input"
import Button from "../components/Button"
import { useState } from "react"
import ImagePickerScreen from "../components/ImagePicker"
import { supabase } from "../lib/supabase"

const AddOfferScreen = () => {
     const [title, setTitle] = useState("")
     const [image, setImage] = useState(null)
     const [offerDescription, setOfferDescription] = useState("")
     const [vehiculeType, setVehiculeType] = useState("")
     const [price, setPrice] = useState("")
     const [isAvailable, setIsAvailable] = useState(false)
     const [isSkipperAvailable, setIsSkipperAvailable] = useState(false)
     const [isTeamAvailable, setIsTeamAvailable] = useState(false)
     const [equipments, setEquipments] = useState("")
     const [locationTime, setLocationTime] = useState("")
     const [location, setLocation] = useState("")
     const [paiementFrequency, setPaiementFrequency] = useState("")

     const addOffer = async () => {
          const { data, error } = await supabase.from("offers").insert([
               {
                    title: title,
                    description: offerDescription,
                    image: image ? image : "../assets/images/placeHolder.png",
                    vehiculeType: vehiculeType,
                    price: price,
                    isAvailable: isAvailable,
                    isSkipperAvailable: isSkipperAvailable,
                    isTeamAvailable: isTeamAvailable,
                    equipments: equipments,
                    locationTime: locationTime,
                    location: location,
                    paiementFrequency: paiementFrequency,
               },
          ])

          console.log({ data: data, error: error })
     }

     return (
          <SafeAreaView>
               <ScrollView>
                    <View style={styles.container}>
                         <Input type={"text"} onChangeText={(title) => setTitle(title)} value={title} placeholder={"Titre de l'annonce"} />

                         <ImagePickerScreen />

                         <Input type={"textarea"} onChangeText={(offerDescription) => setOfferDescription(offerDescription)} value={offerDescription} placeholder={"Description de l'annonce"} />
                         <Input type={"text"} onChangeText={(vehiculeType) => setVehiculeType(vehiculeType)} value={vehiculeType} placeholder={"Type de véhicule"} />
                         <Input type={"number"} onChangeText={(price) => setPrice(price)} value={price} placeholder={"Prix"} />
                         <Input type={"text"} onChangeText={(equipments) => setEquipments(equipments)} value={equipments} placeholder={"Equipements"} />
                         <Input type={"text"} onChangeText={(locationTime) => setLocationTime(locationTime)} value={locationTime} placeholder={"Durée de location"} />
                         <Input type={"text"} onChangeText={(location) => setLocation(location)} value={location} placeholder={"Lieu de location"} />
                         <Input type={"text"} onChangeText={(paiementFrequency) => setPaiementFrequency(paiementFrequency)} value={paiementFrequency} placeholder={"Fréquence de paiement"} />
                         <View style={{ flexDirection: "row", justifyContent: "space-between", width: "80%" }}>
                              <Text>Disponible</Text>
                              <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={isAvailable ? "#f5dd4b" : "#f4f3f4"} onValueChange={() => setIsAvailable(!isAvailable)} value={isAvailable} />
                         </View>
                         <View style={{ flexDirection: "row", justifyContent: "space-between", width: "80%" }}>
                              <Text>Equipage disponible</Text>
                              <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={isTeamAvailable ? "#f5dd4b" : "#f4f3f4"} onValueChange={() => setIsTeamAvailable(!isTeamAvailable)} value={isTeamAvailable} />
                         </View>
                         <View style={{ flexDirection: "row", justifyContent: "space-between", width: "80%" }}>
                              <Text>Pilote disponible</Text>
                              <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={isSkipperAvailable ? "#f5dd4b" : "#f4f3f4"} onValueChange={() => setIsSkipperAvailable(!isSkipperAvailable)} value={isSkipperAvailable} />
                         </View>

                         <Button label={"Ajouter l'annonce"} method={addOffer} />
                    </View>
               </ScrollView>
          </SafeAreaView>
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
