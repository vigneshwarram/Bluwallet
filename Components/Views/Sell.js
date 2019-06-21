import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet,TextInput, Image,Picker,ScrollView,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,} from 'react-native';
import { Alert } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import { Switch} from 'react-native'
import * as shape from 'd3-shape'
import Logo from '../logo'
import LinearGradient from 'react-native-linear-gradient';


export default class  Sell  extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    
    this.state = {
      dataSource:[],
      switchValue:false,
      cityItems:["US Doller,Indian,Eutherium"],
      Amount: 'USDoller',
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
      yesbackgroundcolor:'#4286f4',
      nobackgroundcolor:'#fff',
      yesfontcolor:'#fff',
      nofontcolor:'#4286f4',
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
       <LinearGradient colors= {['#354e91','#21284a','#21284a']} style={styles.Maincontainers}>  
      <LinearGradient
   colors={['#1a5fe1','#00a5ff','#81DCF9']} style={{height:200,opacity:0.9}}>    
      <LinearGradient
   colors={['#1a5fe1','#81DCF9','#81DCF9']} style={{height:230,marginRight:30,marginTop:20}}>
 <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',marginTop:20}}>
          <Image style={{marginRight:10,width: 30, height: 30,resizeMode:'contain'}}   source={require("./assets/app4.png")} ></Image>     
          <Text style={{fontSize:18,fontWeight:'bold',color:'#fff'}}>Exchange</Text>
          </View>      
          <Text style={{fontSize:12,fontWeight:'bold',color:'#fff',marginTop:10}}>Sell</Text> 
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image style={{width: 20, height: 20,resizeMode:'contain'}}   source={require("./assets/minus.png")} ></Image> 
          </View>
          <View style={{marginLeft:10}}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>2.258978</Text> 
          </View>
        
          </View> 
          
          <View style={{flexDirection:'row',justifyContent:'center',width:'100%',marginTop:20,alignItems:'center'}}>       		
				 <Text style={{fontSize:15,fontWeight:'bold',color:'#4d6bc1'}}>880.889</Text>                                          
        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',marginLeft:20}}>
        <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:12}}>{this.state.Amount}</Text>
        <Image  style={{width: 10, height: 10,marginLeft:10,tintColor:'#4e649f'}}  source={require("./assets/down_arrow.png")} ></Image>
        <Picker style={{ position:'absolute', top: 0, width: 500, height: 3000 }}
   selectedValue={this.state.Amount}
  onValueChange={(itemValue, itemIndex) => this.selectedAmount(itemValue,itemIndex)}>
  <Picker.Item label="Inr" value="Inr" />
  <Picker.Item label="USA" value="USA" />
  <Picker.Item label="German" value="German" />
  <Picker.Item label="Italy" value="Italy" />
  <Picker.Item label="Aus" value="Aus" />
  <Picker.Item label="India" value="India" />
  <Picker.Item label="Aus" value="Aus" />
  </Picker>
        </View>
        
  
     
                 </View>            
          </View>
         <View>  
          </View>
          </LinearGradient>    
         


          </LinearGradient> 
          
<View style={{flex:1}}>

          <LinearGradient   colors= {['transparent','transparent','transparent']} style={{marginTop:60}} >
   <ScrollView>
<View style={{marginTop:20}}>   

<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
 
<View style={{justifyContent:'space-between',flexDirection:'row',marginLeft:20,marginRight:20}}>  
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10}}>Fraction</Text>  
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10,marginRight:90}}>1</Text> 
</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{justifyContent:'space-between',flexDirection:'row',marginLeft:20,marginRight:20}}>  
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10}}>Fraction Value</Text>  
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10,marginRight:90}}>1</Text> 
</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{justifyContent:'space-between',flexDirection:'row',marginLeft:20,marginRight:20}}>  
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10}}>Market Rate</Text>  
<View style={{flexDirection:'row'}}>
<TouchableOpacity onPress={this.yesTap}>
<View style={{width:70,height:25,borderRadius:6,backgroundColor:this.state.yesbackgroundcolor,justifyContent:'center'}}>
<Text style={{fontSize:12,fontWeight:'bold',color:this.state.yesfontcolor,marginLeft:20}}>Yes</Text> 
</View>
</TouchableOpacity>
<TouchableOpacity onPress={this.NoTap}>
<View style={{width:50,height:25,borderRadius:6,backgroundColor:this.state.nobackgroundcolor,marginLeft:-10,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:12,fontWeight:'bold',color:this.state.nofontcolor}}>No</Text> 
</View>
</TouchableOpacity>
</View>

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{justifyContent:'space-between',flexDirection:'row',marginLeft:20,marginRight:20}}>  
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10}}>Minimum Value</Text>  
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10,marginRight:90}}>0.000</Text> 
</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',
    borderBottomWidth: 1,
  }}
/>
<View style={{backgroundColor:'transparent'}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<View style={{flexDirection:'row'}}>  
<Text style={{fontSize:15,fontWeight:'bold',color:'#fff',marginTop:10,marginBottom:10}}>Payment Methods</Text>  
<Image style={{marginLeft:10,width: 20, height: 20,marginTop:10}}   source={require("./assets/plus.png")} ></Image>
</View>
</View>
<LinearGradient  colors={['#81DCF9','#00a5ff','#1a5fe1']}  style={{width:'90%',height:200, backgroundColor:'#4286f4',borderTopRightRadius:20,borderTopLeftRadius:20,borderBottomRightRadius:20, borderBottomLeftRadius:20, marginLeft:20,marginRight:30,borderBottomWidth:15,borderBottomColor:'#42f4f4'}}>
<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30,marginTop:30}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>currency</Text> 
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>Tittle</Text> 
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>Plat.Elect</Text> 
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30,marginTop:10}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>BTC</Text> 
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>Minimum value</Text> 
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>paypal</Text> 
</View>
<View style={{flexDirection:'row',marginLeft:30,marginRight:30,marginTop:30}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>Description</Text> 
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff',marginLeft:70}}>Country</Text> 
 
</View>
<View style={{flexDirection:'row',marginTop:10,marginLeft:30,marginRight:30}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff',}}>Transferdata...</Text> 
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff',marginLeft:50}}>Cloumbia</Text> 


</View>
<View style={{position:'absolute',left:0,right:15,top:0,bottom:0,alignItems:'flex-end'}}>
<Image style={{width: 120,opacity:0.9, height: "100%",tintColor:'#fff',resizeMode:'contain'}}   source={require("./assets/three.png")} ></Image>  
</View>
</LinearGradient>
<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:70,marginTop:20}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10,marginBottom:10}}>I accept terms and conditions</Text> 
<Switch
          trackColor={{true: '#25e2cd'}}
          style={{marginRight:30}}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
</View>
<View style={{flexDirection:'row',marginLeft:20,marginRight:20,marginBottom:300,marginTop:20}}>
<LinearGradient colors={['#F74B71','#FD6A72','#FC686F']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{width:'50%',borderRadius:6, padding:10,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity>
<Text style={{color:'#fff'}}>Cancel</Text>
</TouchableOpacity>
</LinearGradient>
<LinearGradient  colors={['#26e3ca','#36deaf','#41da9c']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{width:'50%',borderRadius:6,padding:10,backgroundColor:'green',justifyContent:'center',alignItems:'center',marginLeft:10}}>
<TouchableOpacity onPress={()=>this.props.navigation.navigate('Payment')}>
<Text style={{color:'#fff'}}>Accept</Text></TouchableOpacity>
</LinearGradient>
</View>
</View>
   
</View>
    </ScrollView>    
</LinearGradient>
   
      
    
         <LinearGradient colors={['#81DCF9','#5099f0','#1a5fe1']} style={{  width: 100,marginLeft:20,position:'absolute',top:-20,left:120,right:100,bottom:50,
    height: 100,
    borderRadius: 100/2,
    backgroundColor:this.state.app1color,justifyContent:'center',alignItems:"center"}} >
   
    <Image  style={{width: 60, height: 60,resizeMode:'contain'}}  source={require('./assets/sell.png')} ></Image>
    
            
          </LinearGradient> 
 
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
      </View>
      </LinearGradient>
     </View>
  
    
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
      selectedAmount=(item,index)=>{
        this.setState({
          Amount:item
        })
      }
      yesTap=()=>{
this.setState({
  yesbackgroundcolor:'#4286f4',
  nobackgroundcolor:'#fff',
  yesfontcolor:'#fff',
  nofontcolor:'#4286f4'
})
      }
      NoTap=()=>{
        this.setState({
          yesbackgroundcolor:'#fff',
          nobackgroundcolor:'#4286f4',
          yesfontcolor:'#4286f4',
          nofontcolor:'#fff'
        })
      }
}



const styles = StyleSheet.create({
 
  Maincontainers: {
    flex: 1,   
    backgroundColor: '#fff',
  },
  containers: {
   backgroundColor: '#fff',
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