import { TextInput, StyleSheet } from "react-native"
type InputProps = {
     placeholder: string
}

const Input = (props: InputProps) => {
     return <TextInput style={styles.input} placeholder={props.placeholder} />
}

const styles = StyleSheet.create({
     input: {
          height: 60,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "#fd5353",
          width: "90%",
          marginVertical: 10,
          borderRadius: 5,
          fontSize: 15,
          paddingLeft: 10,
     },
})

export default Input
