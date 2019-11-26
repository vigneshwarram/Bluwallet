import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, SafeAreaView, StyleSheet, TextInput, AsyncStorage, Image, ImageBackground, Picker, LayoutAnimation, Text, ActivityIndicator, TouchableOpacity, UIManager, Animated, Platform, TouchableHighlight } from 'react-native';
import { Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';
import { ExchangeList } from '../Api/ExchangeRequest'
import { ExchangeRequest, EXCHANGE_HISTORY_LIST ,TRANSACTION_HISTORY} from '../Api/RequestUrl'
import ExchangeMenu_Expandable from '../Utils.js/ExchangeMenu_Expandable'
import { ResponseSuccessStatus, InvalidResponse, DataUndefined, InvalidToken, TokenExpired } from '../Utils.js/Constant'
let FinalResult=[]
let roleid;
export default class ExchangeMenu extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    this.state = {
      totalresponse: [],
      dataSource: [],
      cityItems: ["US Doller,Indian,Eutherium"],
      Amount: 'COP',
      spinner: false,
      Buycolor1: 'transparent',
      Buycolor2: 'transparent',
      Buycolor3: 'transparent',

      sellcolor1: 'transparent',
      sellcolor2: 'transparent',
      sellcolor3: 'transparent',

      publishcolor1: '#4262B5',
      publishcolor2: '#3A549B',
      publishcolor3: '#314279',
      publishcolor4: '#2C3765',
      publishcolor5: '#2A335E',

      Exchangecolor1: '#4262B5',
      Exchangecolor2: '#3A549B',
      Exchangecolor3: '#314279',
      Exchangecolor4: '#2C3765',
      Exchangecolor5: '#2A335E',

      ExchangeIcon: require("../assets/exchangecolor.png"),
      PublicIcon: require('../assets/puplishcolor.png'),
      BuyIcon: require('../assets/buy.png'),
      SellIcon: require('../assets/sell.png'),
      Admin: 'PlatForm',
      Coin: 'Us Doller',
      animate: false,
      mode: 'All',
      ExchangeMode: 'admin',
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
      app1color: '#fff',
      app6color: '#5099f0',
      app2color: '#5099f0',
      app3color: '#5099f0',
      app4color: '#fff',
      app5color: '#5099f0',
      buyOpacity: 0.5,
      sellOpacity: 0.5,
      pupblicOpacity: 0.5,
      exchangeOpacity: 0.5,
      Buytintcolor: '#4072af',
      selltintcolor: '#4072af',
      pupblictintcolor: '#ABB3D0',
      exchangetintcolor: '#ABB3D0',
    };

  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.onFocusFunction()
    })

  }
  onFocusFunction = () => {
    this.GetData()
  }

  componentWillUnmount() {
    this.focusListener.remove()
  }
  GetData = async () => {
 
    let UserId = await AsyncStorage.getItem('UserId')
     roleid = await AsyncStorage.getItem('roleId')
     roleid==1?this.setState({'Admin':'user'}):this.setState({'Admin':this.state.Admin})
    console.log(UserId)
    let params =
    {
      cryptoType: this.state.mode,
      // exchangeMode:  roleid==1?'user':this.state.ExchangeMode,
      userId: UserId
    }
    this.Load()
    ExchangeList(params, TRANSACTION_HISTORY, this.ExchangeListResponse, this.error, this.NetworkIssue)
  }
  error = () => {
    this.hide()
    Alert.alert(error)
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
  ExchangeListResponse = (data) => {
    console.log('Exhchange List', data)
   
    if (data != DataUndefined) {
      if (data.status === ResponseSuccessStatus) {
        this.setState({ totalresponse: data.fetchExchageRequestDTO.exchangeDTOList })
       
        const newFile = data.fetchExchageRequestDTO.exchangeDTOList.map((file) => {

          return { ...file, expanded: false };
        });
        this.setState({ dataSource: newFile });
        FinalResult=newFile;
      }
      else if (data.error === InvalidToken) {
        Alert.alert(
          'Error',
          TokenExpired,
          [
            { text: 'OK', onPress: () => this.props.navigation.navigate("Login") },
          ],

        );
      }
      else {
        Alert.alert(InvalidResponse)
      }
    }
    this.hide()
  }
  dataset = (data) => {
    this.setState({
      dataSource: data
    })
    this.hide()
  }
  Load() {
    this.setState({ spinner: true })
  }
  filterSearch(text) {
    
    const newData = this.state.dataSource.filter((item) => {
      const itemData = item.amountToTrade
      return itemData.toString().indexOf(text) > -1
    });
    this.setState({
      text: text,
      dataSource: newData // after filter we are setting users to new array
    });
    if (!text || text === '') {
      this.setState({
        dataSource: FinalResult
      })
    }
  }
  hide() {
    this.setState({ spinner: false })
  }
  space() {
    return (<View style={{ height: 10, width: 1, backgroundColor: 'black' }} />)
  }
  render() {
    const data = [50, 60, 70, 95, 100, 120, 100, 80, 90, 60, 50, 40, 60, 100]
    const Line = ({ line }) => (
      <Path
        key={'line'}
        d={line}
        stroke={'#25e2cd'}
        fill={'none'}
      />
    )


    if (this.state.animate) {
      return <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator
          color='#1a5fe1'
          size="large"
          style={styles.activityIndicator} />
      </View>
    }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#354E91' }}>
        <View style={styles.Maincontainers}>

          <LinearGradient colors={['#354E91', '#314682', '#283563', '#222B50', '#21284A']} style={{ flex: 1 }}>
            <Spinner
              visible={this.state.spinner}
              textContent={'Loading...'}
              overlayColor='rgba(0,0,0,0.5)'
              animation='fade'
              size='large'
              color='#f4347f'
              textStyle={styles.spinnerTextStyle}
            />

            <ImageBackground source={require('../assets/Group_20501.png')} imageStyle={{ resizeMode: 'cover', width: '100%', height: '100%' }} style={{ opacity: 0.9, flex: 0.34 ,zIndex:1}}>
              <View style={{ justifyContent: 'center', alignItems: 'center' ,marginTop: 20}}>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={{ marginRight: 10, width: 18, height: 22, resizeMode: 'contain' }} source={require("../assets/app4.png")} ></Image>
                  <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'Exo2-Regular' }}>Exchange</Text>
                </View>
                <View style={{ width: '80%', borderRadius: 25, borderWidth: 1, borderColor: '#fff', marginTop: 30, justifyContent: 'space-between', flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <Image style={{ width: 20, height: 20, marginTop: 10 }} source={require("../assets/Searchicon.png")} ></Image>
                    <TextInput
                      style={{ height: 40, width: 100, color: '#ffffff',fontSize: 15, fontFamily: 'Exo2-Regular' }}
                      placeholderTextColor='#ffffff'
                      keyboardType='numeric'
                      placeholder="Amount"
                      onChangeText={(text) => this.filterSearch(text)}
                      value={this.state.text}
                      maxLength={10}
                    />
                  </View>
                  <View >
                  { Platform.OS === 'ios' ? <View style={{flexDirection:'row',justifyContent:'space-around',
                marginTop:13}}>
                        <RNPickerSelect
                        textInputProps={{ color: '#fff' }}
                        style={styles.inputIOS}
                        placeholder={{
                          label: 'Amount',
                          value: 'null',
                          color: 'red',
                        }}
                        onValueChange={(itemValue, itemIndex) => this.selectedcoin(itemValue, itemIndex)}
                        items={[
                          { label:"All" ,value:"All"  },
                          { label:"BTC" ,value:"BTC" },
                          {label:"ETH", value:"ETH"},
                          {label:"Bitwings" ,value:"BWN"}
                        ]}
                      /> 
                       <Image style={{ width: 9, height: 7, resizeMode: 'contain', marginLeft: 10, marginRight: 10 ,alignSelf:'center'}} source={require("../assets/darrow.png")} ></Image>
                      </View> :<View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', paddingRight: 10, marginLeft: -30,marginTop:10 }}>
                      <Image style={{ width: 9, height: 7, resizeMode: 'contain', marginLeft: 10, marginRight: 10 }} source={require("../assets/darrow.png")} ></Image>
                    <Text style={{ color: '#FFFFFF', opacity: 1, fontSize: 15, fontFamily: 'Exo2-Regular' }}>{this.state.mode}</Text>
                    <Picker style={{ position: 'absolute', top: 0, width: 1500, height: 1500 ,fontSize: 15}}
                      selectedValue={this.state.mode}
                      onValueChange={(itemValue, itemIndex) => this.selectedcoin(itemValue, itemIndex)}>
                      <Picker.Item label="All" value="All" />
                      <Picker.Item label="BTC" value="BTC" />
                      <Picker.Item label="ETH" value="ETH" />
                      <Picker.Item label="Bitwings" value="BWN" />
                    </Picker>
                      </View> }
                 
              
                  </View>


                </View>
                <View style={{ width: '45%', borderRadius: 20, borderWidth: 1, borderColor: '#fff', marginTop: 2, justifyContent: 'space-between', flexDirection: 'row' ,marginTop:10,padding:5}}>
                  <View style={{ flexDirection: 'row', marginLeft: 20,justifyContent:'space-around' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require("../assets/tv.png")} ></Image>
                    </View>
                    <View>
                      {/* <Text style={{ color: '#FFFFFF', opacity: 1, fontSize: 11, fontFamily: 'Exo2-Regular' }}>{this.state.Admin}</Text>
                      <Image style={{ width: 9, height: 7, resizeMode: 'contain', marginLeft: 10, marginRight: 10 }} source={require("../assets/darrow.png")} ></Image> */}


{ Platform.OS === 'ios' ? roleid==0?

<View style={{flexDirection:'row',justifyContent:'space-around',marginLeft:5}}>
                        <RNPickerSelect
                         placeholder={{
                          label: 'Select Role',
                          value: 'Select Role',
                          color: '#fff',
                        }}
                        textInputProps={{ color: '#fff' }}
                        style={styles.inputIOS}
                        onValueChange={(itemValue, itemIndex) => this.selectedPlatform(itemValue, itemIndex)}
                        items={[
                          { label: "PlatForm", value: "PlatForm" },
                          { label: "Users" },
                        ]}
                      /> 
                       <Image style={{ width: 9, height: 7, resizeMode: 'contain', marginLeft: 10, marginRight: 10 ,alignSelf:'center'}} source={require("../assets/darrow.png")} ></Image>
                      </View>:<View style={{flexDirection:'row',justifyContent:'space-around',marginLeft:5}}>
                        <RNPickerSelect
                        textInputProps={{ color: '#fff' }}
                        placeholder={{
                          label: 'Select Role',
                          value: 'Select Role',
                          color: 'red',
                        }}
                        style={styles.inputIOS}
                        onValueChange={(itemValue, itemIndex) => this.selectedPlatform(itemValue, itemIndex)}
                        items={[
                          { label: "Users" ,value:'Users'},
                        ]}
                      /> 
                       <Image style={{ width: 9, height: 7, resizeMode: 'contain', marginLeft: 10, marginRight: 10 ,alignSelf:'center'}} source={require("../assets/darrow.png")} ></Image>
                      </View>:
                      roleid==0?
                      <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginLeft: 20, paddingTop: 10, paddingBottom: 10 }}>
                      <Text style={{ color: '#FFFFFF', opacity: 1, fontSize: 11, fontFamily: 'Exo2-Regular' }}>{this.state.Admin}</Text>
                      <Image style={{ width: 9, height: 7, resizeMode: 'contain', marginLeft: 10, marginRight: 10 }} source={require("../assets/darrow.png")} ></Image>
                       <Picker style={{ position: 'absolute', top: 0, width: 1000, height: 1000 }}
                        selectedValue={this.state.Admin}
                        onValueChange={(itemValue, itemIndex) => this.selectedPlatform(itemValue, itemIndex)}>

                       <Picker.Item label="PlatForm" value="PlatForm" /> 
                          <Picker.Item label="Users" value="Users" />
                        </Picker></View>:
                        <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginLeft: 20, paddingTop: 10, paddingBottom: 10 }}>
                      <Text style={{ color: '#FFFFFF', opacity: 1, fontSize: 11, fontFamily: 'Exo2-Regular' }}>{this.state.Admin}</Text>
                      <Image style={{ width: 9, height: 7, resizeMode: 'contain', marginLeft: 10, marginRight: 10 }} source={require("../assets/darrow.png")} ></Image><Picker style={{ position: 'absolute', top: 0, width: 1000, height: 1000 }}
                        selectedValue={this.state.Admin}
                        onValueChange={(itemValue, itemIndex) => this.selectedPlatform(itemValue, itemIndex)}>
                          <Picker.Item label="Users" value="Users" />
                        </Picker></View>}

                    </View>

                  </View>


                </View>
              </View>
            </ImageBackground>








            <View style={{ flex: 0.66 }}>

              <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                <View>


                  <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', marginLeft: 25, marginRight: 25 }}>

                    <Animated.View>
                      <TouchableHighlight /*Press={this.buyClick}*/>
                        <View >
                          <LinearGradient style={{ backgroundColor: 'transparent', width: 130, height: 130, borderWidth: 1, borderColor: '#415b94', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
                            colors={[this.state.Buycolor1, this.state.Buycolor2, this.state.Buycolor3]}>
                            <Image style={{ width: 80, height: 80, resizeMode: 'contain', opacity: this.state.buyOpacity, tintColor: this.state.Buytintcolor }} source={this.state.BuyIcon} ></Image>
                            <Text style={{ fontSize: 12, color: this.state.Buytintcolor, fontFamily: 'Exo2-Regular' }}>To Buy</Text>
                          </LinearGradient>
                        </View>
                      </TouchableHighlight>
                    </Animated.View>
                    <TouchableHighlight /*onPress={this.SellClick}*/>
                      <View >
                        <LinearGradient style={{ backgroundColor: 'transparent', width: 130, height: 130, marginLeft: 20, borderWidth: 1, borderColor: '#415b94', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
                          colors={[this.state.sellcolor1, this.state.sellcolor2, this.state.sellcolor3]}>
                          <Image style={{ width: 80, height: 80, resizeMode: 'contain', opacity: this.state.sellOpacity, tintColor: this.state.selltintcolor }} source={this.state.SellIcon} ></Image>
                          <Text style={{ fontSize: 12, color: this.state.selltintcolor, fontFamily: 'Exo2-Regular' }}>To Sell</Text>
                        </LinearGradient>
                      </View>
                    </TouchableHighlight>
                  </View>
                  <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', marginLeft: 25, marginRight: 25 }}>
                    <TouchableOpacity onPress={this.publicClick}>
                      <View >
                        <LinearGradient style={{ backgroundColor: 'transparent', width: 130, height: 130, borderWidth: 1, borderColor: '#415b94', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
                          colors={[this.state.publishcolor1, this.state.publishcolor2, this.state.publishcolor3, this.state.publishcolor4, this.state.publishcolor5]}>
                          <Image style={{ width: 80, height: 80, resizeMode: 'contain', opacity: this.state.pupblicOpacity, tintColor: this.state.pupblictintcolor }} source={this.state.PublicIcon} ></Image>
                          <Text style={{ fontSize: 12, color: this.state.pupblictintcolor, fontFamily: 'Exo2-Regular' }}>Publications</Text>
                        </LinearGradient>

                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.ExchangeClick}>
                      <View >
                        <LinearGradient style={{ backgroundColor: 'transparent', width: 130, height: 130, marginLeft: 20, borderWidth: 1, borderColor: '#415b94', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
                          colors={[this.state.Exchangecolor1, this.state.Exchangecolor2, this.state.Exchangecolor3, this.state.Exchangecolor4, this.state.Exchangecolor5]}>
                          <Image style={{ width: 80, height: 80, resizeMode: 'contain', opacity: this.state.exchangeOpacity, tintColor: this.state.exchangetintcolor }} source={this.state.ExchangeIcon} ></Image>
                          <Text style={{ fontSize: 12, color: this.state.exchangetintcolor, fontFamily: "Exo2-Regular" }}>Exchange</Text>
                        </LinearGradient>

                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{
                    position: 'absolute', left: 0, right: 0, bottom: 70, justifyContent: 'center', alignItems: 'center'
                  }}>
                    <Image style={{ width: 150, height: 200, resizeMode: 'contain' }} source={require("../assets/slogo.png")} ></Image>
                  </View>
                </View>
                <View style={{ flex: 1, marginTop: 10 }}>
                  <View style={{ marginLeft: 45, marginBottom: 15 }}>
                    <Text style={{ fontSize: 15, color: '#fff', fontFamily: "Exo2-SemiBold" }}>History</Text>
                  </View>

                  {
                    this.state.dataSource.length!=0?this.state.dataSource.map((item, key) =>
                      (
                        <ExchangeMenu_Expandable mode={this.state.mode} key={item.exchangeDTOList} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
                      )):
                      <View>
              <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'#fff',fontWeight:'bold',opacity:1,fontSize:15,fontFamily:'Exo2-Regular'}}>No Data Found</Text>
              </View>
              </View>
                  }
                </View>




              </ScrollView>


            </View>




          </LinearGradient>
        </View>
      </SafeAreaView>

    );
  }
  clickedItemText = (item) => {
    Alert.alert(item.Status)
  }
  selectedCop = (item, itemIndex) => {
    this.setState({
      Amount: item
    })
  }
  buyClick = () => {
    this.setState({
      Buycolor1: '#81DCF9',
      Buycolor2: '#00a5ff',
      Buycolor3: '#1a5fe1',
      buyOpacity: 1,
      Buytintcolor: '#fff'
    })
    this.ExchangeReset()
    this.Publicreset()
    this.SellReset()
    setTimeout(this.navigateBuy, 200)

  }
  navigateBuy = () => {
    this.props.navigation.navigate('Buy')
  }
  SellClick = () => {
    this.setState({
      sellOpacity: 1,
      selltintcolor: '#fff',
      sellcolor1: '#81DCF9',
      sellcolor2: '#00a5ff',
      sellcolor3: '#1a5fe1'
    })
    this.ExchangeReset()
    this.Publicreset()
    this.BuyReset()
    setTimeout(this.navigateSend, 200)

  }
  navigateSend = () => {
    this.props.navigation.navigate('Sell')
  }
  publicClick = () => {
    this.setState({
      pupblicOpacity: 1,
      pupblictintcolor: '#fff',
      publishcolor1: '#97F5F9',
      publishcolor2: '#7ED5F6',
      publishcolor3: '#7ED5F6',
      publishcolor4: '#529DF3',
      publishcolor5: '#4781DF'
    })
    this.ExchangeReset()
    this.BuyReset()
    this.SellReset()
    setTimeout(this.navigatePublic, 200)


  }
  navigatePublic = () => {
    if (this.state.Admin === 'PlatForm') {
      this.props.navigation.navigate('Publish', { Exchange_Type: this.state.Admin })
    }
    else {
      this.props.navigation.navigate('PuplishUser', { Exchange_Type: this.state.Admin })
    }
  }


  ExchangeClick = () => {

    this.setState({
      exchangeOpacity: 1,
      exchangetintcolor: '#fff',
      Exchangecolor1: '#97F5F9',
      Exchangecolor2: '#7ED5F6',
      Exchangecolor3: '#7ED5F6',
      Exchangecolor4: '#529DF3',
      Exchangecolor5: '#4781DF'
    })
    this.BuyReset()
    this.Publicreset()
    this.SellReset()
    setTimeout(this.navigateExchange, 200)


  }
  navigateExchange = () => {
    this.props.navigation.navigate('Exchange', { Exchange_Type: this.state.Admin })
    console.log("exchangeType", this.state.Admin)
  }

  ExchangeReset = () => {
    this.setState({
      exchangeOpacity: 0.5,
      exchangetintcolor: '#ABB3D0',
      Exchangecolor1: '#4262B5',
      Exchangecolor2: '#3A549B',
      Exchangecolor3: '#314279',
      Exchangecolor4: '#2C3765',
      Exchangecolor5: '#2A335E'

    })

  }
  SellReset = () => {
    this.setState({
      sellOpacity: 0.5,
      selltintcolor: '#4072af',
      sellcolor1: 'transparent',
      sellcolor2: 'transparent',
      sellcolor3: 'transparent'
    })

  }
  BuyReset = () => {
    this.setState({
      buyOpacity: 0.5,
      Buytintcolor: '#4072af',
      Buycolor1: 'transparent',
      Buycolor2: 'transparent',
      Buycolor3: 'transparent',

    })

  }
  Publicreset = () => {
    this.setState({
      pupblicOpacity: 0.5,
      pupblictintcolor: '#ABB3D0',
      publishcolor1: '#4262B5',
      publishcolor2: '#3A549B',
      publishcolor3: '#314279',
      publishcolor4: '#2C3765',
      publishcolor5: '#2A335E',

    })

  }
  selectedPlatform = (item, index) => {
    if (item === 'PlatForm') {
      this.setState({
        Admin: item, ExchangeMode: 'admin'
      })

    }
    else {
      this.setState({
        Admin: item, ExchangeMode: 'user'
      })
    }
    this.GetData()
  }
  selectedcoin = (item, index) => {
    this.setState({
      mode: item
    })
    this.GetData()
  }
}



const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  Maincontainers: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containers: {
    backgroundColor: '#fff',
    marginTop: 5,
  },
  containers: {
    flex: 1,
    height: '30%'
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
