import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet
} from 'react-native';



// image + description pairs for the selected list

export default class List extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.title,
    }
  };

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount(){
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;

    return fetch('https://react.joaobelo.pt/lists/' + itemId)
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
    <View style={styles.card}>
      <Image
          style={{width: '100%', height: 180}}
          source={{uri: item.image }}
        />
      <Text style={styles.cardName}>{item.name}</Text>
    </View>
  );

  render(){
    if(this.state.isLoading){
      return(
        <View style={{paddingTop: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View>
        <FlatList
          style={styles.list}
          numColumns={2}
          data={this.state.dataSource}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  list: {
    padding:10,
  },
  card: {
    flex:1,
    alignItems:'flex-start',
    margin:10,
  },
  cardName: {
    fontSize: 15,
    marginTop:5,
  },
});
