import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import WelcomeScreen from './app/components/welcome/WelcomeScreen';
import CameraScreen from './app/components/welcome/camera/CameraScreen';
import AdminScreen from './app/components/admin/AdminScreen';

const Navigator = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  Camera: { screen: CameraScreen },
  Admin: { screen: AdminScreen }
},
  { headerMode: 'none' })
export default class App extends Component {
  render() {
    return (
      <Navigator />
    );
  }
};