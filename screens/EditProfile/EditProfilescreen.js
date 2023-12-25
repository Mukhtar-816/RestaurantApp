import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header2 from '../../components/Header2.component';
import Colors from '../../constants/Color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { heightToDp, widthToDp } from '../../constants/DimensionsApi';
import TextForm from '../../components/TextForm.component';
import ImagePicker from 'react-native-image-crop-picker';
import Button from '../../components/Button.component';

const EditProfilescreen = ({ navigation }) => {


    //States 
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [occupation, setOccupation] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [profileImage, setProfileImage] = useState(null);



    //constanst
    const Img = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D';



    //functions
    function handlegoBack() {
        //props.navigation
        navigation.goBack()
    };

    //Image Selector For Profile
    function ImagePick() {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            setProfileImage(image.path)
        });
    };

    function handleSaveProfile() {
        //Save Data
        navigation.navigate('Profile', profileImage)
    };



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
            <ScrollView style={{ flex: 1 }}>


                <Header2
                    HeaderTxt={'Edit Profile'}
                    onLeftBtnPress={() => { handlegoBack() }}
                    style={{ paddingHorizontal: widthToDp(5) }}
                    btn={<MaterialIcons name={'arrow-back-ios-new'} color={Colors.black} size={20} />} />


                <Pressable onPress={() => { ImagePick() }} style={styles.ProfileImageContainer}>
                    <Image source={{ uri: profileImage == null ? Img : profileImage }} resizeMode='contain' style={{ flex: 1, borderRadius: 100 }} />
                </Pressable>


                <View style={styles.TextFormContainer}>
                    <TextForm title={'Username'} value={username} onChangeText={(username) => { setUsername(username) }} />
                    <TextForm title={'Occupation'} value={occupation} onChangeText={(occupation) => { setOccupation(occupation) }} />
                    <TextForm title={'Ph No'} value={phoneNumber} onChangeText={(phoneNumber) => { setPhoneNumber(phoneNumber) }} />
                    <TextForm title={'Email'} value={email} onChangeText={(email) => { setEmail(email) }} />
                </View>
            </ScrollView>

            <Button onPress={handleSaveProfile} title={'Complete'} style={styles.Button} />
        </SafeAreaView>
    )
};

export default EditProfilescreen;

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
    TextFormContainer: {
        paddingHorizontal: widthToDp(6),
        gap: 10,
        paddingTop: heightToDp(5)
    },
    Button: {
        paddingHorizontal: widthToDp(6),
        paddingVertical: heightToDp(5)
    }
});