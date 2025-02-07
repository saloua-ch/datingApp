import { StyleSheet, Text, View } from "react-native";
export default function Header() {
return (
<View style={styles.container}>
<Text style={styles.welcome}>Welcome Back</Text>
</View>
);
}
const styles = StyleSheet.create({
welcome:{
marginRight:160,
fontSize:20,
fontStyle: "italic"
    },
container: {
backgroundColor: "pink",
marginTop: 30,
alignItems: "center",
justifyContent: "center",
width: 500,
height: 50,
},});
