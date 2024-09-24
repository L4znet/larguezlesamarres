import { View, Text, StyleSheet, Image, Pressable, Modal, TouchableOpacity } from "react-native"
import { useState } from "react"
import OfferDetailModal from "./OfferDetailModal"
import DeleteConfirmModal from "./DeleteConfirmModal"
import React from "react"

type CardProps = {
     id: string
     title: string
     description: string
     image: any
}

const OwnOfferCard = (props: CardProps) => {
     const [modalVisible, setModalVisible] = useState(false)
     const [modalDeleteConfirmVisible, setModalDeleteConfirmVisible] = useState(false)
     const [modalDeleteVisible, setModalDeleteVisible] = useState(false)

     return (
          <>
               <OfferDetailModal id={props.id} deleteVisible={() => setModalDeleteVisible(true)} show={modalVisible} close={() => setModalVisible(false)} />
               <DeleteConfirmModal id={props.id} show={modalDeleteVisible} close={() => setModalDeleteVisible(false)} />
               <TouchableOpacity style={styles.card} onPress={() => setModalVisible(true)}>
                    <Image source={props.image} style={styles.image} resizeMode={"cover"} />
                    <Text style={styles.title}>{props.title}</Text>
               </TouchableOpacity>
          </>
     )
}

const styles = StyleSheet.create({
     card: {
          backgroundColor: "#f9f9f9",
          width: "90%",
          marginVertical: 10,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
               width: 0,
               height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
          marginTop: 20,
     },
     title: {
          fontSize: 20,
          fontWeight: "bold",
          marginVertical: 20,
          textAlign: "center",
     },
     image: {
          width: "100%",
          height: 200,
          borderRadius: 10,
     },
     modal: {
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "relative",
     },
     modalView: {
          backgroundColor: "white",
          borderRadius: 20,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
               width: 0,
               height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
          width: "100%",
          position: "absolute",
          bottom: 0,
          height: "50%",
     },
     modalViewHeader: {
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          height: 70,

          alignItems: "center",
     },
     modalViewHeaderTitle: {
          fontSize: 20,
          fontWeight: "bold",
          width: "78%",
     },
     modalViewContent: {
          width: "100%",
          alignItems: "center",
          height: "100%",
     },
     button: {
          height: 60,
          borderRadius: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          marginVertical: 10,
     },
     buttonView: {
          backgroundColor: "#2196F3",
     },
     buttonEdit: {
          backgroundColor: "#FFC300",
     },
     buttonDelete: {
          backgroundColor: "#FF5733",
     },
     buttonOpen: {
          backgroundColor: "#F194FF",
     },
     buttonClose: {
          width: "auto",
          padding: 20,
          height: "100%",
     },
     textStyle: {
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          textTransform: "uppercase",
     },
     modalText: {
          marginBottom: 15,
          textAlign: "center",
     },
})

export default OwnOfferCard
