import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import FeedOffersScreen from "./FeedOffersScreen"
import OwnoffersScreen from "./OwnoffersScreen"

const FeedScreen = () => {
     const Tab = createMaterialTopTabNavigator()

     return (
          <Tab.Navigator>
               <Tab.Screen name="FeedOffers" component={FeedOffersScreen} />
               <Tab.Screen name="OwnOffers" component={OwnoffersScreen} />
          </Tab.Navigator>
     )
}

export default FeedScreen
