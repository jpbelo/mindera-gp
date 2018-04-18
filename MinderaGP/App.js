import React, { Component } from 'react';
import {
  Platform,
  View,
  YellowBox
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import NavigationService from './NavigationService';
import NavStack from './components/navStack';
import About from './components/about';

YellowBox.ignoreWarnings([
  'Warning: isMounted',
]);



// main app screen - first screen of the drawer
class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };
  render() {
    return (
      <NavStack />
    )
  };
};

// secondary app screen - second screen of the drawer
class AboutScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'About',
  };
  render() {
    return (
      <About />
    )
  };
};



// main app navigation - drawers
const NavDrawer = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen,
  },
},{
  drawerPosition: 'left',
  drawerWidth: 200,
  drawerBackgroundColor: 'rgb(245,245,245)',
  contentOptions: {
    activeTintColor: '#999',
  }
});



class App extends Component {
  render() {
    return (
        <NavDrawer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
    )
  };
};

export default App;
