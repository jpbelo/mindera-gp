import React from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import {
  Icon,
  ListItem,
  Right
} from 'native-base';
import { connect } from "react-redux";

import { fetchDayGalleries } from "../actions/eventsActions";



// list of galleries for the selected day

class Day extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.title,
    }
  };

  componentDidMount(){
    const { params } = this.props.navigation.state;
    const dayId = params ? params.dayId : null;
    this.props.dispatch(fetchDayGalleries(dayId));
  }


  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <ListItem
      id={item.id}
      onPress={() => {
        {/* API will return 1 item with id='error' if no results were found */}
        if(item.id !== 'error'){
          this.props.navigation.navigate('Gallery', {
            galleryId: item.id,
            title: item.name
          });
        }
      }}
      ><Text style={styles.listItemName}>{item.name}</Text>
    </ListItem>
  );


  render(){
    return(
      <View>
        {this.props.day.loading && <ActivityIndicator style={{paddingTop: 20}} /> }
        {this.props.day.error && <Text style={{paddingTop: 20}}>{this.props.day.error.message}</Text> }
        {this.props.day.loaded && <FlatList
          data={this.props.day.dayGalleries}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        /> }
      </View>
    );
  }
}



const styles = StyleSheet.create({
  listItemName: {
    fontSize: 19,
  },
});



export default connect(store => ({day: store.days}))(Day);
