import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Color';
import { heightToDp, widthToDp } from '../constants/DimensionsApi';

const Header2 = ({ ...props }) => {

  const username = 'username';
  
  return (
    <View style={props.style}>
      <View style={{ paddingTop: heightToDp(5), gap: props.RightIcon == null ? widthToDp(25) : 0, justifyContent: props.RightIcon == null ? 'flex-start' : 'space-between', flexDirection: 'row', alignItems: 'center' }}>

        <Pressable onPress={props.onLeftBtnPress} style={styles.cover}>{props.btn}</Pressable>

        {props.HeaderTxt != null ? <Text style={[styles.HeaderTxt, { color: props.TxtColor != null ? props.TxtColor : Colors.black }]}>{props.HeaderTxt}</Text> : null}

        {props.RightIcon != null ?
          <Pressable onPress={props.onRightIconPress} style={styles.cover}>{props.RightIcon}</Pressable> :
          null}

      </View>
    </View>
  )
};

export default Header2;

const styles = StyleSheet.create({
  cover: {
    padding: 10,
    backgroundColor: Colors.white,
    elevation: 0.5,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  HeaderTxt: {
    fontSize: 20,
    fontWeight: '600'
  }
});