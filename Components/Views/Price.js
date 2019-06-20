import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,TextInput,FlatList,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,Picker} from 'react-native';
import { Alert } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Logo from '../logo'
import LinearGradient from 'react-native-linear-gradient';

export default class Price  extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    
    this.state = {
      dataSource:[],
      cityItems:["US Doller,Indian,Eutherium"],
      Amount: 'USDoller',
      animate:false,
      app1icon:require('./assets/app1white.png'),
      app6icon:require('./assets/app6.png'),
      app2icon:require('./assets/app2.png'),
      app3icon:require('./assets/app3-blue.png'),
      app4icon:require('./assets/app4.png'),
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
      app4color:'#5099f0',
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
  ProfileTouch=()=>{
    this.props.navigation.navigate('Profile');
  }
  VaultTouch=()=>{
    this.setState({
      app2color:'#fff',
      app2icon:require('./assets/app2.png')    
    })
    this.props.navigation.navigate('Vault');
  }
  ExchangeTouch=()=>{
    this.props.navigation.navigate('ExchangeMenu')
  }
  DashBoardTounch=()=>{
    this.props.navigation.navigate('DashBoard',{
      DashBoardPopup: false,
    })
  }
  ProfileTouch=()=>{
    this.props.navigation.navigate('Profile')
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
   colors={['#1a5fe1','#00a5ff','#25e2cd']} style={{height:200,opacity:0.9}}>     
      <LinearGradient
   colors={['#1a5fe1','#00a5ff','#81DCF9']} style={{height:210,marginRight:30,marginTop:20}}>
 <View>
 <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',marginTop:10}}>
          <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/app3.png")} ></Image>     
          <Text style={{fontSize:18,fontWeight:'bold',color:'#fff'}}>Price</Text>
          </View>      
          <View style={{flexDirection: 'row',marginTop:20,justifyContent:'space-around'}}>
         <View style={{justifyContent:'center',alignItems:'center'}}>
         <Text style={{fontSize:18,fontWeight:'bold',color:'#2939a8'}}>ETH</Text> 
         </View>
<Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}}>132.58</Text>      
        
<View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',marginLeft:20}}>
        <Text style={{color:'#3440b0',fontWeight:'bold',opacity:1,fontSize:18}}>{this.state.Amount}</Text>
        <Image  style={{width: 10, height: 10,marginLeft:10,resizeMode:'contain',tintColor:"#3440b0"}}  source={require("./assets/down_arrow.png")} ></Image>
        <Picker style={{ position:'absolute', top: 0, width: 500, height: 3000 }}
   selectedValue={this.state.Amount}
  onValueChange={(itemValue, itemIndex) => this.selectedAmount(itemValue,itemIndex)}>
  
  <Picker.Item label="USDoller" value="USDoller" />
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
         
          <AreaChart style={{ height: 75,backgroundColor:'transparent',marginTop:10}}
                data={data}
                showGrid={ false }
                curve={shape.curveNatural}
                svg={{ fill: '#60d8e6',stroke:'#25e2cd' }}
            >
                <Grid/>
                <Line/>
            </AreaChart>


          </View>
          </LinearGradient>    
         

          
          </LinearGradient>          
    
<View style={{flex:1,marginTop:60}}>
<LinearGradient
  colors= {['transparent','transparent','transparent']} >
<View style={{}}>

 <View
  style={{
    marginLeft:30,marginRight:30,
    marginTop:20,
    borderBottomColor: '#2c548f',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
 <FlatList 
      ItemSeparatorComponent={this.space}
      data={this.state.dataSource}
          renderItem={({item,separators})  =>
        <TouchableOpacity onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight} onPress = { this.clickedItemText.bind(this, item)}>
      <View style={{backgroundColor:'transparent', borderRadius:6,}}>
        <View style={{flexDirection:'row', borderRadius:6,}}>
       <View style={{backgroundColor:'transparent',width:'40%',height:250,marginLeft:30,borderWidth:1,borderColor:'#5a73b6',shadowOffset: { width: 10, height: 10 },
   borderWidth: 1,
   borderRadius:6,
  borderBottomWidth: 0,
  shadowColor: '#7929ff',
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 24,
  }} >
       <LinearGradient style={{height:'100%'}}   colors={['#5489ff','#7929ff','#7929ff']}>
       <View style={{justifyContent:'center',alignItems:'center', position: 'absolute',
    top: 0,
    bottom: 0,
    left: 20,
    right: 0,}}>
    <Image  style={{width:200,height:200,
    resizeMode: 'contain',marginLeft:10,opacity:0.5}}   source={require("./assets/transparent-etherem.png")} ></Image>
    </View>
     {(item.Status!='Cancelled')? <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/micon.png")} ></Image>

        </View>:<View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/diablue.png")} ></Image>

        </View>}
        {(item.Status!='Cancelled')? <View style={{justifyContent:'center',alignItems:'flex-start',marginLeft:10,marginTop:30}}>
        
        <Text style={{color:'#5597ff',fontSize:15,fontWeight:'bold'}}>Monero</Text>
        <Text style={{color:'#5597ff',fontSize:15,marginTop:10,fontWeight:'bold'}}>XMR</Text>

        <Text style={{color:'#5597ff',fontSize:15,marginTop:30,fontWeight:'bold'}}>Price</Text>
        <Text style={{color:'#5597ff',fontSize:15,marginTop:10,fontWeight:'bold'}}>132.6</Text>
    </View>:
    <View style={{justifyContent:'center',alignItems:'flex-start',marginLeft:10,marginTop:30}}>
        
        <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Etherium</Text>
        <Text style={{color:'#fff',fontSize:15,marginTop:10,fontWeight:'bold'}}>ETH</Text>

        <Text style={{color:'#fff',fontSize:15,marginTop:30,fontWeight:'bold'}}>Price</Text>
        <Text style={{color:'#fff',fontSize:15,marginTop:10,fontWeight:'bold'}}>132.6</Text>
    </View>}
       
       </LinearGradient>
   
       </View>
       <View style={{backgroundColor:'transparent',width:'40%',height:250,marginLeft:20,borderWidth:1,borderColor:'#5a73b6',borderRadius:6}} >
       <LinearGradient style={{height:'100%'}}   colors={[(item.Status=='Completed')?'transparent':'transparent', (item.Status=='Completed')?'transparent':'transparent', (item.Status=='Completed')?'transparent':'transparent']}>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/m.png")} ></Image>

        </View>
        <View style={{justifyContent:'center',alignItems:'flex-start',marginLeft:10,marginTop:30}}>
        
            <Text style={{color:'#5597ff',fontSize:15,fontWeight:'bold'}}>Ripple</Text>
            <Text style={{color:'#5597ff',fontSize:15,marginTop:10,fontWeight:'bold'}}>Xrp</Text>

            <Text style={{color:'#5597ff',fontSize:15,marginTop:30,fontWeight:'bold'}}>Price</Text>
            <Text style={{color:'#5597ff',fontSize:15,marginTop:10,fontWeight:'bold'}}>121.6</Text>
        </View>
       </LinearGradient>
   
       </View>
         
        </View>
  </View>
       
  </TouchableOpacity>  
       }
    />

 </View>
 </LinearGradient>
</View>

<View style={{ width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', 
    bottom: 0,}}>
<LinearGradient colors= {['#1a5fe1','#00a5ff','#00a5ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{borderTopRightRadius:20,borderTopLeftRadius:20,height:80,width:'100%',justifyContent:'center',alignItems:'center'}} >
    <View style={{flexDirection: 'row',marginRight:20,marginLeft:20,alignItems:"center",justifyContent:'center'}}> 
    <TouchableOpacity >
   
          <View style={{  width: 40,marginLeft:10,backgroundColor:this.state.app1color,
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
          <TouchableOpacity onPress={this.DashBoardTounch}>
       
       <View style={{ width: 40,marginLeft:10,
 height: 40,
 borderRadius: 40/2,
justifyContent:'center',alignItems:"center"}} >

 <Image style={{width:20,height:20}}   source={this.state.app1icon} ></Image> 
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
          
          
       
         
          <TouchableOpacity onPress={this.CreditCardTouch}>
      
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
   justifyContent:'center',alignItems:"center"}} >
   
    <Image  style={{width: 20, height: 20}}  source={this.state.app6icon} ></Image>
    
            
          </View> 
       
       
          </TouchableOpacity>  
          <TouchableOpacity onPress={this.ProfileTouch}>
    
       <View style={{ width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
  justifyContent:'center',alignItems:"center"}} >
  
    <Image style={{width:20,height:20}}   source={this.state.app5icon} ></Image> 
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
      selectedAmount=(item,itemIndex)=>{
this.setState({
  Amount:item
})
      }
}



const styles = StyleSheet.create({
 
  Maincontainers: {
    flex: 1,   
    backgroundColor: '#2b3f74',
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