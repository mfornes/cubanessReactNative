import React from 'react';
import { View, Text } from 'react-native';

export default class CalendarScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Text>Calendar Screen</Text>
      </View>
    );
  }
}