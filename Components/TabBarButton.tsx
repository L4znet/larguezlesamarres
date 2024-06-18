import { TouchableOpacity, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"
import * as RootNavigation from "../RootNavigation"

type TabBarButtonProps = {
     label: keyof IconKeys
     screen: string
}

type IconKeys = {
     Feed: string
     Connexion: string
     Inscription: string
}

const icons = {
     Feed: "house",
     Connexion: "user",
     Inscription: "user-plus",
}

const TabBarButton = (props: TabBarButtonProps) => {
     return (
          <TouchableOpacity
               {...props}
               style={styles.tabBarButton}
               onPress={() => {
                    RootNavigation.navigate(props.screen, "")
               }}
          >
               <Icon name={icons[props.label]} size={25} color="#fff" />
               <Text style={styles.tabBarButtonText}>{props.label}</Text>
          </TouchableOpacity>
     )
}

const styles = StyleSheet.create({
     tabBarButton: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fd5353",
          height: 90,
     },
     tabBarButtonText: {
          color: "#fff",
          fontSize: 10,
          fontWeight: "bold",
          textTransform: "uppercase",
          marginTop: 10,
     },
})

export default TabBarButton
