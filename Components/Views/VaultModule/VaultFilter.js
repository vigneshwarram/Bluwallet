import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image, Picker, NativeModules, Text, ActivityIndicator, TouchableOpacity, LayoutAnimation, Dimensions, Animated, Easing ,SafeAreaView} from 'react-native';
import { Alert } from 'react-native';
const { UIManager } = NativeModules;
import Carousel from 'react-native-snap-carousel';
import Logo from '../../logo'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import LinearGradient from 'react-native-linear-gradient';
import Spinner from 'react-native-loading-spinner-overlay';
import { VaultSystemApi, CryptoInvestment, CryptoTypeInvestment } from '../Api/VaultSystemApi'
import { ResponseSuccessStatus, InvalidResponse } from '../Utils.js/Constant'
import ImageCarousel from 'react-native-image-carousel';
const { width } = Dimensions.get('window');
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ExpandabelList from '../Utils.js/ExpandableList_Vault'
let type = 'ETH';
let CompletedData;
export default class VaultFilter extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {

    // console.log(Values)
    super(props);
    this.animatedvalue = new Animated.Value(0);
    this.AnimatedMarginLeft = new Animated.Value(500)
    AnimatedLeftWidth = new Animated.Value(50)
    this.AnimatedWidth = new Animated.Value(50),
      AnimatedHieght = new Animated.Value(45),
     this.AnimatedTop=new Animated.Value(20),
      this.AnimatedMarginRight = new Animated.Value(500)
    this.OpacityView = new Animated.Value(1)
    this.state = {
      dataSource: [],
      spinner: false,
      data1: [require('../assets/biconback.png'), require('../assets/etherem.png'), require('../assets/biconback.png'), require('../assets/etherem.png')],
      ImageData: [{ 'image': require('../assets/biconback.png') },
      { 'image': require('../assets/biconback.png') },
      { 'image': require('../assets/biconback.png') },
      { 'image': require('../assets/biconback.png') },
      { 'image': require('../assets/biconback.png') }],
      ImagArray: ['image1'],
      Amount: 'USDollar',
      ShowFilter: true,
      CrptoType: 'ETH',
      CompleteOpacity: 0.5,
      ActiveOpacity: 1,
      cityItems: ["UsDollar"],
      Coin: 'UsDollar',
      animate: false,
      Balance: null,
      Usd: null,
      AnimatedHieght: new Animated.Value(45),
      RightSideWidth: new Animated.Value(50),
      RightsideHeight: new Animated.Value(45),
      AnimationFlag: false,
      AllBackgroundColor: 'transparent',
      w: 50,
      h: 45,
      wr: 50,
      hr: 45,
      Ahr: 80,
      Awr: 80,
      clickr: false,
      clickopen: false,
      click: false,
      slide: false,
      visible: false,
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
      ]
    }

  }

  componentDidMount() {
    //this.Animation()
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.onFocusFunction()
    })
   
  }
  onFocusFunction = () => {
    this.GetData()
    this.ActiveClick()
  }
  componentWillUnmount () {
    this.focusListener.remove()
  }
  completedClick = () => {
    if (this.state.dataSource.length != 0) {
      //console.log(this.state.dataSource)
      let FinalResult = [];
      FinalResult = this.search(1, this.state.dataSource)
     // console.log('search Result', FinalResult)
      this.setState({ dataSource: FinalResult })
    }

  }
  ActiveClick = () => {
    if (this.state.dataSource.length != 0) {
      console.log(this.state.dataSource)
      let FinalResult = [];
      FinalResult = this.search(1, this.state.dataSource)
      console.log('search Result', FinalResult)
      this.setState({ dataSource: FinalResult })
    }
  }
  search = (key, inputArray) => {
    console.log('inputArray length', inputArray.length)
    let SearchArray = []
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].status === key) {
        SearchArray.push(inputArray[i])
      }

    }
    return SearchArray;
  }
  CompletePress = () => {
    this.setState({ ActiveOpacity: 0.5, CompleteOpacity: 1 })
    this.completedClick()
  }
  ActiviePress = () => {
    this.setState({ ActiveOpacity: 1, CompleteOpacity: 0.5 })
    this.ActiveClick()
  }
  Animation = () => {
  
    //type='All'
    Animated.sequence([
      Animated.timing(
        this.OpacityView, {
          toValue: 0,
          duration: 300,
          easing: Easing.linear,
  
        }),
        Animated.parallel([ Animated.timing(
          this.AnimatedMarginLeft, {
            toValue: 0,
            duration: 300,
            easing: Easing.linear,
    
          }),
          
        Animated.timing(
          this.AnimatedMarginRight, {
            toValue: 0,
            duration: 300,
            easing: Easing.linear,
    
          })
        ]),
     
        Animated.timing(
          this.AnimatedTop, {
            toValue: -50,
            duration: 300,
            easing: Easing.linear,
    
          }),
    ]).start(()=>this.GetAnimation())
  
  }
  GetAnimation=()=>
  {
    this.setState({ AnimationFlag: true , AllBackgroundColor: '#2B4699' })
     this.GetAllData()
  }
  DeAnimation = () => { 
  //  type='ETH'
    Animated.sequence([
    
        Animated.timing(
          this.AnimatedTop, {
            toValue: 20,
            duration: 300,
            easing: Easing.linear,
    
          }),
          Animated.parallel([   Animated.timing(
            this.AnimatedMarginLeft, {
              toValue: 500,
              duration: 300, 
              easing: Easing.linear
            }),
      
          Animated.timing(
            this.AnimatedMarginRight, {
              toValue: 500,
              duration: 300,
              easing: Easing.linear,
      
            }),
            Animated.timing(
              this.OpacityView, {
                toValue: 1,
                duration: 300,
                easing: Easing.linear,
              }),
           ]),
    
   
    ]).start(()=>this.GetDeanimation())
   
  }
  GetDeanimation=()=>
  {
    this.setState({ AnimationFlag: false,AllBackgroundColor: 'transparent' })  
    this.GetData()
  }
  GetData = () => {
    console.log('All Clicked :Get Data')
    this.Load()
    this.GetList()
    console.log(type)
    VaultSystemApi(type, this.BalanceResponse)
  }
  GetAllData = () => {
    this.GetAllList()
  }
  BalanceResponse = (data) => {
    //console.log(data)
    this.hide()
    if (data != 'undefined') {
      if (data.status === ResponseSuccessStatus) {
        if (data.CalculatingAmountDTO.cryptoType === 'ETH') {
          this.setState({ Usd: data.CalculatingAmountDTO.usdforEther, Balance: data.CalculatingAmountDTO.etherAmount })

        }
        else if( (data.CalculatingAmountDTO.cryptoType === 'BTC')) {
          this.setState({ Usd: data.CalculatingAmountDTO.usdforBtc, Balance: data.CalculatingAmountDTO.btcAmount })

        }
        else  {
          this.setState({ Usd: data.CalculatingAmountDTO.usdforBtc, Balance: data.CalculatingAmountDTO.bwnAmount })

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

    }
  }
  GetList = () => {
    this.Load()

    console.log('Changing Type', type)
    CryptoTypeInvestment(type, this.GetListData,this.error)
  }
  GetAllList = () => {
    this.Load()
    //CryptoInvestment(this.GetListData)
    
    CryptoTypeInvestment('All', this.GetListData,this.error)
  }
  error=(error)=>
  {
    Alert.alert(error.message)
  }
  GetListData = (data) => {
    this.hide()
    if (data !== 'undefined') {
      if (data.status == ResponseSuccessStatus) {
       // console.log('VaultList', data)
        let FinalResult=[]
        FinalResult=data.listofuserCryptoinvestmentdto
        const newFile =FinalResult.map((file) => {

          return {...file, expanded: false};
      });
        this.setState({ dataSource:newFile })
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

    }

  }
  Load() {
    this.setState({ spinner: true })
  }
  hide() {
    this.setState({ spinner: false })
  }
  space() {
    return (<View style={{ height: 10, width: 1, backgroundColor: 'black' }} />)
  }
  _onPress = () => {
    Animated.sequence([
      Animated.timing(AnimatedLeftWidth, {
        toValue: 130,
        duration: 250,
        easing: Easing.inOut(Easing.ease),
        delay: 50,
      }),
      Animated.timing(AnimatedLeftWidth, {
        toValue: 50,
        duration: 250,
        easing: Easing.inOut(Easing.ease),
        delay: 50,
      })]).start(()=>this.props.navigation.navigate('Information'));
  }
  pressRight = () => {

    Animated.sequence([
      Animated.timing(this.AnimatedWidth, {
        toValue: 150,
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
    ]).start(() => this.props.navigation.navigate('AddVault'));




  }
  SlideMenu = () => {
    if (!this.state.slide) {
      LayoutAnimation.spring();
      if (this.state.Awr > 80) {
        this.setState({ Awr: 80 })
        this.setState({ slide: false })
      }
      else {
        this.setState({ Awr: this.state.Awr + 250 })
        this.setState({ slide: true })
      }

    }
    else {
      LayoutAnimation.spring();
      this.setState({ Awr: 80 })
      this.setState({ slide: false })
    }
  }
  HideMenu = () => {
    LayoutAnimation.spring();
    this.setState({ Awr: 80 })
  }
  render() {

    const { navigate } = this.props.navigation;
    const data = [100, 500, 1000, 500, 400, 600, 800, 400, 300, 500]
    const Line = ({ line }) => (
      <Path
        key={'line'}
        d={line}
        stroke={'#5099f0'}
        fill={'none'}
      />
    )
    if (this.state.animate) {
      return <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator
          color='#bc2b78'
          size="large"
          style={styles.activityIndicator} />
      </View>
    }
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'#354E91'}}>
      <View style={styles.Maincontainers}>
        <LinearGradient colors={['#354E91', '#314682', '#283563', '#222B50', '#21284A']} style={{ height: '100%' }}>
          <Spinner
            visible={this.state.spinner}
            textContent={'Loading...'}
            overlayColor='rgba(0,0,0,0.5)'
            animation='fade'
            size='large'
            color='#f4347f'
            textStyle={styles.spinnerTextStyle}
          />
          <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
            <View style={{ flex: 1 }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
              <TouchableOpacity onPress={this._onPress} style={{position: 'absolute', left: 0}}>
                <Animated.View style={{ borderColor: '#c978f8',justifyContent:'center',alignItems:'flex-end', borderRightWidth: 1, borderLeftWidth: 0, borderTopWidth: 1, borderBottomWidth: 1, height: 45, width: AnimatedLeftWidth, borderTopRightRadius: 25, borderBottomRightRadius: 25, marginTop: 10 }}>
              
                    <View>
                   
                        <View style={{ flexDirection: 'row',marginLeft:-30 }}>
                          <View style={{ justifyContent: 'center', }}>
                            <Text style={{ color: '#fff', fontFamily: 'Exo2-SemiBold', fontSize: 12,marginRight:10}}>Information</Text>
                          </View>
                          <Image style={{marginRight:10, width: 30, height: 30, resizeMode: 'contain'}} source={require("../assets/iicon.png")} ></Image>
                        </View>
                
                    </View>
                
                </Animated.View>
                </TouchableOpacity>
                <Animated.View style={{ height: 45, width: this.AnimatedWidth, position: 'absolute', right: 0, marginTop: 10, }}>
                <TouchableOpacity onPress={this.pressRight}>
                  <View>
                    <LinearGradient colors={['#fff', '#fff', '#fff']} style={{ justifyContent: 'center', alignItems: 'flex-start', borderTopLeftRadius: 25, borderBottomLeftRadius: 25, paddingTop: 10, paddingBottom: 10 }}>

                      <View style={{ flexDirection: 'row' }}>
                        <Image style={{ marginLeft: 10, width: 30, height: 30, resizeMode: 'contain', }} source={require("../assets/Group_537.png")} ></Image>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ color: '#000', fontFamily: 'Exo2-Regular' ,fontSize: 12, marginLeft:10}}>New Vault</Text>
                          </View>
                      </View>

                    </LinearGradient>
                  </View>
                </TouchableOpacity>
              </Animated.View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center", marginTop: 15 }}>
                <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require("../assets/app2.png")} ></Image>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={{ marginLeft: 10, fontSize: 16, color: '#fff', fontFamily: 'Exo2-Regular' }}>Vault</Text>
                </View>
              </View>

              <View style={{ marginTop: 10 }}>

                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: 70 }}>
                  <TouchableOpacity onPress={this.ActiviePress}>
                    <View style={{ width: 80, height: 50, borderRightWidth: 1, borderRightColor: '#4d6bc1' }}>
                      <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 15,  color: '#fff', fontFamily: 'Exo2-Regular', opacity: this.state.ActiveOpacity }}>Active</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this.CompletePress}>
                    <View style={{ width: 150, height: 50 }}>
                      <Text style={{ marginLeft: 20, marginTop: 15, fontSize: 15,  color: '#fff', opacity: this.state.CompleteOpacity, fontFamily: 'Exo2-Regular' }}>Completed</Text>
                    </View>
                  </TouchableOpacity>

                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Animated.View style={{ opacity: this.OpacityView }}>
                    <View style={{ marginTop: 20, }}>
                      <View style={{ justifyContent: 'center', alignItems: 'center', height: 150 }}>
                        <Carousel
                          data={this.state.carouselItems}
                          loop={true}
                          inactiveSlideOpacity={0.2}
                          sliderWidth={400}
                          itemWidth={130}
                          renderItem={this._renderItem}
                          onSnapToItem={(index) => this.action(index)}
                        />
                      </View>
                    </View>
                  </Animated.View>
                  <Animated.View style={{ flexDirection: 'row', marginTop: -180 }}>

                    <Animated.View style={{ flexDirection: 'row', marginRight: this.AnimatedMarginRight, }}>

                      <View  style={{marginLeft:10}} >
                      
                          <Image style={{ width: 150, height: 150 }} source={require("../assets/bitcoinlogo.png")} ></Image>
                       

                      </View>


                      <View style={{marginLeft:-90}}>
                       
                          <Image style={{ width: 150, height: 150 }} source={require("../assets/etheriumlogo.png")} ></Image>
                      
                      </View>


                      <View style={{marginLeft:-90}}>
                       
                          <Image style={{ width: 150, height: 150 }} source={require("../assets/bitwingslogo.png")} ></Image>
                        

                      </View>
                    </Animated.View>
                    <Animated.View style={{ flexDirection: 'row', marginLeft: this.AnimatedMarginLeft }}>
                      <View style={{marginLeft:-90,zIndex:1}}>
                       
                          <Image style={{ width: 150, height: 150 }} source={require("../assets/zcoinlogo.png")} ></Image>
                    

                      </View>

                      <View style={{marginLeft:-90}}>
                       
                          <Image style={{ width: 150, height: 150 }} source={require("../assets/mcoinlogo.png")} ></Image>
                      

                      </View>
                    </Animated.View>

                  </Animated.View>
                </View>
                <Animated.View style={{marginTop: this.AnimatedTop}}>
                <View >
                  <View style={{ justifyContent: 'center', alignItems: 'center',  }}>
                    <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 20,  color: '#ABB3D0', fontFamily: 'Exo2-SemiBold' }}>Balance</Text>
                  </View>

                  <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View>
                      </View>
                      <View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={{ marginLeft: 30, fontSize: 36, color: '#F5F6F9', fontFamily: 'Exo2-SemiBold' }}>{this.state.Balance}</Text>
                          <View style={{ marginTop: -10, marginLeft: 5 }}>

                          </View>
                        </View>

                      </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20 }}>
                      <TouchableOpacity onPress={this.AllClick} style={{width:30,height:30}}>
                        <View>
                          <View style={{ width: 40, height: 15, backgroundColor: this.state.AllBackgroundColor, justifyContent: 'center', alignItems: 'center', marginTop: -10, marginRight: 30, padding: 10, borderRadius: 5, borderColor: '#4A6BCD', borderWidth: 1 }}>
                            <Text style={{ fontSize: 12, color: '#5496FF', fontFamily: 'Exo2-Regular' }}>All</Text>

                          </View>
                        </View>
                      </TouchableOpacity>



                      <Text style={{ fontSize: 15, color: '#5496FF', fontFamily: 'Exo2-Regular' }}>{this.state.Usd}</Text>



                      <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginLeft: -60 }}>
                        <Text style={{ color: '#ABB3D0', opacity: 1, fontSize: 12, fontFamily: 'Exo2-Regular' }}>{this.state.Amount}</Text>
                        <Image style={{ width: 10, height: 10, marginLeft: 10, tintColor: '#ABB3D0' }} source={require("../assets/down_arrow.png")} ></Image>
                        <Picker style={{ position: 'absolute', top: 0, width: 1000, height: 3000 }}
                          selectedValue={this.state.Amount}
                          onValueChange={(itemValue, itemIndex) => this.selectedPrice(itemValue, itemIndex)}>

                          <Picker.Item label="USDollar" value="USDollar" />
                      
                        </Picker>
                      </View>



                    </View>
                  </View>
                </View>
                <View >
                {
                  this.state.dataSource.length!=0?this.state.dataSource.map((item, key) =>
              (
              
                <ExpandabelList hide={this.hide}  key={item.listofuserCryptoinvestmentdto} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              )):<View style={{justifyContent:'center'}}>
              <View style={{justifyContent:'center',alignItems:'center',paddingTop:30}}>
              <Text style={{color:'#ABB3D0',fontWeight:'bold',opacity:1,fontSize:15,fontFamily:'Exo2-Regular'}}>No Data Found</Text>
              </View>
              </View>
          }
                </View>
</Animated.View>
            


              </View>
            </View>
          </ScrollView>

        </LinearGradient>
      </View>
</SafeAreaView>
    );
  }
  clickedItemText = (item) => {
    //Alert.alert(item.status)
  }
  AllClick = () => {

    (!this.state.AnimationFlag) ? this.Animation() : this.DeAnimation()

  }
  update_Layout = (index) => {

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = [...this.state.dataSource];

    array[index]['expanded'] = !array[index]['expanded'];

    this.setState(() => {
      return {
        dataSource: array
      }
    });
  }
  action = (index) => {

    let num = index
    if (num <= 0) {
      type = 'ETH'
    }
    else if(num==1) {
      type = 'BTC'

    }
    else{
      type = 'BWN'
    }
    this.GetData()
  }



  Animate = () => {
    if (this.state.ShowFilter == false) {
      this.Animation()
    }

  }
  _renderItem({ item, index }) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontFamily: 'Exo2-Regular' }}>{item.title}</Text>
      
          <Image style={{ width: 150, height: 150, }} source={item.ShadowImages} ></Image>
      

      </View>
    )
  }
}



const styles = StyleSheet.create({

  Maincontainers: {
    flex: 1,
    backgroundColor: '#fff',
  },
  spinnerTextStyle:
  {
    color: '#fff'
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
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: '#fbfbfb',


  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 0.5,

    borderColor: '#d6d7da',
    width: '50%',
    color: '#000'
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 16
  },
  buttonContainer: {
    backgroundColor: '#27a8e0',
    width: '40%',
    marginTop: 15,

    paddingVertical: 15
  },
  SignInbuttonContainer: {
    backgroundColor: '#7f7f7f',
    width: '40%',
    marginTop: 15,
    marginLeft: 10,
    paddingVertical: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});