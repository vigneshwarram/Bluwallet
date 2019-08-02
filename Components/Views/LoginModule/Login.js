import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,Animated,TextInput,Text,Easing,TouchableOpacity,LayoutAnimation,KeyboardAvoidingView,Dimensions,AsyncStorage } from 'react-native';
import { Alert } from 'react-native';
import BackgroundIcon from '../../Background'
import {loginApi} from '../Api/LoginApi'
import OuthApi from '../Api/OuthApi'
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
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
      animate:false,
      Username:'tamiltheyvanst@gmail.com',
      Password:'password',
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
        
      <View style={styles.Maincontainers} >  
       
      <View> 

       <LinearGradient
       
  colors= {['#FFFFFF','#DFE1ED','#CCCFE2']} style={{height:'100%'}}>   
   <View style={{position:'absolute',left:0,bottom:20}}>
 <Image
                style={{width:550,height:500, resizeMode: 'contain',opacity:0.1}}
                source={require('../assets/bgLogo.png')}
            />                       
        </View>
   <ScrollView>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View></View>
    <View style={{justifyContent:'center',alignItems:'center',marginLeft:40}}>
    </View>
     
    </View>
    <View style={{flex:1}}>          
         
             <View  style={{justifyContent:'center',alignItems:'center'
        }}>
              <Image  style={{width:200,height:200,resizeMode:'contain'}}  source={require("../assets/app-logo.png")} ></Image> 
                           
        </View>                   
        <KeyboardAvoidingView 
  
  behavior='padding'
>
<View  style={{paddingVertical:80,marginLeft:30,marginRight:30
       }}>
     <View style={{flexDirection:'row',justifyContent:'space-around'}}>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Image  style={{resizeMode:'contain',width:20,height:20}}  source={require("../assets/userIcon.png")} ></Image> 
    </View>
     
     <TextInput  placeholder="User"
         placeholderTextColor="#3d5498" 
         onChangeText={(text) => this.setState({Username:text})}
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
         onChangeText={(text) => this.setState({Password:text})}
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
 
  
      
        
       </ScrollView>
 </LinearGradient> 
 </View>

     </View>
      
     
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
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
          Alert.alert('Alert!!','Please enter username')
        }
        else if(this.state.Password==='')
        {
         Alert.alert('Alert!!','Please enter Password')
        }
        else
        {
         let params = {
           email:this.state.Username,
           password: this.state.Password,
         };
         this.Load()
         console.log('Login params',params)
         OuthApi(params,this.resultFromAPI);
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
          Alert.alert(data.error_description)
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
           loginApi(params,this.LoginResult)  
           console.log('login loginApi')
        }
        else
        {
          console.log('login error')
          Alert.alert(data.error_description)
        }
      
      } 
      catch (error) 
      {
        Alert.alert(error)
        // Error saving data
      }

     
      }
      ForgotAction=()=>
      {
         this.props.navigation.navigate('ForgotPassword')
      }

      LoginResult=async (data)=>
      {
       this.hide()
        if(data.status=='success')
        {
            console.log('Loginresult',data)
            await AsyncStorage.setItem('UserId',data.loginInfo.userId.toString()); 
            await AsyncStorage.setItem('email',data.loginInfo.emailId.toString()); 
            await AsyncStorage.setItem('securedKey',data.securedKey.toString()); 
            console.log('Loginresult',data)
            this.props.navigation.navigate('PinCode')
          
               
        }
        else
        {
          Alert.alert(data.message)
        }
      }
      Navigation=(data)=>
      {
       
        this.props.navigation.navigate('Home',{
          DashBoardPopup: true,Kyc:true
        });
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