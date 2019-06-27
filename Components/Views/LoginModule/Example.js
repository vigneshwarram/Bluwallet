<ScrollView>
<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
<Animated.View>
<TouchableOpacity onPress={this.buyClick}>
<View >
<LinearGradient style={{backgroundColor:'transparent',width:130, height:130,borderWidth:1,borderColor:'#415b94',borderRadius:20,justifyContent:'center',alignItems:'center'}}
colors={[this.state.Buycolor1,this.state.Buycolor2,this.state.Buycolor3]}>
 <Image style={{width:80, height: 80,resizeMode:'contain',opacity:this.state.buyOpacity,tintColor:this.state.Buytintcolor}}   source={this.state.BuyIcon} ></Image>  
<Text style={{fontSize:12,fontWeight:'bold',color:this.state.Buytintcolor,fontFamily:''}}>To Buy</Text>
</LinearGradient>
</View>
</TouchableOpacity>
</Animated.View>
<TouchableOpacity onPress={this.SellClick}>
<View >
<LinearGradient style={{backgroundColor:'transparent',width:130,height:130,marginLeft:20, borderWidth:1,borderColor:'#415b94',borderRadius:20,justifyContent:'center',alignItems:'center'}}
colors={[this.state.sellcolor1,this.state.sellcolor2,this.state.sellcolor3]}>
<Image style={{width: 80, height: 80,resizeMode:'contain',opacity:this.state.sellOpacity,tintColor:this.state.selltintcolor}}   source={this.state.SellIcon} ></Image> 
<Text style={{fontSize:12,fontWeight:'bold',color:this.state.selltintcolor,fontFamily:''}}>To Sell</Text>
</LinearGradient>
</View>
</TouchableOpacity>
</View>  
<View style={{flexDirection:'row',padding:10,justifyContent:'space-between',marginLeft:20,marginRight:20}}>
<TouchableOpacity onPress={this.publicClick}>
<View >
<LinearGradient style={{backgroundColor:'transparent',width:130, height:130,borderWidth:1,borderColor:'#415b94',borderRadius:20,justifyContent:'center',alignItems:'center'}}
colors={[this.state.publishcolor1,this.state.publishcolor2,this.state.publishcolor3]}>
 <Image style={{width:80, height: 80,resizeMode:'contain',opacity:this.state.pupblicOpacity,tintColor:this.state.pupblictintcolor}}   source={this.state.PublicIcon} ></Image>  
<Text style={{fontSize:12,fontWeight:'bold',color:this.state.pupblictintcolor,fontFamily:''}}>Publications</Text>
</LinearGradient>

</View>
</TouchableOpacity>
<TouchableOpacity onPress={this.ExchangeClick}>
<View >
<LinearGradient style={{backgroundColor:'transparent',width:130,height:130,marginLeft:20, borderWidth:1,borderColor:'#415b94',borderRadius:20,justifyContent:'center',alignItems:'center'}}
colors={[this.state.Exchangecolor1,this.state.Exchangecolor2,this.state.Exchangecolor3]}>
 <Image style={{width: 80, height: 80,resizeMode:'contain',opacity:this.state.exchangeOpacity,tintColor:this.state.exchangetintcolor}}   source={this.state.ExchangeIcon} ></Image> 
<Text style={{fontSize:12,fontWeight:'bold',color:this.state.exchangetintcolor,fontFamily:''}}>Exchange</Text>
</LinearGradient>

</View>
</TouchableOpacity>
</View>  
<View  style={{justifyContent:'center',alignItems:'center', top:100,marginBottom:10,backgroundColor:'transparent',position:'absolute',left:150
    }}>
          <Image  style={{width: 100, height: 150,resizeMode:'contain'}}  source={require("./assets/tree.png")} ></Image> 
    </View>
    <View style={{flex:1,marginBottom:90}}>
    <FlatList  style={{marginTop:10}}
  ItemSeparatorComponent={this.space}
  data={this.state.dataSource}
      renderItem={({item,separators})  =>
    <TouchableOpacity onShowUnderlay={separators.highlight}
  onHideUnderlay={separators.unhighlight} onPress = { this.clickedItemText.bind(this, item)}>
  <View style={{marginLeft:30,marginRight:30, shadowOffset: { width: 10, height: 10 },

borderBottomWidth: 0,
shadowColor: '#394d88',
shadowOffset: { width: 0, height: 12 },
shadowOpacity: 0.8,
shadowRadius: 2,
elevation: 24,
borderRadius:25}}>
<LinearGradient
colors={['#4262B5', '#3A549B','#314279','#2C3765','#2A335E']}  style={{ borderRadius:25}}>
    <View style={{alignItems:'center',flexDirection:'row',padding:15}}>
    {(
      (item.Status!='Completed')?<View style={{
 justifyContent:'center',alignItems:"center"}} >
      <Image  style={{width: 30, height: 30}}  source={require("./assets/exchange.png")} ></Image>  
      </View>:  <View style={{
 justifyContent:'center',alignItems:"center"}} >
      <Image  style={{width: 30, height: 30}}  source={require("./assets/exchange.png")} ></Image>  
      </View>

    )}
  
      <View style={{flexDirection:'column',marginLeft:30}}>
      <View style={{flex:1, flexDirection: 'row',justifyContent:'space-between'}}>            
     <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#fff':'#fff',fontFamily:''}}>{(item.Status!='Completed')?'Exchanged':"Exchanged"}</Text>       
 <View style={{flexDirection:'row'}}>
 <Image style={{width: 25,marginTop:10, height: 25}}   source={require("./assets/plusblue.png")} ></Image>    
 <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#fff':'#fff',fontFamily:''}}>$ 9060</Text> 
 </View>
    
 </View>  
 <View style={{flex:1, flexDirection:'row',justifyContent:'space-between'}}>

        
     <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#4d6bc1':'#4d6bc1',fontWeight:'bold',fontFamily:''}}>Feb 23 2019  . 11.05</Text>       
 
  <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#4d6bc1':'#4d6bc1',fontFamily:''}}>5.4587ETH</Text>    
 </View>  
      </View>
     
    </View>
</LinearGradient>
</View>
   
</TouchableOpacity>  
   }
/>
    </View>


<View
style={{
marginLeft:30,marginRight:30,
marginTop:10,
borderBottomColor: '#000000',marginBottom:10,
borderBottomWidth: 1,
}}
/>  

</ScrollView> <ScrollView>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
    <Animated.View>
    <TouchableOpacity onPress={this.buyClick}>
    <View >
    <LinearGradient style={{backgroundColor:'transparent',width:130, height:130,borderWidth:1,borderColor:'#415b94',borderRadius:20,justifyContent:'center',alignItems:'center'}}
   colors={[this.state.Buycolor1,this.state.Buycolor2,this.state.Buycolor3]}>
     <Image style={{width:80, height: 80,resizeMode:'contain',opacity:this.state.buyOpacity,tintColor:this.state.Buytintcolor}}   source={this.state.BuyIcon} ></Image>  
    <Text style={{fontSize:12,fontWeight:'bold',color:this.state.Buytintcolor,fontFamily:''}}>To Buy</Text>
   </LinearGradient>
    </View>
    </TouchableOpacity>
    </Animated.View>
    <TouchableOpacity onPress={this.SellClick}>
    <View >
    <LinearGradient style={{backgroundColor:'transparent',width:130,height:130,marginLeft:20, borderWidth:1,borderColor:'#415b94',borderRadius:20,justifyContent:'center',alignItems:'center'}}
   colors={[this.state.sellcolor1,this.state.sellcolor2,this.state.sellcolor3]}>
    <Image style={{width: 80, height: 80,resizeMode:'contain',opacity:this.state.sellOpacity,tintColor:this.state.selltintcolor}}   source={this.state.SellIcon} ></Image> 
    <Text style={{fontSize:12,fontWeight:'bold',color:this.state.selltintcolor,fontFamily:''}}>To Sell</Text>
    </LinearGradient>
    </View>
    </TouchableOpacity>
    </View>  
    <View style={{flexDirection:'row',padding:10,justifyContent:'space-between',marginLeft:20,marginRight:20}}>
    <TouchableOpacity onPress={this.publicClick}>
    <View >
    <LinearGradient style={{backgroundColor:'transparent',width:130, height:130,borderWidth:1,borderColor:'#415b94',borderRadius:20,justifyContent:'center',alignItems:'center'}}
   colors={[this.state.publishcolor1,this.state.publishcolor2,this.state.publishcolor3]}>
     <Image style={{width:80, height: 80,resizeMode:'contain',opacity:this.state.pupblicOpacity,tintColor:this.state.pupblictintcolor}}   source={this.state.PublicIcon} ></Image>  
    <Text style={{fontSize:12,fontWeight:'bold',color:this.state.pupblictintcolor,fontFamily:''}}>Publications</Text>
   </LinearGradient>
    
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={this.ExchangeClick}>
    <View >
    <LinearGradient style={{backgroundColor:'transparent',width:130,height:130,marginLeft:20, borderWidth:1,borderColor:'#415b94',borderRadius:20,justifyContent:'center',alignItems:'center'}}
   colors={[this.state.Exchangecolor1,this.state.Exchangecolor2,this.state.Exchangecolor3]}>
     <Image style={{width: 80, height: 80,resizeMode:'contain',opacity:this.state.exchangeOpacity,tintColor:this.state.exchangetintcolor}}   source={this.state.ExchangeIcon} ></Image> 
    <Text style={{fontSize:12,fontWeight:'bold',color:this.state.exchangetintcolor,fontFamily:''}}>Exchange</Text>
   </LinearGradient>
    
    </View>
    </TouchableOpacity>
    </View>  
    <View  style={{justifyContent:'center',alignItems:'center', top:100,marginBottom:10,backgroundColor:'transparent',position:'absolute',left:150
        }}>
              <Image  style={{width: 100, height: 150,resizeMode:'contain'}}  source={require("./assets/tree.png")} ></Image> 
        </View>
        <View style={{flex:1,marginBottom:90}}>
        <FlatList  style={{marginTop:10}}
      ItemSeparatorComponent={this.space}
      data={this.state.dataSource}
          renderItem={({item,separators})  =>
        <TouchableOpacity onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight} onPress = { this.clickedItemText.bind(this, item)}>
      <View style={{marginLeft:30,marginRight:30, shadowOffset: { width: 10, height: 10 },
  
  borderBottomWidth: 0,
  shadowColor: '#394d88',
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 24,
  borderRadius:25}}>
  <LinearGradient
    colors={['#4262B5', '#3A549B','#314279','#2C3765','#2A335E']}  style={{ borderRadius:25}}>
        <View style={{alignItems:'center',flexDirection:'row',padding:15}}>
        {(
          (item.Status!='Completed')?<View style={{
     justifyContent:'center',alignItems:"center"}} >
          <Image  style={{width: 30, height: 30}}  source={require("./assets/exchange.png")} ></Image>  
          </View>:  <View style={{
     justifyContent:'center',alignItems:"center"}} >
          <Image  style={{width: 30, height: 30}}  source={require("./assets/exchange.png")} ></Image>  
          </View>

        )}
      
          <View style={{flexDirection:'column',marginLeft:30}}>
          <View style={{flex:1, flexDirection: 'row',justifyContent:'space-between'}}>            
         <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#fff':'#fff',fontFamily:''}}>{(item.Status!='Completed')?'Exchanged':"Exchanged"}</Text>       
     <View style={{flexDirection:'row'}}>
     <Image style={{width: 25,marginTop:10, height: 25}}   source={require("./assets/plusblue.png")} ></Image>    
     <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#fff':'#fff',fontFamily:''}}>$ 9060</Text> 
     </View>
        
     </View>  
     <View style={{flex:1, flexDirection:'row',justifyContent:'space-between'}}>
 
            
         <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#4d6bc1':'#4d6bc1',fontWeight:'bold',fontFamily:''}}>Feb 23 2019  . 11.05</Text>       
     
      <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#4d6bc1':'#4d6bc1',fontFamily:''}}>5.4587ETH</Text>    
     </View>  
          </View>
         
        </View>
</LinearGradient>
  </View>
       
  </TouchableOpacity>  
       }
    />
        </View>

   
   <View
  style={{
    marginLeft:30,marginRight:30,
    marginTop:10,
    borderBottomColor: '#000000',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>  
  
    </ScrollView>