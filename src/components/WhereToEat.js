import React from 'react';
import StackCard from './subcomponents/StackCard'

export default class WhereToEat extends React.Component {

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

    fetch("https://cubanessjournal.com/wp-json/cubaness/v1/lifestyle?_embed&lang=en")
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
        <StackCard/>
      </>
    );
  }
}