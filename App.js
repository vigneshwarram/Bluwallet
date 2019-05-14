
import React, {Component} from 'react';
import DashBoard from './Components/Views/DashBoard'
import Vault from './Components/Views/Vault'
import {
  createStackNavigator
} from 'react-navigation'
 class App extends Component {
    render() {
      const MainNavigator = createStackNavigator({
      DashBoard:{screen:DashBoard},
      Vault:{screen:Vault}
      
      });
      return (
       <MainNavigator/>
      );
    }
  }

export default App;
