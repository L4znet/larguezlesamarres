import { TextInput, StyleSheet } from "react-native"
type InputProps = {
     placeholder: string
     onChangeText: (text: string) => void
     value: string
     type?: string
}

const Input = (props: InputProps) => {
     switch (props.type) {
          case "textarea":
               return <TextInput multiline onChangeText={props.onChangeText} value={props.value} style={styles.textarea} placeholder={props.placeholder} />

          case "email":
               return <TextInput keyboardType={"email-address"} onChangeText={props.onChangeText} value={props.value} style={styles.input} placeholder={props.placeholder} />

          case "password":
               return <TextInput secureTextEntry onChangeText={props.onChangeText} value={props.value} style={styles.input} placeholder={props.placeholder} />

          case "number":
               return <TextInput keyboardType={"number-pad"} onChangeText={props.onChangeText} value={props.value} style={styles.input} placeholder={props.placeholder} />

          case "phone":
               return <TextInput keyboardType={"phone-pad"} onChangeText={props.onChangeText} value={props.value} style={styles.input} placeholder={props.placeholder} />

          case "url":
               return <TextInput keyboardType={"url"} onChangeText={props.onChangeText} value={props.value} style={styles.input} placeholder={props.placeholder} />

          default:
               return <TextInput onChangeText={props.onChangeText} value={props.value} style={styles.input} placeholder={props.placeholder} />
     }
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
     textarea: {
          minHeight: 190,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "#fd5353",
          width: "90%",
          marginVertical: 10,
          borderRadius: 5,
          fontSize: 15,
          paddingLeft: 10,
          paddingTop: 10,
          paddingVertical: 20,
     },
})

export default Input
