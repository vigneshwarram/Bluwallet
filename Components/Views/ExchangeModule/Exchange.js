import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet,TextInput, Image,Picker,ScrollView,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,KeyboardAvoidingView} from 'react-native';
import { Alert } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import { Switch} from 'react-native'
import * as shape from 'd3-shape'
import Logo from '../../logo'
import LinearGradient from 'react-native-linear-gradient';


export default class  Buy  extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    
    this.state = {
      dataSource:[],
      switchValue:false,
      cityItems:["US Doller,Indian,Eutherium"],
      Coin: 'Us Doller',
      animate:false,
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
      app6color:'#5099f0',
      app2color:'#5099f0',
      app3color:'#5099f0',
      app4color:'#fff',
      app5color:'#5099f0'
    };
  
  }
  
  componentDidMount()
  {
   // this.GetListData()
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

toggleSwitch=(value)=>{
  this.setState({switchValue: value})
}

  render() {
    const data = [ 50, 60, 70, 95, 100, 120, 100, 80, 90, 60, 50, 40, 60, 100 ]
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
                 <LinearGradient  colors= {['#354E91','#314682','#283563','#222B50','#21284A']} style={styles.Maincontainers} >
      <LinearGradient
   colors={['#2D3CAD','#4781DF','#529DF3','#7ED5F6','#97F5F9']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{height:'35%',opacity:0.9}}>     
      <LinearGradient
   colors={['#2D3CAD','#4781DF','#529DF3','#7ED5F6','#97F5F9']} style={{height:'100%',marginRight:30,marginTop:30}}>
 <LinearGradient colors={['#fff','#fff','#CCCFE2']} style={{justifyContent:'center',marginTop:-10,height:this.state.h,width:this.state.w, alignItems:'flex-end',borderTopRightRadius:25,borderBottomRightRadius:25,position:'absolute'}}>
<TouchableOpacity onPress={this._onPress}>
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginRight:10,width: 30, height: 30}}   source={require("../assets/note.PNG.png")} ></Image>     
     
          </View>
          </TouchableOpacity>
</LinearGradient> 
 <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',marginTop:20}}>
          <Image style={{marginRight:10,width: 18, height: 22,resizeMode:'contain'}}   source={require("../assets/app4.png")} ></Image>     
          <Text style={{fontSize:18,color:'#fff',fontFamily:'Exo2-Regular'}}>Exchange</Text>
          </View>      
          <Text style={{fontSize:12,color:'#fff',marginTop:10,fontFamily:'Exo2-Regular'}}>How Much do you want to buy?</Text>           
          <View style={{flexDirection: 'row',marginLeft:20}}>
          <View style={{width:'40%',borderRadius:25,borderWidth:1,borderColor:'#fff',marginTop:10,marginBottom:10, justifyContent:"center"}}>
<View style={{flexDirection:'row',marginLeft:20}}> 
<TextInput
          style={{height: 40, color:'#fff',fontFamily:'Exo2-Regular'}}
       placeholderTextColor='#ffffff'
       keyboardType = 'numeric'
          placeholder="COP 0.000"
          maxLength={10}
        />
</View>
          </View>
          <View style={{width:'40%',borderRadius:25,borderWidth:1,borderColor:'#fff',marginTop:10,marginBottom:10,marginLeft:10, justifyContent:"center"}}>
<View style={{flexDirection:'row',marginLeft:20}}>

<TextInput
          style={{height: 40,color:'#fff',fontFamily:'Exo2-Regular'}}
       placeholderTextColor='#ffffff'
          placeholder="BTC 00.0"
          keyboardType = 'numeric'
          maxLength={10}
        />
</View>
          </View>
    
     </View>            
          </View>
         <View>  
          </View>
          </LinearGradient>    
         


          </LinearGradient> 
        
<View style={{flex:1}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
  <LinearGradient colors= {['#97F5F9','#7ED5F6','#529DF3','#4781DF','#2D3CAD']} style={{width:70,
    height: 70,
    borderRadius: 70/2,
    backgroundColor:this.state.app1color,justifyContent:'center',alignItems:"center"}} >
   
    <Image  style={{width: 40, height: 40,resizeMode:'contain'}}  source={require('../assets/exchangenew.png')} ></Image>
    
            
          </LinearGradient>
  </View>  
          <LinearGradient  colors= {['transparent','transparent','transparent']} style={{marginTop:20}} >
   <ScrollView>
<View style={{marginTop:20,backgroundColor:'transparent',marginBottom:100}}>  
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={{marginTop:10,fontSize:36,color:'#F5F6F9',fontFamily:'Exo2-SemiBold'}}>$ 0.00</Text>
</View> 

<View
  style={{
    marginTop:30,
    borderBottomColor: '#394d88',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{flexDirection:'row',marginLeft:20}}>
<View style={{flex:1}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium'}}>BTC Price</Text>
</View>  

<View style={{flexDirection:'row',flex:1}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,textAlign:'center',fontFamily:'Exo2-Regular'}}>121ETH</Text> 

</View>  

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{flexDirection:'row',marginLeft:20}}>  
<View style={{flex:1}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Mediumr'}}>BTC price Dolar</Text>
</View>

<View style={{flexDirection:'row',flex:1}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular'}}>455$</Text> 
</View>  

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{flexDirection:'row',marginLeft:20}}>  
<View  style={{flex:1}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium'}}>Network fees</Text>  
</View>
<View style={{flex:1}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular'}}>12ETH-199BTC</Text> 
</View>
</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',
    borderBottomWidth: 1,
  }}
/>
<View style={{flexDirection:'row',marginLeft:20}}>  
<View style={{flex:1}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium'}}>Commercial Limits</Text>
</View>
  <View style={{flex:1}}>
  <Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular'}}>1000-100,00,00 COP</Text> 
  </View>

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',
    borderBottomWidth: 1,
  }}
/>
<View style={{height:40,width:'100%',backgroundColor:'transparent'}}></View>
<View style={{flexDirection:'row',marginLeft:20}}>  
<View style={{flex:1}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium'}}>Send</Text>  
</View>
<View style={{flex:1}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular'}}>20ETH</Text> 
</View>

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',
    borderBottomWidth: 1,
  }}
/>
<View style={{flexDirection:'row',marginLeft:20}}>  
<View style={{flex:2.2}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium'}}>Description</Text>  
</View>
<View style={{flex:1}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,marginLeft:-10,fontFamily:'Exo2-Regular'}}>Transfer data</Text> 
</View>
<View style={{flex:1}}>
<Text style={{fontSize:20,color:'#a9b4d4',marginTop:-5,fontFamily:'Exo2-Regular'}}>...</Text> 
</View>

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',
    borderBottomWidth: 1,
  }}
/>
<View style={{backgroundColor:'#232d51'}}>
<View style={{justifyContent:'center',alignItems:'center',marginBottom:100,width:"100%",marginTop:30}}>
<View style={{width:"50%"}}>
<LinearGradient colors={['#41da9c','#36deaf','#26e3ca']}  start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{width:'100%',padding:12,backgroundColor:'green',justifyContent:'center',alignItems:'center',marginLeft:10,borderRadius:6}}>
<TouchableOpacity onPress={()=>this.props.navigation.navigate('Payment')}>
<Text style={{color:'#fff',fontFamily:'Poppins-Medium'}}>Exchange</Text></TouchableOpacity>
</LinearGradient>

</View>

</View>
</View>
   
</View>
    </ScrollView>    
</LinearGradient>
   
      
    
       
 
  
      </View>
    
</LinearGradient>
     </View>
  
    
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
}



const styles = StyleSheet.create({
 
  Maincontainers: {
    flex: 1,   
    backgroundColor: '#fff',
  },
  containers: {
   backgroundColor: 'transparent',
    marginTop:5,
  },
  containers: {
  flex:1,
   height:'30%'
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