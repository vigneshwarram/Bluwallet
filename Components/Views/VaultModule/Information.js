import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,AsyncStorage ,NativeModules,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,Dimensions,TextInput} from 'react-native';
import { Alert } from 'react-native';
const { UIManager } = NativeModules;
import Carousel from 'react-native-snap-carousel';
import Spinner from 'react-native-loading-spinner-overlay';
import {StackActions} from 'react-navigation'
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import { AreaChart, Grid } from 'react-native-svg-charts'
import {ExchangeList} from '../Api/ExchangeRequest'
import * as shape from 'd3-shape'
import LinearGradient from 'react-native-linear-gradient';
import { VaultSystemApi, CryptoInvestment, CryptoTypeInvestment } from '../Api/VaultSystemApi'
import { ResponseSuccessStatus, InvalidResponse, DataUndefined, InvalidToken, TokenExpired } from '../Utils.js/Constant'
import ImageCarousel from 'react-native-image-carousel';
const { width } = Dimensions.get('window');
import {AddVaults} from '../Api/AddVault'
import {CONVERT_USD} from '../Api/RequestUrl'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
let type='ETH'
let roleid;
let timeperiod=3
let Value='Lorem ipsum dolor sit amet,consectetuer adipisc-ing elit, sed diam nonummy nibh euismod tinci-dunt ut laoreet dolore magna aliquam erat volut-pat. Ut vvisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisi ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel ilium dolore eu feugiat nulla facilisis at vero eros at accumsan at iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore to feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipisc-ing elit, sed diam nonummy nibh euismod tinci-dunt ut laoreet dolore magna aliquam erat volut-pat. Ut vvisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipisc-ing alit, sed diam nonummy nibh euismod tinci-dunt ut laoreet dolore magna aliquam erat volut-pat. Ut vvisi enim ad minim'

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
      Availableamount:'',
      totalamount:'0.000',
      cointype:'',
      Amount:'USDoller',
      cityItems:["US Doller,Indian,Eutherium"],
      Coin: 'Us Doller',
      animate:false,
      w: 50,
      h: 45,
      fees:'0.000',
      usdforgasfee:'0.000',
      spinner:false,
      wr:50,
      usd:'0.000',
      hr:45,
      Ahr:80,
      Awr:80,
      usdforEther:'',
      clickr:false,
      clickopen:false,
      itemMonths:[{value:'3 Moths-3%',id:1},{value:'6 Moths-6%',id:2},{value:'12 Moths-12%',id:3}],
      click:false,
      slide:false,
      visibles: false,
      hidden: false,
      carouselItems: [
        {

          ShadowImages: require('../assets/etheriumlogo.png'),
        
          title: "Ethereum"
        },
        {
          ShadowImages: require('../assets/bitcoinlogo.png'),
          
          title: "Bitcoin"
        },
        {
          ShadowImages: require('../assets/bitwingslogo.png'),
        
          title: "Bitwings"
        },
      ]}
 
  
  }
  
  componentDidMount()
  {
     this.GetData()
  }
  GetData=async()=>
  {
    roleid = await AsyncStorage.getItem('roleId')
    this.Load()
    VaultSystemApi(type, this.BalanceResponse)
  }
  BalanceResponse = (data) => {
    this.hide()
    console.log('data', data)
    this.hide()
    if (data != 'undefined') {
      if (data.status === ResponseSuccessStatus) {
        if (data.CalculatingAmountDTO.cryptoType === 'ETH') {
          let totalamount='';
          if(this.state.usdforEther!='')
          {
          totalamount=  parseFloat(this.state.usdforEther)+parseFloat(this.state.fees)
          }
          else
          {
            totalamount='0.000'
          }
      
          this.setState({
            Availableamount:data.CalculatingAmountDTO.etherAmount,
            Usd: data.CalculatingAmountDTO.usdforEther,
            cointype:data.CalculatingAmountDTO.cryptoType,
            totalamount:totalamount,
          })


        }

        else if(data.CalculatingAmountDTO.cryptoType === 'BTC') {
          this.setState({
            Availableamount:data.CalculatingAmountDTO.btcAmount,
            Usd: data.CalculatingAmountDTO.usd,
            cointype:data.CalculatingAmountDTO.cryptoType
          })

        }
        else  {
          this.setState({
            Availableamount:data.CalculatingAmountDTO.bwnAmount,
            Usd: data.CalculatingAmountDTO.usdForBwn,
            cointype:data.CalculatingAmountDTO.cryptoType
          })

        }

      }
      else if (data.error === 'invalid_token') {
        Alert.alert(
          'Error',
          'Token Expired',
          [
            { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
          ],

        );
      }
      else {
        Alert.alert(InvalidResponse)
      }
    }
  }
dataset=(data)=>{
  this.setState({
    dataSource:data
  })
  this.hide()
}
Load() {
  this.setState({ spinner: true })
}
hide() {
  this.setState({ spinner: false })
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
      <LinearGradient colors= {['#FFFFFF','#DFE1ED','#CCCFE2']} style={{flex:1}}>
      <View style={{paddingLeft:20,paddingRight:20}}>
 <Dialog
  onTouchOutside={() => {
      this.setState({ visibles: false });
    }}
  
    visible={this.state.visibles}>
    <DialogContent>
     <View style={{width:300,height:110,alignItems:'center'}}>
         <View style={{alignItems:'center',paddingTop:10}}>
         <Image style={{width: 50, height: 50,resizeMode:'contain'}}   source={require("../assets/successtik.png")} ></Image>     
         </View>
         <View style={{paddingTop:10,paddingBottom:10}}>
         <Text style={{fontSize:15,color:'#454976',fontFamily:'Exo2-Regular',textAlign:'center'}}>Your New Vault has been successfully added</Text>           
         </View>
     </View>
    </DialogContent>
  </Dialog>
 </View>
      <Spinner
            visible={this.state.spinner}
            textContent={'Loading...'}
            overlayColor='rgba(0,0,0,0.5)'
            animation='fade'
            size='large'
            color='#f4347f'
            textStyle={styles.spinnerTextStyle}
          />
      <ScrollView contentContainerStyle={{paddingBottom:100}}>
      <View style={{flex:1}}>
      <View style={{flexDirection: 'row',marginTop:15,justifyContent:'space-between'}}> 
      <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Image  style={{width: 6, height: 11,marginLeft:20,resizeMode:'contain',marginTop:10}}  source={require("../assets/left-arrow.png")} ></Image> 
    </View>
    </TouchableOpacity>
    <View>
    <View style={{flexDirection:'row',marginTop:10}}>
    <Image  style={{width: 20, height: 20,resizeMode:'contain',tintColor:'#404F8D'}}  source={require("../assets/cirpurforgot.png")} ></Image>   
          <View style={{flexDirection:'column'}}>
          <Text style={{marginLeft:10,fontSize:16,color:'#404F8D',fontFamily:'Exo2-Regular', }}>Information</Text>       
          </View> 
    </View>
    
    </View>
      
          <View></View>    
          </View>
          <View style={{justifyContent:'center',marginTop:50}}>
          <Text style={{textAlign:'center',fontFamily:'Exo2-Regular',fontSize:12,color:'#404F8D',lineHeight: 20,}}>{Value}</Text>
          </View>
         
      </View>
     
    </ScrollView>      
</LinearGradient>
      </View>
  
    );
      }
      snapItemMonths=(index)=>
      {
        switch(index)
        {
          case 0:
              timeperiod=3;
            break;
          case 1:
              timeperiod=6;
            break;
            case 2:
                timeperiod=12;
              break;
        }
      }
      snapItem=(index)=>{
        switch (index){
          case 0:
              this.setState({usdforEther:'',fees:'0.000',usdforgasfee:'0.000',totalamount:'0.000'})
              type='ETH'
              this.GetData()
              break;
          case 1:
              this.setState({usdforEther:'',fees:'0.000',usdforgasfee:'0.000',totalamount:'0.000'})
              type='BTC'
              this.GetData()
            break;    
            case 2:
              this.setState({usdforEther:'',fees:'0.000',usdforgasfee:'0.000',totalamount:'0.000'})
              type='BWN'
              this.GetData()
            break;    
        }
       
      }
      successStatus=()=>
      {
        this.setState({visibles:true})
        setTimeout(this.nav, 1500);
      }
      nav=()=>
      {
        this.setState({visibles:false})
        this.pushNavigate('VaultFilter')
      }
      pushNavigate=(routname)=>
      {
        try
        {
          this.props.navigation.navigate('VaultFilter')
        }
        catch(error)
        {
          console.error(error)
         // Alert.alert('Alert',error)
        }
       
      }
      ChangeText = (UsdAmount) => {
        console.log('values', UsdAmount)
        if (UsdAmount.includes(',')) {
          Alert.alert('Alert', 'please enter numeric value')
        }
        else if(this.state.Availableamount<UsdAmount)
        {
          if(type=='ETH')
          {
            Alert.alert('Alert', 'Insufficient ETH Amount')
          }
         
         else if(type=='BTC')
          {
            Alert.alert('Alert', 'Insufficient BTC Amount')
          }
          else if(type=='BWN'){
            Alert.alert('Alert', 'Insufficient BWN Amount')
          }
        }
        else {
          let number = UsdAmount
          if (UsdAmount === '') {
            number = 0
            console.log('empty')
          }
    
          console.log('Changed Number', number)
          let totalamount=''
        
          this.setState({ usdforEther: number,totalamount:totalamount })
          console.log('usdforEther Number', number)
          this.usdConvert(number)
    
    
          console.log('Request data.===>', "usdConvert calling")
        }
    
    
      }
      usdConvert = async (amount) => {
        //   let type=crptoType
        console.log('Request data.===>', type, "type calling")
        let params =
        {
          usd: amount,
          cryptoType: type
    
        }
        //Get value for Network fee and Crypto amount Api
        ExchangeList(params,CONVERT_USD, this.onUsdResponse,this.error,this.NetworkIssue)
        console.log('Request data.===>', this.onUsdResponse)
    
      }
      error=(data)=>
  {
    this.hide()
    Alert.alert('Alert',data)
  }
      onUsdResponse = (data) => {
        if (data != DataUndefined) {
          if (data.status === ResponseSuccessStatus) {
            console.log('Coverted ETH Amount', data)
            if(type=='ETH')
            {
              this.setState({usdforgasfee:data.CalculatingAmountDTO.usdforgasfee,fees:data.CalculatingAmountDTO.gasfee,usd:data.CalculatingAmountDTO.usd})
            }
            else
            {
              this.setState({usdforgasfee:data.CalculatingAmountDTO.usdfoestimationfee,fees:data.CalculatingAmountDTO.fee,usd:data.CalculatingAmountDTO.usd})
            }
          
            let totalamount='';
           
            if(this.state.usdforEther!='')
            {
            
              totalamount=parseFloat(this.state.usdforEther)+parseFloat(data.CalculatingAmountDTO.gasfee)
              //let parsenum= parseFloat(totalamount).toFixed(1)
            }
            this.setState({totalamount:totalamount})
          }
          else if (data.error === 'invalid_token') {
            Alert.alert(
              'Error',
              'Token Expired',
              [
                { text: 'OK', onPress: () => this.props.navigation.navigate("Login") },
              ],
    
            );
          }
          else {
            Alert.alert(data.error, data.errormessage)
          }
    
          //Get value for Network fee and Crypto amount Apil̥
          //this.cryptoValue()
          //console.log('Request data.===>', 'cryptoValue()')
        }
      }
      
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
      BeginAction=()=>{
        if(roleid==1 && type=='BWN')
        {
Alert.alert('Alert','This operation cannot perform from Admin')
        }
        else
        {
          this.AddVault()
        }
   
       // this.props.navigation.navigate('ConfirmVault',{ImageName:this.state.selectedimage,ImageTitle:this.state.selectedTitle,itemColor1:this.state.ItemColor1,itemColor2:this.state.ItemColor2,itemColor3:this.state.ItemColor3 })
      }
      AddVault=async()=>
      {
        console.log('this.state.usdforEther===>',this.state.usdforEther)
        if(this.state.usdforEther=='' || this.state.usdforEther==0)
        {
          Alert.alert('Alert',"Amount should not be empty")
        }
        else
        {
          let params=
          {
            email:await AsyncStorage.getItem('email'),
            cryptoAmount:this.state.usdforEther,
            typeOfInvestment:type,
            investmentPeriod:timeperiod,
            ethWalletPassword:await AsyncStorage.getItem('password')
          }
          this.Load()
          AddVaults(params,this.getResponse)
        }
        
       
      }
      getResponse=(data)=>
      {
        this.hide()
        if(data.status==='success')
        {
          this.successStatus()

        }
        else
        {
          Alert.alert(data.status,data.message)
        }
      }
      _renderItem=({item,index})=>{

      //  this.setState({selectedimage:item.ShadowImages,selectedTitle:item.title,ItemColor1:item.colo1,itemColor2:item.color2,itemColor3:item.color3})
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#000', fontFamily: 'Exo2-Regular' }}>{item.title}</Text>
      
          <Image style={{ width: 150, height: 150, }} source={item.ShadowImages} ></Image>
      

      </View>
        )
        }
        _renderItemMonths=({item,index})=>{

          //this.setState({selectedimage:item.ShadowImages,selectedTitle:item.title,ItemColor1:item.colo1,itemColor2:item.color2,itemColor3:item.color3})
          return (
            <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
            <Text style={{marginLeft:10,fontSize:18,color:'#5496FF',fontFamily:'Exo2-SemiBold'}}>{item.value}</Text>
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
  },
  spinnerTextStyle:{
    color:'#fff'
  }
});