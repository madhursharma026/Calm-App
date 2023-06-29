import React from "react";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';


const BottomNav = ({ navigation, onScreen }) => {

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>

        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ alignItems: "center" }}>
          {onScreen !== 'HomeScreen' ?
            <Ionicons name="home-outline" size={20} style={{ color: `${onScreen === "HomeScreen" ? "white" : "darkgray"}` }} />
            :
            <Ionicons name="home" size={20} style={{ color: `${onScreen === "HomeScreen" ? "white" : "darkgray"}` }} />
          }
          <Text style={{ color: `${onScreen === "HomeScreen" ? "white" : "darkgray"}`, marginTop: 3, fontSize: 14 }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Discover")} style={{ alignItems: "center" }}>
          <Foundation name="magnifying-glass" size={20} style={{ color: `${onScreen === "DiscoverScreen" ? "white" : "darkgray"}` }} />
          <Text style={{ color: `${onScreen === "DiscoverScreen" ? "white" : "darkgray"}`, marginTop: 3, fontSize: 14 }}>Discover</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={{ alignItems: "center" }}>
          {onScreen !== 'ProfileScreen' ?
            <FontAwesome5 name="user" size={20} style={{ color: `${onScreen === "ProfileScreen" ? "white" : "darkgray"}` }} />
            :
            <FontAwesome name="user" size={20} style={{ color: `${onScreen === "ProfileScreen" ? "white" : "darkgray"}` }} />
          }
          <Text style={{ color: `${onScreen === "ProfileScreen" ? "white" : "darkgray"}`, marginTop: 3, fontSize: 14 }}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Premium")} style={{ alignItems: "center" }}>
          {onScreen !== 'PremiumScreen' ?
            <Feather name="star" size={20} style={{ color: `${onScreen === "PremiumScreen" ? "white" : "darkgray"}` }} />
            :
            <Entypo name="star" size={20} style={{ color: `${onScreen === "PremiumScreen" ? "white" : "darkgray"}` }} />
          }
          <Text style={{ color: `${onScreen === "PremiumScreen" ? "white" : "darkgray"}`, marginTop: 3, fontSize: 14 }}>Premium</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#200842',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 2,
  },
  iconWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 5
  }
});

