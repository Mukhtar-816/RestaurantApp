import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header1 from '../../components/Header1.component'
import Colors from '../../constants/Color'
import { heightToDp, widthToDp } from '../../constants/DimensionsApi'
import TextForm from '../../components/TextForm.component';
import SvgImport from '../../components/SvgImport.component'
import google from '../../assets/Svgs/google'
import Button from '../../components/Button.component'


const ResetPasswordscreen = ({ navigation }) => {



  //State Management
  const [code, setCode] = useState(null);
  // const [phoneNumber, setPhoneNumber] = useState(null);


  function handleResetPassword() {
    // sign in with account
    Alert.alert('Successfully reset password', 'Navigating to Home screen')
    navigation.navigate('Home')
  };

  function handleGoBack() {
    // naviagte to signUp
    navigation.goBack();
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView style={{ flex: 1 }} >
        <View style={{ flex: 1 }}>
          <Header1 btnTitle='Cancel' onRightPress={() => { navigation.navigate('Home') }} txtStyles={{ borderBottomWidth: 1, borderColor: Colors.primary }} />


          <View style={{ alignItems: 'center', paddingTop: heightToDp(30), gap: 15 }}>
            <Text style={styles.Txt}>Reset password</Text>
            <Text style={styles.Txt1}>{'A reset code has been sent to your email.'}</Text>
          </View>



          <View style={{ gap: 25, paddingVertical: heightToDp(15) }}>

            <TextForm
              value={code}
              onChangeText={(code) => { setCode(code) }}
              style={{ paddingHorizontal: widthToDp(6) }} title={'Code'} />


          </View>
        </View>

        <View style={{ paddingTop: heightToDp(10) }}>

          <View style={{ paddingVertical: heightToDp(10) }}>
            <Button title={'Reset Password'} onPress={handleResetPassword} style={{ paddingHorizontal: widthToDp(5) }} />
          </View>


          <View style={{ paddingBottom: heightToDp(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color : Colors.light_txt}}>Invalid email? </Text>
            <Pressable onPress={handleGoBack}
              style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: Colors.primary }}>Back</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

export default ResetPasswordscreen;

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
  }
})