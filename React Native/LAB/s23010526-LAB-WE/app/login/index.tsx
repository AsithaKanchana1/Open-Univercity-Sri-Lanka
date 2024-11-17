// for routering
import { router } from "expo-router"; 
import { StatusBar } from "expo-status-bar";
// Main Packages
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
// to add Alert tofogot password 
import { Alert } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
{/* statusbar confg */}
      <StatusBar style="dark" hidden={true} />

      {/* Logo/Title installment */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../assets/images/helthmate_logo.png')} //logo location path 
          style={styles.logoImage}
        />
        {/* app name*/}
        <Text style={styles.title}>HealthMate</Text>
        {/* app slogen */}
        <Text style={styles.subtitle}>Stay Safe, Stay Healthy</Text> 
      </View>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="User Name"
        placeholderTextColor="#888" //almost transparent background color for txt_input
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"//almost transparent background color for txt_input
        secureTextEntry={true}
      />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {/* fogot password */}
        {/* still i havent implimented fogot pass option so this is place holder for that */}
      <TouchableOpacity onPress={() => Alert.alert("Password Reset", "The password reset feature is coming soon. Stay tuned!")} style={styles.loginBtnFogot}> 
             <Text style={styles.btnTextFogot}>Forgot Password</Text>
        </TouchableOpacity>
{/* Loging button */}
{/* ihave used navigation by using router.push it is eseir than other method */}
        <TouchableOpacity onPress={() => router.push('/home')} style={styles.loginBtn}>
          <Text style={styles.btnText}>Log In</Text>
        </TouchableOpacity>
        {/* sine up button */}
        <TouchableOpacity onPress={() => router.push('/sinup')} style={styles.signupBtn}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  // Logo container styles
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  // Logo image styles
  logoImage: {
    width: 100,
    height: 100,
  },
  // Titletext styles
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#d62828', // HealthMate's primary red color
    marginTop: 10,
  },
  // slogen styling 
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  // Input fields (most of styles are previus Disigner repot 4 )
  input: {
    borderRadius: 30,
    width: "80%",
    backgroundColor: '#f8f8f8', //light color bg
    padding: 15,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  // Login button styles
  loginBtn: {
    borderRadius: 25,
    backgroundColor: '#d62828', // Hred color background it is light red
    padding: 15,
    width: "100%",
    marginBottom: 10,
  },
  loginBtnFogot: {
    borderRadius: 10,
    padding: 15,
    width: "100%",
    marginBottom: 10,
  },
  // Sign Up button
  signupBtn: {
    borderRadius: 25,
    backgroundColor: '#f4a261', // light orange color
    padding: 15,
    width: "100%",
  },
  // Button text
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  btnTextFogot: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'blue',
  },
  // Button container
  buttonContainer: {
    width: "80%",
    marginVertical: 5,
  },
});

// "Asitha Kanchana Palliyaguru"
// S23010526
// Open Univercity Srilanka 
// Lab 2024.11.17
