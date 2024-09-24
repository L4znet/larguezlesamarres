import { View, Text, StyleSheet, Switch, SafeAreaView, ScrollView } from "react-native"
import Input from "../components/Input"
import Button from "../components/Button"
import { useState } from "react"
import ImagePickerScreen from "../components/ImagePicker"
import { supabase } from "../lib/supabase"
import { showMessage } from "react-native-flash-message"
import * as RootNavigation from "../RootNavigation"
import React from "react"

const AddOfferScreen = () => {
     const [title, setTitle] = useState("")
     const [image, setImage] = useState("")
     const [offerDescription, setOfferDescription] = useState("")
     const [vehiculeType, setVehiculeType] = useState("")
     const [price, setPrice] = useState("")
     const [isAvailable, setIsAvailable] = useState(true)
     const [isSkipperAvailable, setIsSkipperAvailable] = useState(true)
     const [isTeamAvailable, setIsTeamAvailable] = useState(false)
     const [equipments, setEquipments] = useState("")
     const [locationTime, setLocationTime] = useState("")
     const [location, setLocation] = useState("")
     const [paymentFrequency, setPaymentFrequency] = useState("")
     const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({})

     const handleImagePicked = (image: string) => {
          setImage(image)
     }

     const validateFields = () => {
          const errors: { [key: string]: string } = {}

          if (!title) errors.title = "Le titre est requis"
          if (!image) errors.image = "L'image est requise"
          if (!offerDescription) errors.offerDescription = "La description est requise"
          if (!vehiculeType) errors.vehiculeType = "Le type de véhicule est requis"
          if (!price || isNaN(Number(price))) errors.price = "Le prix est requis et doit être un nombre"
          if (!locationTime) errors.locationTime = "La durée de location est requise"
          if (!location) errors.location = "Le lieu de location est requis"
          if (!paymentFrequency) errors.paymentFrequency = "La fréquence de paiement est requise"

          return errors
     }

     const addOffer = async () => {
          const errors = validateFields()
          if (Object.keys(errors).length > 0) {
               setErrorMessages(errors)
               showMessage({
                    message: "Il y a des champs vides ou incorrects",
                    type: "danger",
               })
               return
          }

          const { data, error } = await supabase.from("offers").insert([
               {
                    title: title,
                    image: image,
                    description: offerDescription,
                    vehicule_type: vehiculeType,
                    price: price,
                    equipments: equipments,
                    location_time: locationTime,
                    location: location,
                    payment_frequency: paymentFrequency,
                    is_available: isAvailable,
                    is_skipper_available: isSkipperAvailable,
                    is_team_available: isTeamAvailable,
               },
          ])

          if (error) {
               console.log("error", error)
               return
          }

          showMessage({
               message: "Votre annonce a bien été ajoutée",
               type: "success",
          })

          RootNavigation.navigate("FeedOffers", "")
     }

     return (
          <SafeAreaView style={styles.container}>
               <ScrollView>
                    <View style={styles.container}>
                         <ImagePickerScreen onImagePicked={handleImagePicked} />

                         {errorMessages.image && <Text style={styles.errorText}>{errorMessages.image}</Text>}
                         <Input type={"text"} onChangeText={(title) => setTitle(title)} value={title} placeholder={"Titre de l'annonce"} />

                         {errorMessages.title && <Text style={styles.errorText}>{errorMessages.title}</Text>}
                         <Input type={"textarea"} onChangeText={(offerDescription) => setOfferDescription(offerDescription)} value={offerDescription} placeholder={"Description de l'annonce"} />

                         {errorMessages.offerDescription && <Text style={styles.errorText}>{errorMessages.offerDescription}</Text>}
                         <Input type={"text"} onChangeText={(vehiculeType) => setVehiculeType(vehiculeType)} value={vehiculeType} placeholder={"Type de véhicule"} />

                         {errorMessages.vehiculeType && <Text style={styles.errorText}>{errorMessages.vehiculeType}</Text>}
                         <Input type={"number"} onChangeText={(price) => setPrice(price)} value={price} placeholder={"Prix"} />

                         {errorMessages.price && <Text style={styles.errorText}>{errorMessages.price}</Text>}
                         <Input type={"text"} onChangeText={(equipments) => setEquipments(equipments)} value={equipments} placeholder={"Equipements"} />

                         <Input type={"text"} onChangeText={(locationTime) => setLocationTime(locationTime)} value={locationTime} placeholder={"Durée de location"} />
                         {errorMessages.locationTime && <Text style={styles.errorText}>{errorMessages.locationTime}</Text>}

                         <Input type={"text"} onChangeText={(location) => setLocation(location)} value={location} placeholder={"Lieu de location"} />
                         {errorMessages.location && <Text style={styles.errorText}>{errorMessages.location}</Text>}

                         <Input type={"text"} onChangeText={(paymentFrequency) => setPaymentFrequency(paymentFrequency)} value={paymentFrequency} placeholder={"Fréquence de paiement"} />
                         {errorMessages.paymentFrequency && <Text style={styles.errorText}>{errorMessages.paymentFrequency}</Text>}

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
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: "center",
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
     errorText: {
          color: "red",
          marginBottom: 5,
     },
})

export default AddOfferScreen
