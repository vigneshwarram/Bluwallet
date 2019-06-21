import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,Picker,NativeModules,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation, Animated,
  Easing,Dimensions} from 'react-native';
import { Alert } from 'react-native';
const { UIManager } = NativeModules;
import Carousel ,{ Pagination } from 'react-native-snap-carousel';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import LinearGradient from 'react-native-linear-gradient';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window');
const height = width * 0.8;

export default class DashBoard extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
   
    this.state = {
      dataSource:[],
      dataImage:[{'image1':require("./assets/etherem.png"),'image1':require("./assets/etherem.png")}],
      cityItems:["US Doller,Indian,Eutherium"],
      Amount: 'USDoller',
      currentIndex:0,
      data1:[require('./assets/biconback.png'),require('./assets/etherem.png'),require('./assets/biconback.png'),require('./assets/etherem.png')],
      Time: 'Today',
      NoPopup:this.props.navigation.state.params.DashBoardPopup?this.props.navigation.state.params.DashBoardPopup:false,
      animate:false,
      ProfileComplete:false,
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
      app5color:'#5099f0',
      activeSlide:0,
      carouselItems: [
        {
         
        ShadowImages:require('./assets/etherem.png'),
         
            title:"Etherium"
        },
        {
          ShadowImages:require('./assets/mshadow.png'),
       
            title:"Monero"
        },
        {
          ShadowImages:require('./assets/bshadow.png'),
            title:"Bitcoin"
        },
      
       
    ]}
  
  
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
VaultTouch=()=>{
 
  this.props.navigation.navigate('Vault');
}
App3Touch=()=>{
  this.props.navigation.navigate('Price')
}
App4Touch=()=>{
  this.props.navigation.navigate('ExchangeMenu')
}
App5Touch=()=>{
  this.setState({
    app3color:'#5099f0',
    app1color:'#5099f0',
    app2color:'#5099f0',
    currentIndex: 0,
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
CreditCardTouch=()=>{
  this.props.navigation.navigate('CreditCard')
}
get pagination () {
  const { carouselItems, activeSlide } = this.state;
  return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'transparent' }}
        dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: '#5099f0'
        }}
        inactiveDotStyle={{
            // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
  );
}
  render() {
    const { width } = Dimensions.get('window');
    const contentOffset = (width - 50) / 2;
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
      <LinearGradient colors= {['#354e91','#21284a','#21284a']}>
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
          <Image  style={{width: 30, height: 30,resizeMode:'contain'}}  source={require("./assets/app1white.png")} ></Image>   
          <View style={{flexDirection:'column'}}>
          <Text style={{marginLeft:10,fontSize:18,fontWeight:'bold',color:'#fff'}}>Wallet</Text>       
          </View>       
          </View>
    
            <LinearGradient colors={['#17e8e3','#30e0ba','#3ddba1']} style={{height:this.state.hr,width:this.state.wr,justifyContent:'center',alignItems:'flex-start',borderTopLeftRadius:25,borderBottomLeftRadius:25, marginTop:10}}>
            <TouchableOpacity onPress={this.pressRight}>
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginLeft:10,width: 30, height: 30,resizeMode:'contain'}}   source={require("./assets/app1white.png")} ></Image>     
     
          </View>
          </TouchableOpacity>
            </LinearGradient>
      </View>
      {((this.state.NoPopup?null:
      ((!this.state.ProfileComplete)?
        <View >
      <LinearGradient colors= {['#395ea4','#446ea8','#4c78a9']} style={{width:'95%',marginLeft:10,marginRight:10,padding:10,height:160,marginTop:15,borderRadius:10}}>
      <Text style={{marginLeft:20,fontSize:18,fontWeight:'bold',color:'#fff'}}>Complete Your Profile</Text>  
      <View style={{flexDirection:'row'}}>
      <Text style={{marginLeft:20,fontSize:10,color:'#fff',width:'65%'}}>Complete you profile today to start using your wallet successfully </Text>  
      <Image style={{marginLeft:10, height: 60,
    width: 100,
    resizeMode: 'contain'}}   source={require("./assets/threelogo.png")} ></Image>     
      </View>
      <TouchableOpacity onPress={this.ContinueClick}>
      <View style={{width:'50%'}}>
<LinearGradient colors={['#17e8e3','#30e0ba','#3ddba1']}  style={{padding:10,backgroundColor:'red',justifyContent:'center',alignItems:'center',borderRadius:10}}>
<TouchableOpacity>
<Text style={{color:'#fff'}}>Continue</Text>
</TouchableOpacity>
</LinearGradient>
</View>
      </TouchableOpacity>
      
      </LinearGradient>
      </View>:<View >
      <LinearGradient colors= {['#395ea4','#446ea8','#4c78a9']} style={{width:'95%',marginLeft:10,marginRight:10,padding:10,height:160,marginTop:15,borderRadius:10}}>
      <Text style={{marginLeft:20,fontSize:18,fontWeight:'bold',color:'#fff'}}>Document Needed</Text>  
      <View style={{flexDirection:'row'}}>
      <Text style={{marginLeft:20,fontSize:10,color:'#fff',width:'65%'}}>we have some issue with the documents you've supplied.please try uploading them again to continue </Text>  
      <Image style={{marginLeft:10, height: 50,
    width: 100,
    resizeMode: 'contain'}}   source={require("./assets/profileicon.png")} ></Image>     
      </View>
      <View style={{width:'50%',marginTop:20}}>
<LinearGradient colors={['#17e8e3','#30e0ba','#3ddba1']}  style={{padding:10,backgroundColor:'red',justifyContent:'center',alignItems:'center',borderRadius:10}}>
<TouchableOpacity>
<Text style={{color:'#fff'}}>Upload again</Text>
</TouchableOpacity>
</LinearGradient>
</View>
      </LinearGradient>
      </View>           
      ))
      
      
      )}
 
      
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Carousel
                    data={this.state.carouselItems}
                    sliderWidth={width}
                    itemWidth={300}
                    renderItem={this._renderItem}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                />
       { this.pagination }
      </View>
      
    
      <View style={styles.containers}>
    
    <Image style={{width:350,height:180,opacity:0.4,marginTop:-50,
    resizeMode: 'contain'}}   source={require("./assets/etherium_original.png")} ></Image>   
    
      
            <View style={{justifyContent:'center',alignItems:'center',marginTop:-80}}>
                 <Text style={{marginLeft:10,marginTop:15,fontSize:15,fontWeight:'bold',color:'#4d6bc1'}}>Balance</Text> 
                 </View>
               
               <View style={{ marginTop:30,justifyContent:'center',alignItems:'center'}}>
                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <View style={{marginTop:-10}}>
                 <Image  style={{resizeMode:'contain',width:60,height:60}}  source={require("./assets/refresh.png")} ></Image>
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
                 <View style={{flexDirection:'row',justifyContent:'center',width:'100%',marginTop:20,alignItems:'center'}}>       		
				 <Text style={{fontSize:15,fontWeight:'bold',color:'#4d6bc1'}}>880.889</Text>                                          
        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',marginLeft:20}}>
        <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:12}}>{this.state.Amount}</Text>
        <Image  style={{width: 10, height: 10,marginLeft:10}}  source={require("./assets/down_arrow.png")} ></Image>
        <Picker style={{ position:'absolute', top: 0, width: 1000, height: 1000 }}
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
                 <View style={{flexDirection:'row',marginTop:10}}> 
                 <View style={{flexDirection:'row'}}>
                 <View style={{justifyContent:'center',alignItems:'center'}}>
                 <View style={{width:45,height:25,borderWidth:1,borderColor:'#405ba8',justifyContent:'center',alignItems:'center',borderRadius:6}}>
                 <Text style={{fontSize:12,fontWeight:'bold',color:'#858ead'}}>All</Text>
                 </View>
                 </View>
                
                 <View style={{marginLeft:30}}>
                 <View style={{flexDirection:'row'}}>
                 <Text style={{fontSize:15,fontWeight:'bold',color:'#4d6bc1'}}>ETH</Text>
                 <View style={{marginTop:5}}>
                 <Image style={{resizeMode:'contain',width:10,height:10}}   source={require("./assets/red.png")} ></Image>          
                 </View>
                 </View>
                  
                 <Text style={{marginTop:1,fontSize:15,fontWeight:'bold',color:'#858ead'}}>435$</Text> 
                 </View>
                 <View style={{marginLeft:40}}>
                 <View style={{flexDirection:'row'}}>
                 <Text style={{fontSize:15,fontWeight:'bold',color:'#4d6bc1'}}>BTC</Text> 
                 <View style={{marginTop:5}}>
                <Image style={{resizeMode:'contain',width:10,height:10}}   source={require("./assets/green.png")} ></Image> 
                </View>
                 </View>
             
                 <Text style={{marginTop:1,fontSize:15,fontWeight:'bold',color:'#858ead'}}>20.000$</Text>
                 </View>
                 <View  style={{marginLeft:40}}>
                 <View style={{flexDirection:'row'}}>
                 <Text style={{fontSize:15,fontWeight:'bold',color:'#4d6bc1'}}>XRP</Text> 
                 <View style={{marginTop:5}}>
                 <Image style={{resizeMode:'contain',width:10,height:10}}   source={require("./assets/green.png")} ></Image> 
                 </View>
                 </View>
                
                 <Text style={{marginTop:1,fontSize:15,fontWeight:'bold',color:'#858ead'}}>50$</Text> 
                 </View>
                
                 </View>
                 </View>                    
               </View>
<View style={{height:'100%'}}>
                 <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30,marginTop:10}}>
                 <Text style={{marginLeft:20,fontSize:15,fontWeight:'bold',color:'#858ead'}}>Activity</Text>
                                
        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#2c4b9d',borderRadius:15}}>
        <Image  style={{width: 10, height: 10,tintColor:'#5997fa'}}  source={require("./assets/down_arrow.png")} ></Image> 
        <Text style={{color:'#5997fa',fontWeight:'bold',opacity:1,fontSize:12,marginLeft:5}}>{this.state.Time}</Text> 
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
        
  

               
                 </View>
                 <View style={{flex:1,marginBottom:90}}>
                 <FlatList  style={{marginTop:10}}
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
          <Image  style={{width: 50, height: 50,resizeMode:'contain'}}  source={require("./assets/redicon.png")} ></Image>  
          </View>
          <View style={{flexDirection:'column'}}>
          <View style={{flex:1, flexDirection: 'row',justifyContent:'space-between'}}>            
         <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#fff':'#fff'}}>{(item.Status!='Completed')?'Sent to Dan23':"Confirmed"}</Text>       
     <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
     <Image style={{width: 25,marginTop:10, height: 25}}   source={require("./assets/plusblue.png")} ></Image>    
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
    />
                 </View>

</View>
                
       
    </View>
    </ScrollView>
</LinearGradient>
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
   <TouchableOpacity onPress={this.App4Touch}>
     
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
   justifyContent:'center',alignItems:"center"}} >
    
     <Image style={{width:20,height:20,resizeMode:'contain'}}   source={this.state.app4icon} ></Image> 
    
            
          </View>  
         
          </TouchableOpacity>
          <TouchableOpacity >
       
       <View style={{ width: 40,marginLeft:10,backgroundColor:this.state.app1color,
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
      
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
   justifyContent:'center',alignItems:"center"}} >
   
    <Image  style={{width: 20, height: 20,resizeMode:'contain'}}  source={this.state.app6icon} ></Image>
    
            
          </View> 
       
       
          </TouchableOpacity>  
          <TouchableOpacity onPress={this.AppTouch}>
    
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
      selectedAmount=(item,itemIndex)=>{
        this.setState({
            Amount:item
        })
      }
      selectedTime=(item,itemIndex)=>{
        this.setState({
        Time:item
        })
      }
      ContinueClick=()=>{
        this.setState({
          ProfileComplete:true
        })
        this.props.navigation.navigate('Welcome')
      }
      _renderItem({item,index}){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
            <Text style={{color:'#fff',marginTop:10}} >{item.title}</Text>
                <Image style={{width:150,height:150, resizeMode:'contain'}}
                    source={item.ShadowImages}
                    />
                
            </View>
        )
    
    }
}



const styles = StyleSheet.create({
 
  Maincontainers: {
    flex: 1,   
    backgroundColor: '#fff',
  },
  containers: {
    backgroundColor: 'transparent',
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