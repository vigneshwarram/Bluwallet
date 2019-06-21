import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet,TextInput, Image,Picker,FlatList,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,Animated} from 'react-native';
import { Alert } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Logo from '../logo'
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

export default class  ExchangeMenu  extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    
    this.state = {
      dataSource:[],
      cityItems:["US Doller,Indian,Eutherium"],
      Amount:'COP',
       Buycolor1:'transparent',
       Buycolor2:'transparent',
       Buycolor3:'transparent',

       sellcolor1:'transparent',
       sellcolor2:'transparent',
       sellcolor3:'transparent',

       publishcolor1:'transparent',
       publishcolor2:'transparent',
       publishcolor3:'transparent',

       Exchangecolor1:'transparent',
       Exchangecolor2:'transparent',
       Exchangecolor3:'transparent',

       ExchangeIcon:require("./assets/exchangenew.png"), 
       PublicIcon:require('./assets/publication.png'),
       BuyIcon:require('./assets/buy.png'),
       SellIcon:require('./assets/sell.png'),
       platform:'platform',
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
      app5color:'#5099f0',
      buyOpacity:0.5,
      sellOpacity:0.5,
      pupblicOpacity:0.5,
      exchangeOpacity:0.5,
      Buytintcolor:'#4072af',
      selltintcolor:'#4072af',
      pupblictintcolor:'#4072af',
      exchangetintcolor:'#4072af',
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
    this.props.navigation.navigate('Price')
  }
  VaultTouch=()=>{
    this.props.navigation.navigate('Vault');
  }
  App4Touch=()=>{
   
  }
  App5Touch=()=>{
   
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
   colors={['#1a5fe1','#00a5ff','#81DCF9',]} style={{height:'30%',opacity:0.9}}>    
      <LinearGradient
   colors={['#1a5fe1','#5DBCD2','#81DCF9']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}  style={{height:'100%',marginRight:30,marginTop:30,opacity:1}}>
 <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',marginTop:20}}>
          <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/app4.png")} ></Image>     
          <Text style={{fontSize:20,fontWeight:'bold',color:'#fff',}}>Exchange</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:10}}>
          <View>
          <Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>Purchases</Text>  
          <View
  style={{
    marginLeft:10,marginRight:10,
    marginTop:5,
    width:'50%',
    borderBottomColor: '#fff',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>  
          </View>
         <View>
         <Text style={{fontSize:12,fontWeight:'bold',color:'#fff',marginLeft:30}}>Sales</Text>
         <View
  style={{
    marginLeft:30,marginRight:30,
    marginTop:5,
    borderBottomColor: '#fff',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>  
         </View>
          
          </View>
          <View style={{width:'80%',borderRadius:25,borderWidth:1,borderColor:'#fff',marginTop:10,marginBottom:20, justifyContent:'space-between',flexDirection:'row'}}>
<View style={{flexDirection:'row',marginLeft:20}}>
<Image  style={{width: 20, height: 20,marginTop:10}}  source={require("./assets/Searchicon.png")} ></Image> 
<TextInput
          style={{height: 40,}}
       placeholderTextColor='#ffffff'
          placeholder="Amount"
          
        />
</View>
<View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
        <Text style={{color:'#fff',fontWeight:'bold',opacity:1,fontSize:12}}>{this.state.Amount}</Text>
        <Image  style={{width: 10, height: 10,resizeMode:'contain',marginLeft:10,marginRight:10}}  source={require("./assets/darrow.png")} ></Image> 
        <Picker style={{ position:'absolute', top: 0, width: 1000, height: 1000}}
   selectedValue={this.state.Amount}
  onValueChange={(itemValue, itemIndex) => this.selectedCop(itemValue,itemIndex)}>
  
  <Picker.Item label="COP" value="COP" />
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
          <View style={{width:'45%',borderRadius:20,borderWidth:1,borderColor:'#fff',marginTop:2, justifyContent:'space-between',flexDirection:'row'}}>
<View style={{flexDirection:'row',marginLeft:20}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Image  style={{width: 20, height: 20,resizeMode:'contain'}}  source={require("./assets/tv.png")} ></Image> 
</View>
<View style={{justifyContent:'center',flexDirection:'row',alignItems:'center',marginLeft:20}}>
        <Text style={{color:'#fff',opacity:1,fontSize:10}}>{this.state.platform}</Text>
        <Image  style={{width: 10, height: 10,resizeMode:'contain',marginLeft:10,marginRight:10}}  source={require("./assets/darrow.png")} ></Image> 
        <Picker style={{ position:'absolute', top: 0, width: 1000, height: 1000}}
   selectedValue={this.state.Amount}
  onValueChange={(itemValue, itemIndex) => this.selectedPlatform(itemValue,itemIndex)}>
  
  <Picker.Item label="COP" value="COP" />
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
          </View>   
          
          </LinearGradient>    
         


          </LinearGradient>    
    <LinearGradient  colors= {['transparent','transparent','transparent']} style={{marginTop:'10%',position:'absolute',height:'100%',
        top:'30%',left: 0,
        right: 0}}>
    <ScrollView style={{paddingBottom:10}}>
    <View style={{flexDirection:'row',padding:10,justifyContent:'space-between',marginLeft:20,marginRight:20}}>
    <Animated.View>
    <TouchableOpacity onPress={this.buyClick}>
    <View >
    <LinearGradient style={{backgroundColor:'transparent',width:130, height:130,borderWidth:1,borderColor:'#415b94',borderRadius:20,justifyContent:'center',alignItems:'center'}}
   colors={[this.state.Buycolor1,this.state.Buycolor2,this.state.Buycolor3]}>
     <Image style={{width:80, height: 80,resizeMode:'contain',opacity:this.state.buyOpacity,tintColor:this.state.Buytintcolor}}   source={this.state.BuyIcon} ></Image>  
    <Text style={{fontSize:12,fontWeight:'bold',color:this.state.Buytintcolor}}>To Buy</Text>
   </LinearGradient>
    </View>
    </TouchableOpacity>
    </Animated.View>
    <TouchableOpacity onPress={this.SellClick}>
    <View >
    <LinearGradient style={{backgroundColor:'transparent',width:130,height:130,marginLeft:20, borderWidth:1,borderColor:'#415b94',borderRadius:20,justifyContent:'center',alignItems:'center'}}
   colors={[this.state.sellcolor1,this.state.sellcolor2,this.state.sellcolor3]}>
    <Image style={{width: 80, height: 80,resizeMode:'contain',opacity:this.state.sellOpacity,tintColor:this.state.selltintcolor}}   source={this.state.SellIcon} ></Image> 
    <Text style={{fontSize:12,fontWeight:'bold',color:this.state.selltintcolor}}>To Sell</Text>
    </LinearGradient>
    </View>
    </TouchableOpacity>
    </View>  
    <View style={{flexDirection:'row',padding:10,justifyContent:'space-between',marginLeft:20,marginRight:20}}>
    <TouchableOpacity onPress={this.publicClick}>
    <View >
    <LinearGradient style={{backgroundColor:'transparent',width:130, height:130,borderWidth:1,borderColor:'#415b94',borderRadius:20,justifyContent:'center',alignItems:'center'}}
   colors={[this.state.publishcolor1,this.state.publishcolor2,this.state.publishcolor3]}>
     <Image style={{width:80, height: 80,resizeMode:'contain',opacity:this.state.pupblicOpacity,tintColor:this.state.pupblictintcolor}}   source={this.state.PublicIcon} ></Image>  
    <Text style={{fontSize:12,fontWeight:'bold',color:this.state.pupblictintcolor}}>Publications</Text>
   </LinearGradient>
    
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={this.ExchangeClick}>
    <View >
    <LinearGradient style={{backgroundColor:'transparent',width:130,height:130,marginLeft:20, borderWidth:1,borderColor:'#415b94',borderRadius:20,justifyContent:'center',alignItems:'center'}}
   colors={[this.state.Exchangecolor1,this.state.Exchangecolor2,this.state.Exchangecolor3]}>
     <Image style={{width: 80, height: 80,resizeMode:'contain',opacity:this.state.exchangeOpacity,tintColor:this.state.exchangetintcolor}}   source={this.state.ExchangeIcon} ></Image> 
    <Text style={{fontSize:12,fontWeight:'bold',color:this.state.exchangetintcolor}}>Exchange</Text>
   </LinearGradient>
    
    </View>
    </TouchableOpacity>
    </View>  
    <View  style={{justifyContent:'center',alignItems:'center', top:100,marginBottom:10,backgroundColor:'transparent',position:'absolute',left:150
        }}>
              <Image  style={{width: 100, height: 150}}  source={require("./assets/threelogo.png")} ></Image> 
        </View>
        <View style={{flex:1,marginBottom:90}}>
        <FlatList  style={{marginTop:10}}
      ItemSeparatorComponent={this.space}
      data={this.state.dataSource}
          renderItem={({item,separators})  =>
        <TouchableOpacity onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight} onPress = { this.clickedItemText.bind(this, item)}>
      <View style={{marginLeft:30,marginRight:30, shadowOffset: { width: 10, height: 10 },
   borderWidth: 1,
  borderColor: '#394d88',
  borderBottomWidth: 0,
  shadowColor: '#394d88',
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 24,
  borderRadius:25}}>
  <LinearGradient
   colors={['#374c8d', '#32437b','#2c3868']}  style={{ borderRadius:25}}>
        <View style={{alignItems:'center',flexDirection:'row',padding:15}}>
        {(
          (item.Status!='Completed')?<View style={{
     justifyContent:'center',alignItems:"center"}} >
          <Image  style={{width: 30, height: 30}}  source={require("./assets/exchange.png")} ></Image>  
          </View>:  <View style={{
     justifyContent:'center',alignItems:"center"}} >
          <Image  style={{width: 30, height: 30}}  source={require("./assets/exchange.png")} ></Image>  
          </View>

        )}
      
          <View style={{flexDirection:'column',marginLeft:30}}>
          <View style={{flex:1, flexDirection: 'row',justifyContent:'space-between'}}>            
         <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#fff':'#fff'}}>{(item.Status!='Completed')?'Exchanged':"Exchanged"}</Text>       
     <View style={{flexDirection:'row'}}>
     <Image style={{width: 25,marginTop:10, height: 25}}   source={require("./assets/plusblue.png")} ></Image>    
     <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#fff':'#fff'}}>$ 9060</Text> 
     </View>
        
     </View>  
     <View style={{flex:1, flexDirection:'row',justifyContent:'space-between'}}>
 
            
         <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#4d6bc1':'#4d6bc1',fontWeight:'bold'}}>Feb 23 2019  . 11.05</Text>       
     
      <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#4d6bc1':'#4d6bc1'}}>5.4587ETH</Text>    
     </View>  
          </View>
         
        </View>
</LinearGradient>
  </View>
       
  </TouchableOpacity>  
       }
    />
        </View>

   
   <View
  style={{
    marginLeft:30,marginRight:30,
    marginTop:10,
    borderBottomColor: '#000000',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>  
  
    </ScrollView>

</LinearGradient>


        <View style={{ width: '100%',
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

<Image style={{width:20,height:20}}   source={this.state.app3icon} ></Image>

    
   </View>   

  
   </TouchableOpacity>
   <TouchableOpacity onPress={this.App4Touch}>

   <View style={{  width: 40,marginLeft:10,backgroundColor:this.state.app4color,
height: 40,
borderRadius: 40/2,
justifyContent:'center',alignItems:"center"}} >

<Image style={{width:20,height:20}}   source={this.state.app4icon} ></Image> 

     
   </View>  
  
   </TouchableOpacity> 

          <TouchableOpacity   onPress={this.DashBoardTouch}>
       
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
      
      <View style={{  width: 40,marginLeft:20,
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
      selectedCop=(item,itemIndex)=>{
        this.setState({
          Amount:item
        })
      }
buyClick=()=>{
  this.setState({
    Buycolor1:'#81DCF9',
    Buycolor2:'#00a5ff',
    Buycolor3:'#1a5fe1',
    buyOpacity:1,
    Buytintcolor:'#fff'
            })
            this.ExchangeReset()
            this.Publicreset()
            this.SellReset()
            this.props.navigation.navigate('Buy')
}
SellClick=()=>{
  this.setState({
    sellOpacity:1,
    selltintcolor:'#fff',
    sellcolor1:'#81DCF9',
    sellcolor2:'#00a5ff',
    sellcolor3:'#1a5fe1'
            })
            this.ExchangeReset()
            this.Publicreset()
            this.BuyReset()
            this.props.navigation.navigate('Sell')
}
publicClick=()=>{
  this.setState({
    pupblicOpacity:1,
    pupblictintcolor:'#fff',
    publishcolor1:'#81DCF9',
    publishcolor2:'#00a5ff',
    publishcolor3:'#1a5fe1'
            })
            this.ExchangeReset()
            this.BuyReset()
            this.SellReset()
            this.props.navigation.navigate('Publish')
}

      ExchangeClick=()=>{
         
        this.setState({
          exchangeOpacity:1,
          exchangetintcolor:'#fff',
Exchangecolor1:'#81DCF9',
Exchangecolor2:'#00a5ff',
Exchangecolor3:'#1a5fe1'
        })
        this.BuyReset()
        this.Publicreset()
        this.SellReset()
        this.props.navigation.navigate('Exchange')

      }


      ExchangeReset=()=>{
        this.setState({
          exchangeOpacity:0.5,
          exchangetintcolor:'#4072af',
          Exchangecolor1:'transparent',
          Exchangecolor2:'transparent',
          Exchangecolor3:'transparent'
                  })

      }
      SellReset=()=>{
        this.setState({
          sellOpacity:0.5,
          selltintcolor:'#4072af',
          sellcolor1:'transparent',
          sellcolor2:'transparent',
          sellcolor3:'transparent'
                  })

      }
      BuyReset=()=>{
        this.setState({
          buyOpacity:0.5,
          Buytintcolor:'#4072af',
         Buycolor1:'transparent',
         Buycolor2:'transparent',
         Buycolor3:'transparent',
     
                  })

      }
      Publicreset=()=>{
        this.setState({
          pupblicOpacity:0.5,
          pupblictintcolor:'#4072af',
        publishcolor1:'transparent',
        publishcolor2:'transparent',
        publishcolor3:'transparent',
     
                  })

      }
      selectedPlatform=(item,index)=>{
this.setState({
  platform:item
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