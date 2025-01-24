import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import axios from "axios";
import User from "D:/DatingApp/User.js";

export default function ListProfiles() {
  const [users, setUsers] = useState([]);
  const url = "https://randomuser.me/api/?results=100";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setUsers(res.data.results))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <View style={styles.container}>
      {users.length === 0 ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.login.uuid}
          renderItem={({ item }) => (
            <User
              firstName={item.name.first}
              lastName={item.name.last}
              ageUser={item.dob.age}
              countryUser={item.location.country}
              pictureUser={item.picture.medium}
            />
          )}
          style={{ marginTop: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
