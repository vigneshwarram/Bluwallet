import React, { Component } from 'react';
import { View, StyleSheet, Image,Text,ActivityIndicator,TouchableOpacity,FlatList} from 'react-native';
import firebase from 'firebase'; 
import {snapshotToArray } from './Helpers'

import Fire from './Fire';




export default class Contact extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });

  state = {
    users: [], animate:false
  }

   componentDidMount() {
    firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        this.getAllUsers(currentUser);
      }
    });
    }
    Load(){
      this.setState({animate:true})
    }
    hide(){
      this.setState({animate:false})
    }
    getAllUsers = async (currentUser) => {
      this.Load()
      const allUsers = firebase.database().ref().child('messages');
  
      const allUsersSnapshot = await allUsers.once('value');
      const users = snapshotToArray(allUsersSnapshot)
        .filter(user => user.email !== currentUser.email)
        .map(user => ({
          name: user.name,
          uid: user.id,
          email: user.email,
        }));
  
      this.setState({
        users,
      });
      console.log('data---->'+users.email)
      this.hide()
    }

    renderRow = ({ item,separators }) => {
      const {
        name, email, uid, photoURL,
      } = item;
      return (
       
        <TouchableOpacity onShowUnderlay={separators.highlight}  onPress={() => this.props.navigation.navigate('Chat', {name:email,id:uid})}
      onHideUnderlay={separators.unhighlight}>
      <View style={{flex:1,backgroundColor:'#fff'}}>
          <View style={{flex:1, flexDirection: 'row',justifyContent:'space-between'}}>
          <View style={{flexDirection: 'row'}}> 
          <Image    source={require("./assets/greendot.png")} style={{marginLeft:20,marginTop:10,width:10,height:10}}></Image>     
       <Text  style={{marginLeft:20,marginTop:10}}>{email}</Text>   
          </View>
      
       <Text  style={{marginRight:20,marginTop:10,color:'blue'}}>{name}</Text>    
      </View>  
  </View>
       
  </TouchableOpacity>  
       
      );
    };
  render() {
    return (
      <View style={styles.Maincontainers}>
      <ActivityIndicator
           animating = {this.state.animate}
           color = '#bc2b78'
           size = "large"
           style = {styles.activityIndicator}/>
             <FlatList
  ItemSeparatorComponent={this.space}
  data={this.state.users}
  renderItem={this.renderRow}
  keyExtractor={user => user.uid}
/>
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
  Maincontainers: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -5,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  profileName: {
    marginLeft: 6,
    fontSize: 18,
    color: '#000',
    fontWeight: '700',
  },
  userButton: {
    marginBottom: 10,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
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