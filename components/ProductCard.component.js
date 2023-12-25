import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Color';
import { heightToDp, widthToDp } from '../constants/DimensionsApi';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ProductCard = ({ ...props }) => {


    return (
        <Pressable onPress={props.onPress} style={[props.style, styles.Card]}>

            <View style={{ height: 130, width: '100%' }}>
                <Image source={{ uri: props.item?.image }} resizeMode='cover' style={styles.Image} />

                <View style={[styles.PlusIcon, { marginLeft: widthToDp(3), flexDirection: 'row', gap: 5 }]}>
                    <FontAwesome name={'star'} color={Colors.yellow} size={widthToDp(4)} />
                    <Text style={{ fontSize: 12, color: Colors.light_txt }}>{props.item.rating.toFixed(0) + '+'}</Text>
                </View>

                <Pressable onPress={props.onPlusPress} style={styles.PlusIcon}>
                    <AntDesign name={props.IsPresentInCart ? 'check' : 'plus'} size={20} color={props.IsPresentInCart ? Colors.green : Colors.gradient} />
                </Pressable>
            </View>


            <View style={{ paddingHorizontal: widthToDp(3), gap: 3 }}>
                <Text numberOfLines={1} style={styles.CardTxt}>{props.item.title}</Text>
                <Text numberOfLines={2} style={styles.CardDes}>{props.item.Des}</Text>
            </View>


            <View style={styles.CardBottom}>


                <Text style={{ color: Colors.primary, fontWeight: 'bold', fontSize: 16 }}>{'Rs ' + props.item.cost + '.00'}</Text>

                <Pressable onPress={props.onHeartPress} style={{ padding: 8, borderRadius: 30, backgroundColor: Colors.grey3 }}>
                    <AntDesign name='heart' color={Colors.primary} size={20} />
                </Pressable>
            </View>
        </Pressable>
    )
};

export default ProductCard;

const styles = StyleSheet.create({
    Card: {
        backgroundColor: Colors.white,
        borderRadius: 30,
        elevation: 0.2,
        gap: 8,
        paddingBottom: heightToDp(5),
        width: widthToDp(55)
    },
    Image: {
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    PlusIcon: {
        position: 'absolute',
        marginLeft: widthToDp(43),
        marginTop: heightToDp(3),
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: 5
    },
    CardDes: {
        fontSize: 11.5,
        color: Colors.light_txt
    },
    CardTxt: {
        fontWeight: '400',
        color: Colors.black,
        fontSize: 16
    },
    CardBottom: {
        paddingHorizontal: widthToDp(5),
        paddingTop: heightToDp(0),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})