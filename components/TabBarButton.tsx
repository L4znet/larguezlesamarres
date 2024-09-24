import { TouchableOpacity, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"
import * as RootNavigation from "../RootNavigation"
import { supabase } from "../lib/supabase"
import React from "react"

type TabBarButtonProps = {
     label: string
     screen?: string
     method?: () => void
     icon: keyof IconKeys
}

type IconKeys = {
     Feed: string
     Login: string
     Register: string
     Profile: string
     Logout: string
     Add: string
}

const icons = {
     Feed: "house",
     Login: "user",
     Register: "user-plus",
     Profile: "user-circle",
     Logout: "user-slash",
     Add: "plus",
}

const TabBarButton = (props: TabBarButtonProps) => {
     if (props.icon == "Logout") {
          return (
               <TouchableOpacity
                    {...props}
                    style={styles.tabBarButton}
                    onPress={async () => {
                         const { error } = await supabase.auth.signOut()
                         RootNavigation.navigate("Feed", "")
                    }}
               >
                    <Icon name={icons[props.icon]} size={25} color="#fff" />
                    <Text style={styles.tabBarButtonText}>Déconnexion</Text>
               </TouchableOpacity>
          )
     }

     return (
          <TouchableOpacity
               {...props}
               style={styles.tabBarButton}
               onPress={() => {
                    RootNavigation.navigate(props.screen, "")
               }}
          >
               <Icon name={icons[props.icon]} size={25} color="#fff" />
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
