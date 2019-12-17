
import React from 'react';
import {
  Easing,Animated,Image} from 'react-native';
import DashBoard from '../Views/DashBoard'

import VaultFilter from '../Views/VaultModule/VaultFilter'
import AddVault from '../Views/VaultModule/AddVault'
import ConfirmVault from '../Views/VaultModule/ConfirmVault'
import Profile from '../Views/Profile'
import TabBar from '../Views/TabBar'
import Price from '../Views/Price'
import CreditCard from '../Views/CreditCardModule/CreditCard'
import CardDetails from '../Views/CreditCardModule/CardDetails'
import CreditTransaction from '../Views/CreditCardModule/CreditTransaction'
import ExchangeMenu from '../Views/ExchangeModule/ExchangeMenu'
import Payment from '../Views/Payment'
import Buy from '../Views/ExchangeModule/Buy'
import Sell from '../Views/ExchangeModule/Sell'
import Exchange from '../Views/ExchangeModule/Exchange'
import Country from '../Views/Country'
import BankScreen from '../Views/BankScreen'
import Publish from '../Views/ExchangeModule/Publish'
import PuplishUser from '../Views/ExchangeModule/PuplishUser'
import Welcome from '../Views/LoginModule/Welcome'
import Information from '../Views/VaultModule/Information'
import Verify from '../Views/LoginModule/Verify'
import Address from  '../Views/LoginModule/Address'
import CountrySearch from  '../Views/LoginModule/CountrySearch'
import PinCode from  '../Views/LoginModule/PinCode'
import ProfileRegister from  '../Views/LoginModule/ProfileRegister'
import NewWallet from  '../Views/LoginModule/NewWallet'
import Sms from  '../Views/LoginModule/Sms'
import MoreInfo from  '../Views/LoginModule/MoreInfo'
import ChooseCountry from  '../Views/LoginModule/ChooseCountry'
import VerificationCards from  '../Views/LoginModule/VerificationCards'
import Launch from  '../Views/LoginModule/Launch'
import Login from  '../Views/LoginModule/Login'
import ForgotPassword from  '../Views/LoginModule/ForgotPassword'
import Confirm from  '../Views/LoginModule/Confirm'
import TakePhoto from  '../Views/LoginModule/TakePhoto'
import DocumentBackside from  '../Views/LoginModule/DocumentBackside'
import SelfieWithDocument from  '../Views/LoginModule/SelfieWithDocument'
import PincodeEnable from  '../Views/LoginModule/PincodeEnable'
import OtpPin from  '../Views/LoginModule/OtpPin'
import DocumentFront from  '../Views/LoginModule/DocumentFront'
import SetUpPin  from '../Views/NewPinModule/SetUpPin'
import PinLogin  from '../Views/NewPinModule/PinLogin'
import ConfirmPin  from '../Views/NewPinModule/ConfirmPin'
import ResendEmail from '../Views/LoginModule/ResendEmail'
import RetrivePassword from  '../Views/LoginModule/RetrivePassword'
import {
  createStackNavigator,createBottomTabNavigator} from 'react-navigation'
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

      
      const VaultStack=createStackNavigator({    
       VaultFilter:{screen:VaultFilter},
     
      })
      const CreditCardStack=createStackNavigator({
        CreditCard:{screen:CreditCard},
        CreditTransaction:{screen:CreditTransaction},
        CardDetails:{screen:CardDetails},
      },{

        transitionConfig: TransitionConfiguration,
        headerMode: 'none'
    })
      const ExchangeStack=createStackNavigator({
        ExchangeMenu:{screen:ExchangeMenu,},
        Exchange:{screen:Exchange},
        Buy:{screen:Buy},
        Sell:{screen:Sell},
        Publish:{screen:Publish},
        PuplishUser:{screen:PuplishUser}
      },
      )
      const TabNavigator = createBottomTabNavigator(
        {
  
       // Home:{screen:MainNavigator},
        Price:{
          screen: Price,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => 
          
                <Image style={{width: 20, height: 20,alignItems:'center',resizeMode:'contain',tintColor}}   source={require('../Views/assets/app3.png')} ></Image>    
    
           
          }},
  
          ExchangeMenu:{
            screen: ExchangeStack,
            navigationOptions: {

              tabBarIcon: ({ tintColor }) => 
            
                  <Image style={{width: 20, height: 20,alignItems:'center',resizeMode:'contain',tintColor}}   source={require('../Views/assets/app4.png')} ></Image>    
      
             
            }},
  
            DashBoard:{
              screen: DashBoard,
              navigationOptions: {
                tabBarIcon: ({ tintColor }) => 
              
                    <Image style={{width: 20, height: 20,alignItems:'center',resizeMode:'contain',tintColor}}   source={require('../Views/assets/app1white.png')} ></Image>    
        
               
              }},
              Vault:{
                screen: VaultStack,
                navigationOptions: {
                  tabBarIcon: ({ tintColor }) => 
                
                      <Image style={{width: 20, height: 20,alignItems:'center',resizeMode:'contain',tintColor}}   source={require('../Views/assets/app2.png')} ></Image>    
          
                 
                }},
        CreditCard:{
          screen: CreditCardStack,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) =>  <Image style={{width: 20, height: 20,alignItems:'center',resizeMode:'contain',tintColor}}   source={require('../Views/assets/app6.png')} ></Image>    
          }},
        Profile:{
          screen: Profile,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Image style={{width: 20, height: 20,alignItems:'center',resizeMode:'contain',tintColor}}   source={require('../Views/assets/app5.png')} ></Image>     
          }},
          
           
          
      },
      {
        initialRouteName: "DashBoard",
        tabBarComponent: TabBar,
        tabBarOptions: {
          activeTintColor: "#3b61c7",
          inactiveTintColor: "#fff",
         
        }},
       );
      const MainNavigator =createStackNavigator({
       
        //Publish:{screen:Publish},
      
        Launch: { screen: Launch },
        SetUpPin:{screen:SetUpPin},
        PinLogin:{screen:PinLogin},
        ConfirmPin:{screen:ConfirmPin},
       //UploadProgress:{screen:UploadProgress},
        TakePhoto:{screen:TakePhoto},    
        RetrivePassword:{screen:RetrivePassword}, 
        PuplishUser:{screen:PuplishUser},
        Sms:{screen:Sms},     
        Home:{screen:TabNavigator},
        AddVault:{screen:AddVault},
        Information:{screen:Information},
        ConfirmVault:{screen:ConfirmVault},    
        Login:{screen:Login},
        VerificationCards:{screen:VerificationCards},    
        Welcome:{screen:Welcome},      
        ProfileRegister:{screen:ProfileRegister},      
        NewWallet:{screen:NewWallet},       
        DocumentFront:{screen:DocumentFront}, 
        DocumentBackside:{screen:DocumentBackside},  
        DashBoard:{screen:DashBoard},        
        ForgotPassword:{screen:ForgotPassword},
        ResendEmail:{screen:ResendEmail},
        Confirm:{screen:Confirm},
       // Price:{screen:Price},                
        Profile:{screen:Profile},     
        VaultFilter:{screen:VaultFilter},    
        PinCode:{screen:PinCode},  
        Verify:{screen:Verify},
        CountrySearch:{screen:CountrySearch},
        Address:{screen:Address},
        Payment:{screen:Payment},     
        Country:{screen:Country},
        SelfieWithDocument:{screen:SelfieWithDocument},
        BankScreen:{screen:BankScreen},     
        MoreInfo:{screen:MoreInfo},
        PicodeEnable:{screen:PincodeEnable},
        OtpPin:{screen:OtpPin},
        ChooseCountry:{screen:ChooseCountry},       
        },{
        //  transitionConfig: TransitionConfiguration,
          headerMode: 'none'
      });
    

  export default  MainNavigator;
