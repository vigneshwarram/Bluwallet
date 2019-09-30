
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ResponseSuccessStatus,InvalidResponse,DataUndefined,InvalidToken,TokenExpired} from './Constant'
import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image,AsyncStorage } from 'react-native';
let datasource=[1]
export default class ExpandableList_Vault extends Component {

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
    render() {
      let type=this.props.item.typeOfInvestment
      let usdvalue;
      let image=require("../assets/etheriumshadow.png")
      if(type=='ETH')
      {
       image=require("../assets/etheriumshadow.png")
        usdvalue=this.props.item.ethValueInUsd
      }
     else if(type=='BTC')
      {
        image=require("../assets/bitcoinshadow.png")
         usdvalue=this.props.item.btcValueInUsd
      }
      else
      {
        image=require("../assets/bitwingslogo.png")
        usdvalue=this.props.item.cryptoAmount
      }
      return (
        <View>
          <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} >
          <View elevation={5} style={{shadowOffset: { width: 10, height: 10 }}}>
          
           
          <LinearGradient
      colors={['#4262B5', '#3A549B', '#314279', '#2C3765', '#2A335E']} style={{marginLeft:30,marginRight:30,marginBottom:20,height:100, shadowOffset: { width: 10, height: 10 },
         borderWidth:0.4,borderColor:'#7894f8',justifyContent:'center',
          borderRadius:20}}>
  
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:5,paddingRight:5}}>
      <View style={{flexDirection:'row',marginTop:(this.props.item.typeOfInvestment === 'ETH' ||this.props.item.typeOfInvestment === 'eth' ) ?-10:0}}>
      <View>
         <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={image} ></Image> 

                              </View>
  
                  </View>
                  <View style={{ flexDirection: 'column',justifyContent:'space-between' }}>
  
                  <Text style={{  color: '#fff', fontFamily: "Exo2-Bold" }}> {this.props.item.typeOfInvestment}</Text>
                  <Text style={{   color: '#ABB3D0', fontFamily: 'Exo2-Regular',marginLeft:5 }}>{this.props.item.cryptoAmount}</Text>
                  </View>
                  <View style={{ flexDirection: 'column',justifyContent:'space-between' }}>
  
  <Text style={{  color: '#ABB3D0', fontFamily: "Exo2-Regular" }}>Produced</Text>
  <Text style={{   color: '#ABB3D0', fontFamily: 'Exo2-Regular' }}>Coins</Text>
  </View>
                  <View style={{justifyContent:'space-between',alignSelf:'flex-end'}}>
                  <View style={{ flexDirection: 'row' }}>
                        <Image style={{ width: 25,height: 25 }} source={require("../assets/plusblue.png")} ></Image>
                        <Text style={{ color:'#fff', fontFamily: 'Exo2-Regular' }}>${this.props.item.investmentPercentInUsd}</Text>
                      </View>
                      <View>
                      <Text style={{color: '#ABB3D0', fontFamily: 'Exo2-Regular',alignSelf:'flex-end'}}>${usdvalue}</Text>
                      </View>
                
                  </View>
                  <View style={{ flexDirection: 'row',justifyContent:'center' ,marginTop:10}}>                    
                        <Text style={{ color:'#5496FF', fontFamily: 'Exo2-Regular' }}>+{this.props.item.percentage}%</Text>
                        <View style={{alignItems:'center',marginTop:5}}>
                  <Image style={{ width: 10,height: 10 }} source={require("../assets/green.png")} ></Image>
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
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>Currency</Text>
</View>  

<View style={{marginRight:20}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular',marginBottom:10}}>{this.props.item.typeOfInvestment}</Text> 

</View>  

</View>
<View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#5496FF',borderWidth:0.5,}}>
<View style={{marginLeft:20}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>USD</Text>
</View>  

<View style={{marginRight:20}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular',marginBottom:10}}>$ {usdvalue}</Text> 

</View>  

</View>
<View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#5496FF',borderWidth:0.5}}>
<View style={{marginLeft:20}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>Processing fee</Text>

</View>  

<View style={{marginRight:20}} >
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular',marginBottom:10,}}>{this.props.item.percentage}%</Text> 

</View>  

</View>
</View> 



   </View>
        </View>
        
          
  
      );
    }
  }