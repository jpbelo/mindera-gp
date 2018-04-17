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



const RouterStack = StackNavigator(
  {
    NavTabs: {
      screen: NavTabs,
    },
    Day: {
      screen: Day,
    },
    List: {
      screen: List,
    },
  },
  {
    initialRouteName: 'NavTabs',
  }
);


export default class NavStack extends React.Component {
  render() {
    return (
        <RouterStack />
    );
  }
}
