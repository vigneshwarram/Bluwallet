
import React, {Component} from 'react';
import DashBoard from './Components/Views/DashBoard'
import Vault from './Components/Views/Vault'
import Profile from './Components/Views/Profile'
import Price from './Components/Views/Price'
import CreditCard from './Components/Views/CreditCard'
import ExchangeMenu from './Components/Views/ExchangeMenu'
import Payment from './Components/Views/Payment'
import Buy from './Components/Views/Buy'
import Sell from './Components/Views/Sell'
import Exchange from './Components/Views/Exchange'
import Country from './Components/Views/Country'
import BankScreen from './Components/Views/BankScreen'
import Publish from './Components/Views/Publish'
import Welcome from './Components/Views/LoginModule/Welcome'
import Verify from './Components/Views/LoginModule/Verify'
import Address from  './Components/Views/LoginModule/Address'
import {
  createStackNavigator
} from 'react-navigation'
 class App extends Component {
    render() {
      const MainNavigator = createStackNavigator({
      Welcome:{screen:Welcome},
      Verify:{screen:Verify},
      Address:{screen:Address},
      Profile:{screen:Profile},
      DashBoard:{screen:DashBoard},
      Vault:{screen:Vault},
      Price:{screen:Price},
      CreditCard:{screen:CreditCard},
      ExchangeMenu:{screen:ExchangeMenu},
      Exchange:{screen:Exchange},
      Payment:{screen:Payment},
      Buy:{screen:Buy},
      Sell:{screen:Sell},
      Country:{screen:Country},
      BankScreen:{screen:BankScreen},
      Publish:{screen:Publish}
      
      });
      return (
       <MainNavigator/>
      );
    }
  }

export default App;
