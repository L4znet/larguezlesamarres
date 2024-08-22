import { View, Text, StyleSheet, Switch, SafeAreaView, ScrollView } from "react-native"
import Input from "../components/Input"
import Button from "../components/Button"
import { useState } from "react"
import ImagePickerScreen from "../components/ImagePicker"
import { supabase } from "../lib/supabase"
import { showMessage, hideMessage } from "react-native-flash-message"
import * as RootNavigation from "../RootNavigation"

const AddOfferScreen = () => {
     const [title, setTitle] = useState("Ma super offre")
     const [image, setImage] = useState("")
     const [offerDescription, setOfferDescription] = useState("fdsffdqfdsdsqfsfqsfdqsf")
     const [vehiculeType, setVehiculeType] = useState("Bateau à voile")
     const [price, setPrice] = useState("100")
     const [isAvailable, setIsAvailable] = useState(true)
     const [isSkipperAvailable, setIsSkipperAvailable] = useState(true)
     const [isTeamAvailable, setIsTeamAvailable] = useState(false)
     const [equipments, setEquipments] = useState("fdsmlkjfdsq")
     const [locationTime, setLocationTime] = useState("Aujourd'hui")
     const [location, setLocation] = useState("Nantes")
     const [paiementFrequency, setPaiementFrequency] = useState("Par mois")

     const handleImagePicked = (image: string) => {
          setImage(image)
     }

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

          if (error) {
               console.log(error)
          } else {
               showMessage({
                    message: "Offre ajoutée avec succès",
                    type: "success",
               })

               RootNavigation.goBack()
          }
     }

     return (
          <>
               <SafeAreaView style={styles.container}>
                    <ScrollView>
                         <View style={styles.container}>
                              <ImagePickerScreen onImagePicked={handleImagePicked} />
                              <Input type={"text"} onChangeText={(title) => setTitle(title)} value={title} placeholder={"Titre de l'annonce"} />

                              <Input type={"textarea"} onChangeText={(offerDescription) => setOfferDescription(offerDescription)} value={offerDescription} placeholder={"Description de l'annonce"} />
                              <Input type={"text"} onChangeText={(vehiculeType) => setVehiculeType(vehiculeType)} value={vehiculeType} placeholder={"Type de véhicule"} />
                              <Input type={"number"} onChangeText={(price) => setPrice(price)} value={price} placeholder={"Prix"} />
                              <Input type={"text"} onChangeText={(equipments) => setEquipments(equipments)} value={equipments} placeholder={"Equipements"} />
                              <Input type={"text"} onChangeText={(locationTime) => setLocationTime(locationTime)} value={locationTime} placeholder={"Durée de location"} />
                              <Input type={"text"} onChangeText={(location) => setLocation(location)} value={location} placeholder={"Lieu de location"} />
                              <Input type={"text"} onChangeText={(paiementFrequency) => setPaiementFrequency(paiementFrequency)} value={paiementFrequency} placeholder={"Fréquence de paiement"} />
                              <View style={styles.switchContainer}>
                                   <Text>Disponible</Text>
                                   <Switch trackColor={{ false: "#767577", true: "#fd5353" }} thumbColor={isAvailable ? "#ffffff" : "#f4f3f4"} onValueChange={() => setIsAvailable(!isAvailable)} value={isAvailable} />
                              </View>
                              <View style={styles.switchContainer}>
                                   <Text>Equipage disponible</Text>
                                   <Switch trackColor={{ false: "#767577", true: "#fd5353" }} thumbColor={isTeamAvailable ? "#ffffff" : "#f4f3f4"} onValueChange={() => setIsTeamAvailable(!isTeamAvailable)} value={isTeamAvailable} />
                              </View>
                              <View style={styles.switchContainer}>
                                   <Text>Pilote disponible</Text>
                                   <Switch trackColor={{ false: "#767577", true: "#fd5353" }} thumbColor={isSkipperAvailable ? "#ffffff" : "#f4f3f4"} onValueChange={() => setIsSkipperAvailable(!isSkipperAvailable)} value={isSkipperAvailable} />
                              </View>
                         </View>
                    </ScrollView>
                    <View style={styles.addOfferContainer}>
                         <Button label={"Ajouter l'annonce"} method={addOffer} />
                    </View>
               </SafeAreaView>
          </>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: "center",
     },

     h1: {
          fontSize: 30,
          fontWeight: "bold",
     },
     addOfferContainer: {
          width: "100%",
          alignItems: "center",
          backgroundColor: "#FFF",
     },
     switchContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
          marginVertical: 10,
     },
})

export default AddOfferScreen
