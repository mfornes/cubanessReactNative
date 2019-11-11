import React from 'react';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './SliderEntry';
import styles from './styles/index.style';
import { ENTRIES1, ENTRIES2 } from './entries';

export default class StackCard extends React.Component{

    constructor (props) {
      super(props);
      this.state = {
        isTinder: true,
        type: 'tinder',
      };
    }
    _renderItem ({item, index}) {
      return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }
  
    _renderLightItem ({item, index}) {
      return <SliderEntry data={item} even={false} />;
    }
  
    _renderDarkItem ({item, index}) {
      return <SliderEntry data={item} even={true} />;
    }
      
    render () {
      return (
        <View style={[styles.exampleContainer, this.isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
          <Text style={[styles.title, this.isTinder ? {} : styles.titleDark]}>{`Example ${2}`}</Text>
          <Text style={[styles.subtitle, this.isTinder ? {} : styles.titleDark]}>{"Stack Card"}</Text>
          <Carousel
            data={this.isTinder ? ENTRIES2 : ENTRIES1}
            renderItem={this.isTinder ? this._renderLightItem : this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            layout={'tinder'}
            loop={true}
          />
        </View>
      );
    }
  }