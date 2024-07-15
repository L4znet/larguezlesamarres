import { View, Text } from "react-native"
import Input from "../components/Input"
import { useState } from "react"

const SearchScreen = () => {
     const [search, setSearch] = useState("")
     return (
          <View>
               <Input value={search} placeholder={"Votre recherche"} onChangeText={() => setSearch(search)} type={"text"} />
          </View>
     )
}

export default SearchScreen
