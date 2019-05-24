
import React, {Component} from 'react';
import DashBoard from './Components/Views/DashBoard'
import Vault from './Components/Views/Vault'
import Profile from './Components/Views/Profile'
import Price from './Components/Views/Price'
import CreditCard from './Components/Views/CreditCard'
import Exchange from './Components/Views/Exchange'
import Payment from './Components/Views/Payment'
import Buy from './Components/Views/Buy'
import {
  createStackNavigator
} from 'react-navigation'
 class App extends Component {
    render() {
      const MainNavigator = createStackNavigator({
      DashBoard:{screen:DashBoard},
      Vault:{screen:Vault},
      Profile:{screen:Profile},
      Price:{screen:Price},
      CreditCard:{screen:CreditCard},
      Exchange:{screen:Exchange},
      Payment:{screen:Payment},
      Buy:{screen:Buy}
      
      });
      return (
       <MainNavigator/>
      );
    }
  }

export default App;
