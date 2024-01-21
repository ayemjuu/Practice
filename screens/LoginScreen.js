import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';

const LoginScreen = () => {


  // REMOVE THIS AFTER!!!
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Disable hardware back button
      return true;
    });

    // Cleanup function to remove the event listener when the component is unmounted
    return () => backHandler.remove();
  }, []);

  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    // Implement your authentication logic here
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    // Navigate to the registration screen
    navigation.navigate('Register');
  };

  const goToAdmin = () => {
    navigation.navigate('Admin');
  };







  return (

    // <KeyboardAvoidingView style={styles.container} behavior='padding' keyboardVerticalOffset={Platform.OS == "ios" ? 100 : 0}>
    <View style={styles.container}>

      <Image
        source={require('../assets/logo.png')} // Change the path accordingly
        style={styles.logo}
      />
      <Text style={styles.title}>LOGIN</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.toggleButton} onPress={toggleShowPassword}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToAdmin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>


        {/* <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity> */}
      </View>

      {/* <Button title="Login" onPress={goToAdmin} /> */}

      
    </View>
    /* </KeyboardAvoidingView> */
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: 'white',
    marginTop: -750,
    
  },

  // keyboard: {
  //   backgroundColor: 'blue',
  // },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    
    marginBottom: 45,
  },

  input: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 50,
  },
 
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    borderRadius: 50,
    height: 50,
  },
  passwordInput: {
    height: 40,
    flex: 1,
    paddingLeft: 8,
  },
  toggleButton: {
    padding: 10,
    backgroundColor: 'white',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  button: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 50,
    marginRight: 8,
    borderWidth: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  // registerButton: {
  //   flex: 1,
  //   backgroundColor: 'pink',
  //   padding: 10,
  //   borderRadius: 50,
  //   marginLeft: 8,
  //   borderWidth: 1,
  // },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },

  logo: {
    width: 250, // Adjust width as needed
    height: 250, // Adjust height as needed
     marginBottom: 20,
     marginTop: 560,
  },

});

export default LoginScreen;