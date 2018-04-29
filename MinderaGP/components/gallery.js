import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import axios from "axios";
import { connect } from "react-redux";

import { fetchGallery } from "../actions/eventsActions";



// image + description pairs for the selected gallery

class Gallery extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.title,
    }
  };

  componentDidMount(){
    const { params } = this.props.navigation.state;
    const galleryId = params ? params.galleryId : null;
    this.props.dispatch(fetchGallery(galleryId));
  }


  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <View style={styles.card}>
      <Image
          style={styles.cardImage}
          source={{uri: item.image }}
        />
      <Text style={styles.cardName}>{item.name}</Text>
    </View>
  );

  render(){
    return(
      <View>
        {this.props.gallery.loading && <ActivityIndicator style={{paddingTop: 20}} /> }
        {this.props.gallery.error && <Text style={{paddingTop: 20}}>{this.props.gallery.error.message}</Text> }
        {this.props.gallery.loaded && <FlatList
          style={styles.list}
          numColumns={2}
          data={this.props.gallery.items}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        /> }
      </View>
    );
  }
}



const styles = StyleSheet.create({
  list: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  card: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  cardImage: {
    width: '100%',
    aspectRatio: 1,
  },
  cardName: {
    fontSize: 15,
    marginTop: 5,
  },
});


export default connect(store => ({gallery: store.galleries}))(Gallery);
