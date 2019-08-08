import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,ScrollView,Animated,Text,Keyboard,TouchableOpacity,LayoutAnimation,AsyncStorage,Easing} from 'react-native';
import { Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import {LoginApi,loginSecureApi} from '../Api/LoginApi'
import { NavigationActions,StackActions } from 'react-navigation'
import {ResponseSuccessStatus,InvalidResponse,DataUndefined} from '../Utils.js/Constant'
import OTPInput from 'react-native-otp';
export default class PinCode  extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    this.RotateValueHolder = new Animated.Value(0);
    this.state = {
      dataSource:[],
      cityItems:["US Doller,Indian,Eutherium"],
      Coin: 'Us Doller',
      animate:false,
      number:123456,
      w: 50,
      visibles:false,
      h: 45,
      wr:50,
      hr:45,
      Ahr:80,
      Awr:80,
      clickr:false,
      clickopen:false,
      click:false,
      slide:false,
      visible: false,
      hidden: false,
      app1color:'#fff',
      app5color:'#fff'
    };
  
  }
  
  componentDidMount()
  {
   // this.autoFill()
  
    //this.GetListData()
  }
  GetListData=()=>{
    this.Load()
    var obj = {  
      method: 'GET',
      headers: {
        'Content-Type'    : 'application/json',
        'Accept'          : 'application/json',
       'Authorization':'Bearer '+'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJJRCI6ImJmNDczYTU5LTQxNzAtNDQ2My05YTI2LWZlNWNhYTVlZjMwZiIsIkV4cGlyeSI6bnVsbH0.tUaime3lRYn7wAu2KCnW3oFwIZa18eIL_4AOnoGJiKU'.trim()   
         }
  }
  fetch("https://apptest.supplynow.co.uk/api/v1/Bookings/MyBookings",obj)  
  .then((res)=> {
    return res.json();
   })
   .then((resJson)=>{
     this.dataset(resJson)
   
    return resJson;
   })
   .catch((error) => {
    console.error(error);
});
}
dataset=(data)=>{
  this.setState({
    dataSource:data
  })
  this.hide()
}
Load(){
  this.StartImageRotateFunction()
  this.setState({animate:true})
}
hide(){
  this.setState({animate:false})
}
space(){
  return(<View style={{height: 10, width: 1, backgroundColor:'black'}}/>)
}
_onPress=()=>{
  if(!this.state.click){
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 50})
    this.setState({click:true})
  }else{
    LayoutAnimation.spring();
    this.setState({w:50})
    this.setState({click:false})
  }
   
}
pressRight=()=>{
  if(!this.state.clickr){
    LayoutAnimation.spring();
    this.setState({wr: this.state.wr + 50})
    this.setState({clickr:true})
  }else{
    LayoutAnimation.spring();
    this.setState({wr:50})
    this.setState({clickr:false})
}
}
StartImageRotateFunction() {
  this.RotateValueHolder.setValue(0);
  Animated.timing(this.RotateValueHolder, {
    toValue: 1,
    duration: 2500,
    easing: Easing.linear,
    useNativeDriver: true
  }).start(() => this.StartImageRotateFunction());
}
SlideMenu=()=>{
  if(!this.state.slide){
    LayoutAnimation.spring();
    if(this.state.Awr>80){
      this.setState({Awr:80})
      this.setState({slide:false})
    }
    else{
      this.setState({Awr:this.state.Awr+250})
      this.setState({slide:true})
    }
    
  }
  else{
    LayoutAnimation.spring();
    this.setState({Awr:80})
    this.setState({slide:false})
  }
}
  autoFill = async() => 
  {
    this.setState({ otp: await AsyncStorage.getItem('securedKey') })
    console.log(this.state.otp)
  
     
    
  }

  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    const { navigate } = this.props.navigation;
    const data = [ 50, 60, 70, 95, 100, 120, 100, 80, 90, 60, 50, 40, 60, 100 ]
    const Line = ({ line }) => (
      <Path
          key={'line'}
          d={line}
          stroke={'#5099f0'}
          fill={'none'}
      />
  )

   
  if(this.state.animate){  
    return <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
    <Animated.Image 
                style={{width:100,height:100, resizeMode: 'contain' , transform: [{ rotate: RotateData }],}}
                source={require('../assets/loader.gif')}
            />   
  </View>
  }
    return (  
        
      <View style={styles.Maincontainers}>  
        <Dialog 
    visible={this.state.visibles}>
    <DialogContent>
     <View style={{width:300,height:110,alignItems:'center'}}>
         <View style={{alignItems:'center',paddingTop:10}}>
         <Image style={{width: 50, height: 50,resizeMode:'contain'}}   source={require("../assets/successtik.png")} ></Image>     
         </View>
         <View style={{paddingTop:10,paddingBottom:10}}>
         <Text style={{fontSize:15,color:'#454976',fontFamily:'Exo2-Regular',textAlign:'center'}}>Pincode Entered Successfully successfully</Text>           
         </View>
     </View>
    </DialogContent>
  </Dialog>
      <View> 
       <LinearGradient
  colors={['#ffffff','#e1e5ef','#e1e5ef']} style={{height:'100%'}}>   
   <View  style={{justifyContent:'center',alignItems:'center',marginTop:30
        }}>
              <Image  style={{width: 100, height: 150}}  source={require("../assets/threelogo.png")} ></Image> 
                       
        </View>
      
        <View  style={{justifyContent:'center',alignItems:'center'
        }}>
               <Text style={{color:'#4e649f',opacity:1,fontSize:18,marginTop:20,fontFamily:'Exo2-Bold'}}>Please Enter OTP</Text>
                       
        </View>
        <View  style={{justifyContent:'center',alignItems:'center', marginTop:20
        }}>
             <OTPInput
  value={this.state.otp}
  onChange={this.handleOTPChange}
  tintColor="#354e91"
  otpLength={6}
/>
      
                       
        </View>
        <View style={{justifyContent:'center',alignItems:'center',position:'absolute',bottom:100,left:70}}>
        <Image
                style={{width:250,height:250,resizeMode: 'contain',opacity:0.02}}
                source={require('../assets/dlogo.png')}
            />            
        </View>  
  
 </LinearGradient> 
 </View>
 
     </View>
      
    
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
      BeginAction=()=>{
        this.props.navigation.navigate('Address');
      }
      recievePin(pin){
        console.log(pin)
        // Check if the PIN is correct here
     }
     handleOTPChange=async(otp)=>{
       if(otp.length>=6)
       {   
         this.Load()   
        loginSecureApi(otp,this.SecureResult)
      
       }
     }
     SecureResult=async(data)=>
     {
       this.hide()
       if(data!=DataUndefined)
       {
         if(data.status==ResponseSuccessStatus)
         {
          //await AsyncStorage.setItem('loginInfo',data.loginInfo); 
        if(data.loginInfo.kycStatus==1)
        {
        
           await AsyncStorage.setItem('etherwalletAddress',data.loginInfo.EtherwalletAddress.toString()); 
           await AsyncStorage.setItem('bitcoinWalletReceivingAddress',data.loginInfo.bitcoinWalletReceivingAddress.toString()); 
           this.setState({visibles:true})
           Keyboard.dismiss()
           //setTimeout(this.setState({visibles:true}), 500);
            this.NavigationReset('Home',true,false)
          
        }
        else
        {
          setTimeout(this.NavigationReset('Home',false,true), 500);
          
        }
          
         }
         else
         {
           Alert.alert(data.status,data.message)
         }
      
       }
       else
       {
         Alert.alert(InvalidResponse)
       }
     
     }
     NavigationReset=(routname,dashboardpopup,kycstatus)=>
     {
      setTimeout(()=>{
        this.setState({visibles:false})
        this.props.navigation.dispatch(
          StackActions.reset({
           index: 0,
           actions: [NavigationActions.navigate({ routeName: routname,params: {  DashBoardPopup: dashboardpopup,Kyc:kycstatus} })]
          })
         );
        
      },500)
      
     }
}



const styles = StyleSheet.create({
 
  Maincontainers: {
    flex: 1, 
    height:'100%'
  },
  containers: {
    backgroundColor: 'transparent',
    marginTop:5,
   
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 img: {
  width: '30%',
  height: '32%',
  resizeMode: 'cover',
},
  ButtonRow: {
    justifyContent: 'center', 
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
    marginTop:20,
    backgroundColor: '#fbfbfb',

   
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  input:{
      height: 50,
      backgroundColor: '#fff',
      borderWidth: 0.5,
     
      borderColor: '#d6d7da',
      width: '50%',
      color: '#000'
  },
  textStyle :{
    textAlign: 'center',   
    fontFamily: 'Arial',
    fontSize: 16
},
  buttonContainer:{
      backgroundColor: '#27a8e0',
      width: '40%',
      marginTop:15,
     
      paddingVertical: 15
  },
  SignInbuttonContainer:{
    backgroundColor: '#7f7f7f',
    width: '40%',
    marginTop:15,
    marginLeft:10,
    paddingVertical: 15
},
  buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  }
});