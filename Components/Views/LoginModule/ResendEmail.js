import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image, Animated, TextInput,ImageBackground, Text, Easing, TouchableOpacity, LayoutAnimation, KeyboardAvoidingView, BackHandler, SafeAreaView } from 'react-native';
import { Alert } from 'react-native';
import BackgroundIcon from '../../Background'
import { ForgotAPI } from '../Api/LoginApi'
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions, StackActions } from 'react-navigation'
import { openInbox } from 'react-native-email-link'
import { ScrollView } from 'react-native-gesture-handler';
import Dialog, {SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import {ResendEmail} from '../Api/CommonApi'
export default class ResendEmails extends React.Component {

    static navigationOptions = {
        header: null
    }


    constructor(props) {
        super(props);
        this.AnimatedLeftWidth = new Animated.Value(50)
        this.AnimatedRightWidth = new Animated.Value(50)
        this.RotateValueHolder = new Animated.Value(0);
        this.state = {
            
            dataSource: [],
            ResponseStatus:'',
            cityItems: ["US Doller,Indian,Eutherium"],
            Coin: 'Us Doller',
            animate: false,
            Username: '',
            Password: '',
            clickr: false,
            clickopen: false,
            click: false,
            slide: false,
            visible: false,
            hidden: false,
            app1color: '#fff',
            visibles:false,
            app5color: '#fff'
        };

    }
    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        this.backHandler.remove()
    }
    BeginAction=()=>{
        /*
        this.props.navigation.navigate('DashBoard',{
          DashBoardPopup: false,
        });
        */
       openInbox()
      }
    handleBackPress = () => {
      //  this.setState({visibles:false})
        this.props.navigation.goBack(null);
        return true;
    }
    CloseLeftAction = () => {
        Animated.sequence
        ([
          Animated.timing(this.AnimatedLeftWidth, {
            toValue: 150,
            duration: 250,
            easing: Easing.inOut(Easing.ease),
            delay: 10,
          }),
          Animated.timing(this.AnimatedLeftWidth, {
            toValue: 50,
            duration: 250,
            easing: Easing.inOut(Easing.ease),
            delay: 10,
          })
        ]).start(()=>this.exit());
        
    
      }
      exit=()=>{
        this.setState({visibles:false})
      }

    Load() {
        this.StartImageRotateFunction();
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
    StartImageRotateFunction() {
        this.RotateValueHolder.setValue(0);
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
        const { shift } = this.state;
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
                <Animated.Image
                    style={{ width: 100, height: 100, resizeMode: 'contain', transform: [{ rotate: RotateData }], }}
                    source={require('../assets/loader.gif')}
                />
                <Text style={{color:'#4e649f',fontSize:36,marginTop:10,fontFamily:'Exo2-Bold'}}>Loading...</Text>
            </View>
        }
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#354E91'}}>
            <View style={styles.Maincontainers} >


<ImageBackground style={{ flex: 1, }} imageStyle={{ resizeMode: 'stretch' }} source={require('../assets/bg.png')}>
<Dialog
 dialogAnimation={new SlideAnimation({
      slideFrom: 'bottom',
    })}
  onTouchOutside={() => {
      this.setState({ visibles: false })
    }}
          visible={this.state.visibles}>
          <DialogContent>
            <View style={{ flex:1,}}>
            <Animated.View style={{ height: 45, width: this.AnimatedLeftWidth, position: 'absolute', left: -20, marginTop: 10,zIndex:1 }}>
          <TouchableOpacity onPress={this.CloseLeftAction}>
            <View>
              <LinearGradient colors={['#F4317F', '#FF7C6E']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ justifyContent: 'center', borderTopRightRadius: 25, borderBottomRightRadius: 25, alignItems: 'flex-end', paddingTop: 15, paddingBottom: 15 }}>

                <View style={{ flexDirection: 'row' }}>
                  <View style={{ justifyContent: 'center', alignItems: 'flex-start', }}>
                    <Text style={{ color: '#fff', fontFamily: 'Exo2-Regular', fontSize: 15, marginLeft: -60 }}>Exit</Text>
                  </View>

                  <Image style={{ marginRight: 10, width: 20, height: 20 }} source={require("../assets/cancel.png")} ></Image>

                </View>

              </LinearGradient>
            </View>
          </TouchableOpacity>
        </Animated.View>
            <View style={{ flex:0.7, alignItems: 'center',justifyContent:'center'}}>
            <View style={{ alignItems: 'center', paddingTop: 10 }}>
                <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={require("../assets/successtik.png")} ></Image>
              </View>
              <View style={{ paddingTop: 10, paddingBottom: 10,paddingLeft:20,paddingRight:20 }}>
                <Text style={{ fontSize: 15, color: '#454976', fontFamily: 'Exo2-Regular', textAlign: 'center' }}>{this.state.ResponseStatus}</Text>
              </View>
            </View>
            <View style={{flex:0.3,justifyContent:'flex-end'}}>
            <TouchableOpacity style={{height:100}}  onPress={this.BeginAction}>
                  <View >
                  <LinearGradient colors={['#41d99c','#34ddb2','#21e4d3']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}  style={{justifyContent:'center',alignItems:'center'}}>
          
          <Text style={{color:'#fff',fontSize:20,fontFamily:'Poppins-Medium'}}>Go to email</Text>
          
          </LinearGradient>
          </View>
           </TouchableOpacity>
           </View>
            </View>
          
                  
                
                    
          </DialogContent>
        </Dialog>   
                    <View style={{ flex: 0.4 }}>
                        <View style={{
                            justifyContent: 'center', alignItems: 'center', paddingTop: 20
                        }}>
                            <Image style={{ width: 150, height: 150, resizeMode: 'contain' }} source={require("../assets/app-logo.png")} ></Image>

                        </View>
                    </View>
                    <View style={{ flex: 0.7, position: 'relative' }}>

                        <Image
                            style={{ width: 500, height: 500, resizeMode: 'contain', opacity: 0.1, position: 'absolute', bottom: 30, }}
                            source={require('../assets/bgLogo.png')}
                        />

                        <KeyboardAvoidingView

                            behavior='padding'
                        >
                            <View style={{
                                paddingVertical: 10, marginLeft: 30, marginRight: 30
                            }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ resizeMode: 'contain', width: 20, height: 20 }} source={require("../assets/userIcon.png")} ></Image>
                                    </View>

                                    <TextInput placeholder="Enter email address"
                                        placeholderTextColor="#3d5498"
                                        onChangeText={(text) => this.setState({ Username: text })}
                                        style={styles.inputBox} />
                                </View>


                            </View>

                            <View style={{
                                paddingVertical: 50
                            }}>


                                <TouchableOpacity onPress={this.LoginAction}>
                                    <View>
                                        <LinearGradient colors={['#4476d7', '#4f92e9', '#61bff2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ padding: 15, justifyContent: 'center', alignItems: 'center' }}>

                                            <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold', fontFamily: "Poppins-Medium" }}>Resend-Email</Text>

                                        </LinearGradient>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                    </ImageBackground>


            </View>
</SafeAreaView>

        );
    }
    clickedItemText = (item) => {
        Alert.alert(item.Status)
    }
    LoginAction = () => {
        this.ForgotAction()
    }

    ForgotAction = () => {
        if (this.state.Username == '') {
            Alert.alert('Alert', "please enter email address")
        }
        else {
            this.Load()
            ForgotAPI(ResendEmail,this.state.Username, this.ForgotResult,this.error,this.networkerror)
        }

    }
    ForgotResult = (data) => {
        this.hide()
        if (data.status === 'success') {
           // this.props.navigation.navigate('ForgotPassword')
           this.setState({visibles:true,ResponseStatus:data.message})
          // setTimeout(this.nav,800)

        }
        else{
            Alert.alert(data.status,data.message)
        }
    }
    error=(errors)=>{
        this.hide()
        Alert.alert('Failure',errors)
    }
    networkerror=(errors)=>{
        this.hide()
        Alert.alert('Failure',errors)
    }


}



const styles = StyleSheet.create({

    Maincontainers: {
        flex: 1,
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
    },
    inputBox: {
        paddingVertical: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#3d5498',
        height: 45, width: "90%",
        fontFamily: 'Exo2-Regular'
    }
});