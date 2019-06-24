import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,Picker,TextInput,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,} from 'react-native';
import { Alert } from 'react-native';
import BackgroundIcon from '../../Background'

import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

export default class VerificationCards  extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    
    this.state = {
      dataSource:[],
      cityItems:["US Doller,Indian,Eutherium"],
      Coin: 'Us Doller',
      animate:false,
      Country:'Documents Country',
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
      PassportTintcolor:'#000000',
       idTintcolor:'#354E91',
       residenceTintcolor:'#41DA9C',
       driverTintcolor:'#5496FF',

       Residencecolor:'#5496FF',
       idtextcolor:'#5496FF',
       passporttextcolor:'#5496FF',
       drivertextcolor:'#5496FF',

   
       passportcolor1:'#fff',passportcolor2:'#fff',passportcolor3:'#fff',
       idcolor1:'#fff',idcolor2:'#fff',idcolor3:'#fff',
       residencegradientcolor1:'#fff',residencegradientcolor2:'#fff',residencegradientcolor3:'#fff',
       drivercolor1:'#fff',drivercolor2:'#fff',drivercolor3:'#fff',
    };
  
  }
  
  componentDidMount()
  {
    //this.GetListData()
  }
  GetListData=()=>{
    this.Load()
    var obj = {  
      method: 'GET',
      headers: {
        'Content-Type'    : 'application/json',
        'Accept'          : 'application/json',
       'Authorization':'Bearer '+'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJJRCI6ImJmNDczYTU5LTQxNzAtNDQ2My05YTI2LWZlNWNhYTVlZjMwZiIsIkV4cGlyeSI6bnVsbH0.tUaime3lRYn7wAu2KCnW3oFwIZa18eIL_4AOnoGJiKU'.trim()   
         }
  }
  fetch("https://apptest.supplynow.co.uk/api/v1/Bookings/MyBookings",obj)  
  .then((res)=> {
    return res.json();
   })
   .then((resJson)=>{
     this.dataset(resJson)
   
    return resJson;
   })
   .catch((error) => {
    console.error(error);
});
}
dataset=(data)=>{
  this.setState({
    dataSource:data
  })
  this.hide()
}
Load(){
  this.setState({animate:true})
}
hide(){
  this.setState({animate:false})
}
space(){
  return(<View style={{height: 10, width: 1, backgroundColor:'black'}}/>)
}
_onPress=()=>{
  if(!this.state.click){
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 50})
    this.setState({click:true})
  }else{
    LayoutAnimation.spring();
    this.setState({w:50})
    this.setState({click:false})
  }
   
}
pressRight=()=>{
  if(!this.state.clickr){
    LayoutAnimation.spring();
    this.setState({wr: this.state.wr + 50})
    this.setState({clickr:true})
  }else{
    LayoutAnimation.spring();
    this.setState({wr:50})
    this.setState({clickr:false})
}
}
SlideMenu=()=>{
  if(!this.state.slide){
    LayoutAnimation.spring();
    if(this.state.Awr>80){
      this.setState({Awr:80})
      this.setState({slide:false})
    }
    else{
      this.setState({Awr:this.state.Awr+250})
      this.setState({slide:true})
    }
    
  }
  else{
    LayoutAnimation.spring();
    this.setState({Awr:80})
    this.setState({slide:false})
  }
  }
  render() {
    const { navigate } = this.props.navigation;
    const data = [ 50, 60, 70, 95, 100, 120, 100, 80, 90, 60, 50, 40, 60, 100 ]
    const Line = ({ line }) => (
      <Path
          key={'line'}
          d={line}
          stroke={'#5099f0'}
          fill={'none'}
      />
  )

   
  if(this.state.animate){  
    return <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
    <ActivityIndicator
  color = '#1a5fe1'
  size = "large"
  style = {styles.activityIndicator}/>
  </View>
  }
    return (  
        
      <View style={styles.Maincontainers}>  
       <ScrollView>
       <View> 

<LinearGradient
colors={['#ffffff','#e1e5ef','#e1e5ef']} style={{height:'100%'}}>   

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
    <Image  style={{width: 15, height: 15,marginLeft:20,marginTop:25,resizeMode:'contain'}}  source={require("../assets/left-arrow.png")} ></Image> 
    </View>
<View style={{backgroundColor:'#fd6d71',height:this.state.hr,width:this.state.wr,justifyContent:'center', borderTopStartRadius:25,borderBottomStartRadius:25, marginTop:10}}>
     <TouchableOpacity onPress={this.pressRight}>
<View style={{flexDirection: 'row'}}> 
   <Image style={{marginLeft:10,width: 20, height: 20}}   source={require("../assets/cancel.png")} ></Image>     

   </View>
   </TouchableOpacity>
     </View>
</View>
<View style={{marginTop:20}}> 

      <View>
  
      <View  style={{justifyContent:'center',alignItems:'center'
 }}>
       <Image  style={{width: 200, height: 200,resizeMode:'contain'}}  source={require("../assets/threelogo.png")} ></Image> 
          
     
 </View>

 <View  style={{justifyContent:'center',alignItems:'center',marginTop:20
 }}>
      <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:20,marginTop:10}}>Lets Verified!</Text>
      <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:12,marginTop:10,}}>Please choose the country where your document was</Text>
      <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:12,marginTop:2,}}>Issued</Text>
  
      
 </View>  
 <View > 
 <TouchableOpacity onPress={this.PassPortSelect} style={{justifyContent:'center',alignItems:'center'}}>
 <View></View>
 <View style={{width:'100%',borderColor:'#d7dee8',backgroundColor:'#fff',marginTop:30, justifyContent:"center",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1}}>
 <LinearGradient
colors={[this.state.passportcolor1,this.state.passportcolor2,this.state.passportcolor3]}  start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', height: 50,padding:10,paddingLeft:50,paddingRight:50}}>

<Text style={{color:this.state.passporttextcolor}}>Passport</Text>
<Image  style={{width: 30, height: 30,resizeMode:'contain',tintColor:this.state.PassportTintcolor}}  source={require("../assets/passport.png")} ></Image>
</View>
</LinearGradient>
   </View>
   
   </TouchableOpacity>
   <TouchableOpacity onPress={this.IdSelect}>

 <View >
 <LinearGradient
colors={[this.state.idcolor1,this.state.idcolor2,this.state.idcolor3]}  start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{width:'100%',borderColor:'#d7dee8',backgroundColor:'#fff', justifyContent:"center",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1}}>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height: 50,padding:10,paddingLeft:50,paddingRight:50}}>
<Text style={{color:this.state.idtextcolor}}>ID-Card</Text>
<Image  style={{width: 30, height: 30,resizeMode:'contain',tintColor:this.state.idTintcolor}}  source={require("../assets/id_card.png")} ></Image>


   </View>
   </LinearGradient>
 </View> 
 </TouchableOpacity>
 <TouchableOpacity onPress={this.ResidenceSelect}>
 <View >
 <LinearGradient
colors={[this.state.residencegradientcolor1,this.state.residencegradientcolor2,this.state.residencegradientcolor3]}  start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{width:'100%',borderColor:'#d7dee8',backgroundColor:'#fff', justifyContent:"center",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1}}>  
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height: 50,padding:10,paddingLeft:50,paddingRight:50}}>
<Text style={{color:this.state.Residencecolor}}>Residence Permit</Text>
<Image  style={{width: 30, height: 30,resizeMode:'contain',tintColor:this.state.residenceTintcolor}}  source={require("../assets/residency.png")} ></Image>
</View>
 </LinearGradient>
   </View>
   </TouchableOpacity>
   <TouchableOpacity onPress={this.DriverSelect}>

 <View>
 <LinearGradient
colors={[this.state.drivercolor1,this.state.drivercolor2,this.state.drivercolor3]}  start={{x: 0, y: 0}} end={{x: 1, y: 0}}  style={{width:'100%',borderColor:'#d7dee8',backgroundColor:'#fff', justifyContent:"center",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1}}>

<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height: 50,padding:10,paddingLeft:50,paddingRight:50}}>

<Text style={{color:this.state.drivertextcolor}}>Drivers's License</Text>
<Image  style={{width: 30, height: 30,resizeMode:'contain',tintColor:this.state.driverTintcolor}}  source={require("../assets/driver.png")} ></Image>

   </View>
   </LinearGradient>
 </View> 
 
 </TouchableOpacity>
 </View>   

      </View>    
</View>  
 
 
</LinearGradient> 
</View>
       </ScrollView>
    
 <View style={{position:'absolute',bottom:0,width:'100%'}}>
 <TouchableOpacity onPress={this.BeginAction}>  
 <View>
 <LinearGradient colors={['#41d99c','#34ddb2','#21e4d3']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}  style={{padding:15,justifyContent:'center',alignItems:'center',}}>

<Text style={{color:'#fff',fontSize:18,fontWeight:'bold',fontFamily:'Courier New'}}>Start</Text>
</LinearGradient>
 </View>     
 </TouchableOpacity> 
<LinearGradient colors={['#354e91','#354e91','#354e91']}  style={{padding:15,alignItems:'center'}}>
<TouchableOpacity>
<Text style={{color:'#fff',fontWeight:'bold',opacity:1,fontSize:12,marginTop:2,marginLeft:-30}}>when you "sent",you accept</Text>
<View style={{flexDirection:'row',marginTop:2,marginLeft:-30}}>
<Text style={{color:'#5496ff',fontWeight:'bold',opacity:1,fontSize:12,marginTop:5,}}>Terms of Service</Text>
<Text style={{color:'#fff',fontWeight:'bold',opacity:1,fontSize:12,marginTop:5,marginLeft:8}}>&</Text>
<Text style={{color:'#5496ff',fontWeight:'bold',opacity:1,fontSize:12,marginTop:5,marginLeft:8}}>Politic and privacy</Text>
</View>

</TouchableOpacity>
</LinearGradient>
        </View>
     </View>
      
    
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
      BeginAction=()=>{
        this.props.navigation.navigate('TakePhoto');
      }
      PassPortSelect=()=>{
      this.setState({
     passporttextcolor:'#fff',
     passportcolor1:'#4476d7',passportcolor2:'#4f92e9',passportcolor3:'#61bff2',
     PassportTintcolor:'#fff',
      })
      this.Idreset()
        this.Residencereset()
        this.Driverreset()
      }
      PassPortreset=()=>{
        this.setState({
       passporttextcolor:'#5496ff',
       passportcolor1:'#fff',passportcolor2:'#fff',passportcolor3:'#fff',
       PassportTintcolor:'#5496ff',
        })
      
        }

        IdSelect=()=>{
          this.setState({
            idtextcolor:'#fff',
        idcolor1:'#4476d7',idcolor2:'#4f92e9',idcolor3:'#61bff2',
         idTintcolor:'#fff',
          })
          this.PassPortreset()
          this.Residencereset()
          this.Driverreset()
          }
          Idreset=()=>{
            this.setState({
              idtextcolor:'#5496ff',
              idcolor1:'#fff',idcolor2:'#fff',idcolor3:'#fff',
               idTintcolor:'#354E91',
            })
            }


            ResidenceSelect=()=>{
              this.setState({
           Residencecolor:'#fff',
            residencegradientcolor1:'#4476d7',residencegradientcolor2:'#4f92e9',residencegradientcolor3:'#61bff2',
             residenceTintcolor:'#fff',
              })
              this.Idreset()
              this.PassPortreset()
              this.Driverreset()
              }
              Residencereset=()=>{
                this.setState({
                  Residencecolor:'#5496ff',
                  residencegradientcolor1:'#fff',residencegradientcolor2:'#fff',residencegradientcolor3:'#fff',
                   residenceTintcolor:'#41DA9C',
                })
                }
                DriverSelect=()=>{
                  this.setState({
                 drivertextcolor:'#fff',
                drivercolor1:'#4476d7',drivercolor2:'#4f92e9',drivercolor3:'#61bff2',
                 driverTintcolor:'#fff',
                  })
                  this.Idreset()
                  this.Residencereset()
                  this.PassPortreset()
                  }
                  Driverreset=()=>{
                    this.setState({
                      drivertextcolor:'#5496ff',
                      drivercolor1:'#fff',drivercolor2:'#fff',drivercolor3:'#fff',
                       driverTintcolor:'#5496FF',
                    })
                    }
}



const styles = StyleSheet.create({
 
  Maincontainers: {
    flex: 1, 
    height:'100%'
  },
  containers: {
    backgroundColor: 'transparent',
    marginTop:5,
   
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 img: {
  width: '30%',
  height: '32%',
  resizeMode: 'cover',
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