import * as React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TopTabNavigation from '../TabNavigator/TopTabNavigation';

function Navigation() {
  return (
    <>
      <View style={styles.image}>
        <Image source={require('../assets/Adoro.jpg')} />
      </View>
      <TopTabNavigation />
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    backgroundColor: 'white',
    paddingLeft: 70,
  },
});

export default Navigation;
