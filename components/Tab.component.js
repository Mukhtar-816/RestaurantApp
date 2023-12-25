import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import SvgImport from "./SvgImport.component";

import { heightToDp, widthToDp } from "../constants/DimensionsApi";
import Colors from "../constants/Color";


const Tab = ({ ...props }) => {
    return (
        <Pressable onPress={props.onPress} style={[styles.TabContainer,
        {
            borderColor: props.active ? Colors.primary : Colors.primary,
            borderWidth: props.active ? 1 : 0.5
        }]}>
            <View style={[styles.TabContainer,
            {
                gap: 10,
                elevation: 2,
                justifyContent: 'center',
                height: heightToDp(25),
                width: widthToDp(17),
                backgroundColor: props.active ? Colors.light_red : Colors.background
            }]}>
                <SvgImport svg={props.tabIcon} />
                <Text style={{ color: props.active ? Colors.white : Colors.black, fontSize: 12, fontWeight: '500' }}>{props.tabTitle}</Text>
            </View>
        </Pressable>
    )
};


export default Tab;


const styles = StyleSheet.create({
    TabContainer: {
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: heightToDp(30),
        width: widthToDp(22),
        borderRadius: 50,
        backgroundColor: Colors.grey1
    }
});