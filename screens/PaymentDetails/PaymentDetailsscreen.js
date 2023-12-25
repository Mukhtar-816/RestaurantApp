import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Color';
import Header2 from '../../components/Header2.component';
import { heightToDp, widthToDp } from '../../constants/DimensionsApi';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TextForm from '../../components/TextForm.component';
import Button from '../../components/Button.component';


const PaymentDetailsscreen = ({ navigation }) => {


  //State Management
  const [cardDetails, setCardDetails] = useState(null);
  const [expDate, setExpDate] = useState(null);
  const [cVV, setCVV] = useState(null);


  //functions
  function handlegoBack() {
    //props.navigation.openDrawer()
    navigation.goBack()
  };

  function handlePayNow(){
    //check the details and verify them then proceed
    if(cardDetails == null || expDate == null || cVV == null){
      alert('Please fill all the details')
    }else{
      navigation.navigate('Verification')
    }
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={{ flex: 1 }}>

        <Header2
          HeaderTxt={false}
          onLeftBtnPress={() => { handlegoBack() }}
          style={{ paddingHorizontal: widthToDp(5) }}
          btn={<MaterialIcons name={'arrow-back-ios-new'} color={Colors.black} size={20} />} />


        <View style={{ paddingHorizontal: widthToDp(6), paddingVertical: heightToDp(5) }}>
          <Text style={styles.boldTxt}>Payment </Text>
        </View>


        <View style={{ paddingHorizontal: widthToDp(6), gap: 20, paddingTop: heightToDp(10) }}>

          <TextForm
            value={cardDetails}
            onChangeText={(cardDetails) => { setCardDetails(cardDetails) }}
            title='Card Details' />

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', gap: 20 }}>
            <TextForm
              value={expDate}
              onChangeText={(expDate) => { setExpDate(expDate) }}
              title='Exp Date' style={{ width: widthToDp(40) }} />
            <TextForm
              value={cVV}
              onChangeText={(cVV) => { setCVV(cVV) }}
              title='CVV' style={{ width: widthToDp(40) }} />
          </View>

        </View>

      </View>

      <View>
        <Button onPress={handlePayNow} title={'Pay now'} style={{ paddingHorizontal: widthToDp(6), paddingVertical: heightToDp(5) }} />
      </View>
    </SafeAreaView>
  )
};


export default PaymentDetailsscreen;

const styles = StyleSheet.create({
  boldTxt: {
    color: Colors.black,
    fontSize: 22,
    fontWeight: '500'
  },
})