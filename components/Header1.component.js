import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SvgImport from './SvgImport.component'
import Group from '../assets/Svgs/Group'
import Colors from '../constants/Color'
import { height, heightToDp, widthToDp } from '../constants/DimensionsApi'

const Header1 = ({ ...props }) => {
  return (
    <View>
      <View style={{ alignItems: 'center', paddingTop: heightToDp(5), paddingLeft: widthToDp(45), paddingRight: widthToDp(5), flexDirection: 'row', justifyContent: 'space-between' }}>
        <SvgImport svg={Group} />

        {props.RightIcon == false ? null : <Pressable onPress={props.onRightPress}><Text style={[styles.Text, props.txtStyles]}>{props.btnTitle != null ? props.btnTitle : 'Skip'}</Text></Pressable>}
      </View>
    </View>
  )
}

export default Header1

const styles = StyleSheet.create({
  Text: {
    color: Colors.primary,
    fontSize: 17,
    fontWeight: '400'
  }
})