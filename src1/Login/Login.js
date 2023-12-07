import React from 'react';
import {StyleSheet, View, Text, TextInput, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Login = () => {
  const handlePress = () => {
    Alert.alert('Button with linear gradient pressed');
  };
  const [number, onChangeNumber] = React.useState('');
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
        <LinearGradient
          colors={['#0FF', '#FFC0CB', '#FF0']}
          style={styles.button}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          onPress={handlePress}>
          <Text style={styles.buttonText}>GET OTP</Text>
        </LinearGradient>
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

