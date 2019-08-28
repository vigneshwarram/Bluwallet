
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ExchangeList,ExchangeRequest ,exchangeUserApi} from '../Api/ExchangeRequest'
import {ResponseSuccessStatus,InvalidResponse,DataUndefined,InvalidToken,TokenExpired} from './Constant'
import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image,AsyncStorage } from 'react-native';
let datasource=[1]
export default class Expandable_DashBoard_List extends Component {

    constructor() {
  
      super();
    
      this.state = {
  
        layout_Height: 0,
        userIdLogin:''
  
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

   

   
  
    shouldComponentUpdate(nextProps, nextState) {
      if (this.state.layout_Height !== nextState.layout_Height) {
        return true;
      }
      return false;
    }
    render() {
       // datasource=this.props.item
        console.log(this.props)
      return (
        <View>
          <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} >
        <View elevation={5} style={{shadowOffset: { width: 10, height: 10 }}}>
          
           
<LinearGradient
              colors={['#4262B5', '#3A549B', '#314279', '#2C3765', '#2A335E']} style={{marginLeft:30,marginRight:30,marginBottom:20,height:100, shadowOffset: { width: 10, height: 10 },
       borderWidth:0.4,borderColor:'#7894f8',justifyContent:'center',alignItems:'center',
        borderRadius:20}}>

              <View style={{ flexDirection: 'row', }}>
                <View>
                  {(this.props.item.transactionType === 'Send') ? <Image style={{ width: 50, height: 50, }} source={require("../assets/redicon.png")} ></Image> :
                    <Image style={{ width: 50, height: 50,  }} source={require("../assets/icon2.png")} ></Image>}

                </View>
                <View style={{ flexDirection: 'column' }}>
                  <View style={{  flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ marginRight: 20, marginTop: 10, color: '#fff', fontFamily: "Exo2-Bold" }}> {this.props.item.transactionType}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <Image style={{ width: 25, marginTop: 10, height: 25 }} source={require("../assets/plusblue.png")} ></Image>
                      <Text style={{ marginRight: 20, marginTop: 10, color: (this.props.item.Status != 'Completed') ? '#fff' : '#fff', fontFamily: 'Exo2-Regular' }}>$ {this.props.item.usdValue}</Text>
                    </View>

                  </View>
                  <View style={{  flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 15 }}>


                    <Text style={{ marginRight: 20, marginTop: 10, color: '#5496FF', fontFamily: 'Exo2-Regular' }}>{this.props.item.Date + " " + this.props.item.time}</Text>

                    <Text style={{ marginRight: 20, marginTop: 10, color: '#5496FF', fontFamily: 'Exo2-Regular' }}>{this.props.item.receivedAmount}ETH</Text>
                  </View>
                </View>

              </View>
            </LinearGradient>

           

          
    
          </View>
          </TouchableOpacity>
          <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>
         

         <View style={{paddingLeft:50,paddingRight:50,paddingBottom:20}}>
   <View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#5496FF',borderWidth:0.5,}}>
<View style={{marginLeft:20}} >
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>TransactionType</Text>
</View>  

<View style={{marginRight:20}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular',marginBottom:10}}>{this.props.item.transactionType}</Text> 

</View>  

</View>
<View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#5496FF',borderWidth:0.5,}}>
<View style={{marginLeft:20}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>Amount</Text>
</View>  

<View style={{marginRight:20}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular',marginBottom:10}}>{this.props.item.amount}</Text> 

</View>  

</View>
<View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#5496FF',borderWidth:0.5}}>
<View style={{marginLeft:20}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>USD</Text>

</View>  

<View style={{marginRight:20}} >
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular',marginBottom:10,}}>{this.props.item.usdValue}</Text> 

</View>  

</View>

<View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#5496FF',borderWidth:0.5,}}>
<View style={{marginLeft:20}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>Date</Text>
</View>  

<View style={{marginRight:20}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular',marginBottom:10}}>{this.props.item.Date}</Text> 

</View>  

</View>

</View> 



   </View>
        </View>
        
          
  
      );
    }
  }