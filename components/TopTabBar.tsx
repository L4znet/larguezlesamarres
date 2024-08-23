import { TouchableOpacity, View, StyleSheet, Text, Pressable } from "react-native"
import TopTabBarButton from "./TopTabBarButton"
import Input from "./Input"
import { useState } from "react"
import * as RootNavigation from "../RootNavigation"
import { useAuth } from "../context/AuthContext"

const TopTabBar = () => {
     const { user } = useAuth()

     return (
          <>
               {user && (
                    <>
                         <View style={styles.searchbar}>
                              <Pressable
                                   style={styles.searchbarInput}
                                   onPress={() => {
                                        RootNavigation.navigate("Search", "")
                                   }}
                              >
                                   <Text style={styles.searchbarText}> Votre recherche</Text>
                              </Pressable>
                         </View>
                         <View style={styles.topBar}>
                              <TopTabBarButton label={"Les offres du feed"} screen={"FeedOffers"} />
                              <TopTabBarButton label={"Vos offres"} screen={"OwnOffers"} />
                              <TopTabBarButton label={"Vos favoris"} screen={"OwnFavorites"} />
                         </View>
                    </>
               )}
               {!user && (
                    <>
                         <View style={styles.searchbar}>
                              <Pressable
                                   style={styles.searchbarInput}
                                   onPress={() => {
                                        RootNavigation.navigate("Search", "")
                                   }}
                              >
                                   <Text style={styles.searchbarText}> Votre recherche</Text>
                              </Pressable>
                         </View>
                         <View style={styles.topBar}>
                              <TopTabBarButton label={"Les offres du feed"} screen={"FeedOffers"} />
                         </View>
                    </>
               )}
          </>
     )
}

const styles = StyleSheet.create({
     topBar: {
          backgroundColor: "#FFF",
          height: 50,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 20,
     },
     searchbar: {
          backgroundColor: "#FFF",
          height: 80,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          borderBottomWidth: 1,
          borderBottomColor: "#f9f9f9",
     },
     searchbarInput: {
          height: 60,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "#fd5353",
          width: "90%",
          marginVertical: 10,
          borderRadius: 5,
          fontSize: 15,
          paddingLeft: 10,
          paddingVertical: 20,
     },
     searchbarText: {
          color: "#b4b4b4",
     },
})

export default TopTabBar
