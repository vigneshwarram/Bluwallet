
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ExchangeList,ExchangeRequest ,exchangeUserApi} from '../Api/ExchangeRequest'
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
      return (
        <View>
          <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} >
        <View elevation={5} style={{shadowOffset: { width: 10, height: 10 }}}>
          
           
        <LinearGradient
                            colors={['#4262B5', '#3A549B', '#314279', '#2C3765', '#2A335E']} style={{marginLeft:30,marginRight:30,marginBottom:20,height:100, shadowOffset: { width: 10, height: 10 },
       borderWidth:0.3,borderColor:'#7894f8',justifyContent:'center',alignItems:'center',
        borderRadius:20 }}>
                            <View style={{  flexDirection: 'row' }}>
                              <View>
                                {(this.props.item.typeOfInvestment === 'ETH' ||this.props.item.typeOfInvestment === 'eth' ) ? <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={require("../assets/etheriumshadow.png")} ></Image> :
                                  <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={require("../assets/bitcoinshadow.png")} ></Image>}

                              </View>


                              <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                  <View style={{ justifyContent: 'space-around', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'Exo2-Bold', color: '#ffffff', marginTop: -10 }}>{this.props.item.typeOfInvestment}</Text>
                                    <Text style={{ fontSize: 12, color: '#a9b4d4', marginTop: 10 }}>${this.props.item.ethValueInUsd}</Text>
                                  </View>
                                  <View>
                                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                      <View>
                                        <Text style={{ fontSize: 12, color: '#ABB3D0', marginTop: -10, fontFamily: 'Exo2-Regular' }}>Produced</Text>
                                        <Text style={{ fontSize: 12, fontFamily: 'Exo2-Regular', marginTop: 10, color: '#ABB3D0' }}>Coins</Text>
                                      </View>

                                      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: -15 }}>
                                        <Image style={{ width: 25, height: 25, resizeMode: 'contain', tintColor: '#15E9E9' }} source={require("../assets/plusblue.png")} ></Image>
                                        <View style={{ marginTop: 5 }}>
                                          <Text style={{ fontSize: 12, textAlign: 'center', fontFamily: 'Exo2-Bold', color: '#2A335E' }}>$ {this.props.item.cryptoAmount}</Text>
                                        </View>

                                      </View>
                                    </View>

                                  </View>
                                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingRight: 5 }}>
                                    <Text style={{ fontFamily: 'Exo2-Regular', color: '#5496FF' }}>+{this.props.item.percentage}%</Text>
                                    <Image style={{ width: 10, height: 10, resizeMode: 'contain' }} source={require("../assets/green.png")} ></Image>
                                  </View>
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
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular',marginBottom:10}}>$ {this.props.item.cryptoAmount}</Text> 

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