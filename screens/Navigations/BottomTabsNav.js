import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Homescreen from '../Home/Homescreen';
import Notificationsscreen from '../Notifications/Notificationsscreen';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { heightToDp, widthToDp } from '../../constants/DimensionsApi';
import Colors from '../../constants/Color';
import Profilescreen from '../Profile/Profilescreen';

const BottomTabsNav = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName='MainHome' screenOptions={styles.DefaultTab}>
            <Tab.Screen name='MainHome' component={Homescreen} options={styles.Homescreen} />
            <Tab.Screen name='Notifications' component={Notificationsscreen} options={styles.Notificationsscreen} />
            <Tab.Screen name='Profile' component={Profilescreen} options={styles.Cartscreen} />
        </Tab.Navigator>
    )
};

export default BottomTabsNav;

const styles = StyleSheet.create({
    DefaultTab: {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: Colors.white,
        tabBarStyle: { height: heightToDp(18), backgroundColor: Colors.light_red, elevation: 10, borderTopLeftRadius: 30, borderTopRightRadius: 30, position: 'absolute' },

    },
    Homescreen: {
        tabBarIcon: ({ color }) => (<Foundation size={28} color={color} name='home' />)
    },
    Favoritesscreen: {
        tabBarIcon: ({ color }) => (<AntDesign size={25} color={color} name='heart' />)
    },
    Searchscreen: {
        tabBarIcon: () => (<AntDesign size={25} color={Colors.white} name='search1' />),
        tabBarIconStyle: {
            height: heightToDp(2),
            borderRadius: 40,
            width: widthToDp(18),
            marginTop: heightToDp(-4),
            elevation: 2,
            marginBottom: heightToDp(4),
            backgroundColor: Colors.gradient
        }
    },
    Notificationsscreen: {
        tabBarIcon: ({ color }) => (<Entypo size={25} color={color} name='bell' />)
    },
    Cartscreen: {
        tabBarStyle: { display: 'none' },
        tabBarIcon: ({ color }) => (<FontAwesome6 size={25} color={color} name='user' />)
    }
});