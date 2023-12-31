import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header1 from '../../components/Header1.component'
import Colors from '../../constants/Color'
import { heightToDp, widthToDp } from '../../constants/DimensionsApi'
import TextForm from '../../components/TextForm.component';
import SvgImport from '../../components/SvgImport.component'
import google from '../../assets/Svgs/google'
import Button from '../../components/Button.component'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch } from 'react-redux'
import { AddNewUser, AddUser, CreateUser } from '../../redux/Slices/UserSlice/UserActions'
import axios from 'axios'

const OtherOptionsButton = ({ ...props }) => {



  return (
    <View style={props.style}>
      <Pressable
        onPress={props.onPress}
        style={{
          flexDirection: 'row',
          gap: 10,
          padding: heightToDp(4),
          borderRadius: heightToDp(10),
          backgroundColor: Colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.grey1
        }}>
        <SvgImport svg={props.Icon} />
        <Text style={{ fontSize: 14, borderBottomWidth: 1, borderBottomColor: Colors.black, color: Colors.black, fontWeight: '600' }}>{props.Txt}</Text>
      </Pressable>
    </View>
  )
}

const SignUpscreen = ({ navigation }) => {



  //State Management
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  // const [confirmPassword, setConfirmPassword] = useState(null);
  const [isCheck, setIsCheck] = useState(false);


  //constants
  const dispatch = useDispatch();

  const Data = {
    "username": username,
    "password": password,
    "occupation": null,
    "phone": null,
    "email": email
  };



  async function handleSignUp() {
    // sign in with account
    if (email != null || password != null || username != null) {
      if (email.length > 0 && password.length > 0 && username.length > 0) {
        dispatch(CreateUser(Data))
        navigation.navigate('SignIn')
      }
    }
  };

  function handleSignInPage() {
    // naviagte to signIn
    navigation.navigate('SignIn')
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView>
        <Header1 onRightPress={() => { navigation.navigate('Home') }} txtStyles={{ borderBottomWidth: 1, borderColor: Colors.primary }} RightIcon={false} />


        <View style={{ paddingHorizontal: widthToDp(10), paddingTop: heightToDp(15), gap: 10 }}>
          <Text style={styles.Txt}>Create an account</Text>
          <Text style={styles.Txt1}>{'Welcome friend, enter your details so lets get \nstarted in ordering food.'}</Text>
        </View>



        <View style={{ gap: 20, paddingTop: heightToDp(15) }}>

          <TextForm
            value={email}
            onChangeText={(email) => { setEmail(email) }}
            style={{ paddingHorizontal: widthToDp(6) }} title={'Email Address'} />

          <TextForm
            value={username}
            onChangeText={(username) => { setUsername(username) }}
            style={{ paddingHorizontal: widthToDp(6) }} title={'Username'} />

          <TextForm
            value={password}
            onChangeText={(password) => { setPassword(password) }}
            style={{ paddingHorizontal: widthToDp(6) }} title={'Password'} />

          {/* <TextForm
            value={confirmPassword}
            onChangeText={(confirmPassword) => { setConfirmPassword(confirmPassword) }}
            style={{ paddingHorizontal: widthToDp(6) }} title={'Confirm Password'} /> */}
        </View>


        <View style={{ paddingHorizontal: widthToDp(10), flexDirection: 'row', paddingVertical: heightToDp(5), }}>
          <BouncyCheckbox disableBuiltInState fillColor={Colors.accent} isChecked={isCheck} onPress={() => { setIsCheck(!isCheck) }} size={20} />
          <Text style={{ color: Colors.gray, marginLeft: -10, paddingTop: 8 }}>By continuing your agree to our Terms of services and Privacy policy.</Text>
        </View>


        <View style={{ paddingTop: heightToDp(15) }}>
          <Button disabled={isCheck ? false : true} title={'Create an account'} onPress={() => { handleSignUp(username, password, email) }} style={{ paddingHorizontal: widthToDp(5) }} />
        </View>


        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: heightToDp(5) }}>
          <Text style={{ color: Colors.light_txt }}>Already have an account?</Text>
          <Pressable onPress={handleSignInPage}  >
            <Text style={{ color: Colors.primary, fontWeight: '500' }}> SignIn</Text>
          </Pressable>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUpscreen

const styles = StyleSheet.create({
  Txt: {
    color: Colors.black,
    fontSize: 25,
    fontWeight: 'bold'
  },
  Txt1: {
    fontSize: 14,
    color: Colors.gray
  }
})