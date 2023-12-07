import { useState } from 'react';
import OTP from '../OTP/OTP';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Login = ({navigation}) => {
  
  const handleGetOTP = async () => {
    try {
      console.log("attempting to hit the api")
      const response = await fetch('http://10.0.2.2:8000/app/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobileNo: number,
        }),
        
      });
   console.log(response,"response is")
      if (response.ok) {
        navigation.navigate('OTPScreen', {
          mobileNo: number,
          username:"", 
          fullName:"", 
        });
      } else {
        // Handle unsuccessful response
        Alert.alert('Error', 'Failed to get OTP. Please try again.');
      }
    } catch (error) {
      console.error('API Error:', error);
      Alert.alert('Error', 'Failed to connect to the server.');
    }
  };
  const [number, onChangeNumber] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Back!</Text>
      <Text style={styles.text2}>You Have Been Missed For Long Time</Text>
      <Text style={styles.text3}>Mobile Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter Your Number."
        keyboardType="numeric"
      />
      <View style={styles.button}>
        <TouchableOpacity onPress={handleGetOTP}>
          <LinearGradient
            colors={['#0FF', '#FFC0CB', '#FF0']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{padding: 15, alignItems: 'center', borderRadius: 5}}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>GET OTP</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#0D253C',
    fontSize: 24,
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: 31.2,
    wordWrap: 'break-word',
    paddingLeft: 20,
    marginTop: 30,
  },
  text2: {
    color: '#6F7F92',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '500',
    textTransform: 'capitalize',
    lineHeight: 18,
    wordWrap: 'break-word',
    paddingLeft: 20,
    marginTop: 10,
  },
  text3: {
    color: '#6F7F92',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '600',
    textTransform: 'capitalize',
    lineHeight: 24,
    wordWrap: 'break-word',
    paddingLeft: 20,
    marginTop: 50,
  },
  input: {
    color: '#07142E',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '800',
    lineHeight: 20.8,
    wordWrap: 'break-word',
    paddingLeft: 20,
  },
  button: {
    borderRadius: 10,
    height: '35%',
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonText: {
    marginLeft: 150,
    marginTop: 15,
    color: 'white',
  },
});

export default Login;
