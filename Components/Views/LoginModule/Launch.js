import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image, StatusBar, TouchableOpacity, Text, ActivityIndicator, LayoutAnimation, ImageBackground, AsyncStorage } from 'react-native';
import { Alert } from 'react-native';
import BackgroundIcon from '../../Background'
import { NavigationActions, StackActions } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient';
import TouchID from 'react-native-touch-id';
const optionalConfigObject = {
  title: 'Authentication Required for Login', // Android
  imageColor: '#5099f0', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};
let userid;
export default class Launch extends React.Component {

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
    StatusBar.setBarStyle('light-content', true)
    StatusBar.setBackgroundColor("#354E91")
    this.CheckUserSignedIn()

    //this.GetListData()
  }
  CheckUserSignedIn = async () => {
    try {
      let userid = await AsyncStorage.getItem('UserId')
      let kycstatus = await AsyncStorage.setItem('kycstatus','1'); 
      let profilestatus= await AsyncStorage.setItem('profilestatus','1'); 
      if (userid != null) {
        this.GetAuthenticiate(userid,profilestatus,kycstatus)
        console.log('user id', userid)
      }
      else {
        console.log('user id', 'else')
      }
    }
    catch (error) {
      console.log(error)
    }

    //console.log('user id',userid)
    // 
  }
  GetAuthenticiate = async (userids,profilestatus,kycstatus) => {

    TouchID.authenticate('To skip login use your fingerprint', optionalConfigObject)
      .then(success => {

        console.log('touch id success', success)

        if (userids == null) {
          this.props.navigation.navigate('Login')
        }
        else {
          
          console.log('user id is saved', userids)
          this.NavigationReset('Home', profilestatus, kycstatus)
        }
        // Success code
      })
      .catch(error => {
        // Failure code
      });
  }
  NavigationReset = (routname, dashboardpopup, kycstatus) => {
    setTimeout(() => {
      this.props.navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: routname, params: { DashBoardPopup: dashboardpopup, Kyc: kycstatus } })]
        })
      );

    }, 0)

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

        <ImageBackground style={{ flex: 1, }} imageStyle={{ resizeMode: 'stretch' }} source={require('../assets/Group_1316.png')}>

          <View style={{ flex: 0.6 }}>

            <View>

              <View style={{
                justifyContent: 'center', alignItems: 'center', paddingTop: 20
              }}>
                <Image style={{ width: 150, height: 150, resizeMode: 'contain' }} source={require("../assets/app-logo.png")} ></Image>


              </View>


            </View>

          </View>

          <View style={{ flex: 0.4 }}>


            <View>
              <TouchableOpacity onPress={this.CreateWallet}>
                <View>
                  <LinearGradient colors={['#41d99c', '#34ddb2', '#21e4d3']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ padding: 15, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Poppins-Medium' }}>Create a Wallet</Text>
                  </LinearGradient>
                </View>

              </TouchableOpacity>


            </View>


            <View>
              <TouchableOpacity onPress={this.LoginAction}>
                <View>
                  <LinearGradient colors={['#4476d7', '#4f92e9', '#61bff2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ padding: 15, justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', fontFamily: 'Poppins-Medium' }}>LOGIN</Text>

                  </LinearGradient>


                </View>
              </TouchableOpacity >
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
              <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Exo2-Regular' }}>RECOVER FUNDS</Text>
            </View>
          </View>

        </ImageBackground>


      </View>


    );
  }
  clickedItemText = (item) => {
    Alert.alert(item.Status)
  }
  CreateWallet = () => {
    this.props.navigation.navigate('NewWallet');
  }
  LoginAction = () => {
    this.props.navigation.navigate('Login');
  }
}



const styles = StyleSheet.create({

  Maincontainers: {
    flex: 1,
    backgroundColor: 'transparent'
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