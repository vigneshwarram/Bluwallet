import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,AsyncStorage,Dimensions,Text,ActivityIndicator,Easing,TouchableOpacity,LayoutAnimation,Animated} from 'react-native';
import { Alert } from 'react-native';
import BackgroundIcon from '../../Background'
import { ProfileRetrive, TwoFactorApi, ProfileUpdate } from '../Api/ProfileRegisterApi'
import LinearGradient from 'react-native-linear-gradient';

export default class Welcome  extends React.Component {

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
    this.getTwoFactors()
    //this.GetListData()
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
  ]).start(() => this.props.navigation.navigate('Home'));

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
   colors={['#ffffff','#e1e5ef','#e1e5ef']} style={{height:'100%'}}>   
      <View style={{justifyContent:'center',alignItems:'center',position:'absolute',bottom:100,}}>
        <Image
                style={{width: Dimensions.get('window').width,
    resizeMode: "contain",
    height: 250,opacity:0.1}}
                source={require('../assets/dlogo.png')}
            />            
        </View>
    <View style={{justifyContent:'space-between',flex:0.1}}>
    <TouchableOpacity onPress={this.pressRight} style={{position:'absolute',right:0}}>
      <Animated.View style={{backgroundColor:'#fd6d71',height:this.state.hr,width:this.AnimatedWidth,justifyContent:'center', borderTopStartRadius:25,borderBottomStartRadius:25, marginTop:10,}}>
           
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginLeft:10,width: 20, height: 20}}   source={require("../assets/cancel.png")} ></Image>     
     
          </View>
         
            </Animated.View>
            </TouchableOpacity>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:25}}>
        <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:20,fontFamily:'Exo2-Bold'}}>Welcome!</Text>
    </View>
    </View>
    
    <View style={{flex:0.3}}> 
   
             
         
             <View  style={{justifyContent:'center',alignItems:'center'
        }}>
              <Image  style={{  width:150,
    resizeMode: "contain",
    height: 150,}}  source={require("../assets/threelogo.png")} ></Image> 
                 
            
        </View>
      
      
            
</View>  
<View style={{flex:0.4}}>
<View  style={{justifyContent:'center',alignItems:'center',paddingVertical:30
        }}>
             <Text style={{color:'#4e649f',opacity:1,fontSize:12,fontFamily:'Exo2-SemiBold',textAlign:'center'}}>Verify your Identity in order to use </Text>
             <Text style={{color:'#4e649f',opacity:1,fontSize:12,fontFamily:'Exo2-SemiBold',textAlign:'center'}}> all the functions of the wallet</Text>
        </View>
</View>

        <View style={{flex:0.2}}>

        <TouchableOpacity onPress={this.BeginAction}>
    <View>
    <LinearGradient colors={['#41d99c','#34ddb2','#21e4d3']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}  style={{padding:15,justifyContent:'center',alignItems:'center'}}>

<Text style={{color:'#fff',fontSize:20,fontFamily:'Poppins-Medium'}}>Begin Now</Text>

</LinearGradient>
    </View>   
</TouchableOpacity>




<View>
<LinearGradient colors={['#354e91','#354e91','#354e91']}  style={{padding:15,alignItems:'center'}}>
<TouchableOpacity>
<Text style={{color:'#fff',opacity:1,fontSize:11,marginTop:2,fontFamily:'Exo2-Regular'}}>when you create a wallet,you accept</Text>
<View style={{flexDirection:'row',marginTop:2,}}>
<Text style={{color:'#5496ff',opacity:1,fontSize:11,marginTop:5,fontFamily:'Exo2-SemiBold'}}>Terms of Services</Text>
<Text style={{color:'#fff',opacity:1,fontSize:11,marginTop:5,marginLeft:8,fontFamily:'Exo2-Regular'}}>&</Text>
<Text style={{color:'#5496ff',opacity:1,fontSize:11,marginTop:5,marginLeft:8,fontFamily:'Exo2-SemiBold'}}>Politics and privacy</Text>
</View>

</TouchableOpacity>
</LinearGradient>
</View>
        </View>
        
 </LinearGradient> 

     </View>
      
    
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
      BeginAction=()=>
      {
        this.setEnable()
      }
      getTwoFactors = async () => {
        let userid = await AsyncStorage.getItem('UserId')
        let params =
        {
          "userId": userid,
        }
        TwoFactorApi(params, this.TwoFactorRespose)
      }
      TwoFactorRespose = (data) => {
        if (data.status === 'success') {
          console.log('data', data)
          this.setState({ twofactor: data.twoFactorStatus })
    
        }
      }
      setEnable = async () => {
        let params =
        {
          "userId": await AsyncStorage.getItem('UserId'),
          "twoFactorAuthenticationStatus": this.state.twofactor,
          "otpSecureKey": ""
        }
        this.props.navigation.navigate('PicodeEnable', { TwoFactorParams: params ,status:true})
        //TwoFactorApi(params,this.TwoFactorRespose)
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