import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Set the StatusBar configuration at the top of your screen */}
      <StatusBar style="dark" hidden={true} />

      <Text style={styles.click}>Travel Buddy</Text>

      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../assets/images/travel_budy.png')}
          style={styles.logoImage}
        />
      </View>

      {/* Username Input */}
      <TextInput
        style={styles.uInput}
        placeholder="User Name"
        placeholderTextColor="#888"
      />

      {/* Password Input */}
      <TextInput
        style={styles.pInput}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry={true}
      />

      {/* Button Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => router.push('/home')} style={styles.sinUpBtn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => router.push('/sinup')} style={styles.logInBtn}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container background
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingHorizontal: 20,
    
  },
  // Image container
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  // Logo image style
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  // Title text styling
  click: {
    marginTop: 50,
    marginBottom: 40,
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
  },
  // User Name Input styling
  uInput: {
    borderRadius: 20,
    width: "80%",
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  // Password Input styling
  pInput: {
    borderRadius: 20,
    width: "80%",
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  // Login button styling
  sinUpBtn: {
    borderRadius: 25,
    backgroundColor: 'lightgreen',
    padding: 15,
    width: "100%",
    marginBottom: 10,
  },
  // Sign Up button styling
  logInBtn: {
    borderRadius: 25,
    backgroundColor: 'orange',
    padding: 15,
    width: "100%",
  },
  // Button text styling
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  // Button container styling
  buttonContainer: {
    width: "80%",
    marginVertical: 5,
  },
});
