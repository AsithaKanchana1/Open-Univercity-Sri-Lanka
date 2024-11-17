import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from "react-native";
import { router } from "expo-router";
// Alert Box
const HomeScreen = () => {
  const handleLogOut = () => {
    Alert.alert(
      "Logging Out",
      "Are you sure you want to Log Out?",
      [
        {
          text: "Yes",
          onPress: () => {
            console.log("Logged Out");
            router.push('/login'); // Navigate to login screen after logging out
          },
        },
        { text: "No", onPress: () => console.log("Cancel Log Out") },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Log Out Button */}
      <TouchableOpacity style={styles.logOutBtn} onPress={handleLogOut}>
        <Text style={styles.logOutText}>Log Out</Text>
      </TouchableOpacity>

      {/* Scrollable Content */}
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} // content alignment update
        showsVerticalScrollIndicator={false} // scroll indicator hide
      >
        {/* SOS Button nav */}
        <TouchableOpacity
          style={styles.sosButton}
          onPress={() => Alert.alert("SOS Activated")} // alart ekak eawa 
        >
          <Text style={styles.btnText}>SOS</Text>
        </TouchableOpacity>

        {/* Emergency Contacts Button nav */}
        <TouchableOpacity
          style={styles.emergencyContactsButton}
          onPress={() => router.push("/emergency-contacts")}
        >
          <Text style={styles.btnText}>Emergency{`\n`}Contacts</Text>
        </TouchableOpacity>

        {/* Health Tips Button */}
        <TouchableOpacity
          style={styles.healthTipsButton}
          // page eka haduwe na
          onPress={() => Alert.alert("Health Tips Coming Soon!")}
        >
          <Text style={styles.btnText}>Health Tips</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // bg color update
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center", 
    justifyContent: "center", 
    paddingVertical: 20, //padding page
  },
  logOutBtn: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 20,
    zIndex: 1, // stay in all button above
  },
  logOutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  sosButton: {
    marginTop: 20, 
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#d62828", // Red for SOS
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20, 
  },
  emergencyContactsButton: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "brown",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  healthTipsButton: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16, 
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeScreen;
