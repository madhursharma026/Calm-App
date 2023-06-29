import React from "react";
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import BottomNav from "../Components/BottomNav";
import { LinearGradient } from "expo-linear-gradient";
import { Platform, SafeAreaView, StatusBar, Text, ScrollView, View, StyleSheet, Image, TouchableOpacity } from "react-native";


const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar style="light" />
        <LinearGradient style={{ flex: 1, marginBottom: 60 }} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={Platform.OS == "web" ? ["black", "black"] : ["#3a88d6", "#28266e"]}>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, color: 'white', marginLeft: 15, textAlign: 'center', marginBottom: 20 }}>Profile</Text>
          </View>
          <View style={styles.row}>
            <View style={{ marginLeft: 12 }}>
              <Text style={{ fontSize: 14, color: 'white', textAlign: 'center', marginBottom: 20, borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 50 }}>Dashboard</Text>
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text style={{ fontSize: 14, color: 'white', textAlign: 'center', marginBottom: 20, borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 50 }}>Library</Text>
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text style={{ fontSize: 14, color: 'white', textAlign: 'center', marginBottom: 20, borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 50 }}>History</Text>
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text style={{ fontSize: 14, color: 'white', textAlign: 'center', marginBottom: 20, borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 50 }}>Check-Ins</Text>
            </View>
          </View>

      <ScrollView>
          <View style={{ marginTop: 15, backgroundColor: '#6666FF', height: 130, marginHorizontal: 15, borderRadius: 10 }}>
            <View style={{ alignItems: 'center' }}>
              <Image source={{ uri: `https://cdn.pixabay.com/photo/2022/05/29/05/23/quotation-mark-7228450_640.png` }} style={{ width: 30, height: 30, resizeMode: 'contain', marginTop: 10 }} />
              <Text style={{ fontSize: 14, color: 'white', textAlign: 'center', marginTop: 8, }}>Meditation is the weight room for the mind.</Text>
              <Text style={{ fontSize: 14, color: 'white', textAlign: 'center', }}>ED LATIMORE</Text>
              <Text style={{ fontSize: 14, color: 'white', textAlign: 'center', marginTop: 8, }}>Jun 29</Text>
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 18, color: 'white', marginLeft: 15 }}>My Stats</Text>
          </View>
          <View style={{ marginTop: 15, backgroundColor: '#6666FF', height: 320, marginHorizontal: 15, borderRadius: 10 }}>
            <View style={{ alignItems: 'center' }}>
              <Image source={{ uri: `https://cdn2.iconfinder.com/data/icons/gamification-badges-1/300/streak_300-512.png` }} style={{ width: 100, height: 100, resizeMode: 'contain', marginTop: 20 }} />
              <View style={styles.row}>
                <View style={{ width: 100, alignItems: 'center', marginTop: 20 }}>
                  <AntDesign name="menu-fold" size={30} color="white" style={{ textAlign: 'center' }} />
                  <Text style={{ fontSize: 12, color: 'white', marginLeft: 15, textAlign: 'center' }}>Longest Streak</Text>
                  <Text style={{ fontSize: 12, color: 'white', marginLeft: 15 }}>0</Text>
                </View>
                <View style={{ width: 100, alignItems: 'center', marginTop: 20 }}>
                  <MaterialCommunityIcons name="safety-goggles" size={30} color="white" style={{ textAlign: 'center' }} />
                  <Text style={{ fontSize: 12, color: 'white', marginLeft: 15, textAlign: 'center' }}>Total Sessions</Text>
                  <Text style={{ fontSize: 12, color: 'white', marginLeft: 15 }}>0</Text>
                </View>
                <View style={{ width: 100, alignItems: 'center', marginTop: 20 }}>
                  <Ionicons name="timer-outline" size={30} color="white" style={{ textAlign: 'center' }} />
                  <Text style={{ fontSize: 12, color: 'white', marginLeft: 15, textAlign: 'center' }}>Mindful Minutes</Text>
                  <Text style={{ fontSize: 12, color: 'white', marginLeft: 15 }}>0</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.premiumBtn}>
              <Text style={styles.premiumBtnText}>Share My Stats</Text>
            </TouchableOpacity>
          </View>



          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 18, color: 'white', marginLeft: 15 }}>My Streaks</Text>
          </View>
          <View style={{ marginTop: 15, marginBottom: 20, backgroundColor: '#6666FF', height: 320, marginHorizontal: 15, borderRadius: 10 }}>
            <View style={{ alignItems: 'center' }}>
              <Image source={{ uri: `https://cdn2.iconfinder.com/data/icons/gamification-badges-1/300/streak_300-512.png` }} style={{ width: 100, height: 100, resizeMode: 'contain', marginTop: 20 }} />
              <View style={styles.row}>
                <View style={{ width: 100, alignItems: 'center', marginTop: 20 }}>
                  <AntDesign name="menu-fold" size={30} color="white" style={{ textAlign: 'center' }} />
                  <Text style={{ fontSize: 12, color: 'white', marginLeft: 15, textAlign: 'center' }}>Longest Streak</Text>
                  <Text style={{ fontSize: 12, color: 'white', marginLeft: 15 }}>0</Text>
                </View>
                <View style={{ width: 100, alignItems: 'center', marginTop: 20 }}>
                  <MaterialCommunityIcons name="safety-goggles" size={30} color="white" style={{ textAlign: 'center' }} />
                  <Text style={{ fontSize: 12, color: 'white', marginLeft: 15, textAlign: 'center' }}>Total Sessions</Text>
                  <Text style={{ fontSize: 12, color: 'white', marginLeft: 15 }}>0</Text>
                </View>
                <View style={{ width: 100, alignItems: 'center', marginTop: 20 }}>
                  <Ionicons name="timer-outline" size={30} color="white" style={{ textAlign: 'center' }} />
                  <Text style={{ fontSize: 12, color: 'white', marginLeft: 15, textAlign: 'center' }}>Mindful Minutes</Text>
                  <Text style={{ fontSize: 12, color: 'white', marginLeft: 15 }}>0</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.premiumBtn}>
              <Text style={styles.premiumBtnText}>Share My Stats</Text>
            </TouchableOpacity>
          </View>


      </ScrollView>
        </LinearGradient>
      <BottomNav navigation={navigation} onScreen="ProfileScreen" />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  premiumBtn: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 20
  },
  premiumBtnText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18
  },
});
