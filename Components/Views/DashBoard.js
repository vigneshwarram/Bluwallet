import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,Picker,NativeModules,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,} from 'react-native';
import { Alert } from 'react-native';
const { UIManager } = NativeModules;
import Logo from '../logo'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import LinearGradient from 'react-native-linear-gradient';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
export default class DashBoard extends React.Component {

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
      app1icon:require('./assets/app1.png'),
      app6icon:require('./assets/app6.png'),
      app2icon:require('./assets/app2.png'),
      app3icon:require('./assets/app3.png'),
      app4icon:require('./assets/app4.png'),
      app5icon:require('./assets/app5.png'),
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
      app4color:'#5099f0',
      app5color:'#5099f0'
    };
  
  }
  
  componentDidMount()
  {
     this.GetListData()
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
HideMenu=()=>{
  LayoutAnimation.spring();
  this.setState({Awr:80})
}
AppTouch=()=>{
  this.setState({
  })
  this.props.navigation.navigate('Profile');
  
}
App2Touch=()=>{
  this.setState({
    app2color:'#fff',
    app1color:'#5099f0',
    app3color:'#5099f0',
    app5color:'#5099f0',
    app4color:'#5099f0',
    app6color:'#5099f0',
    app6icon:require('./assets/app6.png'),
    app1icon:require('./assets/app1white.png'),
    app2icon:require('./assets/app4-blue.png'),
    app3icon:require('./assets/app3.png'),
    app4icon:require('./assets/app4.png'),
    app5icon:require('./assets/app5.png'),
  
  })
  this.props.navigation.navigate('Vault');
}
App3Touch=()=>{
  this.setState({
    app3color:'#fff',
    app1color:'#5099f0',
    app2color:'#5099f0',
    app5color:'#5099f0',
    app4color:'#5099f0',
    app6color:'#5099f0',
    app6icon:require('./assets/app6.png'),
    app1icon:require('./assets/app1white.png'),
    app2icon:require('./assets/app2.png'),
    app3icon:require('./assets/app3-blue.png'),
    app4icon:require('./assets/app4.png'),
    app5icon:require('./assets/app5.png'),
  })
  this.props.navigation.navigate('Price')
}
App4Touch=()=>{
  this.setState({
    app3color:'#5099f0',
    app1color:'#5099f0',
    app2color:'#5099f0',
    app5color:'#5099f0',
    app4color:'#fff',
    app6color:'#5099f0',
    app6icon:require('./assets/app6.png'),
    app1icon:require('./assets/app1white.png'),
    app2icon:require('./assets/app2.png'),
    app3icon:require('./assets/app3.png'),
    app5icon:require('./assets/app5.png'),
    app4icon:require('./assets/app5-blue.png')
  })
  this.props.navigation.navigate('Exchange')
}
App5Touch=()=>{
  this.setState({
    app3color:'#5099f0',
    app1color:'#5099f0',
    app2color:'#5099f0',
    app4color:'#5099f0',
    app6color:'#5099f0',
    app6icon:require('./assets/app6.png'),
    app5color:'#fff',
    app1icon:require('./assets/app1white.png'),
    app2icon:require('./assets/app2.png'),
    app3icon:require('./assets/app3.png'),
    app4icon:require('./assets/app4.png'),
    app6icon:require('./assets/app6.png'),
    app5icon:require('./assets/app2-blue.png'),
   
  })
  this.props.navigation.navigate('Profile')
}
App6Touch=()=>{
  this.setState({
    app3color:'#5099f0',
    app1color:'#5099f0',
    app2color:'#5099f0',
    app4color:'#5099f0',
    app5color:'#5099f0',
    app6color:'#fff',
    app1icon:require('./assets/app1white.png'),
    app2icon:require('./assets/app2.png'),
    app3icon:require('./assets/app3.png'),
    app4icon:require('./assets/app4.png'),
    app6icon:require('./assets/app6-blue.png'),
    app5icon:require('./assets/app5.png'),
   
  })
  this.props.navigation.navigate('CreditCard')
}
  render() {

    const { navigate } = this.props.navigation;
    const data = [ 100, 500, 1000, 500, 400, 600,800,400,300,500 ]
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
  color = '#bc2b78'
  size = "large"
  style = {styles.activityIndicator}/>
  </View>
  }
    return (  
      <View style={styles.Maincontainers}>    
      <LinearGradient colors= {['#2b3f74','#232d51','#232d51']}>
      <ScrollView>
      <View style={{justifyContent:'space-between',flexDirection:'row'}}>  
<LinearGradient colors={['#f4347f','#f85276','#fe7a6e']} style={{justifyContent:'center',height:this.state.h,width:this.state.w, alignItems:'flex-end', marginTop:10,borderTopRightRadius:25,borderBottomRightRadius:25}}>
<TouchableOpacity onPress={this._onPress}>
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/whitebox.png")} ></Image>     
     
          </View>
          </TouchableOpacity>
</LinearGradient>    
         
            
            <View style={{flexDirection: 'row',justifyContent:'flex-start',alignItems:"center",marginTop:15}}> 
          <Image  style={{width: 30, height: 30}}  source={require("./assets/app1white.png")} ></Image>   
          <View style={{flexDirection:'column'}}>
          <Text style={{marginLeft:10,fontSize:18,fontWeight:'bold',color:'#fff'}}>Wallet</Text>       
          </View>       
          </View>
    
            <LinearGradient colors={['#17e8e3','#30e0ba','#3ddba1']} style={{height:this.state.hr,width:this.state.wr,justifyContent:'center',alignItems:'flex-start',borderTopLeftRadius:25,borderBottomLeftRadius:25, marginTop:10}}>
            <TouchableOpacity onPress={this.pressRight}>
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginLeft:10,width: 30, height: 30}}   source={require("./assets/app1white.png")} ></Image>     
     
          </View>
          </TouchableOpacity>
            </LinearGradient>
      </View>
   
      
    <View style={{marginTop:10}}>  
    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginLeft:50}}>
    <View style={{flex:1}}>
    <Text style={{marginLeft:10,marginTop:15,fontSize:12,fontWeight:'bold',color:'#4d6bc1'}}>Monerp</Text> 
    <Image style={{height:80,width:60,opacity:0.1,marginTop:10}}   source={require("./assets/micon.png")} ></Image>     
    </View>          
   
    <View style={{flex:1}}>
    <Text style={{marginTop:15,fontSize:12,fontWeight:'bold',color:'#fff',marginLeft:20}}>Etherium</Text> 
    <Image
        style={{height:140,width:80 ,marginTop:10,opacity:1,shadowOpacity:1,shadowColor:'#4d6bc1'}}   source={require("./assets/etherem.png")} ></Image>     
    </View>      
     
    <View style={{flex:1}} >
    <Text style={{marginLeft:10,marginTop:15,fontSize:12,fontWeight:'bold',color:'#4d6bc1'}}>Bitcoin</Text> 
    <Image style={{height:80,width:60,opacity:0.1,marginTop:10}}   source={require("./assets/bgbicon.png")} ></Image>
    </View>    
    </View>
    
    
    </View> 
      <View style={styles.containers}>
    
      <AreaChart
                style={{ height: 100,marginLeft:-20, marginRight:30,marginBottom:10,backgroundColor:'transparent',position:'absolute',top:0,bottom:0,left:0,right:0 }}
                data={data}
                showGrid={ false }
                curve={shape.curveNatural}
                svg={{ fill: '#28489d',stroke:'#fff' }}
            >
                <Grid/>
                <Line/>
            </AreaChart>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:60}}>
                 <Text style={{marginLeft:10,marginTop:15,fontSize:15,fontWeight:'bold',color:'#4d6bc1'}}>Balance</Text> 
                 </View>
               
               <View style={{ marginTop:30,justifyContent:'center',alignItems:'center'}}>
                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <View>
                <LinearGradient colors= {['#8be6f8','#5dabf5','#4984e0']} style={{ width: 40,marginLeft:10,
 height: 40,
 borderRadius: 40/2,
justifyContent:'center',alignItems:"center"}} >

 <Image style={{width:20,height:20}}    source={require("./assets/refresh-arrow.png")} ></Image> 
       </LinearGradient>   
                </View>
                <View>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:30,fontSize:30,fontWeight:'bold',color:'#fff'}}>2.80258789</Text>
                <View style={{marginTop:-10,marginLeft:5}}>
                <LinearGradient colors= {['#8392f7','#aa83f6','#c17df8']} style={{ width: 60,borderRadius:5, padding:5,
justifyContent:'center',alignItems:"center"}} >
   <Text style={{fontSize:8,fontWeight:'bold',color:'#fff',textAlign:'center'}}>^15%</Text> 
</LinearGradient>
                </View>
                </View>
                 
                </View>
                 </View>
                 <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                 <View style={{flexDirection: 'row',marginLeft:20}}>
                 <Text style={{fontSize:15,fontWeight:'bold',color:'#4d6bc1',textAlign:'center'}}>880.660</Text> 
     <Picker
         style={{ width: 150,color:'#4d6bc1',marginTop:-17,marginLeft:20 }}
          selectedValue={this.state.Coin}
          itemStyle={{ backgroundColor: "#4d6bc1", color: "#4d6bc1", fontSize:15,fontWeight:'bold' }}
          onValueChange={(lang) => this.setState({Coin: lang})}>
          <Picker.Item label="USDollar" value="Us doller" />
          <Picker.Item label="Indian" value="js" />
        </Picker>
     </View> 
                 </View>            
                 <View style={{flexDirection:'row',marginLeft:60,marginRight:20}}> 
                 <View style={{flex:1,flexDirection:'row'}}>
                 <Text style={{fontSize:15,fontWeight:'bold',color:'#4d6bc1'}}>ETH</Text> 
                 <Image style={{marginLeft:10,width: 10, height: 10,}}   source={require("./assets/red.png")} ></Image>          
                 </View>
               
                 <View style={{flex:1,flexDirection:'row'}}>
                 <Text style={{marginLeft:20,fontSize:15,fontWeight:'bold',color:'#4d6bc1'}}>BTC</Text> 
                 <Image style={{marginLeft:10,width: 10, height: 10,}}   source={require("./assets/green.png")} ></Image> 
                 </View>
                 
                 <View style={{flex:1,flexDirection:'row'}}>
                 <Text style={{marginLeft:20,fontSize:15,fontWeight:'bold',color:'#4d6bc1'}}>XRP</Text> 
                 <Image style={{marginLeft:10,width: 10, height: 10,}}   source={require("./assets/green.png")} ></Image> 
                 </View>

                 </View>
                 <View style={{flexDirection:'row',marginLeft:60,marginRight:20}}>
                 <View style={{flex:1}}>
                 <Text style={{marginTop:1,fontSize:15,fontWeight:'bold',color:'#fff'}}>435$</Text> 
                 </View>
                
                 <View style={{flex:1}}>
                 <Text style={{marginLeft:20,marginTop:1,fontSize:15,fontWeight:'bold',color:'#fff'}}>20.000$</Text>
                 </View>
          
                 <View style={{flex:1}}>
                 <Text style={{marginLeft:20,marginTop:1,fontSize:15,fontWeight:'bold',color:'#fff'}}>50$</Text> 
                 </View> 
                
                 </View>             
                 
               </View>
<View style={{height:'100%'}}>
<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30,marginTop:10}}>
                 <Text style={{marginLeft:20,fontSize:15,fontWeight:'bold',color:'#4d6bc1'}}>Activity</Text>
                 <View style={{padding:5,backgroundColor:'#2b4599',justifyContent:'center',alignItems:'center',borderRadius:20}}>
                 <Picker selectedValue={this.state.language}
  itemStyle={{ backgroundColor: "#fff", color: "#fff", fontSize:10,fontWeight:'bold' }}
  style={{height: 20, width: 50}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
                 </View>
                 </View>
<FlatList  style={{marginTop:10}}
      ItemSeparatorComponent={this.space}
      data={this.state.dataSource}
          renderItem={({item,separators})  =>
        <TouchableOpacity onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight} onPress = { this.clickedItemText.bind(this, item)}>
      <View style={{marginLeft:30,marginRight:30, shadowOffset: { width: 10, height: 10 },
   borderWidth: 1,
  borderColor: '#394d88',
  borderBottomWidth: 0,
  shadowColor: '#394d88',
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 24,
  borderRadius:25}}>
  <LinearGradient
   colors={['#374c8d', '#32437b','#2c3868']} style={{ borderRadius:25}}>
        <View style={{alignItems:'center',flexDirection:'row',padding:15}}>
        {(
          (item.Status!='Completed')?<View style={{
     justifyContent:'center',alignItems:"center"}} >
          <Image  style={{width: 30, height: 30}}  source={require("./assets/redicon.png")} ></Image>  
          </View>:  <View style={{
     justifyContent:'center',alignItems:"center"}} >
          <Image  style={{width: 30, height: 30}}  source={require("./assets/exchange.png")} ></Image>  
          </View>

        )}
      
          <View style={{flexDirection:'column',marginLeft:30}}>
          <View style={{flex:1, flexDirection: 'row',justifyContent:'space-between'}}>            
         <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#fff':'#fff'}}>{(item.Status!='Completed')?'Sent to Dan23':"Confirmed"}</Text>       
     <View style={{flexDirection:'row'}}>
     <Image style={{width: 25,marginTop:10, height: 25}}   source={require("./assets/plusblue.png")} ></Image>    
     <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#fff':'#fff'}}>$ 9060</Text> 
     </View>
        
     </View>  
     <View style={{flex:1, flexDirection:'row',justifyContent:'space-between'}}>
 
            
         <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#4d6bc1':'#4d6bc1',fontWeight:'bold'}}>Feb 23 2019  . 11.05</Text>       
     
      <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#4d6bc1':'#4d6bc1'}}>5.4587ETH</Text>    
     </View>  
          </View>
         
        </View>
</LinearGradient>
  </View>
       
  </TouchableOpacity>  
       }
    />
</View>
                
       
    </View>
    </ScrollView>
</LinearGradient>
<View style={{ width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', 
    bottom: 0,}}>
<LinearGradient colors= {['#1a5fe1','#00a5ff','#00a5ff']} style={{borderTopRightRadius:20,borderTopLeftRadius:20,height:80,width:'100%',justifyContent:'center',alignItems:'center'}} >
    <View style={{flexDirection: 'row',marginRight:20,marginLeft:20,alignItems:"center",justifyContent:'center'}}> 
       <TouchableOpacity onPress={this.AppTouch}>
    
       <View style={{ width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
  justifyContent:'center',alignItems:"center"}} >
  
    <Image style={{width:20,height:20}}   source={this.state.app5icon} ></Image> 
          </View>  
       
          </TouchableOpacity>  
          <TouchableOpacity >
       
       <View style={{ width: 40,marginLeft:10,backgroundColor:this.state.app1color,
 height: 40,
 borderRadius: 40/2,
justifyContent:'center',alignItems:"center"}} >

 <Image style={{width:20,height:20}}   source={this.state.app1icon} ></Image> 
       </View>    
              
       </TouchableOpacity>   
          <TouchableOpacity onPress={this.App6Touch}>
      
          <View style={{  width: 40,marginLeft:20,
    height: 40,
    borderRadius: 40/2,
   justifyContent:'center',alignItems:"center"}} >
   
    <Image  style={{width: 20, height: 20}}  source={this.state.app6icon} ></Image>
    
            
          </View> 
       
       
          </TouchableOpacity>  
          <TouchableOpacity onPress={this.App2Touch}>
    
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
  justifyContent:'center',alignItems:"center"}} >
  
    <Image style={{width:20,height:20}}   source={this.state.app2icon} ></Image> 
   
        
          </View> 
      
          
          </TouchableOpacity>  
          <TouchableOpacity onPress={this.App3Touch}>
   
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
   justifyContent:'center',alignItems:"center"}} >
    
     <Image style={{width:20,height:20}}   source={this.state.app3icon} ></Image>
    
           
          </View>   
       
         
          </TouchableOpacity>
          <TouchableOpacity onPress={this.App4Touch}>
     
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
   justifyContent:'center',alignItems:"center"}} >
    
     <Image style={{width:20,height:20}}   source={this.state.app4icon} ></Image> 
    
            
          </View>  
         
          </TouchableOpacity> 
          
          </View>
          </LinearGradient>  
</View>
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
    marginTop:20,
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