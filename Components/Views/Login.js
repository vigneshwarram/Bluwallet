import * as React from 'react';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import { View, StyleSheet, Platform ,Text,Image,AsyncStorage,TouchableOpacity,TextInput} from 'react-native';
import { Alert } from 'react-native';
import firebase from 'firebase';
import getlink from './Api'
import DeviceInfo from 'react-native-device-info';
import Loginlink from './Api'
import { NavigationActions } from 'react-navigation'

export default class Login extends React.Component {
  constructor(props){
    super(props);
    
    this.readUserData = this.readUserData.bind(this)
    this._retrieveData=this._retrieveData.bind(this);
    
    this.state=({
      username:'m12t6@mailinator.com',
      password:'Password1',
      itemsvalue:[],
      status:Boolean,
      token:String
    })
  }
  handleBackButtonClick=()=>{
    var obj={method:'POST',
  headers:{
    'Content-Type': 'application/json',
  } ,
  body:JSON.stringify({
    "email" : this.state.username,
    "password" :this.state.password,
    "deviceType" :Platform.OS === 'ios' ?"iOS":"Android",
    "deviceModel" :DeviceInfo.getApplicationName().toString()
  }),
  }
   fetch(Loginlink(), obj).then(function(res){   
      return res.json();
     }) .then(function(resJson) {     
      if(resJson!=null){
       
        this._storeData(resJson)
      }      
      return resJson
     })  
      this.props.navigation.navigate("Menu");  
  }
  static navigationOptions =({ navigation, screenProps })=> ({
    title:'LOGIN',
    headerTitleStyle: {
      color:'#7f7f7f',
        textAlign: 'center',
        flexGrow:1,
        alignSelf:'center',
    },
    headerRight: (<View/>),
    headerLeft: (
      <TouchableOpacity style={{alignContent:'flex-start'}} onPress={() =>navigation.goBack(null)}>
      <View style={{flexDirection:'row'}}>    
      </View>   
      </TouchableOpacity>
    ),
});
  render() {
   
    return (  
    <View style={{flex:1,justifyContent:'flex-start',backgroundColor: '#fbfbfb'}}> 
       <View style={styles.containers}>
       <Text style={{color:'#7f7f7f',textAlign:"center",marginLeft:25,marginRight:25,marginBottom:25}}>Maecenas sed diam eget risus varius blandit sit amet non magna</Text>
           <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               value={this.state.username}
               onChangeText={(username)=>this.setState({username})}    
               returnKeyType="next" 
               placeholder='Account Name or ID' 
               placeholderTextColor='rgba(225,225,225,0.7)'/>
<TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
            
               returnKeyType="next" 
               placeholder='UserName or Email' 
               placeholderTextColor='rgba(225,225,225,0.7)'/>
<TouchableOpacity style={styles.buttonContainer} onPress={this.handleBackButtonClick}>
             <Text  style={styles.buttonText}>LOGIN</Text>
</TouchableOpacity> 
 <Text style={{color:'#7f7f7f',textAlign:"center",marginLeft:25,marginRight:25,marginBottom:25}}>{this.state.itemsvalue.length>0?this.state.itemsvalue[0]:'error'}</Text>
<TouchableOpacity onPress={this._retrieveData}>
<Text style={{color:'#7f7f7f',textAlign:"center",marginLeft:25,marginRight:25,marginTop:15,textDecorationLine: 'underline'}}>Forgot Password?</Text>
</TouchableOpacity>
 
           </View>
    </View>
        
  
    
    );
}

readUserData() {
  var usersRef = firebase.database().ref('Users');
  usersRef.on('value', (snapshot) => {
    let items=snapshot.val()
    this.setState({
      itemsvalue: Object.values(items)
    })
  //  this.state.itemsvalue.length>0?Alert.alert(this.state.itemsvalue[0]):Alert.alert('No value');
   status=(this.state.itemsvalue[0]==this.state.username && this.state.itemsvalue[2]==this.state.password)?true:false;
   status? this.props.navigation.navigate('ForgotPassword'):Alert.alert('equal value is false')
  });

}


login() {
  firebase.database().ref('Users/').set({
    email:(this.state.username==null && this.state.username=='')?this.state.username:'empty',
    password:(this.state.password==null && this.state.password=='')?this.state.password:'empty',
    lname:'dsdsds'
}).then((data)=>{
    //success callback
    this.readUserData()
    console.log('data ' , data)
}).catch((error)=>{
    //error callback
    console.log('error ' , error)
})
}
_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('AuthKey');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};
}
_storeData = async (data) => {
  try {
    await AsyncStorage.setItem('AuthKey',data);
    Console.log(data);
  } catch (error) {
    // Error saving data
  }
};
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