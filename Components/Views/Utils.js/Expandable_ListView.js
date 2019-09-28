
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ExchangeList} from '../Api/ExchangeRequest'
import {BTC_ETH_ADMIN_EXCHANGE,ETH_BTC_ADMIN_EXCHANGE,BITWINGS_ADMIN_EXCHANGE,BTC_ETH_USER_EXCHANGE,ETH_BTC_USER_EXCHANGE,REJECT} from '../Api/RequestUrl'
import {ResponseSuccessStatus,InvalidResponse,DataUndefined,InvalidToken,TokenExpired} from './Constant'
import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image,AsyncStorage } from 'react-native';
let datasource=[1]
export default class Expandable_ListView extends Component {

    constructor() {
  
      super();
    
      this.state = {
        Updation:false,
        layout_Height: 0,
        userIdLogin:''
  
      }
    }
  
    componentWillReceiveProps(nextProps) {
      if(this.props.item!=nextProps)
      {
        this.setState(() => {
          return {
            Updation: true
          }
        });
      }
     
      if (nextProps.item.expanded) {
        this.setState(() => {
          return {
            layout_Height: null
          }
        });
      }
      else {
        this.setState(() => {
          return {
            layout_Height: 0
          }
        });
      }
    }
    shouldComponentUpdate(nextProps, nextState) {
      if(this.state.Updation)
     {
       return true;
     }
     if (this.state.layout_Height !== nextState.layout_Height ) {
       return true;
     }
     return false;
   }
   

    SelectedExchangeRequest=async(data)=>
    {
      let params;
      let userId =await AsyncStorage.getItem('UserId') 
       if(data!='undefined')
         {
           if(data.exchangeType=='ETH_BTC_USER' )
           {
             params=
            {

              "userId": userId,
              "etherAmount": data.amountToTrade,
              "toEthWalletAddress": data.ethWalletAddress,
              "exchangeReqId": data.id,
              "exchangeStatus": data.status        
           }
           }
           else if(data.exchangeType=='BTC_ETH_USER')
           {
            params=
            {
             "userId":userId,
             "btcAmount":data.amountToTrade,
             "toBtcWalletAddress":data.btcWalletAddress,
             "exchangeReqId":data.id,
             "exchangeStatus":data.status,
             
           }
         // console.log('Expandable list params',params)
          }
          else if(data.exchangeType=='ETH_BWN_ADMIN')
          {
           params=
           {
            "userId":userId,
            "exchangeType":data.exchangeType,
            "toEthWalletAddress": data.ethWalletAddress,
            "exchangeReqId":data.id,
            "exchangeStatus":data.status,
            
          }
         }
         else if(data.exchangeType=='BTC_BWN_ADMIN')
          {
           params=
           {
            "userId":userId,
            "exchangeType":data.exchangeType,
            "toBtcWalletAddress": data.ethWalletAddress,
            "exchangeReqId":data.id,
            "exchangeStatus":data.status,
            
          }
         }
          this.props.onLoad()
          if(data.exchangeType ==='ETH_BTC_USER'){
            ExchangeList(params,ETH_BTC_USER_EXCHANGE,this.ExchangeRequestResponse,this.error,this.NetworkIssue)
          }else if(data.exchangeType ==='BTC_ETH_USER')
          {
            ExchangeList(params,BTC_ETH_USER_EXCHANGE,this.ExchangeRequestResponse,this.error,this.NetworkIssue)
          }
          else if(data.exchangeType ==='ETH_BWN_ADMIN'){
            ExchangeList(params,BITWINGS_ADMIN_EXCHANGE,this.ExchangeRequestResponse,this.error,this.NetworkIssue)
          }
          else if(data.exchangeType ==='BTC_BWN_ADMIN'){
            console.log('Params',params)
            ExchangeList(params,BITWINGS_ADMIN_EXCHANGE,this.ExchangeRequestResponse,this.error,this.NetworkIssue)
          }
           
         }
    }
    error=(data)=>
    {
      this.props.onHide()
      Alert.alert('Failure',data)
    }
    NetworkIssue=(data)=>
    {
      this.props.onHide()
      Alert.alert('Failure',data)
    }
    Accept=(data)=>
    {
      this.SelectedExchangeRequest(data)
    }
    Reject=(data)=>
    {
      console.log(data)
      let params;    
      params=
      {
        "userId":data.userId.toString(),
        "declineStatus":"1",
       "exchangeReqId":data.id.toString(),      
      }
      this.props.onLoad()
      ExchangeList(params,REJECT,this.ExchangeRequestResponse,this.error,this.NetworkIssue)
    }
    ExchangeRequestResponse=(data)=>
    {
      this.props.onHide()
      //this.props.hide
      if(data!=DataUndefined)
{
  if(data.status===ResponseSuccessStatus)
  {
    Alert.alert(data.status,data.message)
  }
  else
  {
    //this.props.popupShow()
    Alert.alert(data.status,data.message)
  }
}
    }
 
  
    show_Selected_Category = (item) => {
  
      // Write your code here which you want to execute on sub category selection.
      Alert.alert(item);
  
    }
  
    render() {
      
        var ExchangeCoin=this.props.item.exchangeType!=null?this.props.item.exchangeType.split('_', 1):null
        var status=(this.props.item.status===0)?'Exchanged':'Exchange'
      return (
        <View>
  
          <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} >
  
          <View elevation={5} style={{shadowOffset: { width: 10, height: 10 }}}>
          
           
          <LinearGradient
      colors={['#4262B5', '#3A549B', '#314279', '#2C3765', '#2A335E']} style={{marginLeft:30,marginRight:30,marginBottom:20,height:100, shadowOffset: { width: 10, height: 10 },
         borderWidth:0.4,borderColor:'#7894f8',justifyContent:'center',
          borderRadius:20}}>
   
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:15}}>
        <View style={{flexDirection:'row'}}>
        <View style={{alignItems:'center',justifyContent:'center'}} >
        {this.props.item.status==0?  <Image style={{ width: 50, height: 50,resizeMode:'contain' }} source={require("../assets/redicon.png")} ></Image>:<Image  style={{width: 30, height: 30,resizeMode:'contain'}}  source={require("../assets/greenD.png")} ></Image>  }
          
         
          </View>
          <View style={{marginLeft:20,width:100}}>
          <Text  style={{marginRight:20,flexWrap: 'wrap',marginTop:10,color:'#fff',fontFamily:"Exo2-Bold"}}>{this.props.item.userName}</Text>  
          <Text  style={{marginRight:20,marginTop:10,color:'#5496FF',fontFamily:'Exo2-Regular'}}>{this.props.item.date1}</Text>       
          </View>
         
        </View>
        
        <View style={{alignItems:'center',paddingRight:10}}>        
     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
     <Image style={{width: 25,height: 25,marginTop:10}}   source={require("../assets/plusblue.png")} ></Image>    
     <Text  style={{color:'#fff',fontFamily:'Exo2-Regular',marginTop:10}}>$ {this.props.item.totalAmount}</Text> 
     </View>   
    <View>
    <Text  style={{color:'#5496FF',fontFamily:'Exo2-Regular',marginTop:10}}>{this.props.mode=='All'?ExchangeCoin:this.props.mode}</Text>     
    </View>
          </View>       
        </View>
</LinearGradient>
  </View>
  
          </TouchableOpacity>
  
          <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>
         

                <View style={{marginLeft:30,marginRight:30}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#5496FF',borderWidth:0.5,marginLeft:20}}>
<View style={{alignItems:'center',justifyContent:'center',marginLeft:20}} >
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>Amount to Trade</Text>
</View>  

<View >
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,textAlign:'center',fontFamily:'Exo2-Regular',marginBottom:10}}>{this.props.item.amountToTrade} {ExchangeCoin}</Text> 

</View>  
<View></View>
</View>
    <View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#5496FF',borderWidth:0.5,marginLeft:20}}>
<View style={{marginLeft:20}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>Amount you Get</Text>
</View>  

<View >
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,textAlign:'center',fontFamily:'Exo2-Regular',marginBottom:10}}>{this.props.item.amountYouGet} </Text> 

</View>  
<View></View>
</View>
   <View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#5496FF',marginLeft:20,borderWidth:0.5}}>
<View style={{marginLeft:20}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>Fee</Text>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>TOTAL</Text>
</View>  

<View >
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,textAlign:'center',fontFamily:'Exo2-Regular',marginBottom:10,marginLeft:20}}>{this.props.item.transactionFee}</Text> 
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,textAlign:'center',fontFamily:'Exo2-Regular',marginBottom:10,marginLeft:20}}>{this.props.item.totalAmount}</Text> 

</View>  
<View></View>
</View>

    <View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#5496FF',borderWidth:0.5,marginLeft:20}}>
<View style={{marginLeft:20}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>Details</Text>
</View>  

<View >
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,textAlign:'center',fontFamily:'Exo2-Regular',marginBottom:10}}>RENT MONEY</Text> 

</View>  
<View></View>
</View>
<View style={{justifyContent:'center',alignItems:'center',marginBottom:10,width:"100%",flexDirection:'row',marginTop:10}}>
<TouchableOpacity disabled={status!=='Exchanged'?false:true} onPress={()=>this.Accept(this.props.item)} style={{width:"40%"}}>
<View >
<LinearGradient colors={[(status==='Exchanged')?'transparent':'#41da9c',(status==='Exchanged')?'transparent':'#36deaf',(status=='Exchanged')?'transparent':'#26e3ca']}  start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{borderColor:'#26e3ca', width:'100%',padding:12,borderWidth:0.8,justifyContent:'center',alignItems:'center',marginLeft:10,borderRadius:6}}>
<Text style={{color:(status==='Exchanged')?'#fff':'#fff',fontFamily:'Poppins-Medium'}}>{status}</Text>
</LinearGradient>
</View>
</TouchableOpacity>
{this.props.item.status!==0?<TouchableOpacity onPress={()=>this.Reject(this.props.item)} style={{width:"40%",marginLeft:10}}><View >
<LinearGradient colors={['#f4347f', '#f85276', '#fe7a6e']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width:'100%',padding:12,justifyContent:'center',alignItems:'center',marginLeft:10,borderRadius:6}}>
<Text style={{color:(status==='Exchanged')?'#fff':'#fff',fontFamily:'Poppins-Medium'}}>Reject</Text>
</LinearGradient>
</View></TouchableOpacity>:null}

</View>
     </View> 


  
          </View>
  
        </View>
  
      );
    }
  }