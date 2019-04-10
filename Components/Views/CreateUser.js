import * as React from 'react';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import { View, StyleSheet, ActivityIndicator ,Text,Image,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import { Alert } from 'react-native';
import firebase from 'firebase';
import fire from './Fire'
import { NavigationActions } from 'react-navigation'

export default class CreateUser extends React.Component {
  constructor(props){
    super(props);
    this.readUserData = this.readUserData.bind(this)
    this.handleBackButtonClick=this.handleBackButtonClick.bind(this)
    
    this.state=({
      password:null,
      email:null,
      itemsvalue:[],
      name:null,
      status:Boolean,
      animate:false
    })
  }
  static navigationOptions =({ navigation, screenProps })=> ({
    title:'REGISTRATION',
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
      <Image  source={require('./assets/left_arrow.png')} style={{marginLeft:10}} ></Image>
      <Text style={StyleSheet.flatten({color:'#1C90C4',marginLeft:10})}>Back</Text>     
      </View>   
      </TouchableOpacity>
    ),
});
  render() {
    const {navigate}=this.props.navigation;
    return (  
    <View style={{flex:1,justifyContent:'flex-start',backgroundColor: '#fbfbfb'}}> 
      
       <View style={styles.containers}>
       <View style={styles.loading}>
      <ActivityIndicator size='large' animating = {this.state.animate}
               color = '#bc2b78' />
    </View>
    <TextInput style = {styles.input}   
              returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              value={this.state.name}
               onChangeText={(name)=>this.setState({name})}   
              placeholder='Name' 
              placeholderTextColor='rgba(225,225,225,0.7)' 
              />
<TextInput style = {styles.input}   
              returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              value={this.state.email}
               onChangeText={(email)=>this.setState({email})}   
              placeholder='Email' 
              placeholderTextColor='rgba(225,225,225,0.7)' 
              />
  <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               value={this.state.password}
               onChangeText={(password)=>this.setState({password})}    
               returnKeyType="next" 
               placeholder='Password' 
               placeholderTextColor='rgba(225,225,225,0.7)'/>

<TouchableOpacity style={styles.buttonContainer} onPress={this.handleBackButtonClick}>
             <Text  style={styles.buttonText}>Create New User</Text>
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
   status=(this.state.itemsvalue[0]=='Vicky')?true:true;
   status? this.props.navigation.navigate('Login'):Alert.alert('error in login')
  });

}

handleBackButtonClick=()=> {
  this.Load()
 if(this.state.email==null)
{Alert.alert('please enter email')}
else if(this.state.password==null)
{Alert.alert('please enter password')}
  else
  {
   
     const user={
'email':this.state.email,
'password':this.state.password,
'name':this.state.name
     }
     fire.shared.createAccount(user)
  }
}
loginsuccess=()=>{
  console.log('login successful, navigate to DshBoard.');
  this.hide()
  this.props.navigation.navigate('Menu')
}
loginfailure=()=>{
  Alert.alert('Login failed')
  this.hide()
}
Load(){
  this.setState({animate:true})
}
hide(){
  this.setState({animate:false})
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
     marginTop:10,
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      width: '80%',
      color: '#000'
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
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