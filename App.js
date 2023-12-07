// // App.js
// import React,{useEffect} from 'react';
// import {StyleSheet, View, Image} from 'react-native';
// import TopTabNavigation from '././src/TabNavigator/TopTabNavigation';
// import {NavigationContainer} from '@react-navigation/native';
// import SplashScreen from 'react-native-splash-screen';

// const App = () => {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);
 
//   return (
//     <NavigationContainer>
//       <View style={styles.image}>
//         <Image source={require('./src/assets/Adoro.png')} />
//       </View>
//       <TopTabNavigation />
//     </NavigationContainer>
//   );
// };
// const styles = StyleSheet.create({
//   image: {
//     paddingLeft: 70,
//   },
// });
// export default App;

import React,{useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OTP from './src/OTP/OTP';
import Navigation from './src/Navigation/Navigation';
import Interest from './src/Interest/Interest';
import SplashScreen from 'react-native-splash-screen';
 
const Stack = createStackNavigator();
const App = () => {
  useEffect(() => {
       SplashScreen.hide();
     }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Navigation"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="OTPScreen" component={OTP} />
        <Stack.Screen name="InterestScreen" component={Interest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;