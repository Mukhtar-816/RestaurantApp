import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../../constants/Color'
import Header1 from '../../components/Header1.component'
import { heightToDp, widthToDp } from '../../constants/DimensionsApi'
import Group1 from '../../assets/Svgs/Group1'
import Ellipse from '../../assets/Svgs/Ellipse'
import Image from '../../assets/Svgs/Image'
import OnboardingItem from '../../components/OnboardingItem.component'
import Button from '../../components/Button.component'
import stripe from '../../assets/Svgs/stripe'

const ImagesBoarding = ({ ...props }) => {

  const currentIndex = 2;

  return (
    <FlatList
      contentContainerStyle={{ columnGap: 10 }}
      horizontal
      data={props.Data}
      renderItem={({ item }) => (
        <View style={{ height: 8, width: 8, borderRadius: 10, backgroundColor: item.id === currentIndex ? Colors.accent : Colors.grey2 }}></View>
      )} />
  )
};






const Onboarding2 = ({ navigation }) => {

  //Data 
  const Images = [
    { id: 3, Txt: 'Hover around the menu and select to fulfil your hunger', Image: 'https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg' }
  ];


  //functions
  function handleNext() {
    // navigate to signup screen
    navigation.navigate('SignUp');
  };



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.grey1 }}>
      <View style={{ flex: 1 }}>

        <Header1 onRightPress={() => { navigation.navigate('Home') }} />


        {/* Carosel Images View */}
        <View style={{ alignItems: 'center', flex: 1 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            data={Images}
            renderItem={({ item }) => (<OnboardingItem Item={item} />)}
          />

          <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: widthToDp(6), gap: 5 }}>
            <Text style={{ color: Colors.primary, fontWeight: 'bold', fontSize: 25 }}>Get your Orders...!</Text>
            <Text style={{ color: Colors.gray, textAlign: 'center', fontSize: 15 }}>Sign Up to become our cutomer, order and enjoy your meal at home.</Text>
          </View>

        </View>


        <View style={{ alignItems: 'center', paddingVertical: heightToDp(10) }}>
          <ImagesBoarding active={true} Data={Images} />
        </View>

        <View>
          <Button style={{ paddingHorizontal: widthToDp(5), paddingVertical: heightToDp(5) }} title={'Get Started'} onPress={handleNext} />
        </View>


      </View>
    </SafeAreaView>
  )
};

export default Onboarding2;

const styles = StyleSheet.create({
  Txt: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center'
  },
  btnTxt: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
    textAlign: 'center'
  }
});