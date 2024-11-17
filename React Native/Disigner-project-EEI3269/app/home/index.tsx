// Home Page
import { router } from "expo-router";
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';

const HomeScreen = () => {
  // Array of categories with icons and labels
  const categories = [
    { label: 'Attractions', icon: require('../../assets/images/sigiriya.jpg') },
    { label: 'Accommodation', icon: require('../../assets/images/accomodation.jpg') },
    { label: 'Emergency', icon: require('../../assets/images/emargency.jpg') },
    { label: 'Translator', icon: require('../../assets/images/translate.jpg') },
    { label: 'Map', icon: require('../../assets/images/map.jpg') },
    { label: 'Currency', icon: require('../../assets/images/corrency.jpg') },
    { label: 'Help', icon: require('../../assets/images/help.jpg') },
    { label: 'Deals & offers', icon: require('../../assets/images/sale.jpg') },
  ];

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
          } 
        },
        { 
          text: "No", 
          onPress: () => console.log("Cancel Log Out") 
        }
      ]
    );
  };

  return (
    <View style={styles.pageContainer}>
      {/* Log Out Button */}
      <TouchableOpacity 
        style={styles.logOutBtn} 
        onPress={handleLogOut} // Use the function here
      >
        <Text style={styles.btnText}>Log Out</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.item}>
            <Image source={category.icon} style={styles.icon} />
            <Text style={styles.label}>{category.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'black', // or any background you prefer
    alignItems: 'flex-start', // Align items to the left of the page
    paddingTop: 20, // Padding at the top to create space for the Log Out button
    paddingLeft: 20, // Padding on the left to give some space from the edge
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    paddingBottom: 40, // Extra padding to avoid cutoff
    flexGrow: 1,
  },
  item: {
    alignItems: 'center',
    width: '40%',
    marginVertical: 20,
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
    fontFamily: 'serif',
  },
  logOutBtn: {
    borderRadius: 25,
    backgroundColor: 'orange',
    padding: 15,
    width: "20%", // Adjusted width for better alignment
    alignSelf: 'flex-start', // Align the button to the left within the container
    marginBottom: 0, // Space between button and categories
  },
  btnText: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center', // Center the text within the button
    fontWeight: 'bold',
  },
});

export default HomeScreen;
