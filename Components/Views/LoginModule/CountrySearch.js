import React from 'react';
import registerUpdateApi from '../Api/RegisterUpdateApi';
import {CountryStateData} from '../Api/AddressData'
import { View, StyleSheet, Image,TextInput,NativeModules,Text,Alert,TouchableOpacity,Dimensions,} from 'react-native';
import AlphaScrollFlatList from 'alpha-scroll-flat-list';
const WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = 50;
import LinearGradient from 'react-native-linear-gradient';
export default class CountrySearch extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
    this.state = {
      dataSource:[],
      cityItems:["US Doller,Indian,Eutherium"],
      Coin: 'Us Doller',
      animate:false,
      registerDetails:'',
      data: [
        {
          "id": "5b588d4acb1fe7c48301af77",
          "name": "Iris Maddox",
          "company": "COLAIRE"
        },
        {
          "id": "5b588d4a7e7b0b916259c3f0",
          "name": "Jane Small",
          "company": "DUOFLEX"
        },
        {
          "id": "5b588d4a478f8056d34b794c",
          "name": "Dotson Ortiz",
          "company": "CYTREX"
        },
        {
          "id": "5b588d4a14ed168a2673c902",
          "name": "Hall Nguyen",
          "company": "ENTROFLEX"
        },
        {
          "id": "5b588d4a7549063dbb46df0b",
          "name": "Estrada Armstrong",
          "company": "BOILICON"
        },
        {
          "id": "5b588d4aa564689268c5472a",
          "name": "Josie Harmon",
          "company": "RODEMCO"
        },
        {
          "id": "5b588d4a00f614c7ae794fd3",
          "name": "Sondra Stevenson",
          "company": "OHMNET"
        },
        {
          "id": "5b588d4a69a2745fe601a688",
          "name": "Booker Trevino",
          "company": "OCEANICA"
        },
        {
          "id": "5b588d4a22d9a7800b157b0e",
          "name": "Lilly Luna",
          "company": "INCUBUS"
        },
        {
          "id": "5b588d4a04251caba4c9fb97",
          "name": "Bird Landry",
          "company": "ELECTONIC"
        },
        {
          "id": "5b588d4acb1fe7c48301af77",
          "name": "Iris Maddox",
          "company": "COLAIRE"
        },
        {
          "id": "5b588d4a7e7b0b916259c3f0",
          "name": "Jane Small",
          "company": "DUOFLEX"
        },
        {
          "id": "5b588d4a478f8056d34b794c",
          "name": "Dotson Ortiz",
          "company": "CYTREX"
        },
        {
          "id": "5b588d4a14ed168a2673c902",
          "name": "Hall Nguyen",
          "company": "ENTROFLEX"
        },
        {
          "id": "5b588d4a7549063dbb46df0b",
          "name": "Estrada Armstrong",
          "company": "BOILICON"
        },
        {
          "id": "5b588d4aa564689268c5472a",
          "name": "Josie Harmon",
          "company": "RODEMCO"
        },
        {
          "id": "5b588d4a00f614c7ae794fd3",
          "name": "Sondra Stevenson",
          "company": "OHMNET"
        },
        {
          "id": "5b588d4a69a2745fe601a688",
          "name": "Booker Trevino",
          "company": "OCEANICA"
        },
        {
          "id": "5b588d4a22d9a7800b157b0e",
          "name": "Lilly Luna",
          "company": "INCUBUS"
        },
        {
          "id": "5b588d4a04251caba4c9fb97",
          "name": "Bird Landry",
          "company": "ELECTONIC"
        },
       
      ],
      CountryId:'',
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
      app5color:'#fff',
      countryCode:''
    };
  }

  componentDidMount()
  {
    this.GetListCountryData()
  }

  GetListCountryData=()=>{
    CountryStateData('countryData',this.OnResponse)

  }

  OnResponse=async(data)=>{
    console.log('countryData',data)
    if(data.status==='success'){
      this.setState({dataSource:data.countryData})
       console.log('countryData',this.state.dataSource)
    }
    else
    {
      console.log('countryData', data)
      Alert.alert(data.status,data.message)
    }
  }

  renderItem ({item}) {

    return (
      //onPress={(item)=>this.setState({CountryId:item.countryCode})
      <TouchableOpacity onPress={this.CountryPicker.bind(this,item)}>
         <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.countryName}</Text>
    
      </View>
      </TouchableOpacity>
     
    );
  }

  keyExtractor (item) {
    return item.id;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:-10}}>
        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Image  style={{width: 6, height: 11,marginLeft:20,marginTop:30,resizeMode:'contain'}}  source={require("../assets/left-arrow.png")} ></Image> 
    </View>
    </TouchableOpacity>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#4e649f',opacity:1,fontSize:18,marginTop:20,fontFamily:'Exo2-Bold'}}>Country of Residence</Text>
    </View>
    <View></View>
    </View>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#4e649f',opacity:1,fontSize:12,marginTop:25,fontFamily:'Exo2-SemiBold'}}>Digital Currency are only available in </Text>
    <Text style={{color:'#4e649f',opacity:1,fontSize:12,marginTop:2,fontFamily:'Exo2-SemiBold'}}> select country</Text>

    <View style={{width:'80%',borderRadius:25,borderWidth:1,borderColor:'#d7dee8',marginTop:10,marginBottom:20, justifyContent:"center",backgroundColor:'#fff'}}>
<View style={{flexDirection:'row',marginLeft:20,justifyContent:'flex-start',alignItems:'center'}}>
<Image  style={{width: 20, height: 20}}  source={require("../assets/magnifying-glass.png")} ></Image> 
<TextInput
          style={{height: 40,padding:10,fontFamily:'Exo2-Regular'}}
          placeholderTextColor='#9ab8db'
          placeholder="Search"
          
        />
</View>
          </View>
          </View>
    <AlphaScrollFlatList
          keyExtractor={this.keyExtractor.bind(this)}
          data={this.state.dataSource.sort((prev, next) => prev.countryName.localeCompare(next.countryName))}
          //data={this.state.dataSource}
          renderItem={this.renderItem.bind(this)}
          scrollKey={'countryName'}
          reverse={false}
          itemHeight={ITEM_HEIGHT}
        />  
        <View style={{position:'absolute',bottom:0,width:'100%'}}>
        <TouchableOpacity onPress={this.BeginAction}>
        <View>
        <LinearGradient colors={['#41d99c','#34ddb2','#21e4d3']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{padding:15,justifyContent:'center',alignItems:'center',}}>
<Text style={{color:'#fff',fontSize:20,fontFamily:'Poppins-Medium'}}>Next</Text>
</LinearGradient>
        </View>
        </TouchableOpacity>
       
        <View>
<LinearGradient colors={['#354e91','#354e91','#354e91']}  style={{padding:15,alignItems:'center'}}>
<TouchableOpacity>
<Text style={{color:'#fff',opacity:1,fontSize:11,marginTop:2,fontFamily:'Exo2-Regular'}}>when you create a wallet,you accept</Text>
<View style={{flexDirection:'row',marginTop:2,}}>
<Text style={{color:'#5496ff',opacity:1,fontSize:11,marginTop:5,fontFamily:'Exo2-SemiBold'}}>Terms of Service</Text>
<Text style={{color:'#fff',opacity:1,fontSize:11,marginTop:5,marginLeft:8,fontFamily:'Exo2-Regular'}}>&</Text>
<Text style={{color:'#5496ff',opacity:1,fontSize:11,marginTop:5,marginLeft:8,fontFamily:'Exo2-SemiBold'}}>Politic and privacy</Text>
</View>

</TouchableOpacity>
</LinearGradient>
</View>
        </View>
       

    
      </View>
    );
  }
  BeginAction=()=>
  {
    if(this.state.CountryId==''){
      Alert.alert('Alert','Please select Country')
    }else{
      this.props.navigation.navigate('ProfileRegister',{'RegisterDetailsData':this.state.registerDetails});
      ///this.props.navigation.navigate('ProfileRegister');
    }
    
    //this.CountryPicker()
   
    
  }
  CountryPicker=async(item)=>
  {

    console.log('paraa',item.countryCode)
    if(item.countryCode!="undefined")
    {
      this.setState({CountryId:item.countryCode})
      this.setState({countryCode:item.id})
      //let params=this.props.navigation.state.params.RegisterDetails
      //params.CountryId=item.countryCode
     // console.log('paraa',params)
      // this.setState({registerDetails:
      //   {
      //     AddressLine1:params.AddressLine1,
      //     AddressLine2:params.AddressLine2,
      //     city:params.city,
      //     CountryId:params.CountryId,
      //     PostalCode:params.PostalCode,
      //   } })


      


     // console.log('paraa',this.state.registerDetails)



      //console.log('paraa',this.state.registerDetails)
     //this.load()
      //registerUpdateApi(params,this.RegisterUpdateResult)
      let countryData=
        {
          CountryId:item.countryCode,
          CountryCode:item.id,
         
        } 
        console.log('paraa',countryData.CountryCode)
      this.props.navigation.navigate('Address',{'CountryID':countryData});
   
    }
    else
    {
    Alert.alert('Alert','Please select Country')
    }
  }
  RegisterUpdateResult=(data)=>
  {
    console.log('paraa',data)
    //this.hide()
if(data.status=='success')
{
  console.log('paraa',data.status)
  this.props.navigation.navigate('ProfileRegister');
}
else
{
  Alert.alert('Invalid Details')
}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20
  },
  itemContainer: {
    width: WIDTH,
    flex: 1,
    flexDirection: 'column',
    height: ITEM_HEIGHT
  },
  itemTitle: {
    
    color: '#4e649f',
    padding: 5,marginLeft:20
  },
  itemSubtitle: {
    color: '#ddd',
    padding: 5,
    paddingTop: 0
  }
});