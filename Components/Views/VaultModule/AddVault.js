import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,Picker,NativeModules,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,Dimensions} from 'react-native';
import { Alert } from 'react-native';
const { UIManager } = NativeModules;
import Carousel from 'react-native-snap-carousel';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import LinearGradient from 'react-native-linear-gradient';
import ImageCarousel from 'react-native-image-carousel';
const { width } = Dimensions.get('window');
import { FlatList, ScrollView } from 'react-native-gesture-handler';
export default class AddVault extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    
    this.state = {
      dataSource:[],
      selectedimage:'',
      selectedTitle:'Etherium',
      ItemColor1:'#5582ff',
      ItemColor2:'#5e5cff',
      ItemColor3:'#6730ff',
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
         
           ShadowImages:require('../assets/diablue.png'),
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
      <LinearGradient colors= {['#FFFFFF','#DFE1ED','#CCCFE2']} style={{height:'100%'}}>
      <View style={{justifyContent:'center',alignItems:'center',position:'absolute',bottom:110,marginLeft:50}}>
        <Image
                style={{width: Dimensions.get('window').width,opacity:0.1,
    resizeMode: "contain",opacity:0.9,
    height: 300,}}
                source={require('../assets/bcb.png')}
            />            
        </View>
      <ScrollView>
      <View style={{flex:1}}>
      <View style={{flex:0.3}}>
      <View style={{flexDirection: 'row',marginTop:15,justifyContent:'space-between'}}> 
      <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Image  style={{width: 6, height: 11,marginLeft:20,resizeMode:'contain',marginTop:10}}  source={require("../assets/left-arrow.png")} ></Image> 
    </View>
    </TouchableOpacity>
    <View>
    <View style={{flexDirection:'row',marginTop:5}}>
    <Image  style={{width: 20, height: 20,resizeMode:'contain',tintColor:'#354E91'}}  source={require("../assets/app2.png")} ></Image>   
          <View style={{flexDirection:'column'}}>
          <Text style={{marginLeft:10,fontSize:16,color:'#354E91',fontFamily:'Exo2-Regular'}}>New Vault</Text>       
          </View> 
    </View>
    
    </View>
      
          <View></View>    
          </View>
             
    <View style={{marginTop:10}}> 
    
    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
    <Text style={{marginLeft:10,marginTop:15,fontSize:17,color:'#5496FF',fontFamily:'Exo2-Regular'}}>Select your coin</Text> 
    </View> 
   <View style={{marginTop:20}}>
   <View style={{justifyContent:'center',alignItems:'center'}}>
   <Carousel
                    data={this.state.carouselItems}
                    sliderWidth={width}
                    itemWidth={250}
                    renderItem={this._renderItem}
                    onSnapToItem={this.snapItem}
                />
    </View>
   </View>
    </View> 
      </View>
      <View style={{flex:0.4,backgroundColor:'#ffffff',marginTop:20}}>
      <View style={{borderBottomWidth:0.8,borderBottomColor:'#D1C9FF'}}>
<View style={{flexDirection:'row',justifyContent:'space-evenly',padding:20}}>
<Text style={{marginLeft:10,fontSize:11,color:'#5496FF',fontFamily:'Exo2-Regular'}}>Available Balance</Text>
<Text style={{marginLeft:10,fontSize:12,color:'#354E91',fontFamily:'Exo2-Regular'}}>0.0000000BTC</Text>
</View>


      </View>
      <View>
<View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:'#D1C9FF'}}>
<View style={{width:'50%',height:50,justifyContent:'center',borderRightWidth:1,borderRightColor:'#D1C9FF'}}>
<View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
<Text style={{marginLeft:10,fontSize:11,color:'#5496FF',fontFamily:'Exo2-Regular'}}>BTC</Text>
<Text style={{marginLeft:10,fontSize:11,color:'#ABB3D0',fontFamily:'Exo2-Regular'}}>0.00</Text>
</View>
</View>
<View style={{width:'50%',height:50,justifyContent:'center'}}>
<View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
<Text style={{marginLeft:10,fontSize:11,color:'#5496FF',fontFamily:'Exo2-Regular'}}>USD</Text>
<Text style={{marginLeft:10,fontSize:11,color:'#ABB3D0',fontFamily:'Exo2-Regular'}}>0.00</Text>
</View>

</View>

</View>


      </View>
      <View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<View style={{width:'50%',height:50,justifyContent:'center',borderRightWidth:1,borderRightColor:'#D1C9FF'}}>
<View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
<Text style={{marginLeft:10,fontSize:11,color:'#5496FF',fontFamily:'Exo2-Regular'}}>Fees</Text>
<Text style={{marginLeft:10,fontSize:11,color:'#ABB3D0',fontFamily:'Exo2-Regular'}}>0.00</Text>
</View>
</View>
<View style={{width:'50%',height:50,justifyContent:'center'}}>
<View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
<Text style={{marginLeft:10,fontSize:11,color:'#5496FF',fontFamily:'Exo2-Regular'}}>USD</Text>
<Text style={{marginLeft:10,fontSize:11,color:'#ABB3D0',fontFamily:'Exo2-Regular'}}>0.00</Text>
</View>

</View>

</View>


      </View>

      
</View>
     <View style={{flex:0.3}}>
     <View>
<View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
      <Text style={{marginLeft:10,fontSize:16,color:'#354E91',fontFamily:'Exo2-Regular'}}>Duration</Text>
      </View>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
      <Text style={{marginLeft:10,fontSize:18,color:'#5496FF',fontFamily:'Exo2-SemiBold'}}>3 months-3% </Text>
      </View>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
      <Text style={{marginLeft:10,fontSize:18,color:'#354E91',fontFamily:'Exo2-Regular'}}>Total Earnings</Text>
      </View>
      </View>
      <View style={{borderBottomWidth:0.8,borderBottomColor:'#D1C9FF',backgroundColor:'#ffffff',marginTop:10,}}>
      <View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<View style={{width:'50%',height:50,justifyContent:'center',borderRightWidth:1,borderRightColor:'#D1C9FF'}}>
<View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
<Text style={{marginLeft:10,fontSize:11,color:'#5496FF',fontFamily:'Exo2-Regular'}}>BTC</Text>
<Text style={{marginLeft:10,fontSize:11,color:'#ABB3D0',fontFamily:'Exo2-Regular'}}>0.00</Text>
</View>
</View>
<View style={{width:'50%',height:50,justifyContent:'center'}}>
<View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
<Text style={{marginLeft:10,fontSize:11,color:'#5496FF',fontFamily:'Exo2-Regular'}}>USD</Text>
<Text style={{marginLeft:10,fontSize:11,color:'#ABB3D0',fontFamily:'Exo2-Regular'}}>0.00</Text>
</View>

</View>

</View>


      </View>


      </View>
     </View>
     
     
   
      </View>
     
    </ScrollView>
    <View style={{marginBottom:0, width:'100%',marginTop:10}}>
        <TouchableOpacity onPress={this.BeginAction}>
        <View>
        <LinearGradient colors={['#41d99c','#34ddb2','#21e4d3']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{padding:15,justifyContent:'center',alignItems:'center',}}>
<Text style={{color:'#fff',fontSize:20,fontFamily:'Poppins-Medium'}}>Next</Text>
</LinearGradient>
        </View>
        </TouchableOpacity>
       
        <View>
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
       
</LinearGradient>
      </View>
  
    );
      }
      snapItem=(index)=>{
        switch (index){
          case 0:
              this.setState({selectedimage:require('../assets/diablue.png')})
              break;
          case 1:
              this.setState({selectedimage:require('../assets/miconback.png')})
              break;
          case 2:
            this.setState({selectedimage:require('../assets/biconback.png')})
            break;    
          case 3:
                this.setState({selectedimage:require('../assets/ziconback.png')})
                break;    
           case 4:
                    this.setState({selectedimage:require('../assets/shareicon.png')})
                    break;    
        }
       
      }
      
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
      BeginAction=()=>{
    
        this.props.navigation.navigate('ConfirmVault',{ImageName:this.state.selectedimage,ImageTitle:this.state.selectedTitle,itemColor1:this.state.ItemColor1,itemColor2:this.state.ItemColor2,itemColor3:this.state.ItemColor3 })
      }
      _renderItem=({item,index})=>{

        this.setState({selectedimage:item.ShadowImages,selectedTitle:item.title,ItemColor1:item.colo1,itemColor2:item.color2,itemColor3:item.color3})
        return (
            <View style={{justifyContent:'center',alignItems:'center'}}> 
             <Text style={{color:'#5496FF',marginBottom:10,fontFamily:'Exo2-Regular'}}>{item.title}</Text>
            <LinearGradient style={{  width: 110,
height: 110,
borderRadius: 110/2,
justifyContent:'center',alignItems:"center"}} colors= {[item.colo1,item.color2,item.color3]}>
   <Image style={{width: 60, height: 60,resizeMode:'contain'}}   source={item.ShadowImages} ></Image> 
</LinearGradient>
                
            </View>
        )
        }
}



const styles = StyleSheet.create({
 
  Maincontainers: {
    flex: 1,
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