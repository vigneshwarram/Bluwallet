import React from 'react';
import { View, StyleSheet, Image,TextInput,NativeModules,Text,ActivityIndicator,TouchableOpacity,Dimensions,Alert,AsyncStorage} from 'react-native';
import AlphaScrollFlatList from 'alpha-scroll-flat-list';
const WIDTH = Dimensions.get('window').width;
import DateTimePicker from "react-native-modal-datetime-picker";
const ITEM_HEIGHT = 50;
import Spinner from 'react-native-loading-spinner-overlay';
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import LinearGradient from 'react-native-linear-gradient';
import ProfileRegisters from '../Api/ProfileRegisterApi'
import registerUpdateApi from '../Api/RegisterUpdateApi';
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
      Dates:'Date of Birth',
      spinner:false,
      responsemessage:'',
      visibles:false,
      animate:false,
      FirstName:null,
      LastName:null,
      isDateTimePickerVisible: false,
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
      app5color:'#fff',

      FirstNameBodercolor:'#d7dee8',
      FirstNameBoderWidth:0
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
      <View> 

<LinearGradient
colors= {['#FFFFFF','#DFE1ED','#CCCFE2']} style={{height:'100%'}}>   
  <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          overlayColor='rgba(0,0,0,0.5)'
          animation='fade'
          size='large'
          color='#f4347f'
          textStyle={styles.spinnerTextStyle}
        />
                         <View style={{paddingLeft:20,paddingRight:20}}>
 <Dialog
  onTouchOutside={() => {
      this.setState({ visibles: false });
    }}
  
    visible={this.state.visibles}>
    <DialogContent>
     <View style={{width:300,height:110,alignItems:'center'}}>
         <View style={{alignItems:'center',paddingTop:10}}>
         <Image style={{width: 50, height: 50,resizeMode:'contain'}}   source={require("../assets/successtik.png")} ></Image>     
         </View>
         <View style={{paddingTop:10,paddingBottom:10}}>
         <Text style={{fontSize:15,color:'#454976',fontFamily:'Exo2-Regular',textAlign:'center'}}>{this.state.responsemessage}</Text>           
         </View>
     </View>
    </DialogContent>
  </Dialog>
 </View>
 <View style={{justifyContent:'center',alignItems:'center',position:'absolute',bottom:100,}}>
        <Image
                style={{width: Dimensions.get('window').width,
    resizeMode: "contain",
    height: 211,opacity:0.1}}
                source={require('../assets/dlogo.png')}
            />            
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fff'}}>
        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Image  style={{width: 6, height: 11,marginLeft:20,marginTop:20,resizeMode:'contain'}}  source={require("../assets/left-arrow.png")} ></Image> 
    </View>
    </TouchableOpacity>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#4e649f',opacity:1,fontSize:20,marginTop:10,fontFamily:'Exo2-Bold'}}>Profile</Text>
    </View>
    <View></View>
    </View>
    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
    <Text style={{color:'#4e649f',opacity:1,fontSize:12,marginTop:25,fontFamily:'Exo2-SemiBold'}}>We need this to verify your identify,In order for</Text>
    <Text style={{color:'#4e649f',opacity:1,fontSize:12,marginTop:2,fontFamily:'Exo2-SemiBold'}}> you to use this improved feature.It should only</Text>
    <Text style={{color:'#4e649f',opacity:1,fontSize:12,marginTop:2,fontFamily:'Exo2-SemiBold'}}> Take a couple of minutes</Text>
          <View style={{width:'100%',borderColor:this.state.FirstNameBodercolor,backgroundColor:'#fff',marginTop:30, justifyContent:"center",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1,borderBottomWidth:this.state.FirstNameBoderWidth}}>
<View style={{flexDirection:'row',marginLeft:20,justifyContent:'flex-start',alignItems:'center'}}>

<TextInput
          style={{height: 50,padding:10,fontFamily:'Exo2-Regular'}}
        placeholderTextColor='#9ab8db'
          placeholder="First Name"
          onChangeText={(text) => this.FirstNameTextChange(text)}
        value={this.state.FirstName}
        />
</View>
          </View>
          <View style={{width:'100%',borderColor:'#d7dee8',backgroundColor:'#fff', justifyContent:"center",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1}}>
<View style={{flexDirection:'row',marginLeft:20,justifyContent:'flex-start',alignItems:'center'}}>

<TextInput
          style={{height: 50,padding:10,fontFamily:'Exo2-Regular'}}
        placeholderTextColor='#9ab8db'
          placeholder="Last Name"
          onChangeText={(text) =>this.setState({LastName:text})}
        value={this.state.LastName}
        />
</View>
          </View>
         
          <View style={{width:'100%',backgroundColor:'#fff',borderColor:'#d7dee8', justifyContent:"center",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1}}>
          <TouchableOpacity onPress={this.DateTouch}>
<View style={{flexDirection:'row',marginLeft:20,justifyContent:'flex-start',alignItems:'center'}}>
<DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />

<View
          style={{height: 50,padding:10}}><Text style={{color:'#9ab8db'}}>{this.state.Dates}</Text></View>
          
</View>
</TouchableOpacity>
</View>

          </View>
    </LinearGradient>
    </View>
    <View style={{position:'absolute',bottom:0,width:'100%'}}>  
    <TouchableOpacity onPress={this.BeginAction}>   
    <View>
    <LinearGradient colors={['#41d99c','#34ddb2','#21e4d3']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{padding:15,justifyContent:'center',alignItems:'center',}}>
<Text style={{color:'#fff',fontSize:20,fontFamily:'Poppins-Medium'}}>Submit</Text>
</LinearGradient>
    </View> 
    </TouchableOpacity> 
        
    <LinearGradient colors={['#354e91','#354e91','#354e91']}  style={{padding:15,alignItems:'center'}}>
<TouchableOpacity>
<Text style={{color:'#fff',opacity:1,fontSize:11,marginTop:2,fontFamily:'Exo2-Regular'}}>when you create a wallet,you accept</Text>
<View style={{flexDirection:'row',marginTop:2,}}>
<Text style={{color:'#5496ff',opacity:1,fontSize:11,marginTop:5,fontFamily:'Exo2-SemiBold'}}>Terms of Service</Text>
<Text style={{color:'#fff',opacity:1,fontSize:11,marginTop:5,marginLeft:8,fontFamily:'Exo2-Regular'}}>&</Text>
<Text style={{color:'#5496ff',opacity:1,fontSize:11,marginTop:5,marginLeft:8,fontFamily:'Exo2-SemiBold'}}>Politic and privacy</Text>
</View>

</TouchableOpacity>
</LinearGradient>
        </View>
      </View>
    );
  }
  DateTouch=()=>{
    this.setState({
      isDateTimePickerVisible:true
    })
  }
  hideDateTimePicker = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
if(year>2015){
  alert('You cant enter')
}
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    this.setState({ isDateTimePickerVisible: false,Dates:year+'-'+month+'-'+day});
  };
 
  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker(date);
  };
  FirstNameTextChange=(text)=>{
    this.setState({
      FirstName:text,
    })
    if(text.length>0){
      this.setState({
        FirstNameBoderWidth:1,FirstNameBodercolor:'green'
      })
    }
    else{
      this.setState({
        FirstNameBoderWidth:0,FirstNameBodercolor:'#d7dee8',
        FirstName:null
      })
    }
  }
  BeginAction=()=>
  {
    //this.props.navigation.push('Home',{DashBoardPopup:false,Kyc:true})
     this.Profile()
  }
  Profile=async()=>
  {
    if(this.state.FirstName==null){
      this.setState({
        FirstNameBodercolor:'red',
        FirstNameBoderWidth:1
      })
    }
    else if(this.state.LastName==null) 
    {
      this.setState({
        LastNameNameBodercolor:'red',
        LastNameBoderWidth:1
      })
    }
    else if(this.state.Dates==null)
    {
     Alert.alert('Please select Date')
    }
    else
    {
      let params=this.props.navigation.state.params.RegisterDetails
      let userid=await AsyncStorage.getItem('UserId')
      console.log('regData',params.AddressLine1)
      let profileParams=
      {
         address:params.AddressLine1,
         address1:params.AddressLine2,
         postalCode:params.PostalCode,
         cityId:params.cityId,
         countryId:params.CountryId,
         stateId:params.cityId,
         userId:parseInt(userid,10),
         firstName:this.state.FirstName,
         lastName:this.state.LastName,
         dob:this.state.Dates,

      }
      //ProfileRegisters(profileParams,this.ProfileRegisterResult)
    
      //need to call register update API here
     console.log('Profile register data request',profileParams)
     this.Load()
      registerUpdateApi(profileParams,this.RegisterUpdateResult)
  
    }
  //  
  }
  Load(){
    //this.StartImageRotateFunction();
    this.setState({spinner:true})
  }
  hide(){
    this.setState({spinner:false})
  }
  RegisterUpdateResult=(data)=>{
    this.hide()
    if(data.status=='success')
    {
         this.successStatus(data)
    }
    else if(data.error==='Token Expired')
    {
      Alert.alert(
        'Error',
        'Token Expired',
        [
          {text: 'OK', onPress: () => this.props.navigation.navigate("Login")},
        ],
  
      );
    }
    else 
    {
      Alert.alert(data.status,data.message)
    }
    
  }
  successStatus=(data)=>
  {
    this.setState({visibles:true,responsemessage:data.message})
    setTimeout(this.navigate, 700);
  }
  navigate=()=>
  {
    this.setState({visibles:false})   
    this.props.navigation.push('Home',{DashBoardPopup:false,Kyc:false})
  }




  // ProfileRegisterResult=(data)=>
  // {
  // if(data.status=='success')
  // {
  //         Alert.alert(
  //           Registerdata.status,
  //           Registerdata.message,
  //           [
  //             {text: 'OK', onPress: () =>  this.props.navigation.push('Home',{DashBoardPopup:false,Kyc:true})},
  //           ],
  //           {cancelable: false},
  //         );
  // }else if(data.error==='Token Expired')
  //   {
  //     Alert.alert(
  //       'Error',
  //       TokenExpired,
  //       [
  //         {text: 'OK', onPress: () => this.props.navigation.navigate("Login")},
  //       ],
  
  //     );
  //   }
  //   else 
  //   {
  //     Alert.alert(data.status,data.message)
  //   }
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20
  },
  spinnerTextStyle: {
    color: '#FFF'
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