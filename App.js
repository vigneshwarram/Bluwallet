
import React, {Component} from 'react';
import DashBoard from './Components/Views/DashBoard'
import {
  createStackNavigator
} from 'react-navigation'
 class App extends Component {
    render() {
      const MainNavigator = createStackNavigator({
      DashBoard:{screen:DashBoard},
      
      });
      return (
       <MainNavigator/>
      );
    }
  }

export default App;
