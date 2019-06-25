
import React, {Component} from 'react';
import {
  Easing,Animated
} from 'react-native';
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
import Login from  './Components/Views/LoginModule/Login'
import ForgotPassword from  './Components/Views/LoginModule/ForgotPassword'
import Confirm from  './Components/Views/LoginModule/Confirm'
import TakePhoto from  './Components/Views/LoginModule/TakePhoto'
import TakePassportPhoto from  './Components/Views/LoginModule/TakePassportPhoto'
import DocumentPhoto from  './Components/Views/LoginModule/DocumentPhoto'
import {
  createStackNavigator
} from 'react-navigation'
const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index, route } = scene
      const params = route.params || {}; // <- That's new
      const transition = params.transition || 'default'; // <- That's new
      return {
        //collapseExpand: CollapseExpand(index, position),
        default: CollapseExpand(index, position),
      }[transition];
    },
  }
}
let SlideFromRight = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0]
  })
  const slideFromRight = { transform: [{ translateX }] }
  return slideFromRight
};

let CollapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: ([0, 1, 1]),
  });

  return {
    opacity,
    transform: [
      { scaleY }
    ]
  };
};
 class App extends Component {
   
    render() {
      
      const MainNavigator = createStackNavigator({
        Launch: { screen: Launch },
        DocumentPhoto:{screen:DocumentPhoto},
        TakePhoto:{screen:TakePhoto},
        TakePassportPhoto:{screen:TakePassportPhoto},
        VerificationCards:{screen:VerificationCards},    
        DashBoard:{screen:DashBoard},        
        ForgotPassword:{screen:ForgotPassword},
        Confirm:{screen:Confirm},
        Welcome:{screen:Welcome},
        Login:{screen:Login},
        Price:{screen:Price},    
        CreditCard:{screen:CreditCard},
        CreditTransaction:{screen:CreditTransaction},
        CardDetails:{screen:CardDetails},       
        Profile:{screen:Profile},     
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
        VaultFilter:{screen:VaultFilter}},{

          transitionConfig: TransitionConfiguration,
     
      
      });
      return (
       <MainNavigator/>
      );
    }
  }

export default App;
