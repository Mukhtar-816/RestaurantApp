import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header1 from '../../components/Header1.component'
import Colors from '../../constants/Color'
import { heightToDp, widthToDp } from '../../constants/DimensionsApi'
import TextForm from '../../components/TextForm.component';
import Button from '../../components/Button.component'


const ForgotPassword = ({ navigation }) => {



  //State Management
  const [email, setEmail] = useState(null);
  // const [phoneNumber, setPhoneNumber] = useState(null);


  function handleSendCode() {
    // send code and navigate to reset password screen
    Alert.alert('Successfully sent code', 'Navigating to reset password screen')
    navigation.navigate('ResetPassword')
  };

  function handleResendCode() {
    //resend Code

  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView style={{ flex: 1 }} >
        <View style={{ flex: 1 }}>

          <Header1
            btnTitle='Cancel'
            onRightPress={() => { navigation.navigate('Home') }}
            txtStyles={{ borderBottomWidth: 1, borderColor: Colors.primary }} />


          <View style={{ alignItems: 'center', paddingTop: heightToDp(30), gap: 15 }}>
            <Text style={styles.Txt}>Forgot password</Text>
            <Text style={styles.Txt1}>{'Enter your email address to request a \npassword reset.'}</Text>
          </View>



          <View style={styles.TextFormContainer}>
            <TextForm
              value={email}
              onChangeText={(email) => { setEmail(email) }}
              style={{ paddingHorizontal: widthToDp(6) }} title={'Email Address'} />
          </View>

        </View>

        <View style={{ paddingTop: heightToDp(10) }}>

          <View style={{ paddingVertical: heightToDp(10) }}>
            <Button title={'Send Code'} onPress={handleSendCode} style={{ paddingHorizontal: widthToDp(5) }} />
          </View>


          <View style={{ paddingBottom: heightToDp(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: Colors.light_txt }}>Didn't recieve code? </Text>
            <Pressable onPress={handleResendCode}
              style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: Colors.primary }}>Resend</Text>
            </Pressable>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

export default ForgotPassword;

const styles = StyleSheet.create({
  Txt: {
    color: Colors.black,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  Txt1: {
    fontSize: 14,
    color: Colors.light_txt,
    textAlign: 'center'
  },
  TextFormContainer: {
    gap: 25,
    paddingVertical: heightToDp(15)
  }
});