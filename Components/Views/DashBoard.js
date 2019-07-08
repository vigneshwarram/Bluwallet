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
    this.animatedValue = new Animated.Value(0)
    this.state = {
      dataSource:[],
      dataImage:[{'image1':require("./assets/etherem.png"),'image1':require("./assets/etherem.png")}],
      cityItems:["US Doller,Indian,Eutherium"],
      Amount: 'USDoller',
      AnimatedWidth:new Animated.Value(50),
      AnimatedHieght:new Animated.Value(45),

      RightSideWidth:new Animated.Value(50),
      RightsideHeight:new Animated.Value(45),
      currentIndex:0,
      data1:[require('./assets/biconback.png'),require('./assets/etherem.png'),require('./assets/biconback.png'),require('./assets/etherem.png')],
      Time: 'Today',
      NoPopup:this.props.navigation.state.params.DashBoardPopup,
      animate:false,
      KyC:this.props.navigation.state.params.Kyc,
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
    
    // this.GetListData()
    // this._animate()
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
    Animated.timing(this.state.AnimatedWidth, {
      toValue: 150,
      duration: 250,
      easing: Easing.inOut(Easing.ease),
      delay: 50,
    }).start();
    this.setState({click:true})

  }
  else{
    Animated.timing(this.state.AnimatedWidth, {
      toValue: 50,
      duration: 250,
      easing: Easing.inOut(Easing.ease),
      delay: 50,
    }).start(() => console.log('animation complete'));
    this.setState({click:false})
  }
 
    }
pressRight=()=>{
  if(!this.state.clickopen){
    Animated.timing(this.state.RightSideWidth, {
      toValue: 150,
      duration: 250,
      easing: Easing.inOut(Easing.ease),
      delay: 10,
    }).start();
    this.setState({clickopen:true})

  }
  else{
    Animated.timing(this.state.RightSideWidth, {
      toValue: 50,
      duration: 250,
      easing: Easing.inOut(Easing.ease),
      delay: 10,
    }).start(() => console.log('animation complete'));
    this.setState({clickopen:false})
  }
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
_animate=()=>{
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }
  ).start(() => this._animate())
}
  render() {
    const Marginwidth=this.animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 100]
    })
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
      <LinearGradient  colors= {['#354E91','#314682','#283563','#222B50','#21284A']}>
      <ScrollView>
      <View style={{justifyContent:'space-between',flexDirection:'row',}}>  
     
      
      <Animated.View style={{height:this.state.AnimatedHieght,width:this.state.AnimatedWidth, position:'absolute',left:0, marginTop:10,}}>
      <TouchableOpacity onPress={this._onPress}>
      <View>
      <LinearGradient colors={['#f4347f','#f85276','#fe7a6e']} style={{justifyContent:'center',borderTopRightRadius:25,borderBottomRightRadius:25,alignItems:'flex-end',paddingTop:10,paddingBottom:10}}>
    
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/whitebox.png")} ></Image>     
     
          </View>
         
</LinearGradient>
</View>
 </TouchableOpacity>
      </Animated.View>
    
      
     
    
         
            
      <Animated.View style={{height:this.state.RightsideHeight,width:this.state.RightSideWidth,position:'absolute',right:0, marginTop:10,}}>
      <TouchableOpacity onPress={this.pressRight}>
      <View>
      <LinearGradient colors={['#17e8e3','#30e0ba','#3ddba1']}  style={{justifyContent:'center',alignItems:'flex-start',borderTopLeftRadius:25,borderBottomLeftRadius:25,paddingTop:10,paddingBottom:10}}>
         
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginLeft:10,width: 30, height: 30,resizeMode:'contain'}}   source={require("./assets/app1white.png")} ></Image>     
     
          </View>
       
            </LinearGradient>
      </View>
      </TouchableOpacity>
      </Animated.View>
    
           
      </View>
      <View style={{flexDirection: 'row',justifyContent:'center',alignItems:"center",marginTop:25}}> 
          <Image  style={{width: 18, height: 22,resizeMode:'contain'}}  source={require("./assets/app1white.png")} ></Image>   
          <View style={{flexDirection:'column'}}>
          <Text style={{marginLeft:10,fontSize:16,color:'#FFFFFF',fontFamily:'Exo2-Regular'}}>Wallet</Text>       
          </View>       
          </View>
      {((this.state.NoPopup?null:((!this.state.KyC)?
        <View >
      <LinearGradient colors= {['#395ea4','#446ea8','#4c78a9']} style={{width:'95%',marginLeft:10,marginRight:10,padding:10,height:160,marginTop:15,borderRadius:10}}>
      <View style={{flexDirection:'row'}}>
      <View>
      <Text style={{marginLeft:20,fontSize:18,color:'#fff',fontFamily:'Exo2-Medium'}}>Complete Your Profile</Text>  
      <View style={{flexDirection:'row',marginTop:10}}>
      <Text style={{marginLeft:20,fontSize:10,color:'#fff',width:'65%',fontFamily:''}}>Complete you profile today to start using your wallet successfully </Text>  
      </View>
      <TouchableOpacity onPress={this.ContinueClick}>
      <View style={{width:'60%',marginLeft:20,marginTop:30}}>
<LinearGradient colors={['#41d99c','#34ddb2','#21e4d3']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{padding:10,backgroundColor:'red',justifyContent:'center',alignItems:'center',borderRadius:10}}>
<Text style={{color:'#fff',fontFamily:'Poppins-Medium'}}>Continue</Text>
</LinearGradient>
</View>
 </TouchableOpacity>
      </View>
      
      <View >
     
      
     
      
      </View>
      <View style={{}}>
      <Image style={{ height: 200,marginLeft:-100,marginTop:-40,
    width: 250,
    resizeMode: 'contain'}}   source={require("./assets/threelogo.png")} ></Image>  
      </View>
      </View>
      
    
      
      
      
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
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('ChooseCountry')}>
      <View style={{width:'50%',marginTop:20}}>
<LinearGradient colors={['#17e8e3','#30e0ba','#3ddba1']}  style={{padding:10,backgroundColor:'red',justifyContent:'center',alignItems:'center',borderRadius:10}}>
<TouchableOpacity>
<Text style={{color:'#fff'}}>Upload again</Text>
</TouchableOpacity>
</LinearGradient>
</View>
</TouchableOpacity>
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
                 <Text style={{marginLeft:10,marginTop:15,fontSize:16,color:'#ABB3D0',fontFamily:'Exo2-Regular'}}>Balance</Text> 
                 </View>
               
               <View style={{ marginTop:30,justifyContent:'center',alignItems:'center'}}>
                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <View style={{marginTop:-10}}>
                 <Image  style={{resizeMode:'contain',width:60,height:60}}  source={require("./assets/Refresh.png")} ></Image>
                </View>
                <View>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:30,fontSize:36,color:'#F5F6F9',fontFamily:'Exo2-SemiBold'}}>2.80258789</Text>
                <View style={{marginTop:-10,marginLeft:5}}>
                <LinearGradient colors= {['#7498F9','#9B89F8','#D476F7']} style={{ width: 60,borderRadius:5, padding:5,
justifyContent:'center',alignItems:"center"}} >
   <Text style={{fontSize:10,color:'#fff',textAlign:'center',fontFamily:'Exo2-Regular'}}>^15%</Text> 
</LinearGradient>
                </View>
                </View>
                 
                </View>
                 </View>
                 <View style={{flexDirection:'row',justifyContent:'center',width:'100%',marginTop:20,alignItems:'center'}}>       		
				 <Text style={{fontSize:12,color:'#F5F6F9',fontFamily:'Exo2-Regular'}}>880.889</Text>                                          
        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',marginLeft:20}}>
        <Text style={{color:'#ABB3D0',opacity:1,fontSize:12,fontFamily:'Exo2-Regular'}}>{this.state.Amount}</Text>
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
                 <View style={{width:45,height:25,borderWidth:1,borderColor:'#4A6BCD',justifyContent:'center',alignItems:'center',borderRadius:6}}>
                 <Text style={{fontSize:12,color:'#ABB3D0',fontFamily:'Exo2-Regular'}}>All</Text>
                 </View>
                 </View>
                
                 <View style={{marginLeft:30}}>
                 <View style={{flexDirection:'row'}}>
                 <Text style={{fontSize:12,color:'#5496FF',fontFamily:'Exo2-Medium'}}>ETH</Text>
                 <View style={{marginTop:5}}>
                 <Image style={{resizeMode:'contain',width:10,height:10}}   source={require("./assets/red.png")} ></Image>          
                 </View>
                 </View>
                  
                 <Text style={{marginTop:1,fontSize:12,fontWeight:'bold',color:'#ABB3D0',fontFamily:'Exo2-Medium'}}>435$</Text> 
                 </View>
                 <View style={{marginLeft:40}}>
                 <View style={{flexDirection:'row'}}>
                 <Text style={{fontSize:12,color:'#5496FF',fontFamily:'Exo2-Medium'}}>BTC</Text> 
                 <View style={{marginTop:3}}>
                <Image style={{resizeMode:'contain',width:10,height:10}}   source={require("./assets/green.png")} ></Image> 
                </View>
                 </View>
             
                 <Text style={{marginTop:1,fontSize:12,color:'#ABB3D0',fontFamily:'Exo2-Regular'}}>20.000$</Text>
                 </View>
                 <View  style={{marginLeft:40}}>
                 <View style={{flexDirection:'row'}}>
                 <Text style={{fontSize:12,color:'#5496FF',fontFamily:'Exo2-Medium'}}>XRP</Text> 
                 <View style={{marginTop:3}}>
                 <Image style={{resizeMode:'contain',width:10,height:10}}   source={require("./assets/green.png")} ></Image> 
                 </View>
                 </View>
                
                 <Text style={{marginTop:1,fontSize:12,fontWeight:'bold',color:'#ABB3D0',fontFamily:'Exo2-Regular'}}>50$</Text> 
                 </View>
                
                 </View>
                 </View>                    
               </View>
<View style={{height:'100%'}}>
                 <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30,marginTop:10}}>
                 <Text style={{marginLeft:20,fontSize:12,color:'#ABB3D0',fontFamily:'Exo2-Medium'}}>Activity</Text>
                                
        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#2c4b9d',borderRadius:15}}>
        <Image  style={{width: 10, height: 10,tintColor:'#5496FF'}}  source={require("./assets/down_arrow.png")} ></Image> 
        <Text style={{color:'#5496FF',opacity:1,fontSize:12,marginLeft:5,fontFamily:'Exo2-Bold'}}>{this.state.Time}</Text> 
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
      data={this.state.data1}
          renderItem={({item,separators})  =>
        <TouchableOpacity onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight} onPress = { this.clickedItemText.bind(this, item)}>
      <View elevation={5} style={{marginLeft:30,marginRight:30, shadowOffset: { width: 10, height: 10 },
  borderBottomWidth: 0,
  borderRadius:25}}>
   
  <LinearGradient
   colors={['#4262B5', '#3A549B','#314279','#2C3765','#2A335E']} style={{ borderRadius:25,paddingTop:10,paddingBottom:10}}>
   
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <View style={{alignItems:'center'}} >
          <Image  style={{width: 50, height: 50,resizeMode:'contain'}}  source={require("./assets/redicon.png")} ></Image>  
          </View>
          <View style={{flexDirection:'column'}}>
          <View style={{flex:1, flexDirection: 'row',justifyContent:'space-between'}}>            
         <Text  style={{marginRight:20,marginTop:10,color:'#fff',fontFamily:"Exo2-Bold"}}>Sent to Dan23</Text>       
     <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
     <Image style={{width: 25,marginTop:10, height: 25}}   source={require("./assets/plusblue.png")} ></Image>    
     <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#fff':'#fff',fontFamily:'Exo2-Regular'}}>$ 9060</Text> 
     </View>
        
     </View>  
     <View style={{flex:1, flexDirection:'row',justifyContent:'space-between' ,paddingBottom:15}}>
 
            
         <Text  style={{marginRight:20,marginTop:10,color:'#5496FF',fontFamily:'Exo2-Regular'}}>Feb 23 2019  . 11.05</Text>       
     
      <Text  style={{marginRight:20,marginTop:10,color:'#5496FF',fontFamily:'Exo2-Regular'}}>5.4587ETH</Text>    
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