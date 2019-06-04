import React from 'react';
import { View, StyleSheet, Image,TextInput,NativeModules,Text,ActivityIndicator,TouchableOpacity,Dimensions,} from 'react-native';
import AlphaScrollFlatList from 'alpha-scroll-flat-list';
const WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = 50;
import LinearGradient from 'react-native-linear-gradient';
export default class ProfileRegister extends React.Component {
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
      <View style={{paddingBottom:30}}> 

<LinearGradient
colors={['#ffffff','#e1e5ef','#e1e5ef']} style={{height:'100%'}}>   
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Image  style={{width: 20, height: 20,marginLeft:20,marginTop:30}}  source={require("../assets/left-arrow.png")} ></Image> 
    </View>
    </TouchableOpacity>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:20,marginTop:30}}>More Info Needed</Text>
    </View>
    <View></View>
    </View>
    <View style={{justifyContent:'center',alignItems:'center',flexDirection:"row" ,marginTop:30}}>
      <View>
      <Image  style={{width: 100, height: 100,}}  source={require("../assets/card.png")} ></Image> 
      </View>
      <View>
      <Image  style={{width: 100, height: 100,}}  source={require("../assets/man.png")} ></Image> 
      </View>
    </View>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
    <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:12,marginTop:25,backgroundColor:'#facbcc'}}>We need more information to complete your </Text>
    <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:12,marginTop:2,backgroundColor:'#facbcc'}}> Profile</Text>
    <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:12,marginTop:10,backgroundColor:'#facbcc'}}> You need to verificate your mobile number,a</Text>
    <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:12,marginTop:2,backgroundColor:'#facbcc'}}> national identity and selfie</Text>
          </View>
    </LinearGradient>
    <View style={{position:'absolute',width:'100%',bottom:0}}>
    <LinearGradient colors={['#fff','#fff','#fff']}  style={{padding:15,justifyContent:'center',alignItems:'center',}}>
<TouchableOpacity onPress={this.BeginAction}>
<Text style={{color:'#d2e4ff'}}>Ahora no</Text>
</TouchableOpacity>
</LinearGradient>       
        <LinearGradient colors={['#17e8e3','#30e0ba','#3ddba1']}  style={{padding:15,justifyContent:'center',alignItems:'center',}}>
<TouchableOpacity onPress={this.BeginAction}>
<Text style={{color:'#fff'}}>Continue</Text>
</TouchableOpacity>
</LinearGradient>

        </View>
    </View>
    
      </View>
    );
  }
  BeginAction=()=>{
    this.props.navigation.navigate('NewWallet');
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