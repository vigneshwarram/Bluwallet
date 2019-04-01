import * as React from 'react';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import { View, StyleSheet, ScrollView,Switch,Text,Image,TouchableOpacity,TextInput} from 'react-native';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'


export default class Settings extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen : false
  }
  this.onControlChange = this.onControlChange.bind(this); 
}

onControlChange(value) {

return this.setState({
  isOpen: !this.state.isOpen
});
  }
  static navigationOptions = {
    title:'SITE INSPECTION',
    headerTitleStyle: {
      color:'#7f7f7f',
        textAlign: 'center',
        flexGrow:1,
        alignSelf:'center',
    },
    headerRight: (<View/> ),
    headerLeft: (
      <TouchableOpacity style={{alignContent:'flex-start'}}>
      <View style={{flexDirection:'row'}}>
      <Image source={require('./assets/left_arrow.png')} style={{marginLeft:10}} ></Image>
      <Text style={StyleSheet.flatten({color:'#1C90C4',marginLeft:10})}>Back</Text>     
      </View>   
      </TouchableOpacity>
    ),
}
onSelect(index, value){
  this.setState({
    text: `Selected index: ${index} , value: ${value}`
  })
}
  render() {
    const {navigate}=this.props.navigation;
    return (  
    
    <View style={{flex:1,justifyContent:'flex-start',backgroundColor: '#fbfbfb'}}> 
      <ScrollView
    >    
       <View style={styles.containers}>
       <View style={{flexDirection:'row'}}>
       <Text style={{marginLeft:20,marginRight:15,marginTop:15,fontWeight: 'bold',}}>Device Unique ID</Text>
       </View>
           <TextInput style = {styles.input} 
               autoCapitalize="none" 
               underlineColorAndroid="#d6d7da"        
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               returnKeyType="next" 
               placeholder='Account Name' 
               placeholderTextColor='rgba(225,225,225,0.7)'/>
          <View style={{flex:1,flexDirection:'row',  borderTopWidth: 0,borderBottomWidth:0.5,borderColor:'#d6d7da', justifyContent: 'space-between',marginTop:20}}>
          
          <Text style={{alignItems:'flex-start',marginLeft:20}}>Screen always on</Text>
         
           <Switch style={{alignItems:'flex-end'}}
           onValueChange={this.onControlChange} 
            value={this.state.isOpen}/>
         </View>
     
           </View>
          
           </ScrollView>
           <View style={{flex:1,justifyContent:'flex-end',alignItems: 'center',marginBottom: 36,
                                                           marginLeft:20,
                                                            marginRight:20,
                                                            marginTop:20,}}>
       <TouchableOpacity style={styles.buttonContainer}>
             <Text  style={styles.buttonText}>DELETE ALL SURVEYS</Text>
</TouchableOpacity>
       </View>
    </View>

    
    );
}
}
const styles = StyleSheet.create({
 
  containers: {
    flex: 1,
    justifyContent:'flex-start',   
    backgroundColor: '#fbfbfb',
  },
  input:{
      width: '80%',      
      borderColor: '#d6d7da',
      color: '#000', 
      marginLeft:20
  },
  salary:{
    width: '80%',  
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    color: '#000',marginTop:5
},
  textAreaContainer: {
    padding: 5
  },
  textStyle :{
    fontFamily: 'Arial',
    fontSize: 16
},
  buttonContainer:{
    backgroundColor: '#FF0000',
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