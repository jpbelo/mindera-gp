import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  ActivityIndicator
} from 'react-native';



export default class List extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.title,
    }
  };

  constructor(props){
    super(props);
    this.state = { isLoading: true }
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
    <View>
      <Image
          style={{width: 50, height: 50}}
          source={{uri: item.image }}
        />
      <Text>{item.name}</Text>
    </View>
  );


  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View>
        <FlatList
          data={this.state.dataSource}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
