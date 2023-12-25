import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightToDp } from '../constants/DimensionsApi'
import Colors from '../constants/Color'

const Button = ({ ...props }) => {
  return (
    <View style={props.style}>
      <Pressable style={styles.Pressable} onPress={props.onPress} disabled={props.disabled}>
        <Text style={styles.PressableTxt}>{props.title}</Text>
      </Pressable>
    </View>
  )
};

export default Button;

const styles = StyleSheet.create({
  Pressable: {
    height: heightToDp(15),
    backgroundColor: Colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  PressableTxt: {
    fontWeight: '700',
    fontSize: 17,
    color: Colors.grey1
  }
})