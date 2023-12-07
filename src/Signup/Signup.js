import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Signup = ({navigation}) => {
  const [number, onChangeNumber] = React.useState('');
  const [fullName, onChangeFullName] = React.useState('');
  const [userName, onChangeUserName] = React.useState('');

  const handleOTP = async () => {
    try {
      console.log("attempting to hit the api")
      const response = await fetch('http://10.0.2.2:8000/app/user/generateotp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobileNo: number,
        }),
      });

      if (response.ok) {
    
        navigation.navigate('OTPScreen', {
          mobileNo: number,
          username: userName, 
          fullName: fullName, 
        });
      } else {
     
        Alert.alert('Error', 'Failed to get OTP. Please try again.');
      }
    } catch (error) {
      console.error('API Error:', error);
      Alert.alert('Error', 'Failed to connect to the server.');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Creator</Text>
      <Text style={styles.text2}>Join the world of creators</Text>
      <Text style={styles.text3}>Full Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeFullName}
        value={fullName}
        placeholder="Full Name"
      />
      <Text style={styles.text3}>User Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUserName}
        value={userName}
        placeholder="User Name"
      />
      <Text style={styles.text3}>Mobile Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter Your Number."
        keyboardType="numeric"
      />
      <View style={styles.button}>
        <TouchableOpacity onPress={handleOTP}>
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
    marginTop: 2,
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
    height: '30%',
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

export default Signup;
