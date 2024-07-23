import { TouchableOpacity, View, StyleSheet, Text } from "react-native"
import TopTabBarButton from "./TopTabBarButton"
import { useAuth } from "../context/AuthContext"

const TopTabBar = () => {
     const { isAuthenticated } = useAuth()
     return (
          <>
               {isAuthenticated && (
                    <View style={styles.topBar}>
                         <TopTabBarButton label={"Les offres du feed"} screen={"FeedOffers"} />
                         <TopTabBarButton label={"Vos offres"} screen={"OwnOffers"} />
                         <TopTabBarButton label={"Vos favoris"} screen={"OwnFavorites"} />
                    </View>
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
     },
})

export default TopTabBar
