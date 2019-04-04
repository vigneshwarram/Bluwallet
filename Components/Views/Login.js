import React, { Component } from 'react';
import { StyleSheet,Image,TouchableOpacity, View, Text,TextInput} from 'react-native';
import RNAnimatedTabs from 'rn-animated-tabs';
import { ScrollView } from 'react-native-gesture-handler';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    }
  }
 
  handleTabChange = (value) => this.setState({ currentTab: value });
 
  render() {
    let tab;
    if(this.state.currentTab==0){
      tab=<View  style={[styles.Tab1container]}>
      <View style={{flexDirection:'row', padding:10}}>
      <Image
          source={require("./assets/calendar.png")}
          resizeMode="contain"
          style={{ width: 20, height: 20, marginTop:20,}}></Image>
            <TextInput style = {styles.Input} 
               autoCapitalize="none"              
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               returnKeyType="next" 
               placeholder='Date of Birth' 
               />
      </View>
      <View style={{flexDirection:'row',padding:10}}>
      <Image
          source={require("./assets/phone.png")}
          resizeMode="contain"
          style={{ width: 20,height: 20, paddingTop:10}}></Image>
            <TextInput style = {styles.Input} 
               autoCapitalize="none"              
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               returnKeyType="next" 
               placeholder='Enter mobile Number' 
              />
      </View>
      <View style={{padding:10}}>
      <TouchableOpacity style={styles.buttonContainer}>
             <Text  style={styles.buttonText}>GET OTP</Text>
</TouchableOpacity> 
      </View>
     
 </View>
    }else{
      tab=<View  style={[styles.Tab2container]}>
   <Text>This tab2</Text>
   </View>
    }
    return (
      <View style={styles.container}>
     
      <View style={styles.container}>
       <Image source={require('./assets/menu_splash.jpg')} style={{width:'100%',height:'100%'}} ></Image>
      </View>
        <RNAnimatedTabs 
        containerStyle={{backgroundColor: 'red'}}
        tabTextStyle={{color:'#fff'}}
        activeTabIndicatorColor='#fff'
          tabTitles={['Mobile Number', 'Customer ID']}
          onChangeTab={this.handleTabChange} />
         <View style={[styles.container, styles.center]}>
           {tab}
         </View>
        
     </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Tab1container: {
    flex: 1, 
  },
  Input:{
    width:'90%',
    marginTop:20,
    borderBottomWidth: 0.5,
    marginLeft:10,
    marginRight:10
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',

},
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer:{
    backgroundColor: '#27a8e0',
    marginLeft:10,
    marginRight:10,
    width: '90%',
    marginTop:15,   
    paddingVertical: 20
},
});