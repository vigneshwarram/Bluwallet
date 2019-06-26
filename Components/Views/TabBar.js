import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import posed from "react-native-pose";
import LinearGradient from 'react-native-linear-gradient';
const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 6;
const SpotLight = posed.View({
  route0: { x: 0 },
  route1: { x: tabWidth *1},
  route2: { x: tabWidth * 2 },
  route3: { x: tabWidth * 3 },
  route4: { x: tabWidth * 4 },
  route5: { x: tabWidth * 5 }
});

const Scaler = posed.View({
  active: { scale: 1.25 },
  inactive: { scale: 1 }
});

const S = StyleSheet.create({
  container: {
    elevation: 5,borderTopRightRadius:20,borderTopLeftRadius:20,height:80,width:'100%',justifyContent:'center',alignItems:'center',flexDirection:'row',
  },
  tabButton: { flex: 1},
  spotLight: {
    width: tabWidth,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  spotLightInner: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20
  },
  scaler: {alignItems: "center", justifyContent: "center" }
});

const TabBar = props => {
  const {
    renderIcon,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    getAccessibilityLabel,
    navigation
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;

  return (
    <View style={{position:'absolute', bottom:0,
    height: 80,width:'100%',opacity:0.9}}>
    <LinearGradient colors= {['#2D3CAD','#4781DF','#529DF3','#7ED5F6','#97F5F9']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}  style={S.container}>
      <View style={StyleSheet.absoluteFillObject}>
        <SpotLight style={S.spotLight} pose={`route${activeRouteIndex}`}>
          <View style={S.spotLightInner} />
        </SpotLight>
      </View>

      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

        return (
          <TouchableOpacity
            key={routeIndex}
            style={S.tabButton}
            onPress={() => {
              onTabPress({ route });
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            <Scaler
              pose={isRouteActive ? "active" : "inactive"}
              style={S.scaler}
            >
              {renderIcon({ route, focused: isRouteActive, tintColor })}
            </Scaler>
          </TouchableOpacity>
        );
      })}
      </LinearGradient>
    </View>
  );
};

export default TabBar;