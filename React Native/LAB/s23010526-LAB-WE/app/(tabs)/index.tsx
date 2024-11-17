import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.click}>Helth Mate</Text>
      <Text style={styles.clickText}>Stay Safe, Stay Healthy</Text>
      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../assets/images/helthmate_logo.png')}
          style={{
            width: 200,
            height: 200,
            marginBottom: 10,
            marginTop: 0,
          }}
        />
      </View>
      <TouchableOpacity onPress={() => router.push('/login')} style={styles.logInBtn}>
        <Text style={styles.btnText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',  // Centers the content vertically
    alignItems: 'center',      // Centers the content horizontally
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  click: {
    marginTop: 50,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontFamily: 'sans-serif', 
  },
  clickText: {
    marginTop: 0,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontFamily: 'sans-serif', 
  },
  logInBtn: {
    marginTop: 50,
    borderRadius: 30,
    shadowColor:'yellow',
    shadowRadius:10,
    backgroundColor: '#DC7676',
    padding: 15,
    width: "50%"
  },
  btnText: {
    color:'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',  
    width: "80%",
  },
});
