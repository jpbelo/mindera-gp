import React from 'react';
import { View, Text,TouchableOpacity, StyleSheet, Image } from 'react-native';
import {
  Container,
  Icon,
} from 'native-base';

import minderaIcon from './img/logo.png';



export default class Vacancies extends React.Component {
  static navigationOptions = {
    title: 'Meet Mindera',
    headerLeft: (
      <TouchableOpacity
        style={{paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10,}}
        onPress={() => NavigationService.navigate('DrawerOpen')}
        >
        <Icon name="menu" style={{fontSize: 25, color: '#fff'}}/>
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity
        style={{paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10,}}
        onPress={() => alert('search!')}
        >
        <Icon name="search" style={{fontSize: 25, color: '#fff'}}/>
      </TouchableOpacity>
    ),
  };

  render() {
    return (
          <Container>
            <View style={styles.vacanciesView}>
              <Image
                style={styles.mindIcon}
                source={minderaIcon}
              />
              <Text>Vacancies</Text>
            </View>
          </Container>
    );
  }
}



const styles = StyleSheet.create({
  vacanciesView: {
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
});
