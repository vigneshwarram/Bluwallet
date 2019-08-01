import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,TextInput,FlatList,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,Picker} from 'react-native';
import { Alert } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Logo from '../logo'
import {StackActions, NavigationActions } from 'react-navigation';
import {ResponseSuccessStatus,InvalidResponse,DataUndefined,InvalidToken,TokenExpired} from './Utils.js/Constant'
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {PriceList} from './Api/PriceApi'
let CrptoType='ETH'
export default class Price  extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    
    this.state = {
      dataSource:[],
      cityItems:["US Doller,Indian,Eutherium"],
      Amount: 'USDoller',
      animate:false,
      etheriumOpacity:0.4,
       data : [ 50, 60, 70, 95, 100, 120, 100, 80, 90, 60, 50, 40, 60, 100 ],
      TotalPrice:null,
      BtcOpacity:0,
      BtcFontColor:'#5597ff',
      EtheriumFontColor:'#fff',
      Etherium1:'#14A9FF', Etherium2:'#2B84FF', Etherium3:'#6b00ff', Etherium4:'#8000FF',
      Btc1:'transparent', Btc2:'transparent', Btc3:'transparent', Btc4:'transparent',
    };

  }
  
  componentDidMount()
  {
    this.GetPriceData()
  }
  GetPriceData=()=>
  {
    PriceList(this.PriceResult)
  }
  PriceResult=(data)=>
  {
    if(data!=DataUndefined)
    {
      if(data.status===ResponseSuccessStatus)
      {
       this.setState({dataSource:data.CalculatingAmountDTO,})
       this.setState({TotalPrice:this.state.dataSource.usdforEther,})
      }
      else if(data.error===InvalidToken)
      {
        Alert.alert(
          'Error',
          TokenExpired,
          [
            {text: 'OK', onPress: () => this.props.navigation.navigate("Login")},
          ],
    
        );
      }
      else
      {
        Alert.alert(InvalidResponse)
      }
    }
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
  HideMenu=()=>{
    LayoutAnimation.spring();
    this.setState({Awr:80})
  }
  ProfileTouch=()=>{
    this.props.navigation.navigate('Profile');
  }
  VaultTouch=()=>{
    this.setState({
      app2color:'#fff',
      app2icon:require('./assets/app2.png')    
    })
    this.props.navigation.navigate('Vault');
  }
  ExchangeTouch=()=>{
    this.props.navigation.navigate('ExchangeMenu')
  }
  DashBoardTounch=()=>{
    this.props.navigation.navigate('DashBoard',{
      DashBoardPopup: false,
    })
  }
  ProfileTouch=()=>{
    this.props.navigation.navigate('Profile')
  }
  render() {
    
    const Line = ({ line }) => (
      <Path
          key={'line'}
          d={line}
          stroke={'#25e2cd'}
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
       <LinearGradient colors= {['#354E91','#314682','#283563','#222B50','#21284A']} style={styles.Maincontainers}>  
     <LinearGradient
   colors={['#1a5fe1','#00a5ff','#25e2cd']} style={{height:200,opacity:0.9}}>     
      <LinearGradient
   colors={['#1a5fe1','#00a5ff','#81DCF9']} style={{height:210,marginRight:30,marginTop:20}}>
 <View>
 <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',marginTop:10}}>
      
          <Image style={{marginRight:10,width: 18, height: 16,resizeMode:'contain',marginTop:3}}   source={require("./assets/app3.png")} ></Image>            
          
          <Text style={{fontSize:15,color:'#fff',fontFamily:'Roboto-Regular'}}>Price</Text>
          </View>      
          <View style={{flexDirection: 'row',marginTop:20,justifyContent:'space-around'}}>
         <View style={{justifyContent:'center',alignItems:'center'}}>
         <Text style={{fontSize:18,color:'#2939a8',fontFamily:'Exo2-Regular'}}>ETH</Text> 
         </View>
<Text style={{fontSize:25,color:'#fff',marginLeft:10,fontFamily:'Exo2-Medium'}}>{this.state.TotalPrice}</Text>      
        
<View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',marginLeft:20}}>
        <Text style={{color:'#3440b0',opacity:1,fontSize:18,fontFamily:'Exo2-Regular'}}>{this.state.Amount}</Text>
        <Image  style={{width: 10, height: 10,marginLeft:10,resizeMode:'contain',tintColor:"#3440b0"}}  source={require("./assets/down_arrow.png")} ></Image>
        <Picker style={{ position:'absolute', top: 0, width: 500, height: 3000 }}
   selectedValue={this.state.Amount}
  onValueChange={(itemValue, itemIndex) => this.selectedAmount(itemValue,itemIndex)}>
  
  <Picker.Item label="USDoller" value="USDoller" />
  <Picker.Item label="Inr" value="Inr" />
  <Picker.Item label="USA" value="USA" />
  <Picker.Item label="German" value="German" />
  <Picker.Item label="Italy" value="Italy" />
  <Picker.Item label="Aus" value="Aus" />
  <Picker.Item label="India" value="India" />
  <Picker.Item label="Aus" value="Aus" />
  </Picker>
        </View>

          
    
     </View>            
          </View>
         
          <AreaChart style={{ height: 75,backgroundColor:'transparent',marginTop:10}}
                data={this.state.data}
                showGrid={ false }
                curve={shape.curveNatural}
                svg={{ fill: '#60d8e6',stroke:'#25e2cd' }}
            >
              
              
            </AreaChart>


          </View>
          </LinearGradient>    
         

          
          </LinearGradient>          
   
    <View style={{flex:1,marginTop:40,}}>
    <View
  style={{
    marginLeft:30,marginRight:30,
    marginTop:20,
    borderBottomColor: '#2c548f',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<ScrollView>
<View style={{marginBottom:150}}>
<View style={{flexDirection:'row'}}>

<View style={{backgroundColor:'transparent',width:'40%',height:250,marginLeft:20,borderWidth:0.25,borderColor:'#5496FF',borderRadius:6
  }} >

   <LinearGradient style={{height:'100%',
   borderRadius:6,}}
            colors={[this.state.Etherium1,this.state.Etherium2,this.state.Etherium3,this.state.Etherium4]}>
              <TouchableOpacity onPress={this.EtheriumClick}><View>
       <View style={{justifyContent:'center',alignItems:'center', position: 'absolute',
    top: 10,
    bottom: 10,
    left: 20,
    right: 0,}}>
    <Image  style={{width:200,height:200,
    resizeMode: 'contain',marginLeft:10,opacity:this.state.etheriumOpacity}}   source={require("./assets/transparent-etherem.png")} ></Image>
    </View>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/diablue.png")} ></Image>

        </View>
         <View style={{justifyContent:'center',alignItems:'flex-start',marginLeft:10,marginTop:30}}>
        
        <Text style={{color:this.state.EtheriumFontColor,fontSize:15,fontFamily:'Exo2-SemiBold'}}>Etherium</Text>
        <Text style={{color:this.state.EtheriumFontColor,fontSize:15,marginTop:10,fontFamily:'Exo2-SemiBold'}}>ETH</Text>

        <Text style={{color:this.state.EtheriumFontColor,fontSize:15,marginTop:30,fontFamily:'Exo2-SemiBold'}}>Price</Text>
        <Text style={{color:this.state.EtheriumFontColor,fontSize:15,marginTop:10,fontFamily:'Exo2-SemiBold'}}>{this.state.dataSource.usdforEther}</Text>
    </View>
    </View>
   </TouchableOpacity>
       
       </LinearGradient>
 
   
       </View>

      
      
       <View style={{backgroundColor:'transparent',width:'40%',height:250,marginLeft:20,borderWidth:0.25,borderColor:'#5496FF',borderRadius:6}} >
       <LinearGradient style={{height:'100%',borderRadius:6}}   colors={[this.state.Btc1,this.state.Btc2,]}>
       <TouchableOpacity onPress={this.BtcClick}>
       <View>
       <View style={{justifyContent:'center',alignItems:'center', position: 'absolute',
    top: 10,
    bottom: 10,
    left: 20,
    right: 0,}}>
    <Image  style={{width:180,height:150,
    resizeMode: 'contain',opacity:this.state.BtcOpacity}}   source={require("./assets/bgbicon.png")} ></Image>
    </View>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/diaIcon.png")} ></Image>

        </View>
        <View style={{justifyContent:'center',alignItems:'flex-start',marginLeft:10,marginTop:30}}>
        
            <Text style={{color:this.state.BtcFontColor,fontSize:15,fontWeight:'bold',fontFamily:''}}>Ripple</Text>
            <Text style={{color:this.state.BtcFontColor,fontSize:15,marginTop:10,fontWeight:'bold',fontFamily:''}}>Xrp</Text>

            <Text style={{color:this.state.BtcFontColor,fontSize:15,marginTop:30,fontWeight:'bold',fontFamily:''}}>Price</Text>
            <Text style={{color:this.state.BtcFontColor,fontSize:15,marginTop:10,fontWeight:'bold',fontFamily:''}}>{this.state.dataSource.usdforBtc}</Text>
        </View>
        </View>
       </TouchableOpacity>
       </LinearGradient>
   
       </View>
     
     
         
        </View>
        <View style={{flexDirection:'row',marginTop:20}}>
        <View style={{backgroundColor:'transparent',width:'40%',height:250,marginLeft:30,borderWidth:0.25,borderColor:'#5496FF',borderRadius:6}} >
       <LinearGradient style={{height:'100%'}}   colors={['transparent','transparent','transparent']}>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/m.png")} ></Image>

        </View>
        <View style={{justifyContent:'center',alignItems:'flex-start',marginLeft:10,marginTop:30}}>
        
            <Text style={{color:'#5597ff',fontSize:15,fontWeight:'bold',fontFamily:''}}>Monero</Text>
            <Text style={{color:'#5597ff',fontSize:15,marginTop:10,fontWeight:'bold',fontFamily:''}}>XMR</Text>

            <Text style={{color:'#5597ff',fontSize:15,marginTop:30,fontWeight:'bold',fontFamily:''}}>Price</Text>
            <Text style={{color:'#5597ff',fontSize:15,marginTop:10,fontWeight:'bold',fontFamily:''}}>121.6</Text>
        </View>
       </LinearGradient>
   
       </View>
         
       <View style={{backgroundColor:'transparent',width:'40%',height:250,marginLeft:20,borderWidth:0.25,borderColor:'#5496FF',borderRadius:6}} >
       <LinearGradient style={{height:'100%'}}   colors={['transparent','transparent','transparent']}>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/zcoinyellow.png")} ></Image>

        </View>
        <View style={{justifyContent:'center',alignItems:'flex-start',marginLeft:10,marginTop:30}}>
        
            <Text style={{color:'#5597ff',fontSize:15,fontWeight:'bold',fontFamily:''}}>ZCash</Text>
            <Text style={{color:'#5597ff',fontSize:15,marginTop:10,fontWeight:'bold',fontFamily:''}}>ZEC</Text>

            <Text style={{color:'#5597ff',fontSize:15,marginTop:30,fontWeight:'bold',fontFamily:''}}>Price</Text>
            <Text style={{color:'#5597ff',fontSize:15,marginTop:10,fontWeight:'bold',fontFamily:''}}>121.6</Text>
        </View>
       </LinearGradient>
   
       </View>
         
        </View>
 </View>
 </ScrollView>
</View>


   </LinearGradient>
      </View>
      
    
    );
      }
     
      selectedAmount=(item,itemIndex)=>{
this.setState({
  Amount:item
})
      }
      EtheriumClick=()=>
      {
        let data=[50, 60, 70, 95, 100, 120, 100, 80, 90, 60, 50, 40, 60, 100]
        this.setState({ Etherium1:'#14A9FF', Etherium2:'#2B84FF', Etherium3:'#6b00ff', Etherium4:'#8000FF',etheriumOpacity:0.4,EtheriumFontColor:'#fff',data:data})
        this.setState({TotalPrice:this.state.dataSource.usdforEther,})
        this.BtcReset()
      }
      BtcClick=()=>
      {
        let data=[50, 60, 70, 95, 100, 100, 100, 80, 90, 150, 50, 40, 60, 100]
        this.setState({Btc1:'#FF7267',Btc2:'#FF007F',BtcOpacity:0.4,BtcFontColor:'#fff',data:data})
        this.setState({TotalPrice:this.state.dataSource.usdforBtc,})
        this.EtheriumReset()
        setTimeout(this.nav, 700);
      }
      nav=()=>
      {
        
        this.props.navigation.navigate("DashBoard")
      }
      EtheriumReset=()=>
      {
        this.setState({Etherium1:'transparent',Etherium2:'transparent',Etherium3:'transparent',Etherium4:'transparent',etheriumOpacity:0,EtheriumFontColor:'#5597ff'})
      }
      BtcReset=()=>
      {
        this.setState({Btc1:'transparent',Btc2:'transparent',BtcOpacity:0,BtcFontColor:'#5597ff'})
      }
}



const styles = StyleSheet.create({
 
  Maincontainers: {
    flex: 1,   
    backgroundColor: '#2b3f74',
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