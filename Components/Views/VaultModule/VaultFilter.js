import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,Picker,NativeModules,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,Dimensions} from 'react-native';
import { Alert } from 'react-native';
const { UIManager } = NativeModules;
import Carousel from 'react-native-snap-carousel';
import Logo from '../../logo'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import LinearGradient from 'react-native-linear-gradient';
import ImageCarousel from 'react-native-image-carousel';
const { width } = Dimensions.get('window');
import { FlatList, ScrollView } from 'react-native-gesture-handler';
export default class VaultFilter extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    
    this.state = {
      dataSource:[],
      data1:[require('../assets/biconback.png'),require('../assets/etherem.png'),require('../assets/biconback.png'),require('../assets/etherem.png')],
      ImageData:[{'image':require('../assets/biconback.png')},
      {'image':require('../assets/biconback.png')},
      {'image':require('../assets/biconback.png')},
      {'image':require('../assets/biconback.png')},
      {'image':require('../assets/biconback.png')}],
      ImagArray:['image1'],
      Amount:'USDoller',
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
      carouselItems: [
        {
         
           ShadowImages:require('../assets/etheremicon.png'),
            colo1:'#5582ff',color2:'#5e5cff',color3:'#6730ff',
            title:"Etherium"
        },
        {
          ShadowImages:require('../assets/miconback.png'),
          colo1:'#fd7170',color2:'#fa5a76',color3:'#f53d7b',
            title:"Monero"
        },
        {
          ShadowImages:require('../assets/biconback.png'),
          colo1:'#f8bc73',color2:'#f0824d',color3:'#ec643a',
            title:"Bitcoin"
        },
        {
          colo1:'#faaf15',color2:'#fbcc0a',color3:'#fddf01',
          ShadowImages:require('../assets/ziconback.png'),
            title:"ZiCoin"
        },
        {
          colo1:'#8be6f8',color2:'#59a7f2',color3:'#3652bd',
          ShadowImages:require('../assets/shareicon.png'),
            title:"Share"
        },
       
    ]}
  
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
    this.props.navigation.navigate('AddVault')
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
      <LinearGradient colors= {['#354E91','#314682','#283563','#222B50','#21284A']}>
      <ScrollView>
      <View style={{justifyContent:'space-between',flexDirection:'row'}}>  
<LinearGradient colors={['transparent','transparent','transparent']} style={{justifyContent:'center',height:this.state.h,width:this.state.w, alignItems:'flex-end', marginTop:10,borderTopRightRadius:25,borderBottomRightRadius:25,borderColor:'#c978f8',borderRightWidth:1,borderLeftWidth:0,borderTopWidth:1,borderBottomWidth:1,position:'absolute'}}>
<TouchableOpacity onPress={this._onPress}>
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginRight:10,width: 30, height: 30}}   source={require("../assets/iicon.png")} ></Image>     
     
          </View>
          </TouchableOpacity>
</LinearGradient>    
         
            
            
    
            <LinearGradient colors={['#fff','#fff','#fff']} style={{height:this.state.hr,width:this.state.wr,justifyContent:'center',alignItems:'flex-start',borderTopLeftRadius:25,borderBottomLeftRadius:25, marginTop:10,position:'absolute',right:0}}>
            <TouchableOpacity onPress={this.pressRight}>
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginLeft:10,width: 30, height: 30}}   source={require("../assets/app4-blue.png")} ></Image>     
     
          </View>
          </TouchableOpacity>
            </LinearGradient>
            
      </View>
      <View style={{flexDirection: 'row',justifyContent:'center',alignItems:"center",marginTop:15}}> 
      <Image  style={{width: 20, height: 20,resizeMode:'contain'}}  source={require("../assets/app2.png")} ></Image>   
          <View style={{flexDirection:'column'}}>
          <Text style={{marginLeft:10,fontSize:16,color:'#fff',fontFamily:'Exo2-Regular'}}>Vault</Text>       
          </View>     
          </View>
      
    <View style={{marginTop:10}}> 
    
    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginLeft:70}}>
    <View style={{width:80,height:50,borderRightWidth:1,borderRightColor:'#4d6bc1'}}>
    <Text style={{marginLeft:10,marginTop:15,fontSize:15,fontWeight:'bold',color:'#fff',fontFamily:''}}>Active</Text> 
    </View>
    <View style={{width:150,height:50}}>
    <Text style={{marginLeft:20,marginTop:15,fontSize:15,fontWeight:'bold',color:'#fff',opacity:0.5,fontFamily:''}}>Completed</Text> 
    </View>
    </View> 
   <View style={{marginTop:20}}>
   <View style={{justifyContent:'center',alignItems:'center'}}>
   <Carousel
                    data={this.state.carouselItems}
                    sliderWidth={width}
                    itemWidth={250}
                    renderItem={this._renderItem}
                />
    </View>
   </View>
    </View> 
    <View style={styles.containers}>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                 <Text style={{marginLeft:10,marginTop:15,fontSize:20,fontWeight:'bold',color:'#ABB3D0',fontFamily:'Exo2-SemiBold'}}>Balance</Text> 
                 </View>
               
               <View style={{ marginTop:10,justifyContent:'center',alignItems:'center'}}>
                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <View>
                </View>
                <View>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:30,fontSize:36,color:'#F5F6F9',fontFamily:'Exo2-SemiBold'}}>4.80258789</Text>
                <View style={{marginTop:-10,marginLeft:5}}>
                
                </View>
                </View>
                                        
                </View>
                 </View>
                 <View style={{flexDirection:'row',justifyContent:'space-around',width:'100%',marginTop:20}}>
                 <View style={{width:40,height:15,backgroundColor:'#314985',justifyContent:'center',alignItems:'center',marginTop:-10,marginRight:30}}>
                <Text style={{fontSize:12,color:'#5496FF',fontFamily:'Exo2-Regular'}}>All</Text>
                
                </View>
				
				
                <Text style={{fontSize:15,color:'#5496FF',fontFamily:'Exo2-Regular'}}>880.889</Text>
                  
               
                
        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',marginLeft:-60}}>
        <Text style={{color:'#ABB3D0',opacity:1,fontSize:12,fontFamily:'Exo2-Regular'}}>{this.state.Amount}</Text>
        <Image  style={{width: 10, height: 10,marginLeft:10,tintColor:'#ABB3D0'}}  source={require("../assets/down_arrow.png")} ></Image> 
        </View>
        
  <Picker style={{ position:'absolute', top: 0, width: 1000, height: 1000 }}
   selectedValue={this.state.Amount}
  onValueChange={(itemValue, itemIndex) => this.selectedPrice(itemValue,itemIndex)}>
  
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
<View style={{height:'100%'}}>
<FlatList  style={{marginTop:20}}
      ItemSeparatorComponent={this.space}
      data={this.state.data1}
          renderItem={({item,separators})  =>
        <TouchableOpacity onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight} onPress = { this.clickedItemText.bind(this, item)}>
      <View style={{marginLeft:30,marginRight:30, shadowOffset: { width: 10, height: 10 },

  borderBottomWidth: 0,
  shadowColor: '#394d88',
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 24,
  borderRadius:25}}>
  <LinearGradient
     colors={['#4262B5', '#3A549B','#314279','#2C3765','#2A335E']} style={{ borderRadius:25,paddingTop:10,paddingBottom:10}}>
        <View style={{alignItems:'center',flexDirection:'row',padding:15}}>
        <View style={{justifyContent:'center'}}>
        <Image style={{width: 50, height: 50,resizeMode:'contain'}}   source={require("../assets/etheriumblue.png")} ></Image>
        </View>
      
      
          <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection: 'row',justifyContent:'space-between'}}>    
          <View style={{justifyContent:'space-around',alignItems:'center'}}>
          <Text  style={{ fontSize:12,fontFamily:'Exo2-Bold', color:'#ffffff',marginTop:-10}}>ETH</Text> 
          <Text  style={{fontSize:12,color:'#a9b4d4',marginTop:10}}>$435</Text> 
          </View>  
          <View>
          <View style={{flexDirection:'row',marginLeft:20}}>
          <View>
          <Text  style={{fontSize:12,color:'#ABB3D0',marginTop:-10,fontFamily:'Exo2-Regular'}}>{(item.Status!='Completed')?'Produced':"Produced"}</Text> 
          <Text  style={{fontSize:12,fontFamily:'Exo2-Regular',marginTop:10,color:'#ABB3D0'}}>Coins</Text>    
          </View>
          
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:-15}}>
     <Image style={{width: 25, height: 25,resizeMode:'contain',tintColor:'#15E9E9'}}   source={require("../assets/plusblue.png")} ></Image>   
     <View style={{marginTop:5}}>
     <Text  style={{fontSize:12,textAlign:'center',fontFamily:'Exo2-Bold',color:'#2A335E'}}>$ 9060</Text> 
     </View> 
     
     </View>  
          </View>    
         
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:20}}>
          <Text  style={{fontFamily:'Exo2-Regular',color:'#5496FF'}}>+8.5%</Text> 
          <Image style={{width: 10, height: 10,resizeMode:'contain'}}   source={require("../assets/green.png")} ></Image> 
          </View>                
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
      </View>
  
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
      _renderItem({item,index}){
        return (
            <View style={{justifyContent:'center',alignItems:'center'}}> 
             <Text style={{color:'#fff',marginBottom:10,fontFamily:'Exo2-Regular'}}>{item.title}</Text>
            <LinearGradient style={{  width: 110,
height: 110,
borderRadius: 110/2,
justifyContent:'center',alignItems:"center"}} colors= {[item.colo1,item.color2,item.color3]}>
   <Image style={{width: 60, height: 60}}   source={item.ShadowImages} ></Image> 
</LinearGradient>
                
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