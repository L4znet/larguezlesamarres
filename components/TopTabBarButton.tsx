import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { navigationRef } from "../RootNavigation"
import { TabActions } from "@react-navigation/native"
import React from "react"

type TopTabBarButtonProps = {
     label: string
     screen: string
}

const TabBarButton = (props: TopTabBarButtonProps) => {
     const jumpToAction = TabActions.jumpTo(props.screen)

     const currentRouteName = navigationRef.current?.getCurrentRoute()?.name
     return (
          <TouchableOpacity
               {...props}
               style={currentRouteName === props.screen ? [styles.tabBarButton, styles.tabBarButtonFocused] : styles.tabBarButton}
               onPress={() => {
                    navigationRef.current?.dispatch(jumpToAction)
               }}
          >
               <Text style={currentRouteName === props.screen ? [styles.tabBarButtonText, styles.tabBarButtonTextFocused] : styles.tabBarButtonText}>{props.label}</Text>
          </TouchableOpacity>
     )
}

const styles = StyleSheet.create({
     tabBarButton: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFF",
          height: 50,
     },
     tabBarButtonText: {
          color: "#000",
          fontSize: 10,
          fontWeight: "bold",
          textTransform: "uppercase",
          marginTop: 10,
     },
     tabBarButtonFocused: {
          borderStyle: "solid",
          borderBottomWidth: 2,
          borderBottomColor: "#fd5353",
     },
     tabBarButtonTextFocused: {
          color: "#fd5353",
     },
})

export default TabBarButton
