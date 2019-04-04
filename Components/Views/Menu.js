import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {TouchableOpacity,Image ,Text, View,StyleSheet} from 'react-native';
import {createDrawerNavigator,createStackNavigator,DrawerItems} from 'react-navigation';
import Profile from './Profile';
import Surveys from './Surveys';
import Help from './Help';
import Settings from './Settings';
import Login from './Login';
const ProfileStack = createStackNavigator({
  Profiles: {
    screen: Profile,header:null,
    
    navigationOptions: ({ navigation }) => ({
    
      title: 'Profile',  // Title to appear in status bar
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTitleStyle: {
          color:'#fff',
          textAlign: 'center',
          flexGrow:1,
          alignSelf:'center',
      },
      headerRight: (<TouchableOpacity style={{alignContent:'flex-start'}}>
      <View style={{flexDirection:'row'}}>
      </View>   
      </TouchableOpacity>),
      headerLeft: (
        <TouchableOpacity style={{alignContent:'flex-start'}} onPress={ () => navigation.toggleDrawer() }>
        <View style={{flexDirection:'row'}}>
        <Image source={require('./Menu/menu.png')} style={{marginLeft:10}} ></Image>
        </View>   
        </TouchableOpacity>
      ),
    })
  },
   
});

const SurveyStack = createStackNavigator({
  Profiles: {
    screen: Surveys,
    navigationOptions: ({ navigation }) => ({
      title: 'SURVEY',  // Title to appear in status bar
      headerTitleStyle: {
        color:'#7f7f7f',
          textAlign: 'center',
          flexGrow:1,
          alignSelf:'center',
      },
      headerRight: (<TouchableOpacity style={{alignContent:'flex-start'}}>
      <View style={{flexDirection:'row'}}>
      <Image source={require('./assets/up_down.png')} style={{marginRight:10}} ></Image>
      </View>   
      </TouchableOpacity>),
      headerLeft: (
        <TouchableOpacity style={{alignContent:'flex-start'}} onPress={ () => navigation.toggleDrawer() }>
        <View style={{flexDirection:'row'}}>
        <Image source={require('./Menu/menu.png')} style={{marginLeft:10}} ></Image>
        </View>   
        </TouchableOpacity>
      ),
    })
  },
});
const SettingsStack = createStackNavigator({
  Profiles: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: 'SETTINGS',  // Title to appear in status bar
      headerTitleStyle: {
        color:'#7f7f7f',
          textAlign: 'center',
          flexGrow:1,
          alignSelf:'center',
      },
      headerRight: (<TouchableOpacity style={{alignContent:'flex-start'}}>
      <View style={{flexDirection:'row'}}>
      <Image source={require('./assets/up_down.png')} style={{marginRight:10}} ></Image>
      </View>   
      </TouchableOpacity>),
      headerLeft: (
        <TouchableOpacity style={{alignContent:'flex-start'}} onPress={ () => navigation.toggleDrawer() }>
        <View style={{flexDirection:'row'}}>
        <Image source={require('./Menu/menu.png')} style={{marginLeft:10}} ></Image>
        </View>   
        </TouchableOpacity>
      ),
    })
  },
});
const HelpStack = createStackNavigator({
  Profiles: {
    screen: Help,header:null,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
    navigationOptions: ({ navigation }) => ({
    
      title: 'HELP',  // Title to appear in status bar
      headerTitleStyle: {
        color:'#7f7f7f',
          textAlign: 'center',
          flexGrow:1,
          alignSelf:'center',
      },
      
      headerRight: (<View/>),
      headerLeft: (
        <TouchableOpacity style={{alignContent:'flex-start'}} onPress={ () => navigation.toggleDrawer() }>
        <View style={{flexDirection:'row'}}>
        <Image source={require('./Menu/menu.png')} style={{marginLeft:10}} ></Image>
        </View>   
        </TouchableOpacity>
      ),
    })
  },
   
  
});
const TermsStack = createStackNavigator({
  Profiles: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: 'TERMS',  // Title to appear in status bar
      headerTitleStyle: {
        color:'#7f7f7f',
          textAlign: 'center',
          flexGrow:1,
          alignSelf:'center',
      },
      headerRight: (<View/>),
      headerLeft: (
        <TouchableOpacity style={{alignContent:'flex-start'}} onPress={ () => navigation.toggleDrawer() }>
        <View style={{flexDirection:'row'}}>
        <Image source={require('./Menu/menu.png')} style={{marginLeft:10}} ></Image>
        </View>   
        </TouchableOpacity>
      ),
    })
  },
});
const DrawerContent = (props) => (
  
  <View style={{flex:1}}>
    <View
      style={{
        backgroundColor: 'Transparent',
        height: 200,
      }}
    >
      <Image style={{height:205,width:300}} source={require('./assets/menu_splash.jpg')}></Image>
    </View>
    <DrawerItems {...props} />
    <View style={{flex:1,justifyContent:"center",
       marginBottom: 50}}>
    </View>
  </View>
  
)
const AppDrawerNavigator=createDrawerNavigator({

  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      drawerLabel: "Home",
      drawerIcon: () => (
        <Image
          source={require("./assets/home.png")}
          resizeMode="contain"
          style={{ width: 20, height: 20}}
        />
      )
    }
  },
    Surveys: {
      screen: SurveyStack,
      navigationOptions: {
        drawerLabel: "Pay EMI & Dues Now",
        drawerIcon: () => (
          <Image
            source={require("./assets/emi.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20}}
          />
        )
      }
      
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        drawerLabel: "Our Products",
        drawerIcon: () => (
          <Image
            source={require("./assets/products.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20}}
          />
        )
      }
      
    },
    Help: {
      screen: HelpStack,
      navigationOptions: {
        drawerLabel: "About us",
        drawerIcon: () => (
          <Image
            source={require("./assets/about.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20}}
          />
        )
      }
      
    },
      Terms: {
        screen: TermsStack,
        navigationOptions: {
          drawerLabel: "Login",
          drawerIcon: () => (
            <Image
              source={require("./assets/login.png")}
              resizeMode="contain"
              style={{ width: 20, height: 20}}
            />
          )
        }
        
      },
      
},
{
  drawerWidth: 300,
  drawerPosition: 'left', 
  contentComponent: DrawerContent,
  drawerBackgroundColor: '#fbfbfb',
  color:'#000'
  //backgroundColor:'transparent',
  // style: {
  // //backgroundColor: 'transparent',
  // flex: 1
  // },
  // contentOptions: {
  //     style: {
  //     backgroundColor: 'transparent',
  //     flex: 1
  // }


},
{
  style: {
      backgroundColor: 'transparent',
          flex:1
  }
}
)
const AppNavigator = createStackNavigator({
  Drawer: { screen: AppDrawerNavigator },
}, {
  headerMode: 'none',
});

export default class Menu extends Component {
  
  static navigationOptions = {
    header: null,
}
  render () {
  
    return (
    
       <AppNavigator/>
    );
  }
}
const styles = StyleSheet.create({

  container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
});

