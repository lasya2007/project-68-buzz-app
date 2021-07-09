import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Ig from './screens/ig';
import Fb from './screens/fb';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Instagram:Ig,
  Facebook:Fb
});

const AppContainer = createAppContainer(TabNavigator);