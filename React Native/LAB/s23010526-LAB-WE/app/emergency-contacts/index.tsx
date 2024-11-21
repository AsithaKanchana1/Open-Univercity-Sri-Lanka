import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";
import { router } from "expo-router"; // Import router for navigation

const emergencyContacts = [
  { id: "1", name: "Asitha Kanchana", phone: "0701336364" },
  { id: "2", name: "Emergency telephone number", phone: "119" },
  { id: "3", name: "Suwasariya Emergency ", phone: "1990" },
];

const EmergencyContactsScreen = () => {
  // Handle log out action
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

      {/* Header */}
      <Text style={styles.header}>Emergency Contacts</Text>

      <FlatList
        data={emergencyContacts}
        renderItem={({ item }) => (
          <View style={styles.contactCard}>
            <Text style={styles.contactName}>{item.name}</Text>
            <Text style={styles.contactPhone}>{item.phone}</Text>
            {/* Call button without functionality */}
            <TouchableOpacity style={styles.callButton}>
              <Text style={styles.callButtonText}>Call</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
  },
  contactCard: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contactPhone: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
  },
  callButton: {
    backgroundColor: "#d62828",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  callButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  // Style for Log Out Button
  logOutBtn: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 20,
    zIndex: 1, // Ensure this button stays above content
  },
  logOutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default EmergencyContactsScreen;
