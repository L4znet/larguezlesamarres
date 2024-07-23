import { TouchableOpacity, View, StyleSheet, Text } from "react-native"
import TabBarButton from "./TabBarButton"
import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"

const TabBar = () => {
     const { user } = useAuth()
     console.log(user)
     return (
          <View style={styles.bottomBar}>
               {user && (
                    <>
                         <TabBarButton icon={"Feed"} label={"Feed"} screen={"Feed"} />
                         <TabBarButton icon={"Profile"} screen={"Profile"} label={"Profile"} />
                         <TabBarButton icon={"Add"} screen={"AddOffer"} label={"Ajouter"} />
                         <TabBarButton icon={"Logout"} label={"Déconnexion"} />
                    </>
               )}
               {!user && (
                    <>
                         <TabBarButton icon={"Feed"} label={"Feed"} screen={"Feed"} />
                         <TabBarButton icon={"Login"} screen={"Login"} label={"Connexion"} />
                         <TabBarButton icon={"Register"} screen={"Register"} label={"Inscription"} />
                    </>
               )}
          </View>
     )
}

const styles = StyleSheet.create({
     bottomBar: {
          backgroundColor: "#fd5353",
          height: 100,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
     },
})

export default TabBar
