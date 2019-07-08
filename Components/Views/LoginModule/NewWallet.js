import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,TextInput,Dimensions,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,AsyncStorage} from 'react-native';
import { Alert } from 'react-native';
import BackgroundIcon from '../../Background'
import RegisterApi from '../Api/RegisterApi'
import OuthApi from '../Api/OuthApi'
import RNPasswordStrengthMeter from 'react-native-password-strength-meter';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
export default class NewWallet  extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    
    this.state = {
      dataSource:[],
      cityItems:["US Doller,Indian,Eutherium"],
      Coin: 'Us Doller',
      animate:false,
      Username:null,
      Password:null,
      ConfirmPassword:null,
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
  
  render() {
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
    <ActivityIndicator
  color = '#1a5fe1'
  size = "large"
  style = {styles.activityIndicator}/>
  </View>
  }
    return (  
        
      <View style={styles.Maincontainers}>  
     
      
<LinearGradient
 colors= {['#FFFFFF','#DFE1ED','#CCCFE2']} style={{height:'100%'}}>  
  
 
 <ScrollView>
<View style={{flex:1}}>
  <View style={{flex:0.9}}> 
<View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fff'}}>
<TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Image  style={{width: 6, height: 11,marginLeft:20,marginTop:30,resizeMode:'contain'}}  source={require("../assets/left-arrow.png")} ></Image> 
</View>
</TouchableOpacity>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={{color:'#4e649f',opacity:1,fontSize:15.96,marginTop:25,fontFamily:'Exo2-Bold'}}>Create a New Wallet</Text>
</View>
<View></View>
</View>
<View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
   <View style={{width:'100%',borderColor:'#d7dee8',backgroundColor:'#fff',marginTop:30, justifyContent:"center",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1}}>
<View style={{flexDirection:'row',marginLeft:20,justifyContent:'flex-start',alignItems:'center'}}>

<TextInput
   style={{height: 80,padding:10,fontFamily:'Exo2-Regular'}}
 placeholderTextColor='#9ab8db'
   placeholder="Email"
   onChangeText={(text) => this.setState({Username:text})}
 />
</View>
   </View>
   <View style={{width:'100%',borderColor:'#d7dee8',backgroundColor:'#fff', justifyContent:"center",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginLeft:15}}>

<RNPasswordStrengthMeter
   onChangeText={this.onChange}
   inputProps={{placeholder:'Password'}}
   barColor='transparent'
   inputStyle={{fontFamily:'Exo2-Regular'}}
   meterType="bar"
   inputWrapperStyle={{borderBottomWidth:0}}
   placecolor='#9ab8db'
   Secure={true}

 />
</View>
   </View>
   <View style={{width:'100%',backgroundColor:'#fff',borderColor:'#d7dee8', justifyContent:"center",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1}}>
<View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginLeft:15}}>

<RNPasswordStrengthMeter

   onChangeText={this.onChangeConfirmPassword}
   inputProps={{placeholder:'Validate Password'}}
   barColor='transparent'
   meterType="bar"
   inputStyle={{fontFamily:'Exo2-Regular'}}
   meterType="bar"
   inputWrapperStyle={{borderBottomWidth:0}}
   placecolor='#9ab8db'

 />
</View>
   </View>

   
  
</View>
<View style={{marginTop:20}}>
<LinearGradient colors={['#354e91','#354e91','#354e91']}  style={{padding:15,alignItems:'center'}}>
<TouchableOpacity>
<Text style={{color:'#fff',opacity:1,fontSize:12,marginTop:2,marginLeft:-30,fontFamily:'Exo2-Regular'}}>when you create a wallet, you accept</Text>
<View style={{flexDirection:'row',marginTop:2,marginLeft:-30}}>
<Text style={{color:'#5496ff',opacity:1,fontSize:12,marginTop:5,fontFamily:'Exo2-SemiBold'}}>Terms of Service</Text>
<Text style={{color:'#fff',opacity:1,fontSize:12,marginTop:5,marginLeft:8,fontFamily:'Exo2-Regular'}}>&</Text>
<Text style={{color:'#5496ff',opacity:1,fontSize:12,marginTop:5,marginLeft:8,fontFamily:'Exo2-SemiBold'}}>Politic and privacy</Text>
</View>

</TouchableOpacity>
</LinearGradient>
</View> 

</View>
<View style={{flex:0.1}}> 





    
</View> 

</View>
</ScrollView>
  <View style={{justifyContent:'center',alignItems:'center',position:'absolute',bottom:10,}}>
        <Image
                style={{width: Dimensions.get('window').width,
    resizeMode: "contain",
    height: 211,opacity:0.1}}
                source={require('../assets/dlogo.png')}
            />            
        </View>
        <View style={{bottom:100}}>
        <TouchableOpacity onPress={this.BeginAction}>
<View >
<LinearGradient colors={['#41d99c','#34ddb2','#21e4d3']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}  style={{padding:15,justifyContent:'center',alignItems:'center',}}>

<Text style={{color:'#fff',fontSize:20,fontFamily:'Poppins-Medium'}}>Create Wallet</Text>

</LinearGradient>
</View> 
</TouchableOpacity>
        </View>

 
</LinearGradient> 


    
   
     </View>
      
    
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
      onChangeConfirmPassword=(Confimpassword)=>{
        this.setState({ConfirmPassword:Confimpassword})
      }
      BeginAction=()=>
      {
      this.CreateWallet()
      }
      CreateWallet=()=>
      {
        if(this.state.Username==null)
        {
          Alert.alert('Please Provide Email id')
        }
        else if(this.state.Password==null)
        {
          Alert.alert('Please Provide Password')
        }
        else if(this.state.ConfirmPassword==null)
        {
          Alert.alert('Please Provide ConfirmPassword')
        }    
        else if(this.state.ConfirmPassword!=this.state.Password)
        {
          Alert.alert('Password and Confirm Password does not match');
        } 
        
        else
        {
          if(this.validateEmail(this.state.Username))
          {
          
            let params = {
              email:this.state.Username,
              password: this.state.Password,
              conformPassword: this.state.ConfirmPassword,
            };
           // OuthApi(params,this.GetAccesToken)
           RegisterApi(params,this.RegisterResponse)
              this.props.navigation.navigate('Sms')
           
          }
          else
          {
            Alert.alert('Email Enter is wrong')
          }
         
        }
      }
      GetAccesToken=async(data)=>
      {
        
        let AccessToken=data.access_token
        await AsyncStorage.setItem('AccessToken',AccessToken); 
       
      }
      RegisterResponse=async(Registerdata)=>
      {
        if(Registerdata.status=='success')
        {
         // await AsyncStorage.setItem('AccessToken',Registerdata.retrieveData.AccessToken); 
          await AsyncStorage.setItem('userId',Registerdata.retrieveData.userId); 
          Alert.alert(
            Registerdata.status,
            Registerdata.message,
            [
              {text: 'OK', onPress: () =>  this.props.navigation.navigate('Sms')},
            ],
            {cancelable: false},
          );
         
        }
        else
        {
          Alert.alert(Registerdata.message)
        }
        console.log("Register", Registerdata)
      }
        //
      
      onChange = (password, score, { label, labelColor, activeBarColor }) => {
        this.setState({Password:password})
      }
      validateEmail = (text) =>
       {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false)
          {
        return false;
          }
        else 
        {
          return true;
        }
        }
       
}



const styles = StyleSheet.create({
 
  Maincontainers: {
    flex: 1
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