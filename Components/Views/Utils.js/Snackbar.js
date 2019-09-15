
import React, { Component } from 'react';

import { Alert,Animated, LayoutAnimation,Dimensions, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image,AsyncStorage } from 'react-native';
const width=Dimensions.get('window').width
export default class Snackbar extends Component {

    constructor() {
  
      super();
    
      this.state = {
         Shown:false,
          animated:new Animated.Value(0)
        
      }
    }

   componentWillReceiveProps(nextProps)
   {
    console.log('nextProps',nextProps.Visible)
    this.setState({Shown:nextProps.Visible})   
       
   }
shouldComponentUpdate(nextProps,nextState)
{
    if(nextProps.Visible!=this.props.Visible)
    {
        //this.SnackbarAction()
        this.SnackbarAction()
        return true
    }
    return false
}
      
   
   SnackbarAction=()=>
   {
   
        Animated.timing(this.state.animated,{
            toValue:this.state.Shown?1:0,
            duration:500
        }).start() 
   }
   


   
    render() {
      return (
       <Animated.View style={{position:'absolute',bottom:0,backgroundColor:'red',width:width,transform:[{
           translateY:this.state.animated.interpolate({
               inputRange:[0,1],
               outputRange:[150,1]
           })
       }]}}>
           <View style={{justifyContent:'center',padding:20,paddingRight:20}}>
               <Text style={{color:'#fff'}}>Invalid credentials</Text>

           </View>
       </Animated.View>
          
  
      );
    }
  }