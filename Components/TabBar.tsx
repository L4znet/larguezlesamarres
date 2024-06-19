import { TouchableOpacity, View, StyleSheet, Text } from "react-native"
import TabBarButton from "./TabBarButton"
import { useEffect } from "react"

type TabBarProps = {
     isAuthenticated: boolean
}

const TabBar = (props: TabBarProps) => {
     return (
          <View style={styles.bottomBar}>
               {props.isAuthenticated && (
                    <>
                         <TabBarButton icon={"Feed"} label={"Feed"} screen={"Home"} />
                         <TabBarButton icon={"Profile"} screen={"Profile"} label={"Profile"} />
                         <TabBarButton icon={"Logout"} label={"Déconnexion"} />
                    </>
               )}
               {!props.isAuthenticated && (
                    <>
                         <TabBarButton icon={"Feed"} label={"Feed"} screen={"Home"} />
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
