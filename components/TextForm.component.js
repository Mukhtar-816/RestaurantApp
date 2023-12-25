import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../constants/Color'
import { widthToDp } from '../constants/DimensionsApi'
import Entypo from 'react-native-vector-icons/Entypo';

const TextForm = ({ ...props }) => {

  ///For private text fields like paswords
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <View style={[props.style, { gap: 10 }]}>
      <Text style={styles.TextInputTxt}>{props.title}<Text style={{ color: Colors.primary }}>*</Text></Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', }}>

        <TextInput
          aria-valuemax={5}
          placeholderTextColor={Colors.grey2}
          style={[styles.TextInput, { borderColor: props.value != null ? props.value.length > 0 ? Colors.primary : Colors.grey3 : Colors.grey3 }]}
          value={props.value}
          onChangeText={props.onChangeText}
          secureTextEntry={(props.title === 'Password' || props.title === 'Confirm Password') ? secureTextEntry ? true : false : null}
          placeholder={`Enter ${props.title.toLowerCase()}`} />

        {(props.title === 'Password' || props.title === 'Confirm Password') ?

          <Pressable onPress={() => { setSecureTextEntry(!secureTextEntry) }} style={{ position: 'absolute', marginLeft: widthToDp(76) }}>
            <Entypo name='eye' size={25} color={Colors.grey3} />
          </Pressable> : null}

      </View>
    </View>
  )
};

export default TextForm;

const styles = StyleSheet.create({
  TextInput: {
    flex: 1,
    paddingLeft: widthToDp(5),
    padding: 13,
    backgroundColor: Colors.grey1,
    borderWidth: 0.5,
    color: Colors.black,
    borderRadius: 15
  },
  TextInputTxt: {
    marginLeft: widthToDp(5),
    color: Colors.black,
    fontSize: 14
  }
})