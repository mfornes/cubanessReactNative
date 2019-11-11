import React from 'react';
import { Image, TouchableOpacity, View, FlatList } from 'react-native';

class MyListItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
          images: [ {image: require('../assets/ilustraciones/cat-ilust-music.png')},
                    {image: require('../assets/ilustraciones/cat-ilust-ad.png')},
                    {image: require('../assets/ilustraciones/cat-ilust-art.png')},
                    {image: require('../assets/ilustraciones/cat-ilust-culture.png')},
                    {image: require('../assets/ilustraciones/cat-ilust-eatdrink.png')},
                    {image: require('../assets/ilustraciones/cat-ilust-onstage.png')},
                  ],
    };
  }
  _onPress = () => {
    
  };

  render() {
    return (     
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Image source={this.state.images[this.props.src].image}/>          
        </View>
      </TouchableOpacity>
    );
  }
}

class MultiSelectList extends React.Component {

  _keyExtractor = (item) => item.id;

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}      
      src={item.src}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

export default class MoreEvents extends React.Component {
  
  render() {
    return (
      <>
          <MultiSelectList  data={[{src: 0, id: '1'}, {src: 1, id: '2'}, {src: 2, id: '3'}, {src: 3, id: '4'}, {src: 4, id: '5'}, {src: 5, id: '6'}]} >          
          </MultiSelectList>
      </>
    );
  }
}