import { View, Text, StyleSheet, Image } from "react-native"

type CardProps = {
     title: string
     description: string
     image: any
}

const Card = (props: CardProps) => {
     return (
          <View style={styles.card}>
               <Image source={props.image} style={styles.image} resizeMode={"cover"} />
               <Text style={styles.title}>{props.title}</Text>
          </View>
     )
}

const styles = StyleSheet.create({
     card: {
          backgroundColor: "#f9f9f9",
          width: "90%",
          marginVertical: 10,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
               width: 0,
               height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
          marginTop: 20,
     },
     title: {
          fontSize: 20,
          fontWeight: "bold",
          marginVertical: 20,
          textAlign: "center",
     },
     image: {
          width: "100%",
          height: 200,
          borderRadius: 10,
     },
})

export default Card
