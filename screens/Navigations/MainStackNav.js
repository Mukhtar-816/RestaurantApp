import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUpscreen from '../Sign-Up/SignUpscreen';
import SignInscreen from '../Sign-In/SignInscreen';
import ForgotPasswordscreen from '../ForgotPassword/ForgotPasswordscreen';
import ResetPasswordscreen from '../ResetPassword/ResetPasswordscreen';
import ProductDetailscreen from '../ProductDetail/ProductDetailscreen';
import Cartscreen from '../Cart/Cartscreen';
import Orderscreen from '../Order/Orderscreen';
import PaymentDetailsscreen from '../PaymentDetails/PaymentDetailsscreen';
import Verificationscreen from '../Verification/Verificationscreen';
import BottomTabsNav from './BottomTabsNav';
import EditProfilescreen from '../EditProfile/EditProfilescreen';
import Checkoutscreen from '../Checkout/Checkoutscreen';
import OnBoarding from '../Onboarding/Onboardingscreen';

const MainStackNav = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='OnBoarding' component={OnBoarding} />
                <Stack.Screen name='SignUp' component={SignUpscreen} />
                <Stack.Screen name='SignIn' component={SignInscreen} />
                <Stack.Screen name='ForgotPassword' component={ForgotPasswordscreen} />
                <Stack.Screen name='ResetPassword' component={ResetPasswordscreen} />
                <Stack.Screen name='Home' component={BottomTabsNav} />
                <Stack.Screen name='ProductDetail' component={ProductDetailscreen} />
                <Stack.Screen name='Orders' component={Orderscreen} />
                <Stack.Screen name='Checkout' component={Checkoutscreen} />
                <Stack.Screen name='PaymentDetails' component={PaymentDetailsscreen} />
                <Stack.Screen name='Verification' component={Verificationscreen} />
                <Stack.Screen name='Cart' component={Cartscreen} />
                <Stack.Screen name='EditProfile' component={EditProfilescreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default MainStackNav

const styles = StyleSheet.create({})