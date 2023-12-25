import { FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Color';
import Header2 from '../../components/Header2.component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { heightToDp, widthToDp } from '../../constants/DimensionsApi';
import AntDesign from 'react-native-vector-icons/AntDesign';
import mastercard from '../../assets/Svgs/mastercard';
import SvgImport from '../../components/SvgImport.component';
import paypal from '../../assets/Svgs/paypal';
import stripe from '../../assets/Svgs/stripe';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from '../../components/Button.component';
import StepsCircle from '../../components/StepsCircle.component';
import { useSelector } from 'react-redux';



const Steps = ({ ...props }) => {
  return (
    <View style={styles.StepContainer}>
      <StepsCircle StepState={props.Step1State} StepTxt={props.Step1Txt} />
      <Text style={{ color: Colors.gray, marginTop: -25 }}>...................................................</Text>
      <StepsCircle StepState={props.Step2State} StepTxt={props.Step2Txt} />
    </View>
  )
};



const Checkoutscreen = ({ navigation }) => {

  //States
  const [currentPay, setCurrentPay] = useState(null);


  //Redux state Data
  const  Cart  = useSelector((state) => state.Cart);

  //constants
  const Address = '57 teaticket hvy, East falmouth MA 2536';
  const PhoneNumber = '0326789356';
  const Email = 'xyz@@gmail.com';
  const City = 'Hyderabad';


  //functions
  function TotalAmount() {
    let Amount = 0;
    Amount = Cart.map(item => item.cost * item.Qty)
    return Amount;
  };


  function handlegoBack() {
    navigation.goBack()
  };

  function hanldeChangeOption(option) {
    //props.navigation.navigate('Profile')
    navigation.navigate('Profile')
  };

  function handleCreatePayOptions(payOptions) {
    //props.navigation.navigate('Profile')
    navigation.navigate('Profile')
  };

  //Data
  const PaymentOptions = [
    { name: 'MasterCard', Icon: mastercard },
    { name: 'PayPal', Icon: paypal },
    { name: 'Skype', Icon: stripe },
  ];


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView style={{ flex: 1 }}>


        <Header2
          HeaderTxt={'Checkout'}
          onLeftBtnPress={() => { handlegoBack() }}
          style={{ paddingHorizontal: widthToDp(5) }}
          btn={<MaterialIcons name={'arrow-back-ios-new'} color={Colors.black} size={20} />} />


        {/* Steps */}
        <View style={styles.Steps}>
          <Steps Step1Txt={'Delivery'} Step1State={'Completed'} Step2Txt={'Address'} Step2State={'Pending'} />
        </View>


        <View style={styles.MiddleTxt}>
          <Text style={styles.boldTxt}>Delivery Info</Text>
        </View>



        {/* Personal Information */}
        <View style={{ gap: 10, paddingVertical: heightToDp(2) }}>
          <View style={styles.PersonalInfoData}>
            <Text style={styles.PersonalInfoDataTxt}>{Address}</Text>
            <Pressable style={styles.changeBtn} onPress={hanldeChangeOption}><Text style={{ color: Colors.primary }}>Change</Text></Pressable>
          </View>

          <View style={styles.PersonalInfoData}>
            <Text style={styles.PersonalInfoDataTxt}>{PhoneNumber}</Text>
            <Pressable style={styles.changeBtn} onPress={hanldeChangeOption}><Text style={{ color: Colors.primary }}>Change</Text></Pressable>
          </View>

          <View style={styles.PersonalInfoData}>
            <Text style={styles.PersonalInfoDataTxt}>{Email}</Text>
            <Pressable style={styles.changeBtn} onPress={hanldeChangeOption}><Text style={{ color: Colors.primary }}>Change</Text></Pressable>
          </View>

          <View style={styles.PersonalInfoData}>
            <Text style={styles.PersonalInfoDataTxt}>{City}</Text>
            <Pressable style={styles.changeBtn} onPress={hanldeChangeOption}><Text style={{ color: Colors.primary }}>Change</Text></Pressable>
          </View>
        </View>


        <View style={styles.MiddleTxt}>
          <Text style={styles.boldTxt}>Payment</Text>
        </View>


        <View style={styles.PaymentProcessContainer}>
          <Pressable onPress={handleCreatePayOptions}>
            <AntDesign name='pluscircleo' size={40} color={Colors.grey2} />
          </Pressable>

          <FlatList
            contentContainerStyle={{ columnGap: 20, paddingHorizontal: 5 }}
            horizontal
            data={PaymentOptions}
            renderItem={({ item }) => (
              <View style={[styles.PaymentProcess, { borderWidth: currentPay == item.name ? 0.5 : 0 }]}>
                <Pressable style={styles.PaymentOptionContainer} onPress={() => { setCurrentPay(item.name) }}>
                  <SvgImport svg={item.Icon} />
                </Pressable>
              </View>
            )} />
        </View>


        {/* Privacy CheckBox */}
        <View style={styles.BouncyCheckboxContainer}>
          <Pressable onPress={() => { setCurrentPay('HandCash') }} style={styles.cashOpt}>
            <BouncyCheckbox
              fillColor={Colors.accent}
              disableBuiltInState isChecked={currentPay === 'HandCash' ? true : false}
              onPress={() => setCurrentPay('HandCash')} />

            <Text style={{ color: Colors.black, fontSize: 15 }}>Pay on arrival</Text>
          </Pressable>
          <Text style={{ color: Colors.gradient, fontSize: 12, marginLeft: widthToDp(3) }}>Pay with cash/POS upon arrival</Text>
        </View>

      </ScrollView>




      <View style={styles.PaymentCostContainer}>
        <View style={styles.CostTxt}>
          <Text style={styles.Amount}>Delivery Fee</Text>
          <Text style={[styles.Amount, { fontSize: 16 }]}>{'$' + 20}</Text>
        </View>

        <View style={styles.CostTxt}>
          <Text style={styles.Amount}>Sub Total</Text>
          <Text style={[styles.Amount, { fontSize: 16 }]}>{'$' + 230}</Text>
        </View>

        <View style={styles.CostTxt}>
          <Text style={{ color: Colors.black, fontSize: 18, fontWeight: 'bold' }}>Total</Text>
          <Text style={{ color: Colors.black, fontWeight: 'bold', fontSize: 22 }}>{TotalAmount()}</Text>
        </View>

        <Button
          onPress={() => { navigation.navigate('PaymentDetails') }}
          title={'Proceed to payment'}
          style={styles.Button} />
      </View>


    </SafeAreaView>
  )
};

export default Checkoutscreen;

const styles = StyleSheet.create({
  boldTxt: {
    color: Colors.black,
    fontSize: 23,
    fontWeight: '500'
  },
  PaymentOptionContainer: {
    height: heightToDp(15),
    width: widthToDp(15),
    borderRadius: 10,
    elevation: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  cashOpt: {
    paddingLeft: 20,
    gap: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
    elevation: 0.5
  },
  CostTxt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: widthToDp(8)
  },
  changeBtn: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 0.5,
    padding: 10
  },
  StepContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  Steps: {
    paddingHorizontal: widthToDp(6),
    paddingTop: heightToDp(10)
  },
  MiddleTxt: {
    paddingHorizontal: widthToDp(6),
    paddingVertical: heightToDp(5),
    paddingTop: heightToDp(10)
  },
  PersonalInfoData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: widthToDp(7)
  },
  PersonalInfoDataTxt: {
    color: Colors.light_txt,
    width: widthToDp(50),
    fontSize: 14
  },
  PaymentProcessContainer: {
    paddingVertical: heightToDp(5),
    paddingLeft: widthToDp(7),
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center'
  },
  PaymentProcess: {
    borderRadius: 10,
    padding: 5,
    borderColor: Colors.primary
  },
  BouncyCheckboxContainer: {
    paddingHorizontal: widthToDp(6),
    gap: 10,
    paddingBottom: heightToDp(20)
  },
  PaymentCostContainer: {
    gap: 5,
    paddingTop: heightToDp(5),
    backgroundColor: Colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  },
  Amount: {
    color: Colors.black,
    fontSize: 14
  },
  Button: {
    paddingHorizontal: widthToDp(6),
    paddingVertical: heightToDp(5)
  }

});