/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginPage from './container/LoginPage'
import ListPage from './container/ListPage'
import UserRegister from './container/UserRegisterPage'
const MainNavigator = createStackNavigator({
  Login: {screen: LoginPage},
  UserRegister:{screen:UserRegister},
  List: {screen: ListPage},
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });

const App = createAppContainer(MainNavigator);

export default App;