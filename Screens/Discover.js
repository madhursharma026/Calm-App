import React from "react";
import TopCards from "../Components/TopCards";
import MoreCards from "../Components/MoreCards";
import BottomNav from "../Components/BottomNav";
import { Foundation } from "@expo/vector-icons";
import CardsOptions from "../Components/CardsOptions";
import { LinearGradient } from "expo-linear-gradient";
import BrowseByGoal from "../Components/BrowseByGoal";
import { Input, Icon, Center, NativeBaseProvider } from "native-base";
import { Platform, SafeAreaView, StatusBar, Text, ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";

const Discover = ({ navigation }) => {

  const TopCardsDetails = [
    {
      id: 1,
      image: 'https://static.wixstatic.com/media/27253c_e1c7c275c24f4eaeaf73168ea43818e0~mv2.jpg/v1/fill/w_640,h_582,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/27253c_e1c7c275c24f4eaeaf73168ea43818e0~mv2.jpg',
      title1: 'Daily',
      title2: 'Calm',
    },
    {
      id: 2,
      image: 'https://goop-img.com/wp-content/uploads/2021/11/Hero-1024-780-1-1024x780.png',
      title1: 'Daily',
      title2: 'Jay',
    },
    {
      id: 3,
      image: 'https://www.shutterstock.com/image-photo/hand-gives-flowers-marguerites-love-260nw-502631392.jpg',
      title1: 'Daily',
      title2: 'Tip',
    },
    {
      id: 4,
      image: 'https://i.ytimg.com/vi/NfLfC7oaAos/maxresdefault.jpg',
      title1: 'Daily',
      title2: 'Move',
    },
    {
      id: 5,
      image: 'data:image/jpeg;base64,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',
    },
  ];

  const CardsOptionsDetails1 = [
    {
      id: 1,
      title: 'Sleep'
    },
    {
      id: 2,
      title: 'Meditation'
    },
    {
      id: 3,
      title: 'Music'
    },
    {
      id: 4,
      title: 'Soundscape'
    },
    {
      id: 5,
      title: 'Wisdom'
    },
  ]

  const CardsOptionsDetails2 = [
    {
      id: 1,
      title: 'Dailies'
    },
    {
      id: 2,
      title: 'For Work'
    },
    {
      id: 3,
      title: 'Kids'
    },
    {
      id: 4,
      title: 'Movements'
    },
    {
      id: 5,
      title: 'Mindful Tools'
    },
  ]

  const RecommendedCardsDetails = [
    {
      id: 1,
      image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/floating-candles-in-a-zen-background-nightanddayimages.jpg',
      title: 'Reduce Stress & Anxiety',
      description: 'Relieve feelings if axiety and tension...',
    },
    {
      id: 2,
      image: 'https://www.almondcare.co.uk/wp-content/uploads/2023/01/shutterstock_1720701946.jpg',
      title: 'Coping with the weight of the world',
      description: 'Talks and practices to hekp navigate...',
    },
    {
      id: 3,
      image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/floating-candles-in-a-zen-background-nightanddayimages.jpg',
      title: 'Reduce Stress & Anxiety',
      description: 'Relieve feelings if axiety and tension...',
    },
    {
      id: 4,
      image: 'https://www.almondcare.co.uk/wp-content/uploads/2023/01/shutterstock_1720701946.jpg',
      title: 'Coping with the weight of the world',
      description: 'Talks and practices to hekp navigate...',
    },
    {
      id: 5,
      image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/floating-candles-in-a-zen-background-nightanddayimages.jpg',
      title: 'Reduce Stress & Anxiety',
      description: 'Relieve feelings if axiety and tension...',
    },
    {
      id: 6,
      image: 'https://www.almondcare.co.uk/wp-content/uploads/2023/01/shutterstock_1720701946.jpg',
      title: 'Coping with the weight of the world',
      description: 'Talks and practices to hekp navigate...',
    },
  ];

  const BrowseByGoalDetails = [
    {
      id: 1,
      image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/floating-candles-in-a-zen-background-nightanddayimages.jpg',
      title: 'Fall Asleep',
    },
    {
      id: 2,
      image: 'https://www.almondcare.co.uk/wp-content/uploads/2023/01/shutterstock_1720701946.jpg',
      title: 'Reduce Stress & Anxiety',
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar style="light" />
      <LinearGradient style={{ flex: 1 }} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={Platform.OS == "web" ? ["black", "black"] : ["#3a88d6", "#28266e"]}>

        <View style={{ marginTop: 15, marginBottom: 30, height: 70 }}>
          <Text style={{ fontSize: 18, color: 'white', marginLeft: 15, textAlign: 'center', marginBottom: 20 }}>Discover</Text>
          <NativeBaseProvider>
            <Center flex={1} px="3">
              <Input w={{ base: "98%", md: "25%" }} variant="rounded" InputLeftElement={<Icon as={<Foundation name="magnifying-glass" />} size={5} ml="2" color="white" />} placeholder="Title, narrator, artist or topic" style={{ fontSize: 16 }} />
            </Center>
          </NativeBaseProvider>
        </View>
        <ScrollView style={{ marginBottom: 60 }}>

          <Text style={{ fontSize: 16, color: 'white', marginLeft: 22, marginBottom: 10 }}>Today's Dailies</Text>
          <Text style={{ fontSize: 16, color: 'white', marginRight: 22, marginTop: -30, marginBottom: 10, textAlign: 'right' }}>See all</Text>
          <MoreCards list={RecommendedCardsDetails} style={{ marginLeft: -30 }} />

          <View style={styles.hr} />

          <TouchableOpacity style={styles.premiumBtn}>
            <Text style={styles.premiumBtnText}>Unlock Calm Premium</Text>
          </TouchableOpacity>

          <View style={styles.hr} />

          <CardsOptions list={CardsOptionsDetails1} style={{ marginLeft: -30, }} />
          <CardsOptions list={CardsOptionsDetails2} style={{ marginLeft: -30, }} />

          <View style={styles.hr} />

          <TopCards list={TopCardsDetails} style={{ marginLeft: -30 }} />

          <View style={{ marginTop: 5 }}>

            <View style={styles.hr} />

            <Text style={{ fontSize: 16, color: 'white', marginLeft: 22, marginBottom: 10 }}>Browse by Goal</Text>
            <Text style={{ fontSize: 16, color: 'white', marginRight: 22, marginTop: -30, marginBottom: 10, textAlign: 'right' }}>See all</Text>
            <BrowseByGoal list={BrowseByGoalDetails} style={{ marginLeft: -30 }} />
            <View style={{ marginTop: -30 }}>
              <BrowseByGoal list={BrowseByGoalDetails} style={{ marginLeft: -30 }} />
            </View>

            <View style={{ marginTop: -40 }}>
              <View style={styles.hr} />
              <Text style={{ fontSize: 16, color: 'white', marginLeft: 22, marginBottom: 10 }}>Featured Collection</Text>
              <Text style={{ fontSize: 16, color: 'white', marginRight: 22, marginTop: -30, marginBottom: 10, textAlign: 'right' }}>See all</Text>
              <BrowseByGoal list={BrowseByGoalDetails} style={{ marginLeft: -30 }} />
              <View style={{ marginTop: -30 }}>
                <BrowseByGoal list={BrowseByGoalDetails} style={{ marginLeft: -30 }} />
              </View>
              <View style={{ marginTop: -30 }}>
                <BrowseByGoal list={BrowseByGoalDetails} style={{ marginLeft: -30 }} />
              </View>
            </View>

          </View>
        </ScrollView>
      </LinearGradient>
      <BottomNav navigation={navigation} onScreen="DiscoverScreen" />
    </SafeAreaView>
  );
};

export default Discover;

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
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10
  },
  premiumBtnText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18
  },
});

