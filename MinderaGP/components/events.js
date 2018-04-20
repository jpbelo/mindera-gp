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
import { connect } from "react-redux";

import { fetchEvents } from "../actions/eventsActions";
import NavigationService from '../NavigationService.js';
import Event from './event';



// first screen - list each event

class Events extends React.Component {

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


  componentDidMount(){
    this.props.dispatch(fetchEvents());
  }


  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <View>
      <Text style={styles.eventName}>{item.name}</Text>
      {/* after loading each event include the event days boxes */}
      {!this.props.loading && <Event eventID={item.id} eventName={item.name} />}
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
          data={this.props.events.events}
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




export default connect(store => ({events: store.events}))(Events);
