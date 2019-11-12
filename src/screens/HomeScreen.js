import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  Alert,
  ImageBackground,
  Dimensions
} from 'react-native';

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import styled from 'styled-components';

import MoreEvents from '../components/MoreEvents'
import Banner from '../components/Banner'

var {height, width} = Dimensions.get('window');

export default class HomeScreen extends React.Component { 

  render() {
    
    return (
      <>
       <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{flex: 1, backgroundColor: 'white'}}>
              <StatusBar
                translucent={true}
                backgroundColor={'rgba(0, 0, 0, 0.3)'}
                barStyle={'light-content'}
              />
            
              <ScrollView
                style={{flex: 1}}
                scrollEventThrottle={200}
                directionalLockEnabled={true}
              >
                    <Banner></Banner> 
                    <View style={{flex: 2, backgroundColor: 'white', position: 'absolute', top: 380, left: -50, width: 500, 
                    height: 250, transform: [{rotate: '5deg'}]}}>
                        <View style={{flex: 2, backgroundColor: 'white', width: '100%', top: 25,
                    transform: [{rotate: '-5deg'}]}}>
                          
                    </View>
                    </View> 

              </ScrollView>
          </View>
      </SafeAreaView>
            
      </>
  );    
  }
}

   {/* <MultiSelectList  data={[{src: images, id: '1'}]} >
          
        </MultiSelectList> */}
 