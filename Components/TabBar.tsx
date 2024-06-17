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
                         <TabBarButton label={"Feed"} />
                    </>
               )}
               {!props.isAuthenticated && (
                    <>
                         <TabBarButton label={"Connexion"} />
                         <TabBarButton label={"Inscription"} />
                         <TabBarButton label={"Feed"} />
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
