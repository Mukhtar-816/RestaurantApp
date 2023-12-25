import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Color';

const TextLine = ({ ...props }) => {
    return (
        <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, props.style]}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.black }}>{props.Text}</Text>
            <Pressable onPress={props.onPress}>
                <Text style={{ color: Colors.primary, fontSize: 15, borderBottomWidth: 1, borderBottomColor: Colors.primary }}>{props.btnTxt}</Text>
            </Pressable>
        </View>
    )
};

export default TextLine;

const styles = StyleSheet.create({});