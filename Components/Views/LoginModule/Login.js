import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet,SafeAreaView, Image,Animated,TextInput,Text,Keyboard,Easing,TouchableOpacity,LayoutAnimation,KeyboardAvoidingView,BackHandler,AsyncStorage } from 'react-native';
import { Alert } from 'react-native';
import BackgroundIcon from '../../Background'
import {loginApi} from '../Api/LoginApi'
import OuthApi from '../Api/OuthApi'
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions,StackActions } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
import Snackbar from '../Utils.js/Snackbar'

export default class Login  extends React.Component {

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
      ShowAlert:false,
      alert:'',
      animate:false,
      Username:'testdemo2@yopmail.com',
      Password:'Admin@123new',
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
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

  }
  componentWillUnmount() {
    this.backHandler.remove()
  }

  handleBackPress = () => {
    this.props.navigation.navigate('Launch'); // works best when the goBack is async
    return true;
  }
 
Load(){
  this.StartImageRotateFunction();
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
  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 2500,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => this.StartImageRotateFunction());
  }
  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    const { shift } = this.state;
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
      <SafeAreaView style={styles.Maincontainers}>
      <View style={styles.Maincontainers} >  
      

       <LinearGradient
       
  colors= {['#FFFFFF','#DFE1ED','#CCCFE2']} style={styles.Maincontainers}>   
 <Snackbar Visible={this.state.ShowAlert} alert={this.state.alert}></Snackbar>
  <View style={{flex:0.4}}>
  <View  style={{justifyContent:'center',alignItems:'center',paddingTop:20
        }}>
              <Image  style={{width:150,height:150,resizeMode:'contain'}}  source={require("../assets/app-logo.png")} ></Image> 
                           
        </View>  
  </View>
  <View style={{flex:0.7,position:'relative',justifyContent:'center'}}>
 
 <Image
                style={{width:500,height:500, resizeMode: 'contain',opacity:0.1,position:'absolute',bottom:30,}}
                source={require('../assets/bgLogo.png')}
            />                       
   
        <KeyboardAvoidingView 
  
  behavior='padding'
>
<View  style={{paddingVertical:10,marginLeft:30,marginRight:30
       }}>
     <View style={{flexDirection:'row',justifyContent:'space-around'}}>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Image  style={{resizeMode:'contain',width:20,height:20}}  source={require("../assets/userIcon.png")} ></Image> 
    </View>
     
     <TextInput  placeholder="User"
         placeholderTextColor="#3d5498" 
         onChangeText={(text) => this.setState({Username:text,ShowAlert:false})}
         style={styles.inputBox} />
     </View>
     <View style={{flexDirection:'row',justifyContent:'space-around'}}>
     <View style={{justifyContent:'center',alignItems:'center'}}>
     <Image  style={{resizeMode:'contain',width:20,height:20}}  source={require("../assets/passwordIcon.png")} ></Image> 
     </View>
     
     <TextInput
         // Adding hint in TextInput using Placeholder option.
         placeholder="Password"
         placeholderTextColor="#3d5498" 
      
         style={styles.inputBox}
         secureTextEntry={true}
         onChangeText={(text) => this.setState({Password:text,ShowAlert:false})}
       />
     </View>
            
       </View>
       
       <View style={{paddingVertical:50
}}>
       
       
       <TouchableOpacity onPress={this.LoginAction}>     
<View>
<LinearGradient colors={['#4476d7','#4f92e9','#61bff2']}  start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{padding:15,justifyContent:'center',alignItems:'center'}}>

<Text style={{color:'#FFF',fontSize:20,fontWeight:'bold',fontFamily: "Poppins-Medium"}}>LOGIN</Text>

</LinearGradient>
</View>
</TouchableOpacity> 
  <TouchableOpacity onPress={this.ForgotAction}>
<View style={{justifyContent:'center',alignItems:'center',marginVertical:50}}>
<Text style={{color:'#3d5498',fontSize:18,fontFamily:'Exo2-Regular'}}>FORGOT THE PASSWORD</Text>
</View>
</TouchableOpacity>  
       </View> 
       </KeyboardAvoidingView> 
  </View>
 </LinearGradient> 
 

     </View>
     </SafeAreaView>
     
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
      focus=()=>
      {
       this.textInputRef.focus()
      }
      LoginAction=()=>
      {
      /*
        this.props.navigation.navigate('Home',{
          DashBoardPopup: true,Kyc:true
        });
        */
        
        this.Login()
      
      }
      Login=()=>
      {
        if(this.state.Username==='')
        {
        //  Alert.alert('Alert!!','Please enter username')
        this.setState({ShowAlert:true,alert:'Please enter username'})
        }
        else if(this.state.Password==='')
        {
        // Alert.alert('Alert!!','Please enter Password')
         this.setState({ShowAlert:true,alert:'Please enter Password'})
        }
        else
        {
         let params = {
           email:this.state.Username,
           password: this.state.Password,
         };
         this.Load()
         console.log('Login params',params)
         OuthApi(params,this.resultFromAPI,this.error,this.NetworkIssue);
        }
       
      }
      resultFromAPI=async(data)=>
      {
        console.log('Outh ',data)
        this.hide()
      try 
      {
        if( data.error==='invalid_grant')
        {
          console.log('login error', data.error_description)
          Alert.alert('Alert','Incorrect username and password.')
          this.setState({Username:''})
          this.setState({Password:''})

        }else if(data.access_token!='undefined'){
         

          let AccessToken=data.access_token
          await AsyncStorage.setItem('AccessToken',AccessToken); 
           let params = {
             email:this.state.Username,
             password: this.state.Password,
           }
           this.Load()
           loginApi(params,this.LoginResult,this.error,this.NetworkIssue)  
           console.log('login loginApi')
        }
        else
        {
          console.log('login error')
          this.hide()
         this.setState({ShowAlert:true,alert:data.error_description})
        }
      
      } 
      catch (error) 
      {
        Alert.alert('Alert',error)
        // Error saving data
      }

     
      }
      error=(error)=>
      {
        console.log(error)
        this.hide()
        this.setState({ShowAlert:true,alert:error})
      }
      NetworkIssue=(error)=>
      {
        console.log(error)
        this.hide()
        this.setState({ShowAlert:true,alert:error})
      }
      ForgotAction=()=>
      {
        //this.setState({ShowAlert:true})
         this.props.navigation.navigate('RetrivePassword')
      }

      LoginResult=async (data)=>
      {
       this.hide()
        if(data.status=='success')
        {
            console.log('Loginresult',data)
            await AsyncStorage.setItem('password',this.state.Password); 
            await AsyncStorage.setItem('UserId',data.loginInfo.userId.toString()); 
            await AsyncStorage.setItem('email',data.loginInfo.emailId.toString()); 
            await AsyncStorage.setItem('profilestatus',data.loginInfo.profileStatus.toString()); 
            await AsyncStorage.setItem('kycstatus',data.loginInfo.kycStatus.toString()); 
            await AsyncStorage.setItem('etherwalletAddress',data.loginInfo.EtherwalletAddress.toString()); 
            await AsyncStorage.setItem('bitcoinWalletReceivingAddress',data.loginInfo.bitcoinWalletReceivingAddress.toString()); 
            console.log('Loginresult',data)
            if(data.loginInfo.twoFactorAuthenticationStatus===0)
            {
             
              this.NavigationReset('Home',data.loginInfo.profileStatus,data.loginInfo.kycStatus) //Profile popup not apprear,kyc popup appear            
            }
            else
            {
              this.props.navigation.navigate('PinCode',{profilestatus:data.loginInfo.profileStatus,kycstatus:data.loginInfo.kycStatus})
            }
           
          
               
        }
        else
        {
          Alert.alert(data.message)
        }
      }
      NavigationReset=(routname,dashboardpopup,kycstatus)=>
      {
       
         this.props.navigation.dispatch(
           StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: routname,params: {  profilestatus: dashboardpopup,kycstatus:kycstatus} })]
           })
          );
         
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
  },
  inputBox: {
    paddingVertical: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#3d5498',
    height: 45,width: "90%",
    fontFamily:'Exo2-Regular'
}
});