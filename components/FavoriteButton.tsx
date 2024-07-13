import { View, StyleSheet, Pressable } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { useEffect, useState } from "react"
import { Session } from "@supabase/supabase-js"
import { supabase } from "../lib/supabase"
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

     const addFavorite = async () => {
          supabase
               .from("favorites")
               .select("*")
               .match({ offerid: props.offerId, userid: session?.user.id })
               .then(async ({ data, error }) => {
                    if (data) {
                         console.log("length", data.length)
                         if (data.length === 0) {
                              setIsFavorite(true)
                              await supabase.from("favorites").insert({ offerid: props.offerId, userid: session?.user.id })
                         } else if (data.length > 0) {
                              setIsFavorite(false)

                              await supabase.from("favorites").delete().eq("offerid", props.offerId).eq("userid", session?.user.id).select()

                              console.log("fdssfd")

                              if (error) {
                                   console.log("error", error)
                              }
                         }
                    }
               })
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
