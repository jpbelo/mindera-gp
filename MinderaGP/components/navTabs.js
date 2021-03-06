import React from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';
import { TabNavigator, TabBarTop } from 'react-navigation';
import { Icon } from 'native-base';

import Events from './events';
import Vacancies from './vacancies';


// third level app navigation - tabs
const navTabs = TabNavigator({
  Events: {
      screen: Events,
      navigationOptions: {
          tabBarLabel:"Events",
      }
  },
  Vacancies: {
      screen: Vacancies,
      navigationOptions: {
          tabBarLabel:"Vacancies",
      }
  }
}, {
  tabBarComponent: TabBarTop,
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'rgb(230,230,230)',
    upperCaseLabel: false,
    labelStyle: {
      fontSize: 15,
      margin: 5,
    },
    indicatorStyle: {
      backgroundColor: 'rgb(249,209,71)'
    },
    style: {
      backgroundColor: '#022e75',
    },
    showIcon: false,
  },
  tabBarPosition: 'top',
  swipeEnabled: false,
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#0047cc',
    },
    headerTintColor: '#fff',
  },
});


export default navTabs;
