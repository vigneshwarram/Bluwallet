import * as React from 'react';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import { NavigationActions } from 'react-navigation'
import { View, StyleSheet, Image ,Text,ListView,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import { Alert } from 'react-native';
const image1 = require('./assets/cirpin.png')
const image2 = require('./assets/right_arrowhead.png')
var data =
 [{title:"Ground Maintenance audit reports for Nuneaton site Ver.2",image2:image2, image: image1,Sent:"sent 2",Unsent:"Unsent 0"}, 
 {title:"Ground Maintenance audit reports for Nuneaton site Ver.2",image2:image2, image: image1,Sent:"sent 2",Unsent:"Unsent 0"},
 {title:"Ground Maintenance audit reports for Nuneaton site Ver.2",image2:image2,image: image1,Sent:"sent 2",Unsent:"Unsent 0"},
 {title:"Ground Maintenance audit reports for Nuneaton site Ver.2",image2:image2,image:image1,Sent:"sent 2",Unsent:"Unsent 0"},
 {title:"Ground Maintenance audit reports for Nuneaton site Ver.2",image2:image2, image: image1,Sent:"sent 2",Unsent:"Unsent 0"},
 {title:"Ground Maintenance audit reports for Nuneaton site Ver.2",image2:image2, image:image1,Sent:"sent 2",Unsent:"Unsent 0"},
 {title:"Ground Maintenance audit reports for Nuneaton site Ver.2",image2:image2, image:image1,Sent:"sent 2",Unsent:"Unsent 0"},
 {title:"Ground Maintenance audit reports for Nuneaton site Ver.2",image2:image2, image: image1,Sent:"sent 2",Unsent:"Unsent 0"},
 {title:"Ground Maintenance audit reports for Nuneaton site Ver.2",image2:image2, image:image1,Sent:"sent 2",Unsent:"Unsent 0"},
 {title:"Ground Maintenance audit reports for Nuneaton site Ver.2",image2:image2, image: image1,Sent:"sent 2",Unsent:"Unsent 0"},
 {title:"Ground Maintenance audit reports for Nuneaton site Ver.2",image2:image2, image: image1,Sent:"sent 2",Unsent:"Unsent 0"},
 {title:"Ground Maintenance audit reports for Nuneaton site Ver.2",image2:image2, image: image1,Sent:"sent 2",Unsent:"Unsent 0"},
 {title:"Ground Maintenance audit reports for Nuneaton site Ver.2",image2:image2, image: image1,Sent:"sent 2",Unsent:"Unsent 0"},
 {title:"Ground Maintenance audit reports for Nuneaton site Ver.2",image2:image2, image: image1,Sent:"sent 2",Unsent:"Unsent 0"},
 {title:"Ground Maintenance audit reports for Nuneaton site Ver.2",image2:image2, image: image1,Sent:"sent 2",Unsent:"Unsent 0"},
 {title:"Ground Maintenance audit reports for Nuneaton site Ver.2",image2:image2, image: image1,Sent:"sent 2",Unsent:"Unsent 0"},
 {title:"Ground Maintenance audit reports for Nuneaton site Ver.2",image2:image2, image: image1,Sent:"sent 2",Unsent:"Unsent 0"},
]
export default class Surveys extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (  
      <ListView
      dataSource={this.state.dataSource}
      renderSeparator = {(sectionID, rowID) =>
          <View
            style={styles.separator}
            key={`${sectionID} - ${rowID}`}
          />}
      renderRow={(data) =>
        <TouchableOpacity onPress = { this.clickedItemText.bind(this, data)}>
      <View style={{flex:1,backgroundColor:'#f7f7f7'}}>
          <View style={{flex:1, flexDirection: 'row',justifyContent:'flex-start'}}>
       <Image source={data.image} style={{marginLeft:20,marginTop:10}}></Image>     
       <Text  style={{marginLeft:20,marginTop:10,width:'80%'}}>{data.title}</Text>     
       <View style={{flex:1,justifyContent:'flex-end'}}>
       <Image source={data.image2}></Image>
       </View>
      </View>
      <View style={{flex:1, flexDirection: 'row',justifyContent:'flex-start'}}>
     <Text style={{marginLeft:40,marginTop:10}}>{data.Sent}</Text>   
     <Text style={{marginLeft:10,marginTop:10}}>{data.Unsent}</Text>   
      </View>
      
      
  </View>
       
  </TouchableOpacity>  
       }
    />
    );
      }
      clickedItemText(clickedItemValue)
      {
          this.props.navigation.navigate('Details');
      }
}



const styles = StyleSheet.create({
 
  containers: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
    backgroundColor: '#fbfbfb',
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