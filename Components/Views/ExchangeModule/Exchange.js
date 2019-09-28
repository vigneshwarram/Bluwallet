import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet,TextInput , Image,Picker,ImageBackground,ScrollView,Text,Animated,ActivityIndicator,TouchableOpacity,AsyncStorage,KeyboardAvoidingView,Easing} from 'react-native';
import { Alert } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import { Switch} from 'react-native'
import * as shape from 'd3-shape'
import Modal from "react-native-simple-modal";
import {StackActions} from 'react-navigation'
import Spinner from 'react-native-loading-spinner-overlay';
import { VaultSystemApi, CryptoInvestment, CryptoTypeInvestment } from '../Api/VaultSystemApi'
import Logo from '../../logo'
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import {CONVERT_USD,getEqualCryptoValueApi,ExchangeRequestsUrl} from '../Api/RequestUrl'
import {ExchangeList,ExchangeListLocal} from '../Api/ExchangeRequest'
import {ResponseSuccessStatus,InvalidResponse,DataUndefined,InvalidToken,TokenExpired} from '../Utils.js/Constant'
import LinearGradient from 'react-native-linear-gradient';

let crptoType="eth"
let roleid;
let ExchangeType='getuserdetails'
export default class  Buy  extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    AnimatedWidth=new Animated.Value(50),
    AnimatedLeftWidth = new Animated.Value(50)
      AnimatedHieght=new Animated.Value(45),
    this.state = {
      dataSource:[],
      switchValue:false,
      visibles:false,
      priceMode:'ETH Price',
      cityItems:["US Doller,Indian,Eutherium"],
      Coin: 'Us Doller',
      spinner:false,
      EthAmount:'ETH-BTC',
      coinValue:'ETH',
      ETHAmount:'0',
      BtcAmount:'BTC',
      roleid:'',
      ethercurrentvalue:null,
      receivedAmount:'0',
      mincomercialValue:null,
      maxcomercialValue:null,
      btc:'0',
      usdforEther:0,
      paidAmount:null,
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
      FinalValue:'0',
      'ExchangeCoin':'ETH',
      firstExchangeValue:'0.00',
      secondExchangeValue:'0.00',
      networkFeeValue:'',
      exchangeTypeMenu:this.props.navigation.state.params.Exchange_Type
    
    };
  
  }
  
  componentDidMount()
  {
  
     //this.OnLoad()
    console.log('Exchange view',this.state.exchangeTypeMenu)
    this.GetRoleId()
    
    
  }
  GetRoleId=async()=>
  {
    roleid = await AsyncStorage.getItem('roleId')
    this.setState({roleid:roleid})
    console.log('role id------>',roleid)
  }
  BalanceResponse =async (data) => {
    console.log(data)
   
   
    this.hide()
    if (data != 'undefined') {
      if (data.status === ResponseSuccessStatus) {
        if (data.CalculatingAmountDTO.cryptoType === 'ETH'||data.CalculatingAmountDTO.cryptoType === 'eth') {
         this.setState({amount:data.CalculatingAmountDTO.cryptoAmount})

        }
        else {
          this.setState({ amount: data.CalculatingAmountDTO.btcAmount})

        }

      }
      else if (data.error === 'invalid_token') {
        Alert.alert(
          'Error',
          'Token Expired',
          [
            { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
          ],

        );
      }

    }
  }
  OnLoad=async()=>
  {
    let type=crptoType
    let params=
    {
      userId:await AsyncStorage.getItem('UserId') ,
      cryptoType:type

    }
    this.Load()
    ExchangeList(params,ExchangeType,this.OnLoadResponse,this.error,this.NetworkIssue)
  }
  error=(data)=>
  {
    this.hide()
    Alert.alert(data)
  }
  OnLoadResponse=(data)=>
  {
    this.hide()
    if(data!=DataUndefined)
    {
      if(data.status===ResponseSuccessStatus)
      {
      
        this.setState({"usdforEther":data.CalculatingAmountDTO.usdforEther.toString(),
        "ethercurrentvalue": data.CalculatingAmountDTO.ethercurrentvalue,
        "cryptoType": data.CalculatingAmountDTO.cryptoType,
        "receivedAmount":data.CalculatingAmountDTO.receivedAmount,
        "paidAmount": data.CalculatingAmountDTO.paidAmount,
        "mincomercialValue":data.CalculatingAmountDTO.minimumCryptoValue,
        "maxcomercialValue":data.CalculatingAmountDTO.maximumCryptoValue}
        )
        this.usdConvert(this.state.usdforEther)
        VaultSystemApi(crptoType, this.BalanceResponse)
      }else if(data.error==='invalid_token')
      {
        Alert.alert(
          'Error',
          'Token Expired',
          [
            {text: 'OK', onPress: () => this.props.navigation.navigate("Login")},
          ],
    
        );
      }
    }
  }

dataset=(data)=>{
  this.setState({
    dataSource:data
  })
  this.hide()
}
Load=()=>{
  this.setState({spinner:true})
}
hide=()=>{
  this.setState({spinner:false})
}
space(){
  return(<View style={{height: 10, width: 1, backgroundColor:'black'}}/>)
}

toggleSwitch=(value)=>{
  this.setState({switchValue: value})
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

   
    return (  
   
      <View style={styles.Maincontainers}>  
                 <LinearGradient  colors= {['#354E91','#314682','#283563','#222B50','#21284A']} style={styles.Maincontainers} >
                 <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          overlayColor='rgba(0,0,0,0.5)'
          animation='fade'
          size='large'
          color='#f4347f'
          textStyle={styles.spinnerTextStyle}
        />
                 <View style={{paddingLeft:20,paddingRight:20}}>
 <Dialog
  onTouchOutside={() => {
      this.setState({ visibles: false });
    }}
  
    visible={this.state.visibles}>
    <DialogContent>
     <View style={{width:300,height:110,alignItems:'center'}}>
         <View style={{alignItems:'center',paddingTop:10}}>
         <Image style={{width: 50, height: 50,resizeMode:'contain'}}   source={require("../assets/successtik.png")} ></Image>     
         </View>
         <View style={{paddingTop:10,paddingBottom:10}}>
         <Text style={{fontSize:15,color:'#454976',fontFamily:'Exo2-Regular',textAlign:'center'}}>Your Exchange request was send successfully</Text>           
         </View>
     </View>
    </DialogContent>
  </Dialog>
 </View>
 <View style={{flex:1}}>

 <ImageBackground source={require('../assets/Group_20501.png')} imageStyle={{resizeMode:'cover',width:'100%',height:'100%'}} style={{opacity:0.9,flex:0.33}}>
    <View style={{position:'absolute',bottom:-10,left:0,right:0,justifyContent:'center',alignItems:"center"}}>
    <TouchableOpacity onPress={this.ExchangeLogic}> 
    <View>
    <LinearGradient colors= {['#97F5F9','#7ED5F6','#529DF3','#4781DF','#2D3CAD']} style={{width:70,
    height: 70,
    borderRadius: 70/2,
    backgroundColor:this.state.app1color,justifyContent:'center',alignItems:"center"}} >
   
    <Image  style={{width: 40, height: 40,resizeMode:'contain'}}  source={require('../assets/exchangenew.png')} ></Image>
    
            
          </LinearGradient>
    </View>
    </TouchableOpacity>
 
 
  </View>
  <TouchableOpacity onPress={this._onPress} style={{position: 'absolute', left: 0}}>
                <Animated.View style={{ backgroundColor:'#fff', borderColor: '#fff',justifyContent:'center',alignItems:'flex-end', borderRightWidth: 1, borderLeftWidth: 0, borderTopWidth: 1, borderBottomWidth: 1, height: 45, width: AnimatedLeftWidth, borderTopRightRadius: 25, borderBottomRightRadius: 25, marginTop: 10 }}>
              
                    <View>
                   
                        <View style={{ flexDirection: 'row',marginLeft:-30 }}>
                          <View style={{ justifyContent: 'center', }}>
                            <Text style={{ color: '#000', fontFamily: 'Exo2-SemiBold', fontSize: 12,marginRight:10}}>Puplications</Text>
                          </View>
                          <Image style={{marginRight:10, width: 30, height: 30, resizeMode: 'contain'}} source={require("../assets/note.PNG.png")} ></Image>
                        </View>
                
                    </View>
                
                </Animated.View>
                </TouchableOpacity>
 <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between'}}>
          <Image style={{marginRight:10,width: 18, height: 22,resizeMode:'contain'}}   source={require("../assets/app4.png")} ></Image>     
          <Text style={{fontSize:18,color:'#fff',fontFamily:'Exo2-Regular'}}>Exchange</Text>
          </View>      
          <Text style={{fontSize:12,color:'#fff',marginTop:10,fontFamily:'Exo2-Regular'}}>How Much do you want to buy?</Text>           
          <View style={{flexDirection: 'row',marginLeft:20}}>
          <View style={{width:'80%',padding:15,borderRadius:25,borderWidth:1,borderColor:'#fff',marginTop:10,marginBottom:10, justifyContent:"center"}}>
<View style={{flexDirection:'row',marginLeft:20,justifyContent:'space-between'}}> 
<View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',marginLeft:30}}>
        <Text style={{color:'#fff',opacity:1,fontSize:12,fontFamily:'Exo2-Regular'}}>{this.state.EthAmount}</Text>
        <Image  style={{width: 10, height: 10,resizeMode:'contain',marginLeft:10,marginRight:10}}  source={require("../assets/darrow.png")} ></Image> 
       {this.state.roleid==1 ||this.state.exchangeTypeMenu==='Users'?<Picker style={{ position:'absolute', top: 0, width: 1000, height: 3000}}
   selectedValue={this.state.EthAmount}
  //  enabled={false}
  onValueChange={(itemValue, itemIndex) => this.selected1(itemValue,itemIndex)}>
  
  <Picker.Item label="ETH-BTC" value="ETH-BTC" />
  <Picker.Item label="BTC-ETH" value="BTC-ETH" />
  </Picker>:<Picker style={{ position:'absolute', top: 0, width: 1000, height: 3000}}
   selectedValue={this.state.EthAmount}
  //  enabled={false}
  onValueChange={(itemValue, itemIndex) => this.selected1(itemValue,itemIndex)}>
  
  <Picker.Item label="ETH-BTC" value="ETH-BTC" />
  <Picker.Item label="BTC-ETH" value="BTC-ETH" />
 <Picker.Item label="ETH-BWN" value="ETH-BWN" />
 <Picker.Item label="BTC-BWN" value="BTC-BWN" />
  </Picker>} 
        </View>
        <View>
        <View>
{/* <Text style={{color:'#fff',opacity:1,fontSize:12,fontFamily:'Exo2-Regular',marginRight:10}}>{this.state.firstExchangeValue}</Text> */}
</View>
        </View>
</View>
          </View>
        
    
     </View>            
          </View>
         <View>  
          </View>
          </ImageBackground>    


  
<View style={{flex:0.67}}>
 <ScrollView contentContainerStyle={{paddingBottom:100}}>
 <View style={{paddingTop:10,}}></View>
<View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={{color:'#fff',fontSize:36,fontFamily:'Exo2-Regular'}}>$</Text>
</View>

<View style={{justifyContent:'center',alignItems:'center'}}>
<TextInput
          style={{height: 80,color:'#fff',fontSize:36,fontFamily:'Exo2-Regular',width:'100%',alignSelf:'center'}}
          placeholder="0.00" 
          placeholderTextColor="#fff"
          keyboardType='numeric'
          //onChange={this.handleKeyDown}
          maxLength={10}
         onChangeText={(text) =>this.ChangeText(text)}
         value={this.state.usdforEther}
        />
      
        </View>
        

</View> 
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={{color:'#fff',fontSize:20,fontFamily:'Exo2-Regular'}}>{this.state.FinalValue} {this.state.coinValue}</Text>
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
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium'}}>{this.state.BtcAmount} Price</Text>
</View>  

<View style={{flexDirection:'row',flex:1}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,textAlign:'center',fontFamily:'Exo2-Regular'}}>{this.state.BtcAmount!=='ETH'?this.state.btc:this.state.ETHAmount}</Text> 

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
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Mediumr'}}>{this.state.BtcAmount} price Dolar</Text>
</View>

<View style={{flexDirection:'row',flex:1}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular'}}>{this.state.usdforEther}</Text> 
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
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium'}}>Network fees</Text>  
</View>
<View style={{flex:1}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular'}}>{this.state.receivedAmount}</Text> 
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
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium'}}>Commercial Limits</Text>
</View>
  <View style={{flex:1}}>
  <Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular'}}>10-1000000 $</Text> 
  </View>

</View>
{/* <View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',
    borderBottomWidth: 1,
  }}
/>
<View style={{height:40,width:'100%',backgroundColor:'transparent'}}></View>
<View style={{flexDirection:'row',marginLeft:20}}>  
<View style={{flex:1}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium'}}>Send</Text>  
</View>
<View style={{flex:1}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular'}}>{this.state.paidAmount}{this.state.EthAmount}</Text> 
</View>

</View> */}
{/* <View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',
    borderBottomWidth: 1,
  }}
/> */}
{/* <View style={{flexDirection:'row',marginLeft:20}}>  
<View style={{flex:2.2}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium'}}>Description</Text>  
</View>
<View style={{flex:1}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,marginLeft:-10,fontFamily:'Exo2-Regular'}}>Transfer data</Text> 
</View>
<View style={{flex:1}}>
<Text style={{fontSize:20,color:'#a9b4d4',marginTop:-5,fontFamily:'Exo2-Regular'}}>...</Text> 
</View>

</View> */}
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',
    borderBottomWidth: 1,
  }}
/>
<TouchableOpacity onPress={() => this.exchangeApi()} style={{marginTop:30,paddingLeft:50,paddingRight:50}}>
<View >

<View>
<LinearGradient colors={['#41da9c','#36deaf','#26e3ca']}  start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{padding:12,backgroundColor:'green',justifyContent:'center',alignItems:'center',borderRadius:6}}>

<Text style={{color:'#fff',fontFamily:'Poppins-Medium'}}>Exchange</Text>
</LinearGradient>

</View>
</View>
</TouchableOpacity>




</ScrollView>
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
      ExchangeLogic=()=>{}
      _onPress = () => {
        Animated.sequence([
          Animated.timing(AnimatedLeftWidth, {
            toValue: 130,
            duration: 250,
            easing: Easing.inOut(Easing.ease),
            delay: 50,
          }),
          Animated.timing(AnimatedLeftWidth, {
            toValue: 50,
            duration: 250,
            easing: Easing.inOut(Easing.ease),
            delay: 50,
          })]).start(()=>this.navigate());
      }
      OpenPopupAction=()=>
      {
        if(this.state.exchangeTypeMenu!='undefined')
        {         
            setTimeout(()=>this.navigate, 600)                  
        }
        else
        {
          Alert.alert('Error','Exchange type undefined')
        }
       
      }
      navigate=()=>
      {
        console.log('this.state.exchangeTypeMenu--->',this.state.exchangeTypeMenu)
        //this.setState({visibles:false})
        if(this.state.exchangeTypeMenu ==='PlatForm')
        {
          this.props.navigation.navigate('Publish', {Exchange_Type: this.state.exchangeTypeMenu })
         
        }
        else
        {
          this.props.navigation.navigate('PuplishUser', {Exchange_Type: this.state.exchangeTypeMenu })
        }
       
        
      }
      selected1=(item,itemIndex)=>{
        this.setState({
          EthAmount:item,
          coinValue:item!=null?item.split('-',1):null,
          ExchangeCoin:item!=null?item.split('-',1):null,
        })
      
        this.usdConvert(this.state.usdforEther)
      }
      exchangeApi=async()=>
    {
      console.log('this.state.exchangeTypeMenu--->',this.state.exchangeTypeMenu)
      console.log('Value',this.state.usdforEther)

      if(this.state.usdforEther===0)
      {
        Alert.alert('Alert','Exchange Value cannot be zero')
      }
      else
      {
        if(this.state.exchangeTypeMenu ==='PlatForm')
        {
          if(this.state.EthAmount === 'ETH-BTC')
          {
              let params=
          {
            userId:await AsyncStorage.getItem('UserId') ,
            exchangeMode:'ETH_BTC_ADMIN',
            amountToTrade:this.state.FinalValue
     
          }
          console.log('Request data.===>', params, this.state.FinalValue)
          this.Load()   
          ExchangeList(params,ExchangeRequestsUrl,this.onExchangeResponse,this.error,this.NetworkIssue)
          }
          else if(this.state.EthAmount === 'BTC-ETH')
          {
    
            let params=
          {
            userId:await AsyncStorage.getItem('UserId') ,
            exchangeMode:'BTC_ETH_ADMIN',
            amountToTrade:this.state.FinalValue
     
          }
          console.log('Request data.===>', params, this.state.usdforEther)
          this.Load()   
          ExchangeList(params,ExchangeRequestsUrl,this.onExchangeResponse,this.error,this.NetworkIssue)
          }
          else if(this.state.EthAmount === 'ETH-BWN')
          {
            {
    
              let params=
            {
              userId:await AsyncStorage.getItem('UserId') ,
              exchangeMode:'ETH_BWN_ADMIN',
              amountToTrade:this.state.FinalValue
       
            }
            console.log('Request data.===>', params, this.state.usdforEther)
            this.Load()   
            //Local API for Bitwings
      
            ExchangeList(params,ExchangeRequestsUrl,this.onExchangeResponse,this.error,this.NetworkIssue)
            }
          }
          else if(this.state.EthAmount === 'BTC-BWN')
          {
            {
    
              let params=
            {
              userId:await AsyncStorage.getItem('UserId') ,
              exchangeMode:'BTC_BWN_ADMIN',
              amountToTrade:this.state.FinalValue
       
            }
            console.log('Request data.===>', params, this.state.usdforEther)
            this.Load()   
         
            ExchangeList(params,ExchangeRequestsUrl,this.onExchangeResponse,this.error,this.NetworkIssue)
            }
          }
        }
        
        //user-user and admin - user part
        else
       
        {
          if(this.state.EthAmount === 'ETH-BTC')
          {
              let params=
          {
            userId:await AsyncStorage.getItem('UserId') ,
            exchangeMode:'ETH_BTC_USER',
            amountToTrade:this.state.FinalValue
     
          }
          console.log('Request data.===>', params, this.state.usdforEther)
          this.Load()   
          ExchangeList(params,ExchangeRequestsUrl,this.onExchangeResponse,this.error,this.NetworkIssue)
          }else if(this.state.EthAmount === 'BTC-ETH')
          {
    
            let params=
          {
            userId:await AsyncStorage.getItem('UserId') ,
            exchangeMode:'BTC_ETH_USER',
            amountToTrade:this.state.FinalValue
     
          }
          console.log('Request data.===>', params, this.state.usdforEther)
          this.Load()   
          ExchangeList(params,ExchangeRequestsUrl,this.onExchangeResponse,this.error,this.NetworkIssue)
          }
       
      }
      //user-admin part
     
      }
      
        
    }

    //Admin RTH_BTC Response
    onAdminETH_BTCResponse=(data)=>{
      this.hide()
      if(data!=DataUndefined)
     {
      if(data.status===ResponseSuccessStatus)
      {
                  
        Alert.alert(data.status,data.message)
        
      }else if(data.error==='invalid_token')
      {
        Alert.alert(
          'Error',
          'Token Expired',
          [
            {text: 'OK', onPress: () => this.props.navigation.navigate("Login")},
          ],
    
        );
      }
      else{
        Alert.alert(data.status,data.message)
        //this.successStatus()
      }
    }
   }

    successStatus=()=>
    {
      this.setState({visibles:true})
      setTimeout(()=>this.navigate, 500);
    }
    nav=()=>
    {
     
      this.pushNavigate('PuplishUser')
    }
    pushNavigate=(routname)=>
    {

      let pushAction=StackActions.push({
        routeName:routname,
        params:
        {
          Exchange_Type: this.state.exchangeTypeMenu
        }
      })
      this.props.navigation.dispatch(pushAction);
    }
    onExchangeResponse=(data)=>
    {
       console.log('response',data)   
      this.hide()
      if(data!=DataUndefined)
     {
      if(data.status===ResponseSuccessStatus)
      {
       console.log('response',data)           
       this.successStatus()
        
      }else if(data.error==='invalid_token')
      {
        Alert.alert(
          'Error',
          'Token Expired',
          [
            {text: 'OK', onPress: () => this.props.navigation.navigate("Login")},
          ],
    
        );
      }
      else{
        Alert.alert(data.status,data.message)
        //this.successStatus()
      }

      //Get value for Network fee and Crypto amount Apil̥
      //this.cryptoValue()
      //console.log('Request data.===>', 'cryptoValue()')
    }
  }
    

      ChangeText=(UsdAmount)=>
      {
       let number=UsdAmount
       if(UsdAmount==='')
       {
        number=0
        console.log('empty')     
       }

        console.log('Changed Number',number)     
        this.setState({usdforEther:number})
        console.log('usdforEther Number',number)     
          this.usdConvert(number)      
             
      }
     
      //-----------------------------//
     usdConvert=async(UsdAmount)=>
      {
       let type=crptoType
       let params=
     {
       usd:UsdAmount,
       cryptoType:type

     }
     
     //Get value for Network fee and Crypto amount Api
     ExchangeList(params,CONVERT_USD,this.onUsdResponse,this.error,this.NetworkIssue)
   
      
    }

    onUsdResponse=(data)=>
    {
    if(data!=DataUndefined)
    {
      console.log('coins',this.state.ExchangeCoin)
      if(data.status===ResponseSuccessStatus)
      {
                  
        console.log('Request data.Re===>',data.CalculatingAmountDTO)
        this.setState({
          FinalValue:this.state.ExchangeCoin=='ETH'?data.CalculatingAmountDTO.cryptoAmount:data.CalculatingAmountDTO.btcAmount,
          receivedAmount: data.CalculatingAmountDTO.gasfee,
          btc:data.CalculatingAmountDTO.btcAmount,
          ETHAmount:data.CalculatingAmountDTO.cryptoAmount
        })
        
      }else if(data.error==='invalid_token')
      {
        Alert.alert(
          'Error',
          'Token Expired',
          [
            {text: 'OK', onPress: () => this.props.navigation.navigate("Login")},
          ],
    
        );
      }
      else{
        Alert.alert(data.status,'Something went wrong')
      }

      //Get value for Network fee and Crypto amount Apil̥
      //this.cryptoValue()
      //console.log('Request data.===>', 'cryptoValue()')
    }
  }

    //
    cryptoValue=async()=>
    {
     let type=crptoType
     console.log('Request data.===>', type,'type calling')
     let params=
     {
       cryptAmount:this.state.firstExchangeValue ,
       cryptoType:type
     }

      //Get value for Network fee and Crypto amount Api
      ExchangeList(params,getEqualCryptoValueApi,this.cryptoResponse,this.error,this.NetworkIssue)
      console.log('Request data.===>','getEqualCryptoValueApi',this.cryptoResponse)
    }
 
    cryptoResponse=(data)=>
    {
      if(data!=DataUndefined)
      {
        if(data.status===ResponseSuccessStatus)
        {
          console.log('Request data.Re===>',data.CalculatingAmountDTO.cryptoAmount)
          this.setState({
            secondExchangeValue: data.CalculatingAmountDTO.cryptoAmount
          })
        } else if(data.error==='invalid_token')
        {
          Alert.alert(
            'Error',
            'Token Expired',
            [
              {text: 'OK', onPress: () => this.props.navigation.navigate("Login")},
            ],
      
          );
        }
        else{
          Alert.alert('Alert!!','Something went wrong')
        }
      }
    }

}



const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
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