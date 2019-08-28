import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image, ScrollView, Dimensions, Text, ActivityIndicator, TouchableOpacity, LayoutAnimation, } from 'react-native';
import { Alert } from 'react-native';
import{TwoFactorApi} from '../Api/ProfileRegisterApi'
import BackgroundIcon from '../../Background'

import LinearGradient from 'react-native-linear-gradient';

export default class PincodeEnable extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      cityItems: ["US Doller,Indian,Eutherium"],
      Coin: 'Us Doller',
      animate: false,

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
      app5color: '#fff'
    };

  }

  componentDidMount() {
    //this.GetListData()
  }

  dataset = (data) => {
    this.setState({
      dataSource: data
    })
    this.hide()
  }
  Load() {
    this.setState({ animate: true })
  }
  hide() {
    this.setState({ animate: false })
  }
  space() {
    return (<View style={{ height: 10, width: 1, backgroundColor: 'black' }} />)
  }
  _onPress = () => {
    if (!this.state.click) {
      LayoutAnimation.spring();
      this.setState({ w: this.state.w + 50 })
      this.setState({ click: true })
    } else {
      LayoutAnimation.spring();
      this.setState({ w: 50 })
      this.setState({ click: false })
    }

  }
  pressRight = () => {
    if (!this.state.clickr) {
      LayoutAnimation.spring();
      this.setState({ wr: this.state.wr + 50 })
      this.setState({ clickr: true })
    } else {
      LayoutAnimation.spring();
      this.setState({ wr: 50 })
      this.setState({ clickr: false })
      this.props.navigation.navigate('Welcome');
    }
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
  render() {


    const { navigate } = this.props.navigation;
    const data = [50, 60, 70, 95, 100, 120, 100, 80, 90, 60, 50, 40, 60, 100]
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
          color='#1a5fe1'
          size="large"
          style={styles.activityIndicator} />
      </View>
    }
    return (

      <View style={styles.Maincontainers}>



        <LinearGradient
          colors={['#ffffff', '#e1e5ef', '#e1e5ef']} style={{ height: '100%' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 100, }}>
            <Image
              style={{
                width: Dimensions.get('window').width,
                resizeMode: "contain",
                height: 211, opacity: 0.1
              }}
              source={require('../assets/dlogo.png')}
            />
          </View>
          <View style={{ justifyContent: 'space-between', flex: 0.4 }}>

            <View style={{ backgroundColor: '#fd6d71', height: this.state.hr, width: this.state.wr, justifyContent: 'center', borderTopStartRadius: 25, borderBottomStartRadius: 25, marginTop: 10, position: 'absolute', right: 0 }}>
              <TouchableOpacity onPress={this.pressRight}>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={{ marginLeft: 10, width: 20, height: 20 }} source={require("../assets/cancel.png")} ></Image>

                </View>
              </TouchableOpacity>
            </View>
            <View style={{
              justifyContent: 'center', alignItems: 'center', paddingTop: 30
            }}>
              <Image style={{
                width: Dimensions.get('window').width,
                resizeMode: "contain",
                height: 250,
              }} source={require("../assets/threelogo.png")} ></Image>


            </View>
          </View>
          <View style={{ flex: 0.4 }}>
            <View style={{
              justifyContent: 'center', alignItems: 'center'
            }}>
              <Image style={{ width: 40, height: 40, resizeMode: 'contain' }} source={require("../assets/mobile-phone.png")} ></Image>
            </View>
            <View style={{ alignItems: 'center', justifyContent: "center" }}>
              <Text style={{ color: '#4e649f', opacity: 1, fontSize: 20, marginTop: 10, fontFamily: 'Exo2-Bold' }}>Verify with 2 Steps</Text>
              <Text style={{ color: '#4e649f', opacity: 1, fontSize: 12, marginTop: 10, fontFamily: 'Exo2-SemiBold' }}>Avoid  unauthorized  access to your</Text>
              <Text style={{ color: '#4e649f', opacity: 1, fontSize: 12, marginTop: 2, fontFamily: 'Exo2-SemiBold' }}>Wallet ,Enable the verification of 2 steps to  </Text>
              <Text style={{ color: '#4e649f', opacity: 1, fontSize: 12, marginTop: 2, fontFamily: 'Exo2-SemiBold' }}>upgrade the security on your wallet</Text>
            </View>

          </View>

          <View style={{ flex: 0.2 }}>
            {(this.props.navigation.state.params.TwoFactorParams.twoFactorAuthenticationStatus == 0) ?
              <TouchableOpacity onPress={this.BeginAction}>
                <View>

                  <LinearGradient colors={['#41d99c', '#34ddb2', '#21e4d3']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ padding: 15, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Poppins-Medium' }}>Enable</Text>
                  </LinearGradient>
                </View>
              </TouchableOpacity> :
              <TouchableOpacity onPress={this.BeginAction}>
                <View>

                  <LinearGradient colors={['red', 'red', 'red']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ padding: 15, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Poppins-Medium' }}>Disable</Text>
                  </LinearGradient>
                </View>
              </TouchableOpacity>


            }



          </View>

        </LinearGradient>

      </View>


    );
  }
  clickedItemText = (item) => {
    Alert.alert(item.Status)
  }
  BeginAction = () => {
    this.Load()
    let params =
    {
      "userId": this.props.navigation.state.params.TwoFactorParams.userId,
      "twoFactorAuthenticationStatus": this.props.navigation.state.params.TwoFactorParams.twoFactorAuthenticationStatus
    }
    console.log('request otp',params)
    TwoFactorApi(params, this.TwoFactorRespose)

  }
  TwoFactorRespose = (data) => {
    this.hide()
    console.log('response otp',data)
    if (data.status === 'success') {
      this.props.navigation.navigate('OtpPin', { param: this.props.navigation.state.params.TwoFactorParams.twoFactorAuthenticationStatus })
    }
    else {
      Alert.alert(data.status, data.message)
    }

  }

}



const styles = StyleSheet.create({

  Maincontainers: {
    flex: 1,
    height: '100%'
  },
  containers: {
    backgroundColor: 'transparent',
    marginTop: 5,

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