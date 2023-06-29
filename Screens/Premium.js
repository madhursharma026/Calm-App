import React, { useState } from "react";
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import BottomNav from "../Components/BottomNav";
import { LinearGradient } from "expo-linear-gradient";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Premium = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar style="light" />
      <LinearGradient style={{ flex: 1 }} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={Platform.OS == "web" ? ["black", "black"] : ["#6462E0", "#60B1E7"]}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={{ marginTop: 10, marginLeft: 10 }}>
          <FontAwesome name="close" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, marginTop: 10, color: 'white', marginLeft: 15 }}>Unlock Calm</Text>
        <View style={styles.hr} />
        <View style={{ marginHorizontal: 20 }}>
          <AntDesign name="checkcircle" size={20} style={{ marginTop: 20 }} color="white"><Text style={{ fontSize: 18, marginTop: 10, color: 'white', marginLeft: 15 }}> An original Daily Calm every day</Text></AntDesign>
          <AntDesign name="checkcircle" size={20} style={{ marginTop: 20 }} color="white"><Text style={{ fontSize: 18, marginTop: 10, color: 'white', marginLeft: 15 }}> 100+ guided meditations covering aniety, focus, stress, gratitude and much more</Text></AntDesign>
          <AntDesign name="checkcircle" size={20} style={{ marginTop: 20 }} color="white"><Text style={{ fontSize: 18, marginTop: 10, color: 'white', marginLeft: 15 }}> Entire library of Sleep Stories with new stories added every week</Text></AntDesign>
          <AntDesign name="checkcircle" size={20} style={{ marginTop: 20 }} color="white"><Text style={{ fontSize: 18, marginTop: 10, color: 'white', marginLeft: 15 }}> Life-changing Calm Masterclasses taught by world-reowned experts</Text></AntDesign>
        </View>
        <View style={{ marginTop: 100, alignItems: 'center' }}>
          <Text style={{ fontSize: 18, marginTop: 10, color: 'white', marginLeft: 15 }}>₹5,100.00 for 1 Year</Text>
          <Text style={{ fontSize: 18, color: 'white', marginLeft: 15, fontWeight: 'bold' }}>Equivalent to ₹425.00/month</Text>
        </View>
        <TouchableOpacity style={styles.premiumBtn}>
            <Text style={styles.premiumBtnText}>Continue</Text>
          </TouchableOpacity>
        <BottomNav navigation={navigation} onScreen="PremiumScreen" />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Premium;

const styles = StyleSheet.create({
  hr: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10
  },
  premiumBtn: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 20
  },
  premiumBtnText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold'
  },
});

