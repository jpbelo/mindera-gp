import React from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Events from './events';
import Vacancies from './vacancies';



const navTabs = TabNavigator({
  Events: {
      screen: Events,
      navigationOptions: {
          tabBarLabel:"Events",
          tabBarIcon: ({ tintColor }) => <Icon name="menu" />
      }
  },
  Vacancies: {
      screen: Vacancies,
      navigationOptions: {
          tabBarLabel:"Vacancies",
          tabBarIcon: ({ tintColor }) => <Icon name="menu" />
      }
  }
}, {
  tabBarOptions: {
      activeTintColor: 'black',
  }
});


export default navTabs;
