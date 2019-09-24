import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,Animated,TextInput,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,KeyboardAvoidingView,Dimensions,UIManager } from 'react-native';
import { Alert } from 'react-native';
import BackgroundIcon from '../../Background'

import LinearGradient from 'react-native-linear-gradient';
export default class ForgotPassword  extends React.Component {

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
      w: 50,
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
    //this.GetListData()
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
    <ActivityIndicator
  color = '#1a5fe1'
  size = "large"
  style = {styles.activityIndicator}/>
  </View>
  }
    return (  
        
      <View style={styles.Maincontainers} >  
       
   

       <ImageBackground style={{ flex: 1, }} imageStyle={{ resizeMode: 'stretch' }} source={require('../assets/bg.png')}>
   
    <View style={{marginTop:40,flex:0.6}}>          
         
             <View  style={{justifyContent:'center',alignItems:'center'
        }}>
               <Image  style={{width:200,height:200,resizeMode:'contain'}}  source={require("../assets/app-logo.png")} ></Image> 
                           
        </View>                   
       
        <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
        <Image
                style={{width:80,height:80,resizeMode: 'contain'}}
                source={require('../assets/cirpurforgot.png')}
            />    
        </View>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Text style={{color:'#4e649f',opacity:1,fontSize:15,textAlign:'center',fontFamily:'Exo2-Bold'}}>We'll send you a email ,to show </Text>
        <Text style={{color:'#4e649f',opacity:1,fontSize:15,fontFamily:'Exo2-Bold'}}>you how to take back your</Text>
        <Text style={{color:'#4e649f',opacity:1,fontSize:15,fontFamily:'Exo2-Bold'}}>password.</Text>
        </View>
</View>  
  
 
  <View style={{position:'absolute',bottom:20}}>
  <Image
                style={{width:550,height:500, resizeMode: 'contain',opacity:0.1}}
                source={require('../assets/bgLogo.png')}
            />                  
        </View>   
           
       
</ImageBackground>
 

 
     </View>
      
     
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
      LoginAction=()=>{
        this.props.navigation.navigate('DashBoard',{
          DashBoardPopup: true,
        });
      }
      ForgotAction=()=>{
        this.props.navigation.navigate('ForgotPassword')
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
    height: 45,width: "90%"
   
}
});