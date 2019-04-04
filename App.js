
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SignUp from './Components/Views/SignUp';
import ForgotPassword from './Components/Views/ForgotPassword';
import Login from './Components/Views/Login';
import Menu from './Components/Views/Menu';
import Register from './Components/Views/Register';
import {
  createStackNavigator
} from 'react-navigation'
const MainNavigator = createStackNavigator({
  Menu: {screen: Menu},
  Login: {screen: Login},
  Register: {screen: Register},
  Menu: {screen: Menu},
  ForgotPassword: {screen: ForgotPassword},


});





export default MainNavigator;
