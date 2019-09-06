import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,Picker,Dimensions,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,AsyncStorage,Animated,Easing } from 'react-native';
import { Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import BackgroundIcon from '../../Background'
import LinearGradient from 'react-native-linear-gradient';
import {PassportUpload,IdUpload,ResidentUpload,LicenseUpload} from '../Api/KYCApi'
//import ImagePicker from 'react-native-customized-image-picker';
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class SelfieWithDocument  extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    this.RotateValueHolder = new Animated.Value(0);
    this.opacity = new Animated.Value(0)
    this.state = {
      dataSource:[],
      cityItems:["US Doller,Indian,Eutherium"],
      Coin: 'Us Doller',
      visibles:false,
      animate:false,
      KycDocument1:[],
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
      app5color:'#fff',
      DocumentBack:this.props.navigation.state.params.DocumentBack,
      selfie:this.props.navigation.state.params.selfieImage,
      front:this.props.navigation.state.params.DocumentFront,
    };
  
  }
  
  componentDidMount()
  {
    //this.GetListData()
  }

dataset=(data)=>{
  this.setState({
    dataSource:data
  })
  this.hide()
}
Load=()=>{
  this.StartImageRotateFunction();
  this.setState({animate:true})
}
hide=()=>{
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
  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
    Animated.timing(this.opacity, {
      duration: 500, 
      toValue: 1,
    }).start()
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 2500,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => this.StartImageRotateFunction());
  }
  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
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
    <Animated.Image 
                style={{width:200,height:200, resizeMode: 'contain' , transform: [{ rotate: RotateData }],}}
                source={require('../assets/loader.gif')}
            />     
             <Animated.Text style={{color:'#4e649f',opacity:this.opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  }),fontSize:36,marginTop:10,fontFamily:'Exo2-Bold'}}>Uploading...</Animated.Text>
  </View>
  }
    return (  
        
      <View style={styles.Maincontainers}>  
       
       <Dialog 
    visible={this.state.visibles}>
    <DialogContent>
     <View style={{width:300,height:110,alignItems:'center'}}>
         <View style={{alignItems:'center',paddingTop:10}}>
         <Image style={{width: 50, height: 50,resizeMode:'contain'}}   source={require("../assets/successtik.png")} ></Image>     
         </View>
         <View style={{paddingTop:10,paddingBottom:10}}>
         <Text style={{fontSize:15,color:'#454976',fontFamily:'Exo2-Regular',textAlign:'center'}}>KYC Documents Uploaded Successfully</Text>           
         </View>
     </View>
    </DialogContent>
  </Dialog>

       <LinearGradient
  colors= {['#FFFFFF','#DFE1ED','#CCCFE2']} style={{height:'100%'}}>   
   
   <View style={{flex:0.4}}>
   <View  style={{justifyContent:'center',alignItems:'center'
        }}>
              <Image  style={{width: 200, height: 200,resizeMode:'contain'}}  source={require("../assets/threelogo.png")} ></Image> 
                 
            
        </View>
        <View  style={{justifyContent:'center',alignItems:'center',marginTop:10
        }}>
             <Text style={{color:'#4e649f',opacity:1,fontSize:20,marginTop:10,fontFamily:'Exo2-Bold'}}>Take a Portrait Photo</Text>
             <Text style={{color:'#4e649f',opacity:1,fontSize:12,marginTop:10,fontFamily:'Exo2-SemiBold'}}>Make sure that your face  and Document it's clearly visible</Text>
           
         
             
        </View> 
   </View> 
   
             <View style={{flex:0.6}}>
         
             
      
        
        <View style={{justifyContent:'center',alignItems:'center',marginTop:20,marginBottom:10}}>  

        <Image
                style={{width: Dimensions.get('window').width,
    resizeMode: "contain",
    height: 300}}
    source={require("../assets/portraitphoto.png")}
            />  
        </View>   
        
        <View style={{bottom:0,width:'100%',marginTop:10
 }}>
        
        
        <TouchableOpacity onPress={this.BeginAction}> 
<View>
<LinearGradient colors={['#61bff2','#4f92e9','#4476d7']}  start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{padding:15,justifyContent:'center',alignItems:'center'}}>

<Text style={{color:'#FFF',fontSize:20,fontFamily:'Poppins-Medium'}}>Continue</Text>

</LinearGradient>
</View>
</TouchableOpacity> 

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
        /*
        ImagePicker.openCamera({
          width: 300,
          height: 400,
        
        }).then(image => {
          console.log(image);
          this.GetImageFile(image)
          
        });    
        */
       ImagePicker.launchCamera(options, (response) => {
        this.GetImageFile(response)
        // Same code as in above section!
      });  
      }
     
    
      selectedCountry=(item,index)=>{
          this.setState({
              Country:item
          })
          this.props.navigation.navigate('VerificationCards')
      }
      GetImageFile=async(response)=>
      {
        ImageResizer.createResizedImage(response.uri, 10, 10, 'JPEG', 80).then((response) => 
        {
        this.UploadCall(response)
          console.log(response)
        }).catch((err) => {
          console.log(err)
        });
         
      }
      UploadCall=async(response)=>
      {
        let userid= await AsyncStorage.getItem('UserId')  

        let photoUpload=this.props.navigation.state.params.photoUpload
          let Params=
          {
              Selfie:this.state.selfie,
              documentback:this.state.DocumentBack,
              documentfront:this.state.front,
              selfiewithdocument:response
          }
        
         
        //  console.log('path',Params.documentback[0].path)
          if(photoUpload==='Passport')
          {
            this.Load()
            PassportUpload(Params,this.Responsedata,parseInt(userid, 10))
          }
          else if(photoUpload==='idcard')
          {
            this.Load()
            IdUpload(Params,this.Responsedata,parseInt(userid, 10))
          }
          else if(photoUpload==='residence')
          {
            this.Load()
            ResidentUpload(Params,this.Responsedata,parseInt(userid, 10))
          }
          else if(photoUpload==='license')
          {
            this.Load()
            LicenseUpload(Params,this.Responsedata,parseInt(userid, 10))
          }
        //this.props.navigation.navigate('DocumentFront',{SelfieImageFile:response})
      }
      timeout=()=>
      {
        this.setState({animate:false})
      }
      timeoutIn=async()=>
      {
               this.setState({visibles:false})
               await AsyncStorage.setItem('kycstatus','1'); 
               await AsyncStorage.setItem('profilestatus','1'); 
               this.props.navigation.push('Home',{profilestatus:1,kycstatus:1})
      }
      Responsedata=(data)=>
      {
        setTimeout(  this.timeout, 10000);
    
       
          if(data.status==='success')
          {
            this.setState({visibles:true})
            setTimeout(this.timeoutIn, 10000);
            
          }
          else
          {
            Alert.alert(data.status,data.message)
          }
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