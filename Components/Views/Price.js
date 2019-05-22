import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,Picker,FlatList,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,} from 'react-native';
import { Alert } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Logo from '../logo'
import LinearGradient from 'react-native-linear-gradient';

export default class Price  extends React.Component {

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
      app2color:'#5099f0',
      app1color:'#fff',
      app3color:'#5099f0',
      app5color:'#5099f0',
      app4color:'#5099f0',
      app1icon:require('./assets/app1.png'),
      app2icon:require('./assets/app2.png'),
      app3icon:require('./assets/app3.png'),
      app4icon:require('./assets/app4.png'),
      app5icon:require('./assets/app5.png'),
  
    })
    LayoutAnimation.spring();
    if(!this.state.clickopen){
      if(this.state.Awr>80)
      {
        this.setState({Awr:80,clickopen:false})
      }
      else
      {
        this.setState({Awr:this.state.Awr+250,clickopen:true})
      }
     
    }
    else{
      this.setState({Awr:80,clickopen:false})
    }
    
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
   // this.props.navigation.navigate('Profile')
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
     
      <LinearGradient
   colors={['#1a5fe1','#00a5ff','#00a5ff']} style={{height:'35%',position:'absolute',left: 0,
right: 0,borderBottomRightRadius:200,borderBottomLeftRadius:200}}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View style={{backgroundColor:'#fff',height:this.state.h,width:this.state.w,justifyContent:'center',borderWidth:1, alignItems:'flex-end',
  borderColor: '#fff',
  marginTop:10,
  borderTopEndRadius:25,borderBottomEndRadius:25,
  }}>

<TouchableOpacity onPress={this._onPress}>
 <View style={{flexDirection: 'row'}}> 
    <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/note.PNG.png")} ></Image>     

    </View>
    </TouchableOpacity>
 
    
      </View>
     
    </View>
  
          </LinearGradient>    
         
      <View style={styles.containers}>    
      <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:50}}>
      <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/app3.png")} ></Image> 
    <Text style={{fontSize:18,fontWeight:'bold',color:'#fff',marginLeft:10}}>Price</Text>
        
    </View>  
    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:20}}>
    <Text style={{fontSize:12,color:'#fff',marginLeft:10}}>ETH</Text>
    <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',marginLeft:10}}>132.86</Text>
    <View style={{flexDirection: 'row',marginLeft:10}}>
     <Picker
         style={{ width: 130,color:'#fff' }}
          selectedValue={this.state.Coin}
          itemStyle={{ backgroundColor: "#fff", color: "#fff", fontFamily:"Ebrima", fontSize:17 }}
          onValueChange={(lang) => this.setState({Coin: lang})}>
          <Picker.Item label="USDoller" value="USDoller" />
          <Picker.Item label="Indian" value="js" />
        </Picker>
     </View>    
    </View>  
    <AreaChart style={{ height: 75,marginLeft:90,marginRight:90,backgroundColor:'#00a5ff' }}
                data={data}
                showGrid={ false }
                curve={shape.curveNatural}
                svg={{ fill: '#00e2ff',stroke:'#25e2cd' }}
            >
                <Grid/>
                <Line/>
            </AreaChart>
    
    </View>

 <View style={{backgroundColor:'#fff',marginTop:40}}>
 <View
  style={{
    marginLeft:30,marginRight:30,
    marginTop:20,
    borderBottomColor: '#e6e8f1',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
 <FlatList 
      ItemSeparatorComponent={this.space}
      data={this.state.dataSource}
          renderItem={({item,separators})  =>
        <TouchableOpacity onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight} onPress = { this.clickedItemText.bind(this, item)}>
      <View style={{}}>
  <LinearGradient
   colors={[(item.Status=='Completed')?'#fff':'#fff', (item.Status=='Completed')?'#fff':'#fff', (item.Status=='Completed')?'#fff':'#fff']}>
        <View style={{flexDirection:'row'}}>
       <View style={{backgroundColor:'transparent',width:'40%',height:250,marginLeft:30,borderWidth:1,borderColor:'#e6e8f1',shadowOffset: { width: 10, height: 10 },
   borderWidth: 1,
  borderColor: '#96cef7',
  borderBottomWidth: 0,
  shadowColor: '#7929ff',
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 24,
  }} >
       <LinearGradient style={{height:'100%'}}   colors={[(item.Status=='Completed')?'#fff':'#5489ff', (item.Status=='Completed')?'#fff':'#7929ff', (item.Status=='Completed')?'#fff':'#7929ff']}>
       <View style={{justifyContent:'center',alignItems:'center', position: 'absolute',
    top: 0,
    bottom: 0,
    left: 20,
    right: 0,}}>
    <Image  style={{width:'60%', height: '80%',marginLeft:20}}   source={require("./assets/transparent-etherem.png")} ></Image>
    </View>
     {(item.Status!='Cancelled')? <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/micon.png")} ></Image>

        </View>:<View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/diablue.png")} ></Image>

        </View>}
        {(item.Status!='Cancelled')? <View style={{justifyContent:'center',alignItems:'flex-start',marginLeft:10,marginTop:30}}>
        
        <Text style={{color:'#000000',fontSize:15,fontWeight:'bold'}}>Monero</Text>
        <Text style={{color:'#1a5fe1',fontSize:15,marginTop:10,fontWeight:'bold'}}>XMR</Text>

        <Text style={{color:'#000000',fontSize:15,marginTop:30,fontWeight:'bold'}}>Price</Text>
        <Text style={{color:'#1a5fe1',fontSize:15,marginTop:10,fontWeight:'bold'}}>132.6</Text>
    </View>:
    <View style={{justifyContent:'center',alignItems:'flex-start',marginLeft:10,marginTop:30}}>
        
        <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Etherium</Text>
        <Text style={{color:'#fff',fontSize:15,marginTop:10,fontWeight:'bold'}}>ETH</Text>

        <Text style={{color:'#fff',fontSize:15,marginTop:30,fontWeight:'bold'}}>Price</Text>
        <Text style={{color:'#fff',fontSize:15,marginTop:10,fontWeight:'bold'}}>132.6</Text>
    </View>}
       
       </LinearGradient>
   
       </View>
       <View style={{backgroundColor:'transparent',width:'40%',height:250,marginLeft:20,borderWidth:1,borderColor:'#e6e8f1'}} >
       <LinearGradient style={{height:'100%'}}   colors={[(item.Status=='Completed')?'#fff':'#fff', (item.Status=='Completed')?'#fff':'#fff', (item.Status=='Completed')?'#fff':'#fff']}>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/diaIcon.png")} ></Image>

        </View>
        <View style={{justifyContent:'center',alignItems:'flex-start',marginLeft:10,marginTop:30}}>
        
            <Text style={{color:'#000000',fontSize:15,fontWeight:'bold'}}>Ripple</Text>
            <Text style={{color:'#1a5fe1',fontSize:15,marginTop:10,fontWeight:'bold'}}>Xrp</Text>

            <Text style={{color:'#000000',fontSize:15,marginTop:30,fontWeight:'bold'}}>Price</Text>
            <Text style={{color:'#1a5fe1',fontSize:15,marginTop:10,fontWeight:'bold'}}>121.6</Text>
        </View>
       </LinearGradient>
   
       </View>
         
        </View>
</LinearGradient>
  </View>
       
  </TouchableOpacity>  
       }
    />

 </View>
    <View  style={{justifyContent:'flex-end',alignItems:'flex-end', top: 0,marginBottom:30,position:'absolute',
        bottom: 0,
        left: 0,
        right: 0,}}>
     <TouchableOpacity onPress={this.SlideMenu}>
     <View style={{backgroundColor:'#5099f0',height:this.state.Ahr,width:this.state.Awr,justifyContent:'center',alignItems:'flex-start',borderTopStartRadius:40,borderBottomStartRadius:40, marginTop:10}}>
           
       <View style={{flexDirection: 'row',marginRight:20,}}> 
       <TouchableOpacity onPress={this.AppTouch}>
       <View style={{  width: 40,marginLeft:20,
    height: 40,
    borderRadius: 40/2,
    backgroundColor:this.state.app1color,justifyContent:'center',alignItems:"center"}} >
   
    <Image  style={{width: 20, height: 20}}  source={this.state.app1icon} ></Image>
    
            
          </View> 
          </TouchableOpacity> 
          <TouchableOpacity onPress={this.App6Touch}>
       <View style={{  width: 40,marginLeft:20,
    height: 40,
    borderRadius: 40/2,
    backgroundColor:this.state.app6color,justifyContent:'center',alignItems:"center"}} >
   
    <Image  style={{width: 20, height: 20}}  source={this.state.app6icon} ></Image>
    
            
          </View> 
          </TouchableOpacity>   
          <TouchableOpacity onPress={this.App2Touch}>
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
    backgroundColor:this.state.app2color,justifyContent:'center',alignItems:"center"}} >
  
    <Image style={{width:20,height:20}}   source={this.state.app2icon} ></Image> 
   
        
          </View> 
          </TouchableOpacity>  
          <TouchableOpacity onPress={this.App3Touch}>
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: this.state.app3color,justifyContent:'center',alignItems:"center"}} >
    
     <Image style={{width:20,height:20}}   source={this.state.app3icon} ></Image>
    
           
          </View>   
          </TouchableOpacity>
          <TouchableOpacity onPress={this.App4Touch}>
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: this.state.app4color,justifyContent:'center',alignItems:"center"}} >
    
     <Image style={{width:20,height:20}}   source={this.state.app4icon} ></Image> 
    
            
          </View>  
          </TouchableOpacity> 
          <TouchableOpacity onPress={this.App5Touch}>
          <View style={{ backgroundColor:'red',width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: this.state.app5color,justifyContent:'center',alignItems:"center"}} >
  
    <Image style={{width:20,height:20}}   source={this.state.app5icon} ></Image> 
          </View>         
          </TouchableOpacity>
     
          </View>
            </View>
            </TouchableOpacity>
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