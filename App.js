import { StyleSheet, View } from "react-native";
import Top10Lists from "./top-10/Top10Lists";
import AllProfilesMain from "./components/all-profiles/AllProfilesMain";
import Form from "./components/user-information/Form";
import AllCharacteristics from"./components/characteristics/AllCharacteristics";
export default function App() {
  return (
    <View style={styles.container}>
      <AllProfilesMain/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
