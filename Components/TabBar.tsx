import { TouchableOpacity, View, StyleSheet, Text } from "react-native"
import TabBarButton from "./TabBarButton"

type TabBarProps = {
     isAuthenticated: boolean
}

const TabBar = (props: TabBarProps) => {
     return (
          <View style={styles.bottomBar}>
               {props.isAuthenticated && (
                    <>
                         <TabBarButton label={"Feed"} screen={"Home"} />
                    </>
               )}
               {!props.isAuthenticated && (
                    <>
                         <TabBarButton screen={"Login"} label={"Connexion"} />
                         <TabBarButton screen={"Register"} label={"Inscription"} />
                         <TabBarButton screen={"Home"} label={"Feed"} />
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
