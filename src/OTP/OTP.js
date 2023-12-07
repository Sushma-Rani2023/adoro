import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import CountDown from 'react-native-countdown-component';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
const OTP = ({route}) => {
  const [timer, setTimer] = useState(60); // Set the initial timer value in seconds
  const [timerActive, setTimerActive] = useState(true);
  const { mobileNo, username, fullName } = route.params;
  console.log(route.params,"params")
  const [action,setAction]=useState('')
  const handleTimerFinish = () => {
    setTimerActive(false);
    // You can add additional logic here if needed when the timer finishes
  };
  useEffect(() => {
    let interval;
  
    if (timerActive) {
      interval = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer === 0) {
            clearInterval(interval);
            handleTimerFinish();
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
  
    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [timerActive]);
  
  const [otp, setOtp] = useState('', '', '', '');

  const handleOTPChange = otpValue => {
    setOtp(otpValue);
  };

  const handleDone = async () => {
    let currentAction = '';
  
    if (username === "" || fullName === "") {
      console.log("Action is validateuser");
      currentAction = "validateuser";
    } else {
      console.log("Action is validatephone");
      currentAction = "validatephone";
    }
  
  
  
    try {
      console.log("Action is", currentAction);
      const response = await axios.post(`http://10.0.2.2:8000/app/user/${currentAction}`, {
        mobileNo,
        otp,
        username,
        fullName,
      });
  
      if (response.data.status) {
        Alert.alert(response.data.msg);
        console.log('OTP Validated Successfully');
      } else {
        Alert.alert(response.data.msg);
        console.log('OTP Validation Failed');
      }
    } catch (error) {
      console.error('API Error:', error);
    }
  };
  const handleResend= async()=>{
    let currentAction = '';
  
    if (username === "" || fullName === "") {
      console.log("Action is validateuser");
      currentAction = "login";
    } else {
      console.log("Action is validatephone");
      currentAction = "generateotp";
    }
  
  
  
    try {
      console.log("Action is", currentAction);
      const response = await axios.post(`http://10.0.2.2:8000/app/user/${currentAction}`, {
        mobileNo,
        otp,
        username,
        fullName,
      });
  
      if (response.data.status) {
        Alert.alert(response.data.msg);
        console.log('OTP Validated Successfully');
      } else {
        Alert.alert(response.data.msg);
        console.log('OTP Validation Failed');
      }
    } catch (error) {
      console.error('API Error:', error);
    }


  }

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>OTP Verification</Text>
      <Text style={styles.text2}>
        We have sent a 4 digit code to your Mobile No.
      </Text>
      <OTPInputView
        style={styles.otpInput}
        pinCount={4}
        autoFocusOnLoad
        code={otp}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeChanged={handleOTPChange}
        // onCodeFilled={handleSubmit}
        editable={true}
      />
      <CountDown
        until={timer}
        onFinish={handleTimerFinish}
        size={15}
        digitStyle={{
          backgroundColor: 'transparent',
        }}
        digitTxtStyle={{color: '#1CC625'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'MM', s: 'SS'}}
      />
      <View style={styles.container1}>
        <View style={styles.text}>
          <Text>Don't Revieve The OTP?</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleResend}>
          <Text style={styles.buttonText}>RESEND OTP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button1}>
        <TouchableOpacity onPress={handleDone}>
          <LinearGradient
            colors={['#0FF', '#FFC0CB', '#FF0']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{padding: 15, alignItems: 'center', borderRadius: 5}}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>DONE</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    color: '#07142E',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: 26,
    wordWrap: 'break-word',
    alignSelf: 'center',
    marginTop: 30,
  },
  text2: {
    color: '#6F7F92',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '500',
    textTransform: 'capitalize',
    lineHeight: 20,
    wordWrap: 'break-word',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  underlineStyleBase: {
    color: 'black',
    borderColor: 'black',
  },
  underlineStyleHighLighted: {
    borderColor: 'blue',
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginRight: 2,
    fontSize: 6,
  },
  button: {
    // backgroundColor: 'white',
    padding: 6,
  },
  button1: {
    borderRadius: 10,
    height: '35%',
    width: '95%',
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonText: {
    color: 'blue',
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  otpInput: {
    width: '80%',
    height: 200,
    color: 'black',
  },
});

export default OTP;
