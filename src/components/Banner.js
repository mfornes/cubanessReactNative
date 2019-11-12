import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

export default class Banner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      url: '',
      title: '',
    };
  }

  componentDidMount() {
    fetch("https://cubanessjournal.com/wp-json/cubaness/v1/recommended?_embed&lang=en")
    .then(response => response.json())
    .then((responseJson) => {
      responseJson.map((item) => {
        if(item.type === "tribe_events"){
          console.log(item)  
          this.setState({ 
            isLoaded: true, 
            url: item.image.url,
            title: item.title,          
          });
        }
      })  

      }
    ).catch((error) => {
      this.setState({ isLoaded: false, error: error });
      console.error(error);
      onsole.log(error) 
    });

  }
  

  render() {
    const { error, isLoaded, url, title } = this.state;  
    console.log(isLoaded)  
    console.log(url)  
    return (     
      
      <>
        <ImageBackground source={{uri: url}} style={{flex: 2, width: '100%', height: 400, position: 'relative'}}>

        </ImageBackground>      
       
      </>
    );
  }
}