import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';

import NavigationService from '../NavigationService';

export default class About extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar
          backgroundColor="#0047cc"
          barStyle="light-content"
        />
        <Text>João Belo</Text>
        <Text>Mindera Graduate Program</Text>
        <Button
          onPress={() => NavigationService.navigate('Home')}
          title="Go back home"
        />
      </View>
    );
  }
}
