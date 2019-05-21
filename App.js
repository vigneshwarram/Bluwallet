
import React, {Component} from 'react';
import DashBoard from './Components/Views/DashBoard'
import Vault from './Components/Views/Vault'
import Profile from './Components/Views/Profile'
import Price from './Components/Views/Price'
import {
  createStackNavigator
} from 'react-navigation'
 class App extends Component {
    render() {
      const MainNavigator = createStackNavigator({
      DashBoard:{screen:DashBoard},
      Vault:{screen:Vault},
      Profile:{screen:Profile},
      Price:{screen:Price}
      
      });
      return (
       <MainNavigator/>
      );
    }
  }

export default App;
