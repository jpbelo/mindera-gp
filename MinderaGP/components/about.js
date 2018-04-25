import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  Container,
  Icon,
  Text
} from 'native-base';

import NavigationService from '../NavigationService';
import minderaIcon from './img/logo.png';



export default class About extends React.Component {
  render() {
    return (
      <Container>
        <TouchableOpacity
          style={{padding: 20}}
          onPress={() => NavigationService.navigate('Home')}
          >
          <Icon name="arrow-back" style={{fontSize:25, color:'#0047cc'}}/>
        </TouchableOpacity>
        <View style={styles.aboutView}>
          <Image
            style={styles.mindIcon}
            source={minderaIcon}
          />
          <Text>Mindera Graduate Program</Text>
          <Text>João Belo</Text>
        </View>
      </Container>
    );
  }
}



const styles = StyleSheet.create({
  aboutView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mindIcon: {
    width: 96,
    height: 120,
    marginBottom: 60,
  },
  backButton: {
  }
});
