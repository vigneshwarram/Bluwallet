import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet,TextInput, Image,Picker,ScrollView,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,KeyboardAvoidingView} from 'react-native';
import { Alert } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import { Switch} from 'react-native'
import * as shape from 'd3-shape'
import Logo from '../logo'
import LinearGradient from 'react-native-linear-gradient';


export default class  Buy  extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    
    this.state = {
      dataSource:[],
      switchValue:false,
      cityItems:["US Doller,Indian,Eutherium"],
      Coin: 'Us Doller',
      animate:false,
      app1icon:require('./assets/app1white.png'),
      app6icon:require('./assets/app6.png'),
      app2icon:require('./assets/app2.png'),
      app3icon:require('./assets/app3.png'),
      app4icon:require('./assets/app5-blue.png'),
      app5icon:require('./assets/app5.png'),
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
      app6color:'#5099f0',
      app2color:'#5099f0',
      app3color:'#5099f0',
      app4color:'#fff',
      app5color:'#5099f0'
    };
  
  }
  
  componentDidMount()
  {
    this.GetListData()
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
toggleSwitch=(value)=>{
  this.setState({switchValue: value})
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
  HideMenu=()=>{
    LayoutAnimation.spring();
    this.setState({Awr:80})
  }
  ProfileTouch=()=>
  {
    this.props.navigation.navigate('Profile')  
  }
  DashBoardTouch=()=>
  {  
    this.props.navigation.navigate('DashBoard',{
      DashBoardPopup: false,
    })
  }
  App3Touch=()=>{
   Alert.alert('Development Processing...')
  }
  VaultTouch=()=>{
    this.props.navigation.navigate('Vault');
  }
  App4Touch=()=>{
    this.setState({
      app3color:'#5099f0',
      app1color:'#5099f0',
      app2color:'#5099f0',
      app5color:'#5099f0',
      app4color:'#fff',
      app6color:'#5099f0',
      app6icon:require('./assets/app6.png'),
      app1icon:require('./assets/app1white.png'),
      app2icon:require('./assets/app2.png'),
      app3icon:require('./assets/app3.png'),
      app5icon:require('./assets/app5.png'),
      app4icon:require('./assets/app5-blue.png')
    })
  }
  App5Touch=()=>{
    this.setState({
      app3color:'#5099f0',
      app1color:'#5099f0',
      app2color:'#5099f0',
      app4color:'#5099f0',
      app6color:'#5099f0',
      app6icon:require('./assets/app6.png'),
      app5color:'#fff',
      app1icon:require('./assets/app1white.png'),
      app2icon:require('./assets/app2.png'),
      app3icon:require('./assets/app3.png'),
      app4icon:require('./assets/app4.png'),
      app6icon:require('./assets/app6.png'),
      app5icon:require('./assets/app2-blue.png'),
     
    })
    this.props.navigation.navigate('Profile')
  }
  CreditCardTouch=()=>{
    this.props.navigation.navigate('CreditCard')
   }
  render() {
    const data = [ 50, 60, 70, 95, 100, 120, 100, 80, 90, 60, 50, 40, 60, 100 ]
    const Line = ({ line }) => (
      <Path
          key={'line'}
          d={line}
          stroke={'#25e2cd'}
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
                 <LinearGradient  colors= {['#354E91','#314682','#283563','#222B50','#21284A']} style={styles.Maincontainers} >
      <LinearGradient
   colors={['#1a5fe1','#00a5ff','#81DCF9']} style={{height:200,opacity:0.9}}>     
      <LinearGradient
   colors={['#1a5fe1','#81DCF9','#81DCF9']} style={{height:230,marginRight:30,marginTop:30}}>
 <LinearGradient colors={['#fff','#fff','#CCCFE2']} style={{justifyContent:'center',marginTop:-10,height:this.state.h,width:this.state.w, alignItems:'flex-end',borderTopRightRadius:25,borderBottomRightRadius:25,position:'absolute'}}>
<TouchableOpacity onPress={this._onPress}>
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/note.PNG.png")} ></Image>     
     
          </View>
          </TouchableOpacity>
</LinearGradient> 
 <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',marginTop:20}}>
          <Image style={{marginRight:10,width: 30, height: 30,resizeMode:'contain'}}   source={require("./assets/app4.png")} ></Image>     
          <Text style={{fontSize:18,fontWeight:'bold',color:'#fff',fontFamily:''}}>Exchange</Text>
          </View>      
          <Text style={{fontSize:12,fontWeight:'bold',color:'#fff',marginTop:10,fontFamily:''}}>How Much do you want to buy?</Text>           
          <View style={{flexDirection: 'row',marginLeft:20}}>
          <View style={{width:'40%',borderRadius:25,borderWidth:1,borderColor:'#fff',marginTop:10,marginBottom:10, justifyContent:"center"}}>
<View style={{flexDirection:'row',marginLeft:20}}> 
<TextInput
          style={{height: 40, color:'#fff'}}
       placeholderTextColor='#ffffff'
       keyboardType = 'numeric'
          placeholder="COP 0.000"
          
        />
</View>
          </View>
          <View style={{width:'40%',borderRadius:25,borderWidth:1,borderColor:'#fff',marginTop:10,marginBottom:10,marginLeft:10, justifyContent:"center"}}>
<View style={{flexDirection:'row',marginLeft:20}}>

<TextInput
          style={{height: 40,color:'#fff'}}
       placeholderTextColor='#ffffff'
          placeholder="BTC 00.0"
          keyboardType = 'numeric'
        />
</View>
          </View>
    
     </View>            
          </View>
         <View>  
          </View>
          </LinearGradient>    
         


          </LinearGradient> 
        
<View style={{flex:1}}>

          <LinearGradient  colors= {['transparent','transparent','transparent']} style={{marginTop:60}} >
   <ScrollView>
<View style={{marginTop:20,backgroundColor:'transparent'}}>  
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:30,fontWeight:'bold',color:'#fff',marginTop:10,fontFamily:''}}>$ 0.00</Text>
</View> 

<View
  style={{
    marginTop:30,
    borderBottomColor: '#394d88',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{flexDirection:'row',marginLeft:20}}>
<View style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#5280d5',marginTop:10,fontFamily:''}}>BTC Price</Text>
</View>  

<View style={{flexDirection:'row',flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#a9b4d4',marginTop:10,textAlign:'center',fontFamily:''}}>121ETH</Text> 

</View>  

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{flexDirection:'row',marginLeft:20}}>  
<View style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#5280d5',marginTop:10,fontFamily:''}}>BTC price Dolar</Text>
</View>

<View style={{flexDirection:'row',flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#a9b4d4',marginTop:10,fontFamily:''}}>455$</Text> 
</View>  

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{flexDirection:'row',marginLeft:20}}>  
<View  style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#5280d5',marginTop:10,fontFamily:''}}>Network fees</Text>  
</View>
<View style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#a9b4d4',marginTop:10,fontFamily:''}}>12ETH-199BTC</Text> 
</View>
</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',
    borderBottomWidth: 1,
  }}
/>
<View style={{flexDirection:'row',marginLeft:20}}>  
<View style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#5280d5',marginTop:10,fontFamily:''}}>Commercial Limits</Text>
</View>
  <View style={{flex:1}}>
  <Text style={{fontSize:12,fontWeight:'bold',color:'#a9b4d4',marginTop:10,fontFamily:''}}>1000-100,00,00 COP</Text> 
  </View>

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',
    borderBottomWidth: 1,
  }}
/>
<View style={{height:40,width:'100%',backgroundColor:'transparent'}}></View>
<View style={{flexDirection:'row',marginLeft:20}}>  
<View style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#5280d5',marginTop:10,fontFamily:''}}>Send</Text>  
</View>
<View style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#a9b4d4',marginTop:10,fontFamily:''}}>20ETH</Text> 
</View>

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',
    borderBottomWidth: 1,
  }}
/>
<View style={{flexDirection:'row',marginLeft:20}}>  
<View style={{flex:2.2}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#5280d5',marginTop:10,fontFamily:''}}>Description</Text>  
</View>
<View style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#a9b4d4',marginTop:10,marginLeft:-10,fontFamily:''}}>Transfer data</Text> 
</View>
<View style={{flex:1}}>
<Text style={{fontSize:20,fontWeight:'bold',color:'#a9b4d4',marginTop:-5,fontFamily:''}}>...</Text> 
</View>

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',
    borderBottomWidth: 1,
  }}
/>
<View style={{backgroundColor:'#232d51'}}>
<View style={{justifyContent:'center',alignItems:'center',marginBottom:100,width:"100%",marginTop:30}}>
<View style={{width:"50%"}}>
<LinearGradient colors={['#41da9c','#36deaf','#26e3ca']} style={{borderRadius:15,padding:12,backgroundColor:'green',justifyContent:'center',alignItems:'center',marginLeft:10}}>
<TouchableOpacity onPress={()=>this.props.navigation.navigate('Payment')}>
<Text style={{color:'#fff'}}>Exchange</Text></TouchableOpacity>
</LinearGradient>

</View>

</View>
</View>
   
</View>
    </ScrollView>    
</LinearGradient>
   
      
    
         <LinearGradient colors= {['#2D3CAD','#4781DF','#529DF3','#7ED5F6','#97F5F9']} style={{  width: 100,marginLeft:35,position:'absolute',top:-20,left:120,right:100,bottom:50,
    height: 100,
    borderRadius: 100/2,
    backgroundColor:this.state.app1color,justifyContent:'center',alignItems:"center"}} >
   
    <Image  style={{width: 60, height: 60,resizeMode:'contain'}}  source={require('./assets/exchangenew.png')} ></Image>
    
            
          </LinearGradient> 
 
  
      </View>
    
      <View style={{ width: '100%',opacity:0.9,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', 
    bottom: 0,}}>
<LinearGradient colors= {['#1a5fe1','#00a5ff','#00a5ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{borderTopRightRadius:20,borderTopLeftRadius:20,height:80,width:'100%',justifyContent:'center',alignItems:'center'}} >
    <View style={{flexDirection: 'row',marginRight:20,marginLeft:20,alignItems:"center",justifyContent:'center'}}> 
    <TouchableOpacity onPress={this.App3Touch}>
   
   <View style={{  width: 40,marginLeft:10,
height: 40,
borderRadius: 40/2,
justifyContent:'center',alignItems:"center"}} >

<Image style={{width:20,height:20,resizeMode:'contain'}}   source={this.state.app3icon} ></Image>

    
   </View>   

  
   </TouchableOpacity>
   <TouchableOpacity onPress={this.App4Touch}>

   <View style={{  width: 40,marginLeft:10,backgroundColor:this.state.app4color,
height: 40,
borderRadius: 40/2,
justifyContent:'center',alignItems:"center"}} >

<Image style={{width:20,height:20,resizeMode:'contain'}}   source={this.state.app4icon} ></Image> 

     
   </View>  
  
   </TouchableOpacity> 

          <TouchableOpacity   onPress={this.DashBoardTouch}>
       
       <View style={{ width: 40,marginLeft:10,
 height: 40,
 borderRadius: 40/2,
justifyContent:'center',alignItems:"center"}} >

 <Image style={{width:20,height:20,resizeMode:'contain'}}   source={this.state.app1icon} ></Image> 
       </View>    
              
       </TouchableOpacity>   
         
          <TouchableOpacity onPress={this.VaultTouch}>
    
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
  justifyContent:'center',alignItems:"center"}} >
  
    <Image style={{width:20,height:20,resizeMode:'contain'}}   source={this.state.app2icon} ></Image> 
   
        
          </View> 
      
          
          </TouchableOpacity>  
          <TouchableOpacity onPress={this.CreditCardTouch}>
      
      <View style={{  width: 40,marginLeft:20,
height: 40,
borderRadius: 40/2,
justifyContent:'center',alignItems:"center"}} >

<Image  style={{width: 20, height: 20,resizeMode:'contain'}}  source={this.state.app6icon} ></Image>

        
      </View> 
   
   
      </TouchableOpacity>  
          <TouchableOpacity onPress={this.ProfileTouch}>
    
    <View style={{ width: 40,marginLeft:10,
 height: 40,
 borderRadius: 40/2,
justifyContent:'center',alignItems:"center"}} >

 <Image style={{width:20,height:20,resizeMode:'contain'}}   source={this.state.app5icon} ></Image> 
       </View>  
    
       </TouchableOpacity>  
         
          
          </View>
          </LinearGradient>  
</View>
</LinearGradient>
     </View>
  
    
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
}



const styles = StyleSheet.create({
 
  Maincontainers: {
    flex: 1,   
    backgroundColor: '#fff',
  },
  containers: {
   backgroundColor: 'transparent',
    marginTop:5,
  },
  containers: {
  flex:1,
   height:'30%'
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