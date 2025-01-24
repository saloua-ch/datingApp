import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListUsers from "./ListUsers";
export default function Top10Lists() {
return (
<View style={styles.container}>
<Header />
<Text style={styles.title}>
TOP 10 Matching Users For you!
</Text>
<ListUsers />
<Footer />
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
alignItems: "center",
justifyContent: "space-between",
},
title: {
marginTop: 10,
fontSize: 16,
},
});