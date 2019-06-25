import React from 'react';
import { View, StyleSheet, Image,TextInput,NativeModules,Text,ActivityIndicator,TouchableOpacity,Dimensions,} from 'react-native';
import AlphaScrollFlatList from 'alpha-scroll-flat-list';
const WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = 50;
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-simple-modal";
import { ScrollView } from 'react-native-gesture-handler';
export default class Confirm extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
    this.state = {
      dataSource:[],
      cityItems:["US Doller,Indian,Eutherium"],
      Coin: 'Us Doller',
      animate:false,
      open:false,
      CameraPopup:false,
      data: [
        {
          "id": "5b588d4acb1fe7c48301af77",
          "name": "Iris Maddox",
          "company": "COLAIRE"
        },
        {
          "id": "5b588d4a7e7b0b916259c3f0",
          "name": "Jane Small",
          "company": "DUOFLEX"
        },
        {
          "id": "5b588d4a478f8056d34b794c",
          "name": "Dotson Ortiz",
          "company": "CYTREX"
        },
        {
          "id": "5b588d4a14ed168a2673c902",
          "name": "Hall Nguyen",
          "company": "ENTROFLEX"
        },
        {
          "id": "5b588d4a7549063dbb46df0b",
          "name": "Estrada Armstrong",
          "company": "BOILICON"
        },
        {
          "id": "5b588d4aa564689268c5472a",
          "name": "Josie Harmon",
          "company": "RODEMCO"
        },
        {
          "id": "5b588d4a00f614c7ae794fd3",
          "name": "Sondra Stevenson",
          "company": "OHMNET"
        },
        {
          "id": "5b588d4a69a2745fe601a688",
          "name": "Booker Trevino",
          "company": "OCEANICA"
        },
        {
          "id": "5b588d4a22d9a7800b157b0e",
          "name": "Lilly Luna",
          "company": "INCUBUS"
        },
        {
          "id": "5b588d4a04251caba4c9fb97",
          "name": "Bird Landry",
          "company": "ELECTONIC"
        },
        {
          "id": "5b588d4acb1fe7c48301af77",
          "name": "Iris Maddox",
          "company": "COLAIRE"
        },
        {
          "id": "5b588d4a7e7b0b916259c3f0",
          "name": "Jane Small",
          "company": "DUOFLEX"
        },
        {
          "id": "5b588d4a478f8056d34b794c",
          "name": "Dotson Ortiz",
          "company": "CYTREX"
        },
        {
          "id": "5b588d4a14ed168a2673c902",
          "name": "Hall Nguyen",
          "company": "ENTROFLEX"
        },
        {
          "id": "5b588d4a7549063dbb46df0b",
          "name": "Estrada Armstrong",
          "company": "BOILICON"
        },
        {
          "id": "5b588d4aa564689268c5472a",
          "name": "Josie Harmon",
          "company": "RODEMCO"
        },
        {
          "id": "5b588d4a00f614c7ae794fd3",
          "name": "Sondra Stevenson",
          "company": "OHMNET"
        },
        {
          "id": "5b588d4a69a2745fe601a688",
          "name": "Booker Trevino",
          "company": "OCEANICA"
        },
        {
          "id": "5b588d4a22d9a7800b157b0e",
          "name": "Lilly Luna",
          "company": "INCUBUS"
        },
        {
          "id": "5b588d4a04251caba4c9fb97",
          "name": "Bird Landry",
          "company": "ELECTONIC"
        },
       
      ],
      w: 50,
      h: 45,
      wr:50,
      hr:45,
      Ahr:80,
      Awr:80,
      clickr:false,
      clickopen:false,
      click:false,
      slide:false,
      visible: false,
      hidden: false,
      app1color:'#fff',
      app5color:'#fff'
    };
  }
  renderItem ({item}) {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.name}</Text>
      </View>
    );
  }

  keyExtractor (item) {
    return item.id;
  }

  render() {
 
    return (
      <View style={styles.container}>
      <ScrollView>
<View style={{flex:1}}>
<LinearGradient
colors= {['#FFFFFF','#DFE1ED','#CCCFE2']} style={{height:'100%'}}>   
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Image  style={{width: 15, height: 15,marginLeft:20,marginTop:20,resizeMode:'contain'}}  source={require("../assets/left-arrow.png")} ></Image> 
    </View>
    </TouchableOpacity>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#4e649f',opacity:1,fontSize:20,marginTop:15,fontFamily:''}}>More Info Needed</Text>
    </View>
    <View></View>
    </View>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
      <View>
      <Image  style={{width: 250, height: 250,resizeMode:'contain'}}  source={require("../assets/card.png")} ></Image> 
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#3f518f',fontWeight:'bold',opacity:1,fontSize:18,fontFamily:''}}>Let's Confirm It's You</Text>  
          </View>
    </View>
    <View>
    
          <View style={{justifyContent:'center',alignItems:'center',marginTop:5}}>
          <Text style={{color:'#3f518f',opacity:1,fontSize:12,marginTop:15,textAlign:'center',fontFamily:''}}>You will need 1 of the ID types below to continue</Text>
          </View>
          <View style={{width:'100%',borderColor:'#d7dee8',backgroundColor:'#fff',marginTop:30, justifyContent:"center",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1}}>
<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height: 50,padding:10}}>

<Text style={{color:'#3f518f',fontWeight:'bold',opacity:1,fontSize:12,fontFamily:''}}>Valid Passport</Text>
</View>
   </View>
   <View style={{width:'100%',borderColor:'#d7dee8',backgroundColor:'#fff', justifyContent:"center",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1}}>
<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height: 50,padding:10}}>

<Text style={{color:'#3f518f',fontWeight:'bold',opacity:1,fontSize:12,fontFamily:''}}>National Id Card</Text>
</View>
   </View>
   <View style={{width:'100%',borderColor:'#d7dee8',backgroundColor:'#fff', justifyContent:"center",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1}}>
<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height: 50,padding:10}}>

<Text style={{color:'#3f518f',fontWeight:'bold',opacity:1,fontSize:12,fontFamily:''}}>Residence Card</Text>
</View>
   </View>
   <View style={{width:'100%',borderColor:'#d7dee8',backgroundColor:'#fff', justifyContent:"center",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1}}>
<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height: 50,padding:10}}>

<Text style={{color:'#3f518f',fontWeight:'bold',opacity:1,fontSize:12,fontFamily:''}}>Driver's License</Text>
</View>
   </View>
    </View>
    
    
   <View style={{justifyContent:'center',alignItems:'center'}}>

   <Text style={{color:'#3f518f',fontWeight:'bold',opacity:1,fontSize:15,marginTop:10,fontFamily:''}}>Remember Enable your Camera!</Text> 
   <Text style={{color:'#3f518f',opacity:1,fontSize:12,fontFamily:''}}>please allow your blue wallet App Access</Text>
   <Text style={{color:'#3f518f',opacity:1,fontSize:12,fontFamily:''}}>Your camera to Upload camera pictures </Text>
   <Text style={{color:'#3f518f',opacity:1,fontSize:12,fontFamily:''}}>To the documents</Text>
   </View>
          <View style={{width:'100%',marginTop:30,marginBottom:30}}>
          
    <LinearGradient colors={['#fff','#fff','#fff']}  style={{padding:15,justifyContent:'center',alignItems:'center',}}>
<TouchableOpacity onPress={this.BeginAction}>
<Text style={{color:'#d2e4ff'}}>Ahora no</Text>
</TouchableOpacity>
</LinearGradient>     
<TouchableOpacity onPress={this.BeginAction}> 
<View>
<LinearGradient colors={['#41d99c','#34ddb2','#21e4d3']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}  style={{padding:15,justifyContent:'center',alignItems:'center',}}>

<Text style={{color:'#FFF',fontSize:18,fontWeight:'bold',fontFamily:''}}>Next</Text>

</LinearGradient>
</View>
        </TouchableOpacity> 

        </View>
    </LinearGradient>
    
      <View> 
    </View>
    <View style={{ flex: 1,borderRadius:6, justifyContent: "center", alignItems: "center",position:'absolute',top:0,bottom:0,left:0,right:0}}>
        <Modal
          offset={this.state.offset}
          open={this.state.open}
          animationTension={40}
          closeOnTouchOutside={false}
        >
        <View >
         <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
      <View style={{backgroundColor:'#fd6d71',height:this.state.hr,width:this.state.wr,justifyContent:'center', borderTopStartRadius:25,borderBottomStartRadius:25, marginTop:10,marginRight:-10}}>
            <TouchableOpacity onPress={this.ContactSupportCancel}>
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginLeft:10,width: 20, height: 20}}   source={require("../assets/cancel.png")} ></Image>     
     
          </View>
          </TouchableOpacity>
            </View>
    </View>
    <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 12, fontWeight:'bold',color:'#354e91' ,fontFamily:''}}>Need some Help!</Text>
            <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:12,marginTop:10,fontFamily:''}}>If you need any help remember</Text>
             <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:12,marginTop:2,fontFamily:''}}>That we got the best team of</Text>
             <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:12,marginTop:2,fontFamily:''}}>so try and contact us.</Text>
             <View style={{marginTop:30,width:'80%'}}>
             <TouchableOpacity onPress={this.ContactSupportCancel}>
             <View >
             <LinearGradient colors={['#3757c1','#4986e2','#74e5fb']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}   style={{padding:10,justifyContent:'center',alignItems:'center',borderRadius:15}}>

<Text style={{color:'#fff'}}>Contact Support</Text>

</LinearGradient>
             </View>
             </TouchableOpacity>
             </View>
            </View>
            </View>
        </Modal>
      </View>

      <View style={{ flex: 1,borderRadius:6, justifyContent: "center", alignItems: "center",position:'absolute',top:0,bottom:0,left:0,right:0}}>
        <Modal
          offset={this.state.offset}
          open={this.state.CameraPopup}
          animationTension={40}
          closeOnTouchOutside={false}
        >
        <View>
         <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
      <View style={{backgroundColor:'#fd6d71',height:this.state.hr,width:this.state.wr,justifyContent:'center', borderTopStartRadius:25,borderBottomStartRadius:25, marginTop:10,marginRight:-10}}>
            <TouchableOpacity onPress={this.CameraClose}>
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginLeft:10,width: 20, height: 20}}   source={require("../assets/cancel.png")} ></Image>     
     
          </View>
          </TouchableOpacity>
            </View>
    </View>
    <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 12, fontWeight:'bold',color:'#354e91',fontFamily:'' }}>Allow Camera Access!</Text>
            <Text style={{color:'#3f518f',fontWeight:'bold',opacity:1,fontSize:18,marginTop:10,fontFamily:''}}>Remember Enable your Camera!</Text> 
   <Text style={{color:'#3f518f',opacity:1,fontSize:12,fontFamily:''}}>please allow your blue wallet App Access</Text>
   <Text style={{color:'#3f518f',opacity:1,fontSize:12,fontFamily:''}}>Your camera to Upload camera pictures </Text>
   <Text style={{color:'#3f518f',opacity:1,fontSize:12,fontFamily:''}}>To the documents</Text>
             <View style={{marginTop:30,width:'80%'}}>
             <TouchableOpacity onPress={this.ContactAction}>
             <View >
             <LinearGradient colors={['#17e8e5','#2ce1c2','#3fdaa0']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}   style={{padding:10,justifyContent:'center',alignItems:'center',borderRadius:15}}>

<Text style={{color:'#fff'}}>Accept</Text>

</LinearGradient>
             </View>
             </TouchableOpacity>
             </View>
             <View style={{marginTop:10,width:'80%'}}>
             <TouchableOpacity>
             <View >
             <LinearGradient colors={['#f4347d','#f95975','#ff7670']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}  style={{padding:10,justifyContent:'center',alignItems:'center',borderRadius:15}}>

<Text style={{color:'#fff'}}>Deny</Text>

</LinearGradient>
             </View>
             </TouchableOpacity>
             </View>
            </View>
            </View>
        </Modal>
      </View>
      </View>
      </ScrollView>
      </View>
    );
  }
  BeginAction=()=>{
   this.setState({
     open:true
   })
  }
  ContactAction=()=>{
    this.props.navigation.navigate('DashBoard',{
        DashBoardPopup: false,
      })
  }
  ContactSupportCancel=()=>{
    this.setState({
        open:false,
        CameraPopup:true
      })
  }
  CameraClose=()=>{
    this.setState({       
        CameraPopup:false
      })
      this.props.navigation.navigate('DashBoard',{
        DashBoardPopup: false,
      })
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20
  },
  itemContainer: {
    width: WIDTH,
    flex: 1,
    flexDirection: 'column',
    height: ITEM_HEIGHT
  },
  itemTitle: {
    fontWeight: 'bold',
    color: '#888',
    padding: 5,marginLeft:20
  },
  itemSubtitle: {
    color: '#ddd',
    padding: 5,
    paddingTop: 0
  }
});