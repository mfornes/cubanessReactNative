import React from 'react';
import { View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './SliderEntry';
import styles from './styles/index.style';
import { ENTRIES2 } from './entries';

export default class CarouselCard extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
            
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
        <View style={styles.exampleContainer}>
          <Text style={styles.title}>{`Example ${1}`}</Text>
          <Text style={styles.subtitle}>{"Carousel"}</Text>
          <Carousel
            data={ENTRIES2}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            inactiveSlideScale={0.95}
            inactiveSlideOpacity={1}
            enableMomentum={true}
            activeSlideAlignment={'start'}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            activeAnimationType={'spring'}
            activeAnimationOptions={{
                friction: 4,
                tension: 40
            }}
          />
        </View>
      );
    }
  }