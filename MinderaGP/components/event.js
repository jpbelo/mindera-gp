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

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [{
        name: 'loading...',
        cover_img: 'http://samples.joaobelo.pt/480x600/loading_cover.png',
        id: 'loading',
      }]
    }
  }

  componentDidMount(){

      axios.get('https://react.joaobelo.pt/events/' + this.props.eventID)
        .then((response) => {
          this.setState({
            isLoading: false,
            dataSource: response.data,
          }, function(){
          })
        })
        .catch((err) => {
          console.log(err);
        })

      // this.props.dispatch(fetchEventDays(this.props.eventID));

  }


  _keyExtractor = (item) => item.id;

  _renderItem = ({item}) => (
    <View>

      {/* if is loading or result has no items (API will return 1 item with id='error' if no results were found). No onPress and use DayCoverPlaceholder image for ImageBackground */}
      {(this.state.isLoading || (!this.state.isLoading && item.id === 'error')) && (<TouchableOpacity
        id={item.id}
        style={styles.slide}
        >
        <ImageBackground
          style={styles.slideBackground}
          source={DayCoverPlaceholder}>
          <Text style={styles.slideName}>{item.name}</Text>
        </ImageBackground>
      </TouchableOpacity> )}

      {/* after loading */}
      {(!this.state.isLoading && item.id !== 'error') && (<TouchableOpacity
        id={item.id}
        style={styles.slide}
        onPress={() => {
          this.props.navigation.navigate('Day', {
            itemId: item.id,
            title: this.props.eventName + ' _ ' + item.name
          });
        }}
        >
        <ImageBackground
          style={styles.slideBackground}
          source={{uri: item.cover_img }}>
          <Text style={styles.slideName}>{item.name} - {item.key}</Text>
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
            data={this.state.dataSource}
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
