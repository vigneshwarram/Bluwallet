import * as React from 'react';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import { View, StyleSheet, KeyboardAvoidingView ,Text,Image,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import { Alert } from 'react-native';

export default class SignUp extends React.Component {
  static navigationOptions = {
    title:'SIGNUP',
    headerTitleStyle: {
      color:'#7f7f7f',
        textAlign: 'center',
        flexGrow:1,
        alignSelf:'center',
    },
    headerRight: (<View/>),
    headerLeft: (
      <TouchableHighlight style={{alignContent:'flex-start'}}>
      <View style={{flexDirection:'row'}}>
      <Image source={require('./assets/left_arrow.png')} style={{marginLeft:10}} ></Image>
      <Text style={StyleSheet.flatten({color:'#1C90C4',marginLeft:10})}>Back</Text>     
      </View>   
      </TouchableHighlight>
    ),
}
  render() {
    const { goBack } = this.props.navigation;
    return (  
    <View style={{flex:1,justifyContent:'flex-start',backgroundColor: '#fbfbfb'}}> 
       <View style={styles.containers}>
       <Text style={{color:'#7f7f7f',textAlign:"center",marginLeft:25,marginRight:25,marginBottom:25}}>Maecenas sed diam eget risus varius blandit sit amet non magna</Text>
       <Text style={{color:'#7f7f7f',textAlign:"center",marginLeft:25,marginRight:25}}>com socilis natoque penatibus et magnis dis parturient montes,nasceter rediculus mus.Donec ullamcorper nulla non</Text>     

<TouchableOpacity style={styles.buttonContainer}                   >
             <Text  style={styles.buttonText}>VISIT WEBSITE</Text>
</TouchableOpacity> 
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
    backgroundColor: '#fbfbfb',
  },
  input:{
      height: 50,
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      width: '80%',
      color: '#000'
  },
  textStyle :{
    textAlign: 'center',   
    fontFamily: 'Arial',
    fontSize: 16
},
  buttonContainer:{
      backgroundColor: '#27a8e0',
      width: '80%',
      marginTop:15,
      paddingVertical: 15
  },
  buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  }
});