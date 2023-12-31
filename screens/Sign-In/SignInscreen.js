import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header1 from '../../components/Header1.component'
import Colors from '../../constants/Color'
import { heightToDp, widthToDp } from '../../constants/DimensionsApi'
import TextForm from '../../components/TextForm.component';
import SvgImport from '../../components/SvgImport.component'
import google from '../../assets/Svgs/google'
import Button from '../../components/Button.component'
import { useSelector } from 'react-redux'

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

const SignInscreen = ({ navigation }) => {



  //State Management
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  //constants
  const Users = useSelector((state) => state.Users);

  //functions
  function handleGoogleSignIn() {
    // signIn with Google account
    Alert.alert('Successfully signed In')
  };

  function handleSignIn() {
    if (email != null || password != null) {

      if (email.length > 0 && password.length > 0) {
        if (Users.length != 0) {
          Users.map(item => {
            if ((item.email == email || item.username == email) && item.password == password) {
              Alert.alert('Successfully Logged In')
              navigation.navigate('Home')
            }
            else { Alert.alert('Invalid Credentials') }

          })
        }
        else { Alert.alert('Invalid Credentials') }

      }
      else { Alert.alert('Error', 'Empty credentials') }

    }
    else { Alert.alert('Error', 'Empty credentials') }
  };

  function handleSignUpPage() {
    // naviagte to signUp
    navigation.navigate('SignUp')
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView style={{ flex: 1 }} >
        <View style={{ flex: 1 }}>
          <Header1 onRightPress={() => { navigation.navigate('Home') }} txtStyles={{ borderBottomWidth: 1, borderColor: Colors.primary }} RightIcon={false} />


          <View style={{ paddingHorizontal: widthToDp(10), paddingTop: heightToDp(15), gap: 10 }}>
            <Text style={styles.Txt}>Login to your account</Text>
            <Text style={styles.Txt1}>{'Good to see you again, enter your details \nbelow to continue ordering.'}</Text>
          </View>



          <View style={{ gap: 25, paddingVertical: heightToDp(15) }}>

            <TextForm
              value={email}
              onChangeText={(email) => { setEmail(email) }}
              style={{ paddingHorizontal: widthToDp(6) }} title={'Email Address'} />

            <TextForm
              value={password}
              onChangeText={(password) => { setPassword(password) }}
              style={{ paddingHorizontal: widthToDp(6) }} title={'Password'} />

            <Pressable onPress={() => { navigation.navigate('ForgotPassword') }}
              style={{ paddingRight: widthToDp(10), marginTop: heightToDp(-3), alignSelf: 'flex-end' }}>
              <Text style={{ color: Colors.primary }}>Forgot Password?</Text>
            </Pressable>

          </View>
        </View>


        <View style={{ paddingTop: heightToDp(10) }}>
          <Button title={'Sign In'} onPress={handleSignIn} style={{ paddingHorizontal: widthToDp(5) }} />
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: heightToDp(5) }}>
          <Text style={{ color: Colors.light_txt }}>Don't have an account?</Text>
          <Pressable onPress={handleSignUpPage}>
            <Text style={{ color: Colors.primary, fontWeight: '500' }}> SignUp</Text>
          </Pressable>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
};

export default SignInscreen;

const styles = StyleSheet.create({
  Txt: {
    color: Colors.black,
    fontSize: 25,
    fontWeight: 'bold'
  },
  Txt1: {
    fontSize: 14,
    color: Colors.light_txt
  }
})