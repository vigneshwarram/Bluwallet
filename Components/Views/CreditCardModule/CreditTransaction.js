import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,ScrollView,Picker,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,FlatList} from 'react-native';
import { Alert } from 'react-native';
import PureChart from 'react-native-pure-chart';

import LinearGradient from 'react-native-linear-gradient';

export default class CreditTransaction  extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    
    this.state = {
      dataSource:[],
      Amount: 'USDoller',
      Time: 'Today',
      cityItems:["US Doller,Indian,Eutherium"],
      Coin: 'Us Doller',
      animate:false,
      GraphWidth:0,
      ActivityWidth:1,
      ActivityOpacity:1,
      GraphOpacity:0.5,
      ActivityView:true,
      app1icon:require('../assets/app1white.png'),
      app6icon:require('../assets/app6-blue.png'),
      app2icon:require('../assets/app2.png'),
      app3icon:require('../assets/app3.png'),
      app4icon:require('../assets/app4.png'),
      app5icon:require('../assets/app5.png'),
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
AppTouch=()=>{
}
VaultTouch=()=>{
  this.setState({
    app2color:'#fff',
    app2icon:require('../assets/app2.png')    
  })
  this.props.navigation.navigate('Vault');
}
App3Touch=()=>{
  this.props.navigation.navigate('Price')
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
    const { navigate } = this.props.navigation;
    let sampleData = [
      {
        seriesName: 'series1',
        data: [
          {x: '2018-02-01', y: 30},
          {x: '2018-02-02', y: 200},
          {x: '2018-02-03', y: 170},
          {x: '2018-02-04', y: 250},
          {x: '2018-02-05', y: 10}
        ],
        color: '#297AB1'
      },
      {
        seriesName: 'series2',
        data: [
          {x: '2018-02-01', y: 20},
          {x: '2018-02-02', y: 100},
          {x: '2018-02-03', y: 140},
          {x: '2018-02-04', y: 550},
          {x: '2018-02-05', y: 40}
        ],
        color: 'yellow'
      }
    ]
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
       
      <View> 

       <LinearGradient
   colors= {['#354e91','#21284a','#21284a']} style={{height:'100%'}}>   
   
   <View style={{justifyContent:'space-between',flexDirection:'row'}}>  
<LinearGradient colors={['#17e8e3','#30e0ba','#3ddba1']} style={{justifyContent:'center',height:this.state.h,width:this.state.w, alignItems:'flex-end', marginTop:10,borderTopRightRadius:25,borderBottomRightRadius:25}}>
<TouchableOpacity onPress={this._onPress}>
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginRight:10,width: 30, height: 30}}   source={require("../assets/creditscanner.png")} ></Image>     
     
          </View>
          </TouchableOpacity>
</LinearGradient>    
         
            
            <View style={{flexDirection: 'row',justifyContent:'flex-start',alignItems:"center",marginTop:15}}> 
          <Image  style={{width: 30, height: 30,resizeMode:'contain'}}  source={require("../assets/app6.png")} ></Image>   
          <View style={{flexDirection:'column'}}>
          <Text style={{marginLeft:10,fontSize:18,fontWeight:'bold',color:'#fff'}}>Credit Card</Text>       
          </View>       
          </View>
    
            <LinearGradient colors={['#91eef6','#7bd0f7','#69b9f4']} style={{height:this.state.hr,width:this.state.wr,justifyContent:'center',alignItems:'flex-start',borderTopLeftRadius:25,borderBottomLeftRadius:25, marginTop:10}}>
            <TouchableOpacity onPress={this.pressRight}>
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginLeft:10,width: 30, height: 30,resizeMode:'contain'}}   source={require("../assets/newcredit.png")} ></Image>     
     
          </View>
          </TouchableOpacity>
            </LinearGradient>
      </View>
    <View style={{marginTop:20}}> 
   
             <View>
        
      

        <View style={{marginTop:10}}>
      
        <View  style={{ marginTop:10,justifyContent:'center',alignItems:'center'
        }}>
<Image  style={{  width:400,height:200,
    resizeMode: 'contain'}} source={require("../assets/creditcardlogo.png")} ></Image> 
</View>
<View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row',marginTop:10}}> 
<TouchableOpacity onPress={this.ActivityTouch}>
<View>
<Text style={{color:'#fff',fontWeight:'bold',opacity:1,fontSize:15,marginLeft:40,opacity:this.state.ActivityOpacity}}>Activity</Text>
<View
  style={{
    borderBottomColor: '#fff',width:60,marginLeft:40,marginTop:3,
    borderBottomWidth:this.state.ActivityWidth,
  }}
/>
</View>
</TouchableOpacity>



<TouchableOpacity onPress={this.GraphTouch}>
<View>
<Text style={{color:'#fff',fontWeight:'bold',opacity:1,fontSize:15,marginLeft:40,opacity:this.state.GraphOpacity}}>Graph</Text>
<View
  style={{
    borderBottomColor: '#fff',width:60,marginLeft:40,marginTop:3,
    borderBottomWidth:this.state.GraphWidth,
  }}
/>
</View>
</TouchableOpacity>
</View>
 <View style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#2b4599',borderRadius:20,width:80,marginTop:10,marginLeft:20}}>
        <Image  style={{width: 10, height: 10,tintColor:'#5994f8'}}  source={require("../assets/down_arrow.png")} ></Image> 
        <Text style={{color:'#5994f8',fontWeight:'bold',opacity:1,fontSize:12,marginLeft:5}}>{this.state.Time}</Text> 
        <Picker style={{ position:'absolute', top: 0, width: 1000, height: 1000 }}
   selectedValue={this.state.Time}
  onValueChange={(itemValue, itemIndex) => this.selectedTime(itemValue,itemIndex)}>
  
  <Picker.Item label="India" value="India" />
  <Picker.Item label="Aus" value="Aus" />
  <Picker.Item label="USA" value="USA" />
  <Picker.Item label="German" value="German" />
  <Picker.Item label="Italy" value="Italy" />
  <Picker.Item label="Aus" value="Aus" />
  <Picker.Item label="India" value="India" />
  <Picker.Item label="Aus" value="Aus" />
  </Picker>     
        </View>
        {((this.state.ActivityView)? <FlatList  style={{marginTop:10}}
      ItemSeparatorComponent={this.space}
      data={this.state.dataSource}
          renderItem={({item,separators})  =>
          <TouchableOpacity onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight} onPress = { this.clickedItemText.bind(this, item)}>
      <View elevation={5} style={{marginLeft:30,marginRight:30, shadowOffset: { width: 10, height: 10 },
   borderWidth: 1,
  borderColor: '#394d88',
  borderBottomWidth: 0,
  borderRadius:25}}>
   
  <LinearGradient
   colors={['#374c8d', '#32437b','#2c3868']} style={{ borderRadius:25}}>
   
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <View style={{alignItems:'center'}} >
          <Image  style={{width: 50, height: 50,resizeMode:'contain'}}  source={require("../assets/redicon.png")} ></Image>  
          </View>
          <View style={{flexDirection:'column'}}>
          <View style={{flex:1, flexDirection: 'row',justifyContent:'space-between'}}>            
         <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#fff':'#fff'}}>{(item.Status!='Completed')?'Sent to Dan23':"Confirmed"}</Text>       
     <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
     <Image style={{width: 25,marginTop:10, height: 25}}   source={require("../assets/plusblue.png")} ></Image>    
     <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#fff':'#fff'}}>$ 9060</Text> 
     </View>
        
     </View>  
     <View style={{flex:1, flexDirection:'row',justifyContent:'space-between' ,paddingBottom:15}}>
 
            
         <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#4d6bc1':'#4d6bc1',fontWeight:'bold'}}>Feb 23 2019  . 11.05</Text>       
     
      <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#4d6bc1':'#4d6bc1'}}>5.4587ETH</Text>    
     </View>  
          </View>
         
        </View>
</LinearGradient>
  </View>
       
  </TouchableOpacity>  
       }
    />:<View style={{marginTop:20}}>
      <PureChart data={sampleData} type='line' />
    </View>
        
        
        )}
      
       
</View>
</View>

            
             </View>          
 </LinearGradient> 
 </View>
 <View style={{ width: '100%',opacity:0.9,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', 
    bottom: 0,}}>
<LinearGradient colors= {['#1a5fe1','#00a5ff','#00a5ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{borderTopRightRadius:20,borderTopLeftRadius:20,height:80,width:'100%',justifyContent:'center',alignItems:'center'}} >
    <View style={{flexDirection: 'row',marginRight:20,marginLeft:20,alignItems:"center",justifyContent:'center'}}> 
    <TouchableOpacity onPress={this.App3Touch}>
   
   <View style={{  width: 40,marginLeft:10,
height: 40,
borderRadius: 40/2,
justifyContent:'center',alignItems:"center"}} >

<Image style={{width:20,height:20,resizeMode:'contain'}}   source={this.state.app3icon} ></Image>

    
   </View>   

  
   </TouchableOpacity>
   <TouchableOpacity onPress={this.ExchangeTouch}>

   <View style={{  width: 40,marginLeft:10,
height: 40,
borderRadius: 40/2,
justifyContent:'center',alignItems:"center"}} >

<Image style={{width:20,height:20,resizeMode:'contain'}}   source={this.state.app4icon} ></Image> 

     
   </View>  
  
   </TouchableOpacity> 
   
       
          <TouchableOpacity onPress={this.DashBoardTounch}>
       
       <View style={{ width: 40,marginLeft:10,
 height: 40,
 borderRadius: 40/2,
justifyContent:'center',alignItems:"center"}} >

 <Image style={{width:20,height:20,resizeMode:'contain'}}   source={this.state.app1icon} ></Image> 
       </View>    
              
       </TouchableOpacity>   
         
          <TouchableOpacity onPress={this.VaultTouch}>
    
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
  justifyContent:'center',alignItems:"center"}} >
  
    <Image style={{width:20,height:20,resizeMode:'contain'}}   source={this.state.app2icon} ></Image> 
   
        
          </View> 
      
          
          </TouchableOpacity>  
          <TouchableOpacity onPress={this.CreditCardTouch}>
      
      <View style={{  width: 40,marginLeft:10,backgroundColor:this.state.app5color,
height: 40,
borderRadius: 40/2,
justifyContent:'center',alignItems:"center"}} >

<Image  style={{width: 20, height: 20,resizeMode:'contain'}}  source={this.state.app6icon} ></Image>

        
      </View> 
   
   
      </TouchableOpacity>  
          <TouchableOpacity onPress={this.ProfileTouch}>
    
    <View style={{ width: 40,marginLeft:10,
 height: 40,
 borderRadius: 40/2,
justifyContent:'center',alignItems:"center"}} >

 <Image style={{width:20,height:20,resizeMode:'contain'}}   source={this.state.app5icon} ></Image> 
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
      BeginAction=()=>{
        this.props.navigation.navigate('Verify');
      }
      AddCardAction=()=>{
        this.props.navigation.navigate('CardDetails')
      }
      selectedTime=(Item,itemIndex)=>{
        this.setState({
          Time:Item
        })
      }
      ActivityTouch=()=>{
        this.setState({
          ActivityOpacity:1,
          GraphOpacity:0.5,
          ActivityWidth:1,
          GraphWidth:0,
          ActivityView:true

        })
      }
      GraphTouch=()=>{
        this.setState({
          ActivityOpacity:0.5,
          GraphOpacity:1,
          ActivityWidth:0,
          GraphWidth:1,
          ActivityView:false

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