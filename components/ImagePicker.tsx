import React, { useEffect, useState } from "react"
import { Button, View, Image, Platform, StyleSheet, Text } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { Pressable } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"

type ImagePickerScreenProps = {
     onImagePicked: (image: string) => void
}

const ImagePickerScreen = ({ onImagePicked }: ImagePickerScreenProps) => {
     const [image, setImage] = useState("")

     useEffect(() => {
          ;(async () => {
               if (Platform.OS !== "web") {
                    const libraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
                    if (libraryStatus.status !== "granted") {
                         alert("Sorry, we need camera roll permissions to make this work!")
                    }

                    const cameraStatus = await ImagePicker.requestCameraPermissionsAsync()
                    if (cameraStatus.status !== "granted") {
                         alert("Sorry, we need camera permissions to make this work!")
                    }
               }
          })()
     }, [])

     const pickImage = async () => {
          // aspect for   width: 374,
          //           height: 200,

          let result = await ImagePicker.launchImageLibraryAsync({
               mediaTypes: ImagePicker.MediaTypeOptions.All,
               allowsEditing: true,
               aspect: [374, 200],
               quality: 1,
               base64: true,
          })

          if (!result.canceled) {
               const imagebase64 = result.assets[0].base64 ?? ""
               setImage(imagebase64)
               onImagePicked(imagebase64)
          }
     }

     return (
          <View style={styles.container}>
               {!image && (
                    <Pressable style={styles.pickerButton} onPress={pickImage}>
                         <Icon name={"arrow-up-from-bracket"} size={90} color="#fff" />
                         <Text style={styles.pickerButtonText}>Sélectionnez votre image</Text>
                    </Pressable>
               )}

               {image && (
                    <Pressable style={styles.imageButton} onPress={pickImage}>
                         <Image source={{ uri: "data:image/png;base64," + image }} style={styles.image} />
                    </Pressable>
               )}
          </View>
     )
}

export default ImagePickerScreen

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
     },
     image: {
          width: 374,
          height: 200,
     },
     pickerButton: {
          width: 374,
          height: 200,
          backgroundColor: "#ababab",
          justifyContent: "center",
          alignItems: "center",
     },
     pickerButtonText: {
          color: "#fff",
          textAlign: "center",
          marginTop: 20,
          fontSize: 20,
     },
     imageButton: {
          width: 374,
          height: 200,
          backgroundColor: "#ababab",
          justifyContent: "center",
          alignItems: "center",
     },
})
