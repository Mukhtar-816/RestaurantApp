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
import ProductsApi from '../../hook/DataCall'

const ImagesBoarding = ({ ...props }) => {

  const currentIndex = 1;

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


const Onboarding1 = ({ navigation }) => {

  //Data 
  const Images = [
    {
      id: 1,
      Txt: 'Orders from your favorite stores or vendors',
      Image: 'https://img.freepik.com/free-vector/order-food-concept-illustration_114360-6860.jpg'
    },
  ];


  //functions
  function handleNext() {
    // navigate to signup screen
    navigation.navigate('OnBoarding2');
  };



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.grey1 }}>
      <ProductsApi />
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
            <Text style={{ color: Colors.primary, fontWeight: 'bold', fontSize: 25 }}>Order with Ease...!</Text>
            <Text style={{ color: Colors.gray, textAlign: 'center', fontSize: 15 }}>Scroll the dishes and choose what you like, or customize your meal while hovering.</Text>
          </View>

        </View>


        <View style={{ alignItems: 'center', paddingVertical: heightToDp(10) }}>
          <ImagesBoarding active={true} Data={Images} />
        </View>

        <View>
          <Button style={{ paddingHorizontal: widthToDp(5), paddingVertical: heightToDp(5) }} title={'Next'} onPress={handleNext} />
        </View>


      </View>
    </SafeAreaView>
  )
};

export default Onboarding1;

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