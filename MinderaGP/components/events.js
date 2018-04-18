import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { Icon } from 'native-base';

import NavigationService from '../NavigationService.js';
import Event from './event';



{/* first screen - list each event */}

export default class Events extends React.Component {

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

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [{
        name: 'loading...',
        id: 'loading',
      }]
    }
  }

  componentDidMount(){
    return fetch('https://react.joaobelo.pt/events')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }


  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <View>
      <Text style={styles.eventName}>{item.name}</Text>
      {/* after loading each event include the box for each day */}
      {!this.state.isLoading && <Event eventID={item.id} eventName={item.name} />}
    </View>
  );

  render(){
    return(
      <ScrollView style={{flex: 1}}>
        <Image
          source={require('./img/eventBanner.png')}
          style={{height:200, width:'100%'}}
          />
        <FlatList
          data={this.state.dataSource}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          style={styles.events}
        />
      </ScrollView>
    );
  }
};



const styles = StyleSheet.create({
  events: {
    paddingBottom: 40,
  },
  eventName: {
    paddingTop: 25,
    paddingBottom: 8,
    paddingLeft: 15,
    fontSize: 19,
    fontWeight: "bold",
  },
});
