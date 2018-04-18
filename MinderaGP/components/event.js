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



class Event extends React.Component {

  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount(){
    return fetch('https://react.joaobelo.pt/events/' + this.props.eventID)
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
    <TouchableOpacity
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
        source={{uri: item.cover_img }}
      >
        <Text style={styles.slideName}>{item.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );


  render(){

    if(this.state.isLoading){
      return(
        <View style={styles.sliderWrap}>
          <ActivityIndicator/>
        </View>
      )
    }

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
    fontSize: 18,
    color: 'rgb(20,20,20)',
  }
});



export default withNavigation(Event);
