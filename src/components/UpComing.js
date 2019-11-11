import React from 'react';
import { View, Text } from 'react-native';

export default class UpComing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {    
    // fetch('https://facebook.github.io/react-native/movies.json')
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   this.setState({ isLoaded: true, items: responseJson })
    // })
    // .catch((error) => {
    //   console.error(error);
    // });

    fetch("https://cubanessjournal.com/wp-json/tribe/events/v1/upcoming?per_page=4&page=1&categories=upcoming-event-en&lang=en")
    .then(response => response.json())
    .then((responseJson) => {
        this.setState({ isLoaded: true, items: responseJson.items });
      },   
      (error) => {
        this.setState({ isLoaded: true, error });
      }
    ).catch((error) => {
      console.error(error);
    });

  }

  render() {
    return (
      <>
      </>
    );
  }
}