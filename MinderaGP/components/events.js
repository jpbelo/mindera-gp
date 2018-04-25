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


  componentDidMount(){
    this.props.dispatch(fetchEvents());
  }


  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <View>
      <Text style={styles.eventName}>{item.name}</Text>
      {/* after loading each event -> include the box for each day */}
      {!this.props.events.loading && <Event eventDays={item.days} eventID={item.id} eventName={item.name} />}
    </View>
  );

  render(){
    return(
      <ScrollView style={{flex: 1}}>
        <Image
          source={require('./img/eventBanner.png')}
          style={{height:200, width:'100%'}}
          />
        {this.props.events.loading && <Text style={styles.eventName}>Loading...</Text> }
        {this.props.events.error && <Text style={styles.eventName}>{this.props.events.error.message}</Text> }
        {this.props.events.loaded && <FlatList
          data={this.props.events.events}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          style={styles.events}
        /> }
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
