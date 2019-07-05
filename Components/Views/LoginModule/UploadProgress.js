import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,ScrollView,Dimensions,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,} from 'react-native';
import { Alert } from 'react-native';
import BackgroundIcon from '../../Background'
import { CircularProgressbar } from 'react-circular-progressbar';
import LinearGradient from 'react-native-linear-gradient';
const value = 0.66;
export default class UploadProgress  extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    
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
    //this.GetListData()
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
      
    <View style={{flex:1}}>
    <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />;
    </View>
        
 </LinearGradient> 

     </View>
      
    
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
      BeginAction=()=>{
        this.props.navigation.navigate('Address');
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