import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './components/HomeScreen';
import CalendarScreen from './components/CalendarScreen';
import SearchScreen from './components/SearchScreen';
import TagScreen from './components/TagScreen';

const icons = {
  home: require('./assets/bottom-bar/Home.png'),
  calendar: require('./assets/bottom-bar/Calendar.png'),
  search: require('./assets/bottom-bar/Search.png'), 
  tag: require('./assets/bottom-bar/Tag.png'),
  homeFocused: require('./assets/bottom-bar/Home-Active.png'),
  calendarFocused: require('./assets/bottom-bar/Calendar-Active.png'),
  searchFocused: require('./assets/bottom-bar/Search-Active.png'), 
  tagFocused: require('./assets/bottom-bar/Tag-Active.png'),
}

export const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    path: '/',  
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state
        if(routeName === 'Home')
          return <Image source={focused ? icons.homeFocused : icons.home}/>        
      }
  
    })
  },
  Calendar: {
    screen: CalendarScreen,
    path: '/',  
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state
        if(routeName === 'Calendar') 
          return <Image source={focused ? icons.calendarFocused : icons.calendar}/>        
      }
  
    })
  },
  Search: {
    screen: SearchScreen,
    path: '/',  
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state
        let icon;
        if(routeName === 'Search') 
          return <Image source={focused ? icons.searchFocused : icons.search}/>
      }
  
    })
  },
  Tag: {
    screen: TagScreen,
    path: '/',  
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state
        let icon;
        if(routeName === 'Tag')
          return <Image source={focused ? icons.tagFocused : icons.tag}/>
      }
  
    })
  }
},{  
  initialRouteName: "Home",
  tabBarOptions: {
    showLabel: false
  }
});