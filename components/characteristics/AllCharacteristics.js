import React from "react";
import { StyleSheet, View, SectionList, Text } from "react-native";
import { CheckBox } from "@rneui/themed";

const DATA = [
  {
    title: "Interests and Hobbies",
    data: ["Music", "Art", "Travel", "Sports", "Photography"],
  },
  {
    title: "Personality Characteristics",
    data: ["Adventurous", "Caring", "Charming", "Creative", "Disciplined"],
  },
  {
    title: "Gender",
    data: ["Male", "Female", "Other"],
  },
  {
    title: "Physical Characteristics",
    data: ["Tall", "Athletic", "Medium Build", "Chubby", "Average Height"],
  },
];

export default function AllCharacteristics() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <CheckBox title={item} containerStyle={styles.item} />
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    backgroundColor: "lightgray",
    borderRadius: 5,
    marginVertical: 5,
  },
});
