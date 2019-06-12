import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,ScrollView,NativeModules,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,} from 'react-native';
import { Alert } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default class Profile  extends React.Component {

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
      app1icon:require('./assets/app1white.png'),
      app6icon:require('./assets/app6.png'),
      app2icon:require('./assets/app2.png'),
      app3icon:require('./assets/app3.png'),
      app4icon:require('./assets/app4.png'),
      app5icon:require('./assets/app2-blue.png'),
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
  HideMenu=()=>{
    LayoutAnimation.spring();
    this.setState({Awr:80})
  }
  AppTouch=()=>{
    this.setState({
      app2color:'#5099f0',
      app1color:'#5099f0',
      app3color:'#5099f0',
    //  app5color:'#fff',
      app4color:'#5099f0',
      app1icon:require('./assets/app1white.png'),
      app2icon:require('./assets/app2-blue.png'),
      app3icon:require('./assets/app3.png'),
      app4icon:require('./assets/app4.png'),
      app5icon:require('./assets/app5.png'),
  
    })

    
  }
  VaultTouch=()=>{
    this.setState({
      app2color:'#fff',
      app2icon:require('./assets/app2.png')    
    })
    this.props.navigation.navigate('Vault');
  }
  App3Touch=()=>{
    this.setState({
      app3color:'#fff',
      app1color:'#5099f0',
      app2color:'#5099f0',
      app5color:'#5099f0',
      app4color:'#5099f0',
      app6color:'#5099f0',
      app6icon:require('./assets/app6.png'),
      app1icon:require('./assets/app1white.png'),
      app2icon:require('./assets/app2.png'),
      app3icon:require('./assets/app3-blue.png'),
      app4icon:require('./assets/app4.png'),
      app5icon:require('./assets/app5.png'),
    })
    this.props.navigation.navigate('Price')
  }
  ExchangeTouch=()=>{
    this.props.navigation.navigate('ExchangeMenu')
  }
  DashBoardTounch=()=>{
    this.props.navigation.navigate('DashBoard')
  }
  CreditCardTouch=()=>{
   
    this.props.navigation.navigate('CreditCard')
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
   colors={['#1569e6','#00deff','#00deff']} style={{height:'100%',position:'absolute',left: 0,
right: 0}}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View style={{backgroundColor:'#fff',height:this.state.h,width:this.state.w,justifyContent:'center',borderWidth:1, alignItems:'flex-end',
  borderColor: '#fff',
  marginTop:10,
  borderTopEndRadius:25,borderBottomEndRadius:25,
  }}>

<TouchableOpacity onPress={this._onPress}>
 <View style={{flexDirection: 'row'}}> 
    <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/star.png")} ></Image>     

    </View>
    </TouchableOpacity>

      </View>
      <View style={{backgroundColor:'#fff',height:this.state.hr,width:this.state.wr,justifyContent:'center', borderTopStartRadius:25,borderBottomStartRadius:25, marginTop:10}}>
            <TouchableOpacity onPress={this.pressRight}>
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginLeft:10,width: 30, height: 30}}   source={require("./assets/logout.png")} ></Image>     
     
          </View>
          </TouchableOpacity>
            </View>
    </View>
     
   
    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:-30}}>
    <Image style={{marginLeft:10,width: 30, height: 30}}   source={require("./assets/app5.png")} ></Image>     
    <Text style={{color:'#fff',fontSize:15,fontWeight:
    'bold'}}>User Name</Text>    
     </View>
     <View style={{alignItems:'flex-end'}}>
    <Image style={{marginLeft:10,width: 30, height: 30,marginTop:10,marginRight:10}}   source={require("./assets/setting1.png")} ></Image> 
    </View>
       
          </LinearGradient>
          

    
          <View style={{backgroundColor:'#2b3f74',borderTopRightRadius:180,borderTopLeftRadius:180, justifyContent:'flex-start',alignItems:'center',flex:1,marginTop:'30%',height:'100%',position:'absolute',left: 0,marginBottom:0,
right: 0}}>
   <View style={{width: 100,position:'absolute',left: 150,
right: 0,borderRadius:25,marginTop:-50,
    height: 125}}>

<Image style={{width:100,height:125,borderRadius:25}}   source={require("./assets/build.png")} ></Image> 

    </View>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:80}}>
        <Text style={{color:'#fff',fontWeight:'bold',opacity:0.7}}>Example Name</Text>
    </View>
   
                       <View
  style={{
      width:'100%',
    marginTop:60,
    borderBottomColor:'#e6e8f1',
    borderBottomWidth:0
  }}>
</View>
<View  style={{flex:1,width:'100%'}}>
<ScrollView>
<View style={{marginTop:20,backgroundColor:'#fff'}}>   
<LinearGradient colors= {['#2b3f74','#2c548f','#223458']}>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#43549c',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{flexDirection:'row',marginLeft:30}}>
<View style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10}}>ID</Text>
</View>  

<View style={{flexDirection:'row',flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff',marginTop:10,textAlign:'center',opacity:0.7}}>1901</Text> 
</View>  

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#43549c',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{flexDirection:'row',marginLeft:30}}>  
<View style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10}}>Celular</Text>
</View>

<View style={{flexDirection:'row',flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff',marginTop:10,opacity:0.7}}>+53 31265 845</Text> 
</View>  

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#43549c',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{flexDirection:'row',marginLeft:30}}>  
<View  style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10}}>Register</Text>  
</View>
<View style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff',marginTop:10,opacity:0.7}}>2019 03 17</Text> 
</View>
</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#43549c',
    borderBottomWidth: 1,
  }}
/>
<View style={{height:30,width:'100%',backgroundColor:'#2b3f74'}}></View>
<View style={{flexDirection:'row',marginLeft:30}}>  
<View style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10}}>Country</Text>
</View>
  <View style={{flex:1}}>
  <Text style={{fontSize:12,fontWeight:'bold',color:'#fff',marginTop:10,opacity:0.7}}>Colombia</Text> 
  </View>

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#43549c',
    borderBottomWidth: 1,
  }}
/>
<View style={{flexDirection:'row',marginLeft:30}}>  
<View style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10}}>E-mail</Text>
</View>
  <View style={{flex:1}}>
  <Text style={{fontSize:12,fontWeight:'bold',color:'#fff',marginTop:10,opacity:0.7}}>vickyrams20@gmail.com</Text> 
  </View>

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#43549c',
    borderBottomWidth: 1,
  }}
/>

<View style={{flexDirection:'row',marginLeft:30}}>  
<View style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10}}>Coin purse</Text>  
</View>
<View style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff',marginTop:10,opacity:0.7}}>Bit coin</Text> 
</View>

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#43549c',
    borderBottomWidth: 1,
  }}
/>
<View style={{flexDirection:'row',marginLeft:30}}>  
<View style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10}}>Version</Text>  
</View>
<View style={{flex:1}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff',marginTop:10,opacity:0.7}}>2.0.4</Text> 
</View>


</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#43549c',
    borderBottomWidth: 1,
  }}
/>  
<View>
  <LinearGradient  colors= {['#2b3f74','#2c548f','#223458']}>
 <View style={{justifyContent:'center',alignItems:'center'}}>
 <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between',alignItems:'center'}}>
  <Image style={{width: 30, height: 30}}   source={require('./assets/keys.png')} ></Image>    
  <Text style={{color:'#4286f4',fontSize:15,marginRight:20,marginTop:10,marginLeft:20}}>Segundo Factor</Text>
  </View>
  <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between',alignItems:'center'}}>
  <Image style={{width: 30, height: 30}}   source={require("./assets/monitor.PNG.png")} ></Image> 
  <Text style={{color:'#4286f4',fontSize:15,marginRight:20,marginTop:10,marginLeft:20}}>E-wallet web</Text>
</View>
 </View>
 

<View style={{flexDirection:'row', marginTop:20,marginLeft:20,marginRight:20,justifyContent:'space-between'}}>

<View>
<Image style={{width: 30, height: 30}}   source={require("./assets/notify.png")} ></Image> 
<Text style={{color:'#4286f4',fontSize:10}}>Notification</Text>

</View>



<View>
<Image style={{width: 30, height: 30}}   source={require("./assets/secure-user.png")} ></Image> 
<Text style={{color:'#4286f4',fontSize:10}}>Security</Text>
</View>
<View >
<Image style={{width: 30, height: 30}}   source={require("./assets/terms.png")} ></Image> 

<Text style={{color:'#4286f4',fontSize:10}}>Terms of use</Text>


</View>
<View >
<Image style={{width: 30, height: 30}}   source={require("./assets/Share.png")} ></Image> 

<Text style={{color:'#4286f4',fontSize:10}}>Invite Friends</Text>


</View>
</View>

<View style={{marginTop:30,marginBottom:100,justifyContent:'center',alignItems:"center"}}>

<View style={{width:'70%'}}>
<LinearGradient colors={['#f4347f','#f85276','#fe7a6e']}  style={{padding:10,backgroundColor:'red',justifyContent:'center',alignItems:'center',borderRadius:10}}>
<TouchableOpacity>
<Text style={{color:'#fff'}}>Your email is'nt verified</Text>
</TouchableOpacity>
</LinearGradient>
</View>
<View style={{width:'50%',marginTop:20}}>
<LinearGradient colors={['#17e8e3','#30e0ba','#3ddba1']}  style={{padding:10,backgroundColor:'red',justifyContent:'center',alignItems:'center',borderRadius:10}}>
<TouchableOpacity>
<Text style={{color:'#fff'}}>Resend e-mail</Text>
</TouchableOpacity>
</LinearGradient>
</View>


</View>
</LinearGradient>
  </View>
  </LinearGradient>
</View>

    </ScrollView>    
   
          </View>
          
</View>  
<View style={{ width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', 
    bottom: 0,}}>
<LinearGradient colors= {['#1a5fe1','#00a5ff','#00a5ff']} style={{borderTopRightRadius:20,borderTopLeftRadius:20,height:80,width:'100%',justifyContent:'center',alignItems:'center'}} >
    <View style={{flexDirection: 'row',marginRight:20,marginLeft:20,alignItems:"center",justifyContent:'center'}}> 
       <TouchableOpacity>
    
       <View style={{ width: 40,marginLeft:10,backgroundColor:this.state.app5color,
    height: 40,
    borderRadius: 40/2,
  justifyContent:'center',alignItems:"center"}} >
  
    <Image style={{width:20,height:20}}   source={this.state.app5icon} ></Image> 
          </View>  
       
          </TouchableOpacity>  
          <TouchableOpacity onPress={this.DashBoardTounch}>
       
       <View style={{ width: 40,marginLeft:10,
 height: 40,
 borderRadius: 40/2,
justifyContent:'center',alignItems:"center"}} >

 <Image style={{width:20,height:20}}   source={this.state.app1icon} ></Image> 
       </View>    
              
       </TouchableOpacity>   
          <TouchableOpacity onPress={this.CreditCardTouch}>
      
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
   justifyContent:'center',alignItems:"center"}} >
   
    <Image  style={{width: 20, height: 20}}  source={this.state.app6icon} ></Image>
    
            
          </View> 
       
       
          </TouchableOpacity>  
          <TouchableOpacity onPress={this.VaultTouch}>
    
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
  justifyContent:'center',alignItems:"center"}} >
  
    <Image style={{width:20,height:20}}   source={this.state.app2icon} ></Image> 
   
        
          </View> 
      
          
          </TouchableOpacity>  
          <TouchableOpacity onPress={this.App3Touch}>
   
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
   justifyContent:'center',alignItems:"center"}} >
    
     <Image style={{width:20,height:20}}   source={this.state.app3icon} ></Image>
    
           
          </View>   
       
         
          </TouchableOpacity>
          <TouchableOpacity onPress={this.ExchangeTouch}>
     
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
   justifyContent:'center',alignItems:"center"}} >
    
     <Image style={{width:20,height:20}}   source={this.state.app4icon} ></Image> 
    
            
          </View>  
         
          </TouchableOpacity> 
          
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