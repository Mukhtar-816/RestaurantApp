import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Color'
import { heightToDp, widthToDp } from '../../constants/DimensionsApi'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header2 from '../../components/Header2.component';
import Entypo from 'react-native-vector-icons/Entypo'
import TextLine from '../../components/TextLine.component';
import Button from '../../components/Button.component';



const Profilescreen = ({ navigation, route }) => {


  //constanst
  const Img = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D';
  const username = 'John Smith';
  const profileImage = route.params;





  function handleOnLeftBtnPress() {
    //Navigation.navigate('Notifications)
    navigation.goBack();
  };

  function handleOnEditPress() {
    //Navigation.navigate
    navigation.navigate('EditProfile')
  };


  //constants
  const Name = 'Mukhtar Shaikh';
  const Email = '<EMAIL>';
  const occupation = 'cs - 7';
  const Phone = '<PHONE>';




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: heightToDp(50), width: widthToDp(100), backgroundColor: Colors.primary, position: 'absolute' }}></View>


        <Header2
          HeaderTxt={false}
          style={{ paddingHorizontal: widthToDp(6) }}
          btn={<MaterialIcons name='arrow-back-ios-new' size={20} color={Colors.black} />}
          RightIcon={<Entypo size={20} color={Colors.light_red} name='bell' />}
          onLeftBtnPress={() => { handleOnLeftBtnPress() }} />

        <Pressable style={styles.ProfileImageContainer}>
          <Image source={{ uri: profileImage == null ? Img : profileImage }} resizeMode='contain' style={{ flex: 1, borderRadius: 100 }} />
        </Pressable>



        {/* Personal info */}
        <TextLine Text={'Personal Info'} style={{ paddingHorizontal: widthToDp(6), paddingVertical: heightToDp(5) }} />
        <View style={{ paddingHorizontal: widthToDp(7) }}>
          <View style={styles.Cover}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.Txt}>Your name </Text>
              <Text style={[styles.Txt, { color: Colors.black }]}>{Name}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.Txt}>Occupation </Text>
              <Text style={[styles.Txt, { color: Colors.black }]}>{occupation}</Text>
            </View>
          </View>
        </View>


        {/* Contact info */}
        <TextLine Text={'Contact Info'} style={{ paddingHorizontal: widthToDp(6), paddingVertical: heightToDp(5) }} />
        <View style={{ paddingHorizontal: widthToDp(7) }}>
          <View style={styles.Cover}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.Txt}>Phone number </Text>
              <Text style={[styles.Txt, { color: Colors.black }]}>{Phone}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.Txt}>Email</Text>
              <Text style={[styles.Txt, { color: Colors.black }]}>{Email}</Text>
            </View>
          </View>
        </View>

      </ScrollView>


      <View>
        <Button onPress={handleOnEditPress} title={'Edit Profile'} style={{ paddingHorizontal: widthToDp(6), paddingVertical: heightToDp(5) }} />
      </View>
    </SafeAreaView>
  )
};

export default Profilescreen;

const styles = StyleSheet.create({
  ProfileImageContainer: {
    marginTop: heightToDp(10),
    height: 180,
    width: widthToDp(50),
    alignSelf: 'center',
    backgroundColor: Colors.white,
    borderRadius: 100,
    padding: 5,
    elevation: 20
  },
  ProfileImageTxt: {
    fontSize: 22,
    color: Colors.light_txt,
    fontWeight: 'bold'
  },
  OptionsStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    alignItems: 'center'
  },
  Txt: {
    color: '#3B3B3B',
    fontWeight: '500',
    fontSize: 15
  },
  Cover: {
    borderWidth: 0.5,
    borderColor: Colors.grey2,
    padding: 15,
    paddingVertical: 25,
    gap: 25,
    justifyContent: 'center',
    borderRadius: 10
  }
});