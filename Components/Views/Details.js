import * as React from 'react';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import { View, StyleSheet, ScrollView ,Text,Image,TouchableOpacity,TextInput} from 'react-native';
import { Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'


  class Details extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        
        YesColor:'#fbfbfb',
      };
    }
  static navigationOptions = ({ navigation, screenProps })=>({
    title:'SITE INSPECTION',
    headerTitleStyle: {
      color:'#7f7f7f',
        textAlign: 'center',
        flexGrow:1,
        alignSelf:'center',
    },
    headerRight: (<TouchableOpacity style={{backgroundColor: '#27a8e0',marginRight:10}} >
    <View style={{flexDirection:'row',alignContent:'center'}}>
    <Text style={{ color: '#fff',padding:10,
      textAlign: 'center',
      fontWeight: '700'}}>SEND</Text>     
    </View>   
    </TouchableOpacity> ),
    headerLeft: (
      <TouchableOpacity style={{alignContent:'flex-start'}}  onPress={()=>navigation.goBack(null)}>
      <View style={{flexDirection:'row'}}>
      <Image source={require('./left_arrow.png')} style={{marginLeft:10}} ></Image>
      <Text style={StyleSheet.flatten({color:'#1C90C4',marginLeft:10})}>Back</Text>     
      </View>   
      </TouchableOpacity>
    ),
});
onSelect(index, value){
  this.setState({
    text: `Selected index: ${index} , value: ${value}`
  })
}
  render() {
    const {navigate}=this.props.navigation;
    var YesColor=this.state.YesColor;
    var NoColor=this.state.NoColor;
    return (  
    
    <View style={{flex:1,justifyContent:'flex-start',backgroundColor: '#fbfbfb'}}> 
      <ScrollView
    >    
       <View style={styles.containers}>
       <View style={{flexDirection:'row'}}>
       <Text style={{marginLeft:15,marginRight:15,marginTop:15,fontWeight: 'bold',}}>1</Text>
       <Text style={{marginLeft:10,marginRight:15,marginTop:15,fontWeight: 'bold',}}>What is your Name?</Text>
       </View>
           <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               returnKeyType="next" 
               placeholder='Answer here' 
               placeholderTextColor='rgba(225,225,225,0.7)'/>
                <View style={{flexDirection:'row'}}>
       <Text style={{marginLeft:15,marginRight:15,marginTop:15,fontWeight: 'bold',}}>2</Text>
       <Text style={{marginLeft:10,marginRight:15,marginTop:15,fontWeight: 'bold',}}>Describe your job?</Text>
       </View>
       <View style={styles.textAreaContainer} >
       <TextInput style = {styles.inputS} 
               autoCapitalize="none"              
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               returnKeyType="next" 
               placeholder='Tap to enter' 
               placeholderTextColor='rgba(225,225,225,0.7)'/>
  </View>
           
                <View style={{flex:1,flexDirection:'row',width:'80%'}}>
       <Text style={{marginLeft:15,marginRight:15,marginTop:15, fontWeight: 'bold',}}>3</Text>
       <Text style={{marginLeft:10,marginRight:15,marginTop:15, fontWeight: 'bold',}}>Are you happy with your job?</Text>
       </View>
       <View style={{flex:1,width:'80%',marginLeft:25,marginRight:15,marginTop:15}}>
       <RadioGroup
        onSelect = {(index, value) => this.onSelect(index, value)}
      >
        <RadioButton value={'item1'} >
          <Text>Completely satisfied</Text>
        </RadioButton>
 
        <RadioButton value={'item2'}>
          <Text>satisfied</Text>
        </RadioButton>
 
        <RadioButton value={'item3'}>
          <Text>Neutral</Text>
        </RadioButton>
      </RadioGroup>
       </View>
       <View style={{flex:1,flexDirection:'row'}}>
       <Text style={{marginLeft:15,marginRight:15,marginTop:15, fontWeight: 'bold',}}>4</Text>
       <Text style={{marginLeft:10,marginRight:15,marginTop:15, fontWeight: 'bold',}}>What is your Salary?</Text>
       </View>
       <View style={{flex:1,flexDirection:'row'}}>
       <Text style={{marginLeft:15,marginRight:15,marginTop:15}}>€</Text>
       <TextInput style = {styles.salary} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               returnKeyType="next" 
               placeholder='Answer here' 
               placeholderTextColor='rgba(225,225,225,0.7)'/>
       </View>
       <View style={{flex:1}}>
       
       <View style={{flex:1,flexDirection:'row'}}>
       <Text style={{marginLeft:15,marginRight:15,marginTop:15, fontWeight: 'bold',}}>5</Text>
       <Text style={{marginLeft:10,marginRight:15,marginTop:15, fontWeight: 'bold',}}>was the window display inviting?</Text>
      
       </View>
       <View style={{flex:1,borderWidth:0.5,borderColor:'#27a8e0',flexDirection:'row',width:'80%',marginLeft:15,marginRight:15,marginTop:15}}>
       <TouchableOpacity style={{flex:1,padding:10,borderRightWidth:0.5,width:'40%',justifyContent:'center',backgroundColor:YesColor}}>
       <View >
<Text style={{textAlign:"center"}}>Yes</Text>

      </View>
       </TouchableOpacity>
      <TouchableOpacity style={{flex:1,padding:10,width:'40%',justifyContent:'center'}} onPress={this.changeNoColor}>
      <View >
      <Text Style={{textAlign:"center"}}>No</Text>
      </View>
      </TouchableOpacity>
    
     </View>
       </View>

           </View>
           </ScrollView>
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
      height: 40,
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      color: '#000',    
      marginLeft:35,marginRight:10,marginTop:5
  },
  buttonContainer:{
   
},
  salary:{
    width: '80%',  
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    color: '#000',marginTop:5
},
  inputS:{
    width: '80%',  
    height:100,
    backgroundColor: '#fff',
    borderColor: '#d6d7da',
    width: '80%',
    color: '#000',    
    marginLeft:35,marginRight:10,marginTop:5
},
  textAreaContainer: {
    padding: 5
  },
  textStyle :{
    fontFamily: 'Arial',
    fontSize: 16
},
  buttonContainer:{
      backgroundColor: '#27a8e0',
      width: '40%',
      marginTop:15,
      paddingVertical: 15
  },
  buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  }
});
export default withNavigation(Details);