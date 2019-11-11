import React from 'react';
import CarouselCard from './subcomponents/CarouselCard'

export default class OnGoing extends React.Component {

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

    fetch("https://cubanessjournal.com/wp-json/tribe/events/v1/ongoing?per_page=16&page=1&lang=en")
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
         <CarouselCard/>
      </>
    );
  }
}