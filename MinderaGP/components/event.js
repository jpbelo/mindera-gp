import React from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
import { withNavigation } from 'react-navigation';
import axios from "axios";

import DayCoverPlaceholder from './img/loading_cover.png';



// list day boxes for each event

class Event extends React.Component {

  _keyExtractor = (item) => item.id;

  _renderItem = ({item}) => (
    <View>

      {/* if result has no items (API will return 1 item with id='error' if no results were found) -> No onPress and use DayCoverPlaceholder image for ImageBackground */}
      { item.id === 'error' && (<TouchableOpacity
        id={item.id}
        style={styles.slide}
        >
        <ImageBackground
          style={styles.slideBackground}
          source={DayCoverPlaceholder}>
          <Text style={styles.slideName}>{item.name}</Text>
        </ImageBackground>
      </TouchableOpacity> )}

      {/* if event has days */}
      { item.id !== 'error' && (<TouchableOpacity
        id={item.id}
        style={styles.slide}
        onPress={() => {
          this.props.navigation.navigate('Day', {
            dayId: item.id,
            title: this.props.eventName + ' _ ' + item.name
          });
        }}
        >
        <ImageBackground
          style={styles.slideBackground}
          source={{uri: item.cover_img }}>
          <Text style={styles.slideName}>{item.name}</Text>
        </ImageBackground>
      </TouchableOpacity> )}

    </View>
  );


  render(){
    return(
      <View style={styles.sliderWrap}>
        <ScrollView
          horizontal={true}
          snapToInterval={150}
          snapToAlignment="start"
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
        >
          <FlatList
            style={styles.slider}
            horizontal={true}
            keyExtractor={this._keyExtractor}
            data={this.props.eventDays}
            renderItem={this._renderItem}
          />
        </ScrollView>
      </View>
    );
  }

}



const styles = StyleSheet.create({
  sliderWrap: {
    height: 187,
    width: '100%',
  },
  slider: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  slide: {
    marginLeft: 5,
    marginRight: 5,
  },
  slideBackground: {
    width: 150,
    height: 187,
    flexDirection: 'row',
    alignItems: 'flex-end',

  },
  slideName: {
    backgroundColor: 'rgba(255,255,255,.5)',
    width: '100%',
    padding: 8,
    textAlign: 'center',
    fontSize: 16,
    color: 'rgb(20,20,20)',
  }
});



export default withNavigation(Event);
