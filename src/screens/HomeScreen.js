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

var {height, width} = Dimensions.get('window');

export default class HomeScreen extends React.Component { 

  render() {
    
    return (
      <>
        
      </>
  );    
  }
}

// .wrapper {
//   background: url(./1.png);
//   width: 400px;
//   height: 400px;
//   overflow: hidden;
//   /*border: 10px solid black;*/
//   position: relative;
// }

// .cut {
//   background: #fff;
//   position:absolute;
//   top: 300px;
//   left: -50px;
//   width: 500px;
//   height: 300px;
//   transform-origin: center top;
//   transform: rotate(8deg);
// }


const styles = StyleSheet.create({
  img: {  
    width: width,
    height: 300,
  },
  section: {
    backgroundColor: 'white',
    width: 500,
    height: 300,
    transform: [{rotate: '8deg'}],
  }

 
});

   {/* <MultiSelectList  data={[{src: images, id: '1'}]} >
          
        </MultiSelectList> */}
{/* <Row size={12}>
<Col sm={6} md={4} lg={3}>
                        <Card>
          <CardImage 
            source={{uri: 'http://bit.ly/2GfzooV'}} 
            
          />
          <CardTitle
            subtitle="Number 6"
          />
          <CardContent text="Clifton, Western Cape" />                           
        </Card>
</Col>
<Col sm={6} md={4} lg={3}>
                          <Card>
            <CardImage 
              source={{uri: 'http://bit.ly/2GfzooV'}} 
             
            />
            <CardTitle
              subtitle="Number 6"
            />
            <CardContent text="Clifton, Western Cape" />                            
          </Card>
</Col>

<Col sm={6} md={4} lg={3}>
                        <Card>
          <CardImage 
            source={{uri: 'http://bit.ly/2GfzooV'}} 
            
          />
          <CardTitle
            subtitle="Number 6"
          />
          <CardContent text="Clifton, Western Cape" />                           
        </Card>
</Col>

<Col sm={6} md={4} lg={3}>
                        <Card>
          <CardImage 
            source={{uri: 'http://bit.ly/2GfzooV'}} 
            
          />
          <CardTitle
            subtitle="Number 6"
          />
          <CardContent text="Clifton, Western Cape" />                           
        </Card>
</Col>
</Row>    */}