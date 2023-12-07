import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const Tab = createMaterialTopTabNavigator();

const commonBackgroundColor = '#0FF'; // Define a common color

const TopTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: commonBackgroundColor,
        },
      }}>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;
