import { View, StyleSheet, Pressable } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { useEffect, useState } from "react"
import { Session } from "@supabase/supabase-js"
import { supabase } from "../lib/supabase"
import { PrismaClient } from "@prisma/client"
type FavoriteButtonProps = {
     offerId: string
}
const FavoriteButton = (props: FavoriteButtonProps) => {
     const [isFavorite, setIsFavorite] = useState(false)
     const [session, setSession] = useState<Session | null>(null)
     useEffect(() => {
          const fetchSession = async () => {
               const {
                    data: { session },
               } = await supabase.auth.getSession()
               setSession(session)
          }

          fetchSession()
     }, [])
     const prisma = new PrismaClient()

     const addFavorite = async () => {
          setIsFavorite(!isFavorite)

          const dataToInsert = {
               offerid: props.offerId,
               userid: session?.user.id,
          }

          if (isFavorite) {
               await supabase.from("favorites").delete().match(dataToInsert)
          } else {
               const test = await supabase.from("favorites").insert(dataToInsert)

               console.log(test)
          }
     }

     return (
          <Pressable style={styles.favoriteButton} onPress={addFavorite}>
               <Icon name={isFavorite ? "heart" : "heart-o"} size={25} color={"#FFF"} />
          </Pressable>
     )
}

const styles = StyleSheet.create({
     favoriteButton: {
          position: "absolute",
          right: 15,
          top: 15,
          backgroundColor: "#fd5353",
          padding: 15,
          borderRadius: 50,
     },
})

export default FavoriteButton
