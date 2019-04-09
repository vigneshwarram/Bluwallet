import React, { Component } from 'react'
import { Animated, View,Text, StyleSheet,TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import firebase from 'react-native-firebase'
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';


const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10

const images = [
  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
  'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
]

export default class Profile extends Component {

  numItems = images.length
  itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
  animVal = new Animated.Value(0)

  render() {
    const{navigate}=this.props.navigation
    firebase.messaging().getToken()
    .then(fcmToken => {
      if (fcmToken) {
        Console.log('fcm '+fcmToken.toString())
      } else {
        // user doesn't have a device token yet
      } 
    });
    const items = [
      { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
      { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
      { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
      { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
      { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
      { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' }
    ];
    let imageArray = []
    let barArray = []
    images.forEach((image, i) => {
      console.log(image, i)
      const thisImage = (
        <Image
          key={`image${i}`}
          source={{uri: image}}
          style={{ width: deviceWidth }}
        />
      )
      imageArray.push(thisImage)

      const scrollBarVal = this.animVal.interpolate({
        inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
        outputRange: [-this.itemWidth, this.itemWidth],
        extrapolate: 'clamp',
      })

      const thisBar = (
        <View
          key={`bar${i}`}
          style={[
            styles.track,
            {
              width: 10,
              marginLeft: i === 0 ? 0 : BAR_SPACE,
            },
          ]}
        >
          <Animated.View

            style={[
              styles.bar,
              {
                width: 10,
                transform: [
                  { translateX: scrollBarVal },
                ],
              },
            ]}
          />
        </View>
      )
      barArray.push(thisBar)
    })

    return (
      <View
        style={styles.container}
        flex={1}
      >
        <ScrollView
        style={{height:'60%'}}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          pagingEnabled
          onScroll={
            Animated.event(
              [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
            )
          }
        >

          {imageArray}

        </ScrollView>
     
        <View style={{ width: '90%', 
      height: "40%", 
      backgroundColor: '#ffffff00', 
      justifyContent: 'center', 
      alignItems: 'center',
      
      position: 'absolute',
      bottom:100
      }}>
      <View style={{flexDirection:'row'}}>
      <View style={styles.SquareShapeView}>
     <Image  style={{width: 25, height: 25}} source={require('./assets/sign.png')}></Image>   
     <Text style={{ fontSize: 8,fontWeight:'bold'}}>SIGN IN TO VIEW DETAILS</Text>     
           </View>
           <View style={styles.SquareShapeView}>
     <Image  style={{width: 25, height: 25}} source={require('./assets/loan.png')}></Image>   
     <Text style={{ fontSize: 8,fontWeight:'bold'}}>APPLY FOR A LOAN</Text>     
           </View>
           <View style={styles.SquareShapeView}>
     <Image  style={{width: 25, height: 25}} source={require('./assets/loan.png')}></Image>   
     <Text style={{ fontSize: 8,fontWeight:'bold'}}>FREE CREDIT REPORT</Text>     
           </View>
      </View>
      <View style={{flexDirection:'row'}}>
      <View style={styles.SquareShapeView}>
     <Image  style={{width: 25, height: 25}} source={require('./assets/pay.png')}></Image>   
     <Text style={{ fontSize: 8,fontWeight:'bold'}}>PAY YOUR EMI AND DUES</Text>     
           </View>
           <View style={styles.SquareShapeView}>
           <TouchableOpacity onPress={()=>{navigate("Chat")}}>
           <Image  style={{width: 25, height: 25}} source={require('./assets/customer.png')}></Image>   
     <Text style={{ fontSize: 8,fontWeight:'bold'}}>CUSTOMER SERVICE</Text>     
           </TouchableOpacity> 
           </View>
           <View style={styles.SquareShapeView}>
     <Image  style={{width: 25, height: 25}} source={require('./assets/locate.png')}></Image>   
     <Text style={{ fontSize: 8,fontWeight:'bold'}}>LOCATE BRANCHES</Text>     
           </View>
      </View>
      
    </View>
                   
               
           
        <View
          style={styles.barContainer}
        >
          {barArray}
        </View>
        </View>
   
     
    )
  }
}


const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  SquareShapeView: {
    justifyContent:'center',
    alignItems:'center',
    width: "35%",
    borderWidth: 0.3,
    height: 130,
    backgroundColor: '#fff'
 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 40,
    flexDirection: 'row',
  },
  track: {
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 2,
  },
  bar: {
    backgroundColor: '#5294d6',
    height: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
})