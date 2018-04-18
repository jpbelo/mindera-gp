import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';


export default class Vacancies extends React.Component {
  static navigationOptions = {
    title: 'Meet Mindera',
    headerLeft: (
      <TouchableOpacity
        style={{padding: 20}}
        onPress={() => NavigationService.navigate('DrawerOpen')}
        >
        <Icon name="menu" style={{fontSize: 25, color: '#fff'}}/>
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity
        style={{padding: 20}}
        onPress={() => alert('search!')}
        >
        <Icon name="search" style={{fontSize: 25, color: '#fff'}}/>
      </TouchableOpacity>
    ),
  };

  render() {
    return (
          <Text>Vacancies</Text>
    );
  }
}
