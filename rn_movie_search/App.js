import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SearchScreen from './screens/SearchScreen'
import ResultsScreen from './screens/ResultsScreen'
import MovieDetailsScreen from './screens/MovieDetailsScreen'

const AppNavigator = createStackNavigator(
  {
    "Home": SearchScreen,
    "ResultsScreen": ResultsScreen,
    "MovieDetailsScreen": MovieDetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
)

export default createAppContainer(AppNavigator)


// attempt to fix error: Uncaught Error: Module AppRegistry is not a registered callable module (calling runApplication)
// https://github.com/expo/expo/issues/2027
// import AppRegistry from 'react-native'
// AppRegistry.registerComponent('Movie Info', ()=>{App})
