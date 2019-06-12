
import React, {Component} from 'react';
import DashBoard from './Components/Views/DashBoard'
import Vault from './Components/Views/Vault'
import VaultFilter from './Components/Views/VaultFilter'
import Profile from './Components/Views/Profile'
import Price from './Components/Views/Price'
import CreditCard from './Components/Views/CreditCardModule/CreditCard'
import CardDetails from './Components/Views/CreditCardModule/CardDetails'
import CreditTransaction from './Components/Views/CreditCardModule/CreditTransaction'
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
import CountrySearch from  './Components/Views/LoginModule/CountrySearch'
import PinCode from  './Components/Views/LoginModule/PinCode'
import ProfileRegister from  './Components/Views/LoginModule/ProfileRegister'
import NewWallet from  './Components/Views/LoginModule/NewWallet'
import Sms from  './Components/Views/LoginModule/Sms'
import MoreInfo from  './Components/Views/LoginModule/MoreInfo'
import ChooseCountry from  './Components/Views/LoginModule/ChooseCountry'
import VerificationCards from  './Components/Views/LoginModule/VerificationCards'
import Launch from  './Components/Views/LoginModule/Launch'
import {
  createStackNavigator
} from 'react-navigation'
 class App extends Component {
    render() {
      const MainNavigator = createStackNavigator({
        Launch:{screen:Launch},
        Welcome:{screen:Welcome},
        Price:{screen:Price},    
        CreditCard:{screen:CreditCard},
        CreditTransaction:{screen:CreditTransaction},
        CardDetails:{screen:CardDetails},       
        Profile:{screen:Profile},
        DashBoard:{screen:DashBoard},  
        PinCode:{screen:PinCode},
        NewWallet:{screen:NewWallet},    
        Verify:{screen:Verify},
        CountrySearch:{screen:CountrySearch},
        Address:{screen:Address},
        ProfileRegister:{screen:ProfileRegister},  
        Vault:{screen:Vault},
      
        ExchangeMenu:{screen:ExchangeMenu},
        Exchange:{screen:Exchange},
        Payment:{screen:Payment},
        Buy:{screen:Buy},
        Sell:{screen:Sell},
        Country:{screen:Country},
        BankScreen:{screen:BankScreen},
        Publish:{screen:Publish},
        Sms:{screen:Sms},
        MoreInfo:{screen:MoreInfo},
        ChooseCountry:{screen:ChooseCountry},
        VerificationCards:{screen:VerificationCards},
        VaultFilter:{screen:VaultFilter},
     
      
      });
      return (
       <MainNavigator/>
      );
    }
  }

export default App;
