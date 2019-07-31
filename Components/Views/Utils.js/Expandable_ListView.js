
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ExchangeList,ExchangeRequest} from '../Api/ExchangeRequest'
import {ResponseSuccessStatus,InvalidResponse,DataUndefined,InvalidToken,TokenExpired} from './Constant'
import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';
let datasource=[1]
export default class Expandable_ListView extends Component {

    constructor() {
  
      super();
    
      this.state = {
  
        layout_Height: 0
  
      }
    }
  
    componentWillReceiveProps(nextProps) {
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
    SelectedExchangeRequest=(data)=>
    {
      let params;
      console.log('Expandable list response',data)
       // Alert.alert('hello')
       if(data!='undefined')
         {
           if(data.exchangeType=='BTC_ETH_USER')
           {
             params=
            {
             "userId":data.userId,
             "etherAmount":data.amountToTrade,
             "toEthWalletAddress":data.ethWalletAddress,
             "exchangeReqId":0,
             "exchangeStatus":data.status,
             
           }
           }
           else
           {
            params=
            {
             "userId":data.userId,
             "btcAmount":data.amountToTrade,
             "toBtcWalletAddress":data.btcWalletAddress,
             "exchangeReqId":0,
             "exchangeStatus":data.status,
             
           }
           }
          
          // this.props.load
           ExchangeRequest(params,this.ExchangeRequestResponse)
           console.log('This params',params)
         }
    }
    ExchangeRequestResponse=(data)=>
    {
      console.log('Request data===>',data)
      //this.props.hide
      if(data!=DataUndefined)
{
  if(data.status===ResponseSuccessStatus)
  {
 // openOverlay()
 Alert.alert(data.status,data.message)
  }
  else
  {
    Alert.alert(data.message)
  }
}
    }
    shouldComponentUpdate(nextProps, nextState) {
      if (this.state.layout_Height !== nextState.layout_Height) {
        return true;
      }
      return false;
    }
  
    show_Selected_Category = (item) => {
  
      // Write your code here which you want to execute on sub category selection.
      Alert.alert(item);
  
    }
  
    render() {
       // datasource=this.props.item
        console.log(this.props)
      return (
        <View>
  
          <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} >
  
          <View style={{marginLeft:30,marginRight:30,marginBottom:20, shadowOffset: { width: 10, height: 10 },
  borderBottomWidth: 0,
  borderRadius:25}}>
   <LinearGradient
   colors={['#4262B5', '#3A549B','#314279','#2C3765','#2A335E']} style={{ borderRadius:25,}}>
   
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:15}}>
        <View style={{flexDirection:'row'}}>
        <View style={{alignItems:'center',justifyContent:'center'}} >
          <Image  style={{width: 30, height: 30,resizeMode:'contain'}}  source={require("../assets/greenD.png")} ></Image>  
          </View>
          <View style={{marginLeft:20}}>
          <Text  style={{marginRight:20,marginTop:10,color:'#fff',fontFamily:"Exo2-Bold"}}>{this.props.item.userName}</Text>  
          <Text  style={{marginRight:20,marginTop:10,color:'#5496FF',fontFamily:'Exo2-Regular'}}>{this.props.item.date1}</Text>       
          </View>
         
        </View>
        
        <View style={{alignItems:'center',paddingRight:10}}>        
     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
     <Image style={{width: 25,height: 25,marginTop:10}}   source={require("../assets/plusblue.png")} ></Image>    
     <Text  style={{color:'#fff',fontFamily:'Exo2-Regular',marginTop:10}}>$ {this.props.item.totalAmount}</Text> 
     </View>   
    <View>
    <Text  style={{color:'#5496FF',fontFamily:'Exo2-Regular',marginTop:10}}>{this.props.item.amountYouGet}ETH</Text>     
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
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,textAlign:'center',fontFamily:'Exo2-Regular',marginBottom:10}}>{this.props.item.amountToTrade}</Text> 

</View>  
<View></View>
</View>
    <View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#5496FF',borderWidth:0.5,marginLeft:20}}>
<View style={{marginLeft:20}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>Amount you Get</Text>
</View>  

<View >
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,textAlign:'center',fontFamily:'Exo2-Regular',marginBottom:10}}>{this.props.item.amountYouGet}</Text> 

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
<View style={{justifyContent:'center',alignItems:'center',marginBottom:10,width:"100%",marginTop:30}}>
<View style={{width:"50%"}}>
<LinearGradient colors={['#41da9c','#36deaf','#26e3ca']}  start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{width:'100%',padding:12,backgroundColor:'green',justifyContent:'center',alignItems:'center',marginLeft:10,borderRadius:6}}>
<TouchableOpacity  key={this.props.item} onPress={this.SelectedExchangeRequest.bind(this,this.props.item)}>
<Text style={{color:'#fff',fontFamily:'Poppins-Medium'}}>Exchange</Text></TouchableOpacity>
</LinearGradient>

</View>

</View>
     </View> 


  
          </View>
  
        </View>
  
      );
    }
  }