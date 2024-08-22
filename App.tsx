import { AuthProvider } from "./context/AuthContext"
import AppNavigator from "./navigation/AppNavigator"
import FlashMessage from "react-native-flash-message"

const App = () => {
     return (
          <AuthProvider>
               <AppNavigator />
               <FlashMessage position="top" />
          </AuthProvider>
     )
}

export default App
