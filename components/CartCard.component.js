import { Image, Pressable, StyleSheet, View, Text } from "react-native";
import { heightToDp, widthToDp } from "../constants/DimensionsApi";
import Colors from "../constants/Color";
import AntDesign from 'react-native-vector-icons/AntDesign'




const CartItemCard = ({ ...props }) => {

    return (
        <Pressable onPress={props.onPress} style={styles.CartItemCard}>

            <View>
                <View style={styles.ImageContainer}><Image source={{ uri: props.item?.image }} resizeMode='cover' style={{ flex: 1, borderRadius: 20 }} /></View>
            </View>


            <View style={{ width: widthToDp(30), gap: 5 }}>
                <Text numberOfLines={1} style={{ color: Colors.black, fontWeight: '600', fontSize: 17 }}>{props.item.title}</Text>
                <Text numberOfLines={1} style={{ color: Colors.light_txt, fontSize: 12 }}>{props.item.Des}</Text>
                <Text style={{ color: Colors.primary, fontSize: 15, fontWeight: 'bold' }}>{'$' + props.item.cost.toFixed(0) + '.00'}</Text>
            </View>


            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10, }}>
                <Pressable onPress={props.onMinusPress} style={styles.Icons}><AntDesign name='minus' size={15} color={Colors.white} /></Pressable>
                <Text style={{ color: Colors.black, fontSize: 13 }}>{props.item.Qty}</Text>
                <Pressable onPress={props.onPlusPress} style={[styles.Icons, { backgroundColor: Colors.white }]}><AntDesign name='plus' size={15} color={Colors.primary} /></Pressable>
            </View>

        </Pressable>
    )
};


export default CartItemCard;




const styles = StyleSheet.create({
    CartItemCard: {
        flexDirection: 'row',
        height: heightToDp(30),
        backgroundColor: Colors.white,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 20,
        width: widthToDp(90),
        alignSelf: 'center',
        elevation: 0.5,
    },
    ImageContainer: {
        width: widthToDp(20),
        height: widthToDp(20),
        borderRadius: 20,
        backgroundColor: Colors.white,
        overflow: 'hidden',
        elevation: 10
    },
    Icons: {
        elevation: 5,
        borderRadius: 6,
        padding: 4,
        backgroundColor: Colors.primary
    },
})