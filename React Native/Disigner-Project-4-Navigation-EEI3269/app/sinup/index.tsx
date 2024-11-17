// SinUp Page
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Button,Alert,Switch, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.click}>Travel Buddy</Text>

          {/* Image Container */}
          <View style={styles.imageContainer}>
            <Image 
              source={require('../../assets/images/travel_budy.png')}
              style={styles.image}
            />
          </View>

          {/* User Name Input */}
          <TextInput
            style={styles.uInput}
            placeholder="User Name"
          />

          <StatusBar style="auto" />

          {/* Password Inputs */}
          <TextInput
            style={styles.pInput}
            placeholder="New Password"
          />
          <TextInput
            style={styles.pInput}
            placeholder="Confirm Password"
          />

          {/* Toggle Switch for Terms and Conditions */}
          <View style={styles.switchContainer}>
            <Switch
              trackColor={{ false: 'red', true: 'green' }}
              thumbColor={isEnabled ? 'blue' : 'yellow'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={styles.termsText}>I Agree to Terms and Conditions</Text>
          </View>

          {/* Button Section */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => router.push('/login')} style={styles.signUpBtn}>
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => router.push('/login')} style={styles.logInBtn}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 0,
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  container: {
    alignItems: 'center',
    width: '100%',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  click: {
    marginTop: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontFamily: "sans-serif",
  },
  uInput: {
    borderRadius: 20,
    width: "80%",
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pInput: {
    borderRadius: 20,
    width: "80%",
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signUpBtn: {
    borderRadius: 25,
    backgroundColor: 'lightgreen',
    padding: 15,
    width: "100%",
    marginBottom: 10,
  },
  logInBtn: {
    marginBottom:60,
    borderRadius: 25,
    backgroundColor: 'orange',
    padding: 15,
    width: "100%",
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: "80%",
  },
  switchContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  termsText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 14,
  },
});
