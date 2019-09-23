import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,Picker,NativeModules,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,Animated,Easing} from 'react-native';
import { Alert } from 'react-native';
import BackgroundIcon from '../../Background'

import LinearGradient from 'react-native-linear-gradient';

export default class ChooseCountry  extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    this.AnimatedWidth= new Animated.Value(50),
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
      app5color:'#fff'
    };
  
  }
  
  componentDidMount()
  {
    //this.GetListData()
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
  Animated.sequence([
    Animated.timing(this.AnimatedWidth, {
      toValue: 100,
      duration: 250,
      easing: Easing.inOut(Easing.ease),
      delay: 10,
    }),
    Animated.timing(this.AnimatedWidth, {
      toValue: 50,
      duration: 250,
      easing: Easing.inOut(Easing.ease),
      delay: 10,
    })
  ]).start(() => this.props.navigation.goBack(null));

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
       
      

       <LinearGradient
  colors= {['#FFFFFF','#DFE1ED','#CCCFE2']} style={{height:'100%'}}>   
   <View style={{flex:0.7}}>
   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    {/* <View style={{justifyContent:'center',alignItems:'center'}}>
    <Image  style={{width: 6, height: 11,marginLeft:20,marginTop:15,resizeMode:'contain'}}  source={require("../assets/left-arrow.png")} ></Image> 
    </View> */}
    <TouchableOpacity onPress={this.pressRight} style={{position:'absolute',right:0}}>
      <Animated.View style={{backgroundColor:'#fd6d71',height:this.state.hr,width:this.AnimatedWidth,justifyContent:'center', borderTopStartRadius:25,borderBottomStartRadius:25, marginTop:10,}}>
           
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginLeft:10,width: 20, height: 20}}   source={require("../assets/cancel.png")} ></Image>     
     
          </View>
         
            </Animated.View>
            </TouchableOpacity>
    </View>
    <View  style={{justifyContent:'center',alignItems:'center',marginTop:20
        }}>
              <Image  style={{width: 150, height: 150,resizeMode:'contain'}}  source={require("../assets/threelogo.png")} ></Image> 
                 
            
        </View>
        <View  style={{justifyContent:'center',alignItems:'center'
        }}>
             <Text style={{color:'#4e649f',opacity:1,fontSize:20,marginTop:10,fontFamily:'Exo2-Bold'}}>Lets Verified!</Text>
             <Text style={{color:'#4e649f',opacity:1,fontSize:12,marginTop:10,fontFamily:'Exo2-SemiBold'}}>Please choose the country where your document was</Text>
             <Text style={{color:'#4e649f',opacity:1,fontSize:12,marginTop:2,fontFamily:'Exo2-SemiBold'}}>Issued</Text>
         
             
        </View>  
        <View>  

<View style={{paddingVertical:50}}>    
<View style={{ borderWidth: 1,backgroundColor:'#fff',padding:10,marginLeft:30,marginRight:30,borderColor:'#919fc3',borderRadius:6, }}>
<View style={{justifyContent:'space-between',flexDirection:'row'}}>
<Text style={{color:'#4e649f',opacity:1,fontSize:12,fontFamily:'Exo2-Regular'}}>{this.state.Country}</Text>
<Image  style={{width: 10, height: 10}}  source={require("../assets/down_arrow.png")} ></Image> 
</View>

<Picker style={{ position:'absolute', top: 0, width: 1000, height: 3000 }}
selectedValue={this.state.Country}
onValueChange={(itemValue, itemIndex) => { setTimeout(() => {this.onValueChange(itemValue, itemIndex)}, 10)}}>
<Picker.Item label="USA" value="USA" />
<Picker.Item label="UN" value="UN" />
</Picker>
</View>
</View>
</View>  
   </View>
    
    
        
        
 </LinearGradient> 
 </View>    
    );
      }
  
      onValueChange=(itemValue,index)=>
      {
        console.log('its coming')
          this.props.navigation.navigate('VerificationCards')
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