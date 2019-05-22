import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,Picker,NativeModules,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,} from 'react-native';
import { Alert } from 'react-native';
const { UIManager } = NativeModules;
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import LinearGradient from 'react-native-linear-gradient';
import { FlatList } from 'react-native-gesture-handler';
 class logo extends React.Component {
  render() {
    return (  
   
         <View style={styles.Container}>       
     <Image
                style={styles.img}
                source={require('./Views/assets/logo.png')}
            />            
      </View>
    
    );
      }
}

const styles = StyleSheet.create({
 Container:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems:'center',
    justifyContent: 'flex-start'
 },
   img: {
    width: '30%',
    height: '31%',
    resizeMode: 'cover',
  },
  
  });
export default  logo