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



{/* list for the selected day */}

export default class Day extends React.Component {

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
      dataSource: [{
        name: 'loading...',
        id: 'loading',
      }]
    }
  }

  componentDidMount(){
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;

    return fetch('https://react.joaobelo.pt/days/' + itemId)
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
    <ListItem
      id={item.id}
      onPress={() => {
        {/* API will return 1 item with id='error' if no results were found */}
        if(item.id !== 'error'){
          this.props.navigation.navigate('List', {
            itemId: item.id,
            title: item.name
          });
        }
      }}
      ><Text style={styles.listItemName}>{item.name}</Text>
    </ListItem>
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
          data={this.state.dataSource}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  listItemName: {
    fontSize: 19,
  },
});
