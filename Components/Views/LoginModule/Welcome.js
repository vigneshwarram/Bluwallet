import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,ScrollView,Dimensions,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,} from 'react-native';
import { Alert } from 'react-native';
import BackgroundIcon from '../../Background'

import LinearGradient from 'react-native-linear-gradient';

export default class Welcome  extends React.Component {

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
   colors={['#ffffff','#e1e5ef','#e1e5ef']} style={{height:'100%'}}>   
      <View style={{justifyContent:'center',alignItems:'center',position:'absolute',bottom:100,}}>
        <Image
                style={{width: Dimensions.get('window').width,
    resizeMode: "contain",
    height: 250,opacity:0.1}}
                source={require('../assets/dlogo.png')}
            />            
        </View>
    <View style={{justifyContent:'space-between',flex:0.1}}>
   
      <View style={{backgroundColor:'#fd6d71',height:this.state.hr,width:this.state.wr,justifyContent:'center', borderTopStartRadius:25,borderBottomStartRadius:25, marginTop:10,position:'absolute',right:0}}>
            <TouchableOpacity onPress={this.pressRight}>
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginLeft:10,width: 20, height: 20}}   source={require("../assets/cancel.png")} ></Image>     
     
          </View>
          </TouchableOpacity>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:25}}>
        <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:20,fontFamily:''}}>Welcome!</Text>
    </View>
    </View>
    
    <View style={{flex:0.3}}> 
   
             
         
             <View  style={{justifyContent:'center',alignItems:'center'
        }}>
              <Image  style={{  width: Dimensions.get('window').width,
    resizeMode: "contain",
    height: 250,}}  source={require("../assets/threelogo.png")} ></Image> 
                 
            
        </View>
      
      
            
</View>  
<View style={{flex:0.4}}>
<View  style={{justifyContent:'center',alignItems:'center',paddingVertical:60
        }}>
             <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:12,fontFamily:''}}>Verify your Identity to request your XLM.Will</Text>
             <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:12,marginTop:2,fontFamily:''}}>Take a few minutes.Once Verification,you</Text>
             <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:12,marginTop:2,fontFamily:''}}>Could use our product of last generation</Text>
             <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:12,marginTop:2,fontFamily:''}}>Exchange</Text>
         
        </View>
</View>

        <View style={{flex:0.2}}>

        <TouchableOpacity onPress={this.BeginAction}>
    <View>
    <LinearGradient colors={['#41d99c','#34ddb2','#21e4d3']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}  style={{padding:15,justifyContent:'center',alignItems:'center'}}>

<Text style={{color:'#fff',fontSize:18,fontWeight:'bold',fontFamily:'Courier New'}}>Begin Now</Text>

</LinearGradient>
    </View>   
</TouchableOpacity>




<View>
<LinearGradient colors={['#354e91','#354e91','#354e91']}  style={{padding:15,alignItems:'center'}}>
<TouchableOpacity>
<Text style={{color:'#fff',fontWeight:'bold',opacity:1,fontSize:12,marginTop:2,marginLeft:-30,fontFamily:''}}>when you create a wallet,you accept</Text>
<View style={{flexDirection:'row',marginTop:2,marginLeft:-30}}>
<Text style={{color:'#5496ff',fontWeight:'bold',opacity:1,fontSize:12,marginTop:5,fontFamily:''}}>Terms of Service</Text>
<Text style={{color:'#fff',fontWeight:'bold',opacity:1,fontSize:12,marginTop:5,marginLeft:8,fontFamily:''}}>&</Text>
<Text style={{color:'#5496ff',fontWeight:'bold',opacity:1,fontSize:12,marginTop:5,marginLeft:8,fontFamily:''}}>Politic and privacy</Text>
</View>

</TouchableOpacity>
</LinearGradient>
</View>
        </View>
        
 </LinearGradient> 

     </View>
      
    
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
      BeginAction=()=>{
        this.props.navigation.navigate('Verify');
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