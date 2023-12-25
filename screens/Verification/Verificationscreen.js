import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../constants/Color';
import Header2 from '../../components/Header2.component';
import { heightToDp, widthToDp } from '../../constants/DimensionsApi';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TextForm from '../../components/TextForm.component';
import Button from '../../components/Button.component';
import SvgImport from '../../components/SvgImport.component';
import verification from '../../assets/Svgs/verification';


const Verificationscreen = ({ navigation }) => {


  useEffect(() => {
    setTimeout(() => { navigation.navigate('MainHome') }, 6000)
  }, []);


  //functions
  function handlegoBack() {
    //props.navigation.openDrawer()
    navigation.goBack()
  };

  function handlegoHome() {
    //props.navigation.openDrawer()
    navigation.navigate('MainHome')
  };



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={{ flex: 1 }}>

        <Header2
          HeaderTxt={false}
          onLeftBtnPress={() => { handlegoBack() }}
          style={{ paddingHorizontal: widthToDp(5) }}
          btn={<MaterialIcons name={'arrow-back-ios-new'} color={Colors.black} size={20} />} />


        <View style={{ flex: 1, justifyContent: 'center', gap: 20, alignItems: 'center', paddingHorizontal: widthToDp(6) }}>
          <SvgImport svg={verification} />

          <Text style={styles.boldTxt}>Your order has been successfully placed</Text>
          <Text style={{ textAlign: 'center', fontSize: 13, color: Colors.black }}>{"Sit and relax while your order is being \nworked on. It'll take 5min before you get it."}</Text>
        </View>

      </View>

      <View>
        <Button onPress={handlegoHome} title={'Go back to home'} style={{ paddingHorizontal: widthToDp(6), paddingVertical: heightToDp(5) }} />
      </View>
    </SafeAreaView>
  )
};


export default Verificationscreen;

const styles = StyleSheet.create({
  boldTxt: {
    textAlign: 'center',
    paddingHorizontal: widthToDp(15),
    color: Colors.black,
    fontSize: 22,
    fontWeight: '500'
  },
})