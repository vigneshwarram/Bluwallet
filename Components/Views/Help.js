import * as React from 'react';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import { View, StyleSheet, KeyboardAvoidingView ,Text,Image,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import { Alert } from 'react-native';

export default class Help extends React.Component {
  static navigationOptions = {
   
}
  render() {
    const {navigate}=this.props.navigation;
    return (  
    <View style={{flex:1,justifyContent:'flex-start',backgroundColor: '#fbfbfb'}}>
   <View style={styles.containers}>   
       <Text style={{color:'#7f7f7f',fontWeight: 'bold',  fontSize: 25,textAlign:"center",marginLeft:25,marginRight:25}}>WELCOME!</Text> 
       <Text style={{color:'#7f7f7f',textAlign:"center",marginLeft:25,marginRight:25,marginTop:10}}>com socilis natoque penatibus et magnis dis parturient montes,nasceter rediculus mus.Donec ullamcorper nulla non</Text>  
       <View style={styles.ButtonRow}>
       <TouchableOpacity style={styles.buttonContainer}   onPress={() => this.props.navigation.navigate('Login')} >
             <Text  style={styles.buttonText}>LOGIN</Text>
</TouchableOpacity> 
<TouchableOpacity style={styles.SignInbuttonContainer}    onPress={() => this.props.navigation.navigate('SignUp')} >
             <Text  style={styles.buttonText}>SIGNUP</Text>
</TouchableOpacity> 
       </View>
      
       </View> 
   </View>
       
 
    
    );
}
}
const styles = StyleSheet.create({
 
  containers: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
    backgroundColor: '#fbfbfb',
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