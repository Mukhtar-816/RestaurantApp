import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Color';

const StepsCircle = ({ ...props }) => {
    return (
        <View>
            {props.StepState == 'Completed' ?
                <View style={{ alignItems: 'center', gap: 5 }}>
                    <View style={[styles.Circle, { padding: 3, borderColor: Colors.white, backgroundColor: Colors.white }]}>
                        <MaterialIcons name={'check'} color={Colors.white} style={{ backgroundColor: Colors.primary, padding: 10, borderRadius: 30 }} />
                    </View>
                    <Text style={{ color: Colors.black, fontWeight: '600' }}>{props.StepTxt}</Text>
                </View> :


                <View style={{ alignItems: 'center', gap: 5 }}>
                    <View style={[styles.Circle, { backgroundColor: Colors.white }]}>
                        <View style={{ padding: 10, borderRadius: 30, backgroundColor: Colors.primary }}></View>
                    </View>
                    <Text style={{ color: Colors.black, fontWeight: '600' }}>{props.StepTxt}</Text>
                </View>}
        </View>
    )
};

export default StepsCircle;

const styles = StyleSheet.create({
    Circle: {
        padding: 8,
        borderRadius: 30,
        borderColor: Colors.primary,
        borderWidth: 1,
        alignItems: 'center',
        elevation: 5,
        justifyContent: 'center'
    }
})