import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Color'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { widthToDp } from '../constants/DimensionsApi';

const SearchBar = ({ ...props }) => {
    return (
        <View style={[props.style, { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
            <EvilIcons name={'search'} size={25} color={Colors.black} style={{ backgroundColor: '#FFDFDF', padding: 9, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }} />
            <TextInput
                style={{ backgroundColor: '#FFDFDF', width: '100%', padding: 5, borderTopRightRadius: 5, borderBottomRightRadius: 5 }}
                placeholder='Search'
                value={props.value}
                placeholderTextColor={Colors.black}
                onChangeText={props.onChangeText} />

        </View>
    )
};

export default SearchBar;

const styles = StyleSheet.create({});