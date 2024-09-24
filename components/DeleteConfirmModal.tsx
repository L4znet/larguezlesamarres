import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import AntDesignIcon from "react-native-vector-icons/AntDesign"
import React from "react"

type DeleteConfirmModalProps = {
     show: boolean
     id: string
     close: () => void
}

type RouteProp = {
     params: {
          id: string
     }
}

const DeleteConfirmModal = (props: DeleteConfirmModalProps) => {
     return (
          <Modal
               animationType="slide"
               transparent={true}
               visible={props.show}
               onRequestClose={() => {
                    props.close()
               }}
          >
               <View style={styles.modal}>
                    <View style={styles.modalView}>
                         <View style={styles.modalViewHeader}>
                              <Text style={styles.modalViewHeaderTitle}>Supression de l'offre</Text>
                              <Pressable style={[styles.button, styles.buttonClose]} onPress={() => props.close()}>
                                   <AntDesignIcon name={"close"} size={25} color="#000" />
                              </Pressable>
                         </View>
                         <View style={styles.modalViewContent}>
                              <Text style={styles.deleteConfirmText}>Êtes-vous sûr de vouloir supprimer cette offre ? Cette action est irréversible.</Text>
                              <TouchableOpacity style={[styles.button, styles.buttonDelete]} onPress={() => props.close()}>
                                   <Text style={styles.textStyle}>Confirmer la suppression</Text>
                              </TouchableOpacity>
                         </View>
                    </View>
               </View>
          </Modal>
     )
}

const styles = StyleSheet.create({
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
     deleteConfirmText: {
          fontSize: 20,
          fontWeight: "bold",
          marginVertical: 20,
          marginHorizontal: 20,
          textAlign: "center",
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

export default DeleteConfirmModal
