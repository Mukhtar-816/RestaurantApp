import { Dimensions, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { heightToDp, widthToDp } from '../constants/DimensionsApi';
import SvgImport from './SvgImport.component';
import Colors from '../constants/Color';

const OnboardingItem = ({ Item }) => {

    const { width } = useWindowDimensions();

    return (
            <View
                key={Item.id}
                style={{
                    width: width,
                    alignItems: 'center'
                }}>
                <View style={{ paddingHorizontal: widthToDp(8), paddingVertical: heightToDp(10) }}>
                    <Text style={styles.Txt}>{Item.Txt}</Text>
                </View>
                <Image source={Item.Image} resizeMode='cover' style={{ height: heightToDp(90), width: widthToDp(90) }} />
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: widthToDp(6), gap: 5, paddingTop : heightToDp(10) }}>
                    <Text style={{ color: Colors.primary, fontWeight: 'bold', fontSize: 25 }}>{Item.Txt2}</Text>
                    <Text style={{ color: Colors.gray, textAlign: 'center', fontSize: 15 }}>{Item.Txt3}</Text>
                </View>
            </View>
    )
};

export default OnboardingItem

const styles = StyleSheet.create({
    Txt: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'

    }
})