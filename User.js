import { StyleSheet, View, Pressable, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Modal from "react-native-modal";
import { Text, Card } from "@rneui/themed";
import { faker } from "@faker-js/faker";

export default function User({
  firstName,
  lastName,
  pictureUser,
  cellPhone,
  countryUser,
  ageUser,
}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [quote, setQuote] = useState("");

  // Set the job title and quote when the component mounts
  useEffect(() => {
    setJobTitle(faker.person.jobType());
    setQuote(faker.lorem.sentence()); // Generate a random quote
  }, []);

  const toggleModal = () => {
    console.log("Modal Toggled");
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* User Card */}
      <Card containerStyle={{ borderRadius: 30, shadowRadius: 10 }}>
        <Card.Title style={styles.cardTitle}>
          <View style={styles.headerContainer}>
            <Pressable onPress={toggleModal} style={styles.plusButton}>
              <Image
                style={styles.plusIcon}
                source={require("./assets/plus-sign.png")}
              />
            </Pressable>
            <Text style={styles.userName}>
              {firstName} {lastName}
            </Text>
          </View>
        </Card.Title>
        <Card.Divider />
        <View style={styles.profileContainer}>
          <Card.Image
            style={styles.profileImage}
            source={{ uri: pictureUser }}
          />
          <View>
            <Text style={styles.label}>
              Phone: <Text style={styles.value}>{cellPhone}</Text>
            </Text>
            <Text style={styles.label}>
              Country:{" "}
              <Text style={styles.value}>
                {countryUser || faker.location.country()}
              </Text>
            </Text>
            <Text style={styles.label}>
              Age: <Text style={styles.value}>{ageUser}</Text>
            </Text>
            <Text style={styles.label}>
              Job: <Text style={styles.value}>{jobTitle}</Text>
            </Text>
           
          </View>
        </View>
      </Card>

      {/* Modal for User Details */}
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>User Information</Text>

          <Card.Image
            style={styles.profileImage}
            source={{ uri: pictureUser }}
          />

          <Text style={styles.modalText}>
            <Text style={styles.label}>Full Name: </Text>
            {firstName} {lastName}
          </Text>
          <Text style={styles.modalText}>
            <Text style={styles.label}>Phone: </Text>
            {cellPhone}
          </Text>
          <Text style={styles.modalText}>
            <Text style={styles.label}>Country: </Text>
            {countryUser || faker.location.country()}
          </Text>
          <Text style={styles.modalText}>
            <Text style={styles.label}>Age: </Text>
            {ageUser}
          </Text>
          <Text style={styles.modalText}>
            <Text style={styles.label}>Job: </Text>
            {jobTitle}
          </Text>
          <Text style={styles.modalQuote}>
            ❝ {quote} ❞
          </Text>
          <View style={styles.socialIcons}>
            <Image style={styles.icon} source={require("./assets/fb.png")} />
            <Image
              style={styles.icon}
              source={require("./assets/instagram.png")}
            />
            <Image
              style={styles.icon}
              source={require("./assets/linkedin.png")}
            />
            <Image
              style={styles.icon}
              source={require("./assets/twitter.png")}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 14,
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  plusButton: {
    marginRight: 10,
  },
  plusIcon: {
    width: 40,
    height: 40,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 90,
    height: 100,
    borderRadius: 80,
    marginHorizontal: 9,
  },
  label: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: "bold",
  },
  value: {
    fontWeight: "500",
  },
  quote: {
    fontStyle: "italic",
    color: "#555",
    marginTop: 10,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
    marginBottom: 5,
  },
  modalQuote: {
    fontStyle: "italic",
    color: "#333",
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  icon: {
    width: 40,
    height: 40,
  },
});
