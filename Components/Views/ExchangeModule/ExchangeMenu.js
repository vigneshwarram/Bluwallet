import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet,TextInput, Image,Picker,FlatList,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,Animated} from 'react-native';
import { Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {ExchangeList} from '../Api/ExchangeRequest'
import {ResponseSuccessStatus,InvalidResponse,DataUndefined,InvalidToken,TokenExpired} from '../Utils.js/Constant'

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

       publishcolor1:'#4262B5',
       publishcolor2:'#3A549B',
       publishcolor3:'#314279',
       publishcolor4:'#2C3765',
       publishcolor5:'#2A335E',

       Exchangecolor1:'#4262B5',
       Exchangecolor2:'#3A549B',
       Exchangecolor3:'#314279',
       Exchangecolor4:'#2C3765',
       Exchangecolor5:'#2A335E',

       ExchangeIcon:require("../assets/exchangecolor.png"), 
       PublicIcon:require('../assets/puplishcolor.png'),
       BuyIcon:require('../assets/buy.png'),
       SellIcon:require('../assets/sell.png'),
       Admin:'Admin',
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
      pupblictintcolor:'#ABB3D0',
      exchangetintcolor:'#ABB3D0',
    };
  
  }
  
  componentDidMount()
  {
    this.GetData()
  }
  GetData=()=>
  {
    ExchangeList(this.ExchangeListResponse)
  }
  ExchangeListResponse=(data)=>
{
  //this.hide()
  if(data!=DataUndefined)
  {
    if(data.status===ResponseSuccessStatus)
    {
      let FinalResult=[];
       FinalResult=this.search(0,data.fetchExchageRequestDTO.exchangeDTOList)
     this.setState({dataSource:FinalResult})
    }
    else if(data.error===InvalidToken)
    {
      Alert.alert(
        'Error',
        TokenExpired,
        [
          {text: 'OK', onPress: () => this.props.navigation.navigate("Login")},
        ],
  
      );
    }
    else
    {
      Alert.alert(InvalidResponse)
    }
  }
}
search = (key, inputArray) => {
  console.log('inputArray length',inputArray.length)
  let SearchArray=[]
  for (let i=0; i < inputArray.length; i++) {
      if (inputArray[i].exchangeType === key ||inputArray[i].exchangeType === 'ETH_BTC_USER' && inputArray[i].status===1) {
        SearchArray.push(inputArray[i])
      }
      
  }
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
      
      <LinearGradient colors= {['#354E91','#314682','#283563','#222B50','#21284A']} style={{height:'100%'}}>
      
<View style={{flex:0.3}}>

<LinearGradient
   colors={['#1a5fe1','#00a5ff','#81DCF9',]} style={{opacity:0.9}}>    
      <LinearGradient
   colors={['#1a5fe1','#00a5ff','#81DCF9']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}  style={{height:'100%', marginRight:30,marginTop:30,opacity:1}}>
 <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',marginTop:10}}>
          <Image style={{marginRight:10,width: 18, height: 22,resizeMode:'contain'}}   source={require("../assets/app4.png")} ></Image>     
          <Text style={{fontSize:16,color:'#fff',fontFamily:'Exo2-Regular'}}>Exchange</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:10}}>
          <View>
          <Text style={{fontSize:12,color:'#fff',fontFamily:'Exo2-Regular'}}>Buy</Text>  
          <View
  style={{
    marginTop:5,
    width:'100%',
    borderBottomColor: '#fff',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>  
          </View>
         <View>
         <Text style={{fontSize:12,color:'#fff',marginLeft:30,fontFamily:'Exo2-Regular'}}>Sell</Text>
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
          <View style={{width:'80%',borderRadius:25,borderWidth:1,borderColor:'#fff',marginTop:5,marginBottom:20, justifyContent:'space-between',flexDirection:'row'}}>
<View style={{flexDirection:'row',marginLeft:20}}>
<Image  style={{width: 20, height: 20,marginTop:10}}  source={require("../assets/Searchicon.png")} ></Image> 
<TextInput
          style={{height: 40,width:100,color:'#ffffff',fontFamily:'Exo2-Regular'}}
       placeholderTextColor='#ffffff'
       keyboardType='numeric'
          placeholder="Amount"
          maxLength={10}
        />
</View>
<View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
        <Text style={{color:'#fff',opacity:1,fontSize:12,fontFamily:'Exo2-Regular'}}>{this.state.Amount}</Text>
        <Image  style={{width: 10, height: 10,resizeMode:'contain',marginLeft:10,marginRight:10}}  source={require("../assets/darrow.png")} ></Image> 
        <Picker style={{ position:'absolute', top: 0, width: 1000, height: 5000}}
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
<Image  style={{width: 20, height: 20,resizeMode:'contain'}}  source={require("../assets/tv.png")} ></Image> 
</View>
<View style={{justifyContent:'center',flexDirection:'row',alignItems:'center',marginLeft:20,paddingTop:5,paddingBottom:5}}>
        <Text style={{color:'#FFFFFF',opacity:1,fontSize:11,fontFamily:'Exo2-Regular'}}>{this.state.Admin}</Text>
        <Image  style={{width: 9, height: 7,resizeMode:'contain',marginLeft:10,marginRight:10}}  source={require("../assets/darrow.png")} ></Image> 
        <Picker style={{ position:'absolute', top: 0, width: 1000, height: 1000}}
   selectedValue={this.state.Admin}
  onValueChange={(itemValue, itemIndex) => this.selectedPlatform(itemValue,itemIndex)}>
  
  <Picker.Item label="Admin" value="Admin" />
  <Picker.Item label="Users" value="Users" />
  </Picker>
        </View>
        
</View>

  
          </View>
          </View>   
          
          </LinearGradient>    
         


          </LinearGradient>  
</View>
     <View style={{flex:0.7,marginTop:70}}>
     
     <ScrollView>
     <View>
    
     
    <View style={{flexDirection:'row',padding:10,justifyContent:'space-between',marginLeft:25,marginRight:25}}>
   
    <Animated.View>
    <TouchableOpacity onPress={this.buyClick}>
    <View >
    <LinearGradient style={{backgroundColor:'transparent',width:130, height:130,borderWidth:1,borderColor:'#415b94',borderRadius:20,justifyContent:'center',alignItems:'center'}}
   colors={[this.state.Buycolor1,this.state.Buycolor2,this.state.Buycolor3]}>
     <Image style={{width:80, height: 80,resizeMode:'contain',opacity:this.state.buyOpacity,tintColor:this.state.Buytintcolor}}   source={this.state.BuyIcon} ></Image>  
    <Text style={{fontSize:12,color:this.state.Buytintcolor,fontFamily:'Exo2-Regular'}}>To Buy</Text>
   </LinearGradient>
    </View>
    </TouchableOpacity>
    </Animated.View>
    <TouchableOpacity onPress={this.SellClick}>
    <View >
    <LinearGradient style={{backgroundColor:'transparent',width:130,height:130,marginLeft:20, borderWidth:1,borderColor:'#415b94',borderRadius:20,justifyContent:'center',alignItems:'center'}}
   colors={[this.state.sellcolor1,this.state.sellcolor2,this.state.sellcolor3]}>
    <Image style={{width: 80, height: 80,resizeMode:'contain',opacity:this.state.sellOpacity,tintColor:this.state.selltintcolor}}   source={this.state.SellIcon} ></Image> 
    <Text style={{fontSize:12,color:this.state.selltintcolor,fontFamily:'Exo2-Regular'}}>To Sell</Text>
    </LinearGradient>
    </View>
    </TouchableOpacity>
    </View>  
    <View style={{flexDirection:'row',padding:10,justifyContent:'space-between',marginLeft:25,marginRight:25}}>
    <TouchableOpacity onPress={this.publicClick}>
    <View >
    <LinearGradient style={{backgroundColor:'transparent',width:130, height:130,borderWidth:1,borderColor:'#415b94',borderRadius:20,justifyContent:'center',alignItems:'center'}}
   colors={[this.state.publishcolor1,this.state.publishcolor2,this.state.publishcolor3,this.state.publishcolor4,this.state.publishcolor5]}>
     <Image style={{width:80, height: 80,resizeMode:'contain',opacity:this.state.pupblicOpacity,tintColor:this.state.pupblictintcolor}}   source={this.state.PublicIcon} ></Image>  
    <Text style={{fontSize:12,color:this.state.pupblictintcolor,fontFamily:'Exo2-Regular'}}>Publications</Text>
   </LinearGradient>
    
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={this.ExchangeClick}>
    <View >
    <LinearGradient style={{backgroundColor:'transparent',width:130,height:130,marginLeft:20, borderWidth:1,borderColor:'#415b94',borderRadius:20,justifyContent:'center',alignItems:'center'}}
   colors={[this.state.Exchangecolor1,this.state.Exchangecolor2,this.state.Exchangecolor3,this.state.Exchangecolor4,this.state.Exchangecolor5]}>
     <Image style={{width: 80, height: 80,resizeMode:'contain',opacity:this.state.exchangeOpacity,tintColor:this.state.exchangetintcolor}}   source={this.state.ExchangeIcon} ></Image> 
    <Text style={{fontSize:12,color:this.state.exchangetintcolor,fontFamily:"Exo2-Regular"}}>Exchange</Text>
   </LinearGradient>
    
    </View>
    </TouchableOpacity>
    </View>  
    <View  style={{position: 'absolute', left: 0, right: 0, bottom: 80, justifyContent: 'center', alignItems: 'center'
        }}>
              <Image  style={{width: 100, height: 150,resizeMode:'contain'}}  source={require("../assets/tree.png")} ></Image> 
        </View>
    </View>
  
        <View style={{flex:1}}>
        <FlatList  style={{marginTop:10}}
      ItemSeparatorComponent={this.space}
      data={this.state.dataSource}
          renderItem={({item,separators})  =>
        <TouchableOpacity onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight} onPress = { this.clickedItemText.bind(this, item)}>
      <View style={{marginLeft:30,marginRight:30, shadowOffset: { width: 10, height: 10 }, 
  borderBottomWidth: 0,
  borderRadius:25}}>
  <LinearGradient
    colors={['#4262B5', '#3A549B','#314279','#2C3765','#2A335E']}  style={{ borderRadius:25}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:20,}}>
    <View style={{flexDirection:'row'}}>
      <View style={{
     justifyContent:'center',alignItems:"center"}} >
          <Image  style={{width: 30, height: 30}}  source={require("../assets/exchange.png")} ></Image>  
    

          </View>
        
          <View style={{marginLeft:30,justifyContent:
        'space-around'}}>
        <View style={{paddingBottom:10}}>
        <Text  style={{marginRight:20,color:(item.status==1)?'#fff':'#fff',fontFamily:"Exo2-Bold",}}>{(item.status==1)?'Exchanged':"Exchanged"}</Text>
        </View>
    <View>
    <Text  style={{marginRight:20,color:'#5496FF',fontFamily:'Exo2-Regular'}}>{item.date1}</Text> 
    </View>
        
     </View>
      </View>
      <View>
      <View style={{justifyContent:'space-between',paddingBottom:10}}>    
     
     <Text  style={{marginRight:20,color:'#fff',fontFamily:'Exo2-Regular'}}>{item.totalAmount}</Text>    
    </View>
    <View style={{justifyContent:'space-between'}}>    
    
    <Text  style={{marginRight:20,color:'#5496FF',fontFamily:'Exo2-Regular'}}>{item.transactionFee}ETH</Text> 
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
            setTimeout(this.navigateBuy,500)
           
}
navigateBuy=()=>
{
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
            setTimeout(this.navigateSend,500)
           
}
navigateSend=()=>
{
  this.props.navigation.navigate('Sell')
}
publicClick=()=>{
  this.setState({
    pupblicOpacity:1,
    pupblictintcolor:'#fff',
    publishcolor1:'#97F5F9',
    publishcolor2:'#7ED5F6',
    publishcolor3:'#7ED5F6',
    publishcolor4:'#529DF3',
    publishcolor5:'#4781DF'
            })
            this.ExchangeReset()
            this.BuyReset()
            this.SellReset()
            setTimeout(this.navigatePublic,500)
           
           
}
navigatePublic=()=>
{
  if(this.state.Admin=='Admin')
  {
    this.props.navigation.navigate('Publish', {Exchange_Type: this.state.Admin })
  }
  else
  {
    this.props.navigation.navigate('PuplishUser',  {Exchange_Type: this.state.Admin })
  }
}


      ExchangeClick=()=>{
         
        this.setState({
          exchangeOpacity:1,
          exchangetintcolor:'#fff',
Exchangecolor1:'#97F5F9',
Exchangecolor2:'#7ED5F6',
Exchangecolor3:'#7ED5F6',
Exchangecolor4:'#529DF3',
Exchangecolor5:'#4781DF'
        })
        this.BuyReset()
        this.Publicreset()
        this.SellReset()
        setTimeout(this.navigateExchange,500)
       

      }
      navigateExchange=()=>
      {
        this.props.navigation.navigate('Exchange', {Exchange_Type: this.state.Admin })
        console.log("exchangeType", this.state.Admin)
      }

      ExchangeReset=()=>{
        this.setState({
          exchangeOpacity:0.5,
          exchangetintcolor:'#ABB3D0',
          Exchangecolor1:'#4262B5',
          Exchangecolor2:'#3A549B',
          Exchangecolor3:'#314279',
          Exchangecolor4:'#2C3765',
          Exchangecolor5:'#2A335E'
          
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
          pupblictintcolor:'#ABB3D0',
        publishcolor1:'#4262B5',
        publishcolor2:'#3A549B',
        publishcolor3:'#314279',
        publishcolor4:'#2C3765',
        publishcolor5:'#2A335E',
     
                  })

      }
      selectedPlatform=(item,index)=>{
this.setState({
  Admin:item
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