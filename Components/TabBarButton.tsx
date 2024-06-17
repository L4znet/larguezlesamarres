import { TouchableOpacity, Text, StyleSheet } from "react-native"

type TabBarButtonProps = {
     label: string
}

const TabBarButton = (props: TabBarButtonProps) => {
     return (
          <TouchableOpacity {...props} style={styles.tabBarButton}>
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
     },
     tabBarButtonText: {
          color: "#fff",
          fontSize: 15,
          fontWeight: "bold",
          textTransform: "uppercase",
     },
})

export default TabBarButton
