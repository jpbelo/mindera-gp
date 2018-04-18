import React from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import NavTabs from './navTabs';
import Day from './day';
import List from './list';



// secondary app navigation - stack
const RouterStack = StackNavigator(
  {
    NavTabs: {
      screen: NavTabs,
    },
    Day: {
      screen: Day,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#0047cc',
        },
        headerTintColor: '#fff',
      },
    },
    List: {
      screen: List,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#0047cc',
        },
        headerTintColor: '#fff',
      },
    },
  },
  {
    initialRouteName: 'NavTabs',
  },
);


export default class NavStack extends React.Component {
  render() {
    return (
        <RouterStack />
    );
  }
}
