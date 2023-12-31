import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../constants/Color';
import Header2 from '../../components/Header2.component';
import { heightToDp, widthToDp } from '../../constants/DimensionsApi';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import TextLine from '../../components/TextLine.component';
import Button from '../../components/Button.component';
import { useDispatch, useSelector } from 'react-redux';
import { AddtoCart, DecreaseQty, IncreaseQty, RemovefromCart } from '../../redux/Slices/CartSlice/CartSlice';

const ProductDetailscreen = ({ navigation, route }) => {


  const [currentQty, setCurrentQty] = useState(0);

  //constansts
  const { item } = route.params;
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.Cart);

  useEffect(() => {
    Cart.map((Item) => {
      if (Item.id === item.id) {
        setCurrentQty(Item.Qty);
      }
    })
  }, [Cart]);

  //functions
  function handleUserIconPress(e) {
    //props.navigation.navigate('Profile')
    navigation.navigate('Profile')
  };

  function handleItemAddedToFav(item) {
    //
  };

  //Cart Functions
  function handleIncreaseQty(item) {
    dispatch(IncreaseQty(item))
  };

  function handleDecreaseQty(item) {
    if (item.Qty > 0) { dispatch(DecreaseQty(item)) }
    else { dispatch(RemovefromCart(item)) }
  };

  function handleAddtoCart(item) {
    dispatch(AddtoCart(item))
  };

  function handleRemovefromCart(item) {
    dispatch(RemovefromCart(item))
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView style={{ flex: 1 }}>

        <View style={styles.ImageContainer}>
          <Image source={{ uri: item?.image }} resizeMode='cover' style={{ flex: 1 }} />
        </View>

        <View style={{ position: 'absolute' }}>
          <Header2
            onLeftBtnPress={() => { navigation.goBack() }}
            onUserIconPress={() => { handleUserIconPress() }}
            style={{ paddingHorizontal: widthToDp(5) }}
            btn={<MaterialIcons name={'arrow-back-ios-new'} color={Colors.black} size={20} />} />
        </View>
        <View>


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: widthToDp(6), alignItems: 'center', paddingVertical: heightToDp(5) }}>
            <View style={{ elevation: 5, borderRadius: 40, backgroundColor: Colors.white, padding: 10, flexDirection: 'row', width: widthToDp(40), justifyContent: 'center', alignItems: 'center', gap: 20 }}>
              <Pressable onPress={() => { handleIncreaseQty(item) }} style={[styles.Icons, { backgroundColor: Colors.white }]}><AntDesign name='plus' size={15} color={Colors.primary} /></Pressable>
              <Text style={{ color: Colors.black, fontSize: 20 }}>{currentQty}</Text>
              <Pressable onPress={() => { handleDecreaseQty(item) }} style={styles.Icons}><AntDesign name='minus' size={15} color={Colors.white} /></Pressable>
            </View>

            <Pressable onPress={() => { handleItemAddedToFav(item) }} style={{ padding: 10, borderRadius: 30, backgroundColor: Colors.grey3 }}>
              <AntDesign name='heart' color={Colors.primary} size={20} />
            </Pressable>
          </View>



          <View style={{ alignItems: 'center', paddingVertical: 10, gap: 10 }}>
            <Text style={{ color: Colors.black, fontSize: 25, fontWeight: '600' }}>{item.title}</Text>


            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 60 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <FontAwesome name={'star'} color={Colors.yellow} size={widthToDp(4)} />
                <Text style={styles.IconsImageTxt}>{item.rating.toFixed(0) + '+'}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <FontAwesome5 name={'fire'} color={Colors.primary} size={widthToDp(4)} />
                <Text style={styles.IconsImageTxt}>{item.cal + 'cal'}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <MaterialIcons name={'alarm-on'} color={Colors.yellow} size={widthToDp(4)} />
                <Text style={styles.IconsImageTxt}>{item.time + 'min'}</Text>
              </View>
            </View>

          </View>


          <View style={styles.DesCover}>
            <Text numberOfLines={4} style={{ fontSize: 15, fontWeight: '400', color: Colors.light_txt }}>{item.Des}</Text>
          </View>

          <View style={{ paddingHorizontal: widthToDp(6), paddingTop: heightToDp(5) }}>
            <TextLine Text={'Toppings for you'} />
          </View>

        </View>

      </ScrollView>

      <Button onPress={() => { Cart.some((Item) => Item.id === item.id) ? handleRemovefromCart(item) : handleAddtoCart(item) }} title={Cart.some((Item) => Item.id === item.id) ? 'Remove from Cart' : 'Add to Cart'} style={{ paddingHorizontal: widthToDp(5), paddingVertical: heightToDp(5) }} />
    </SafeAreaView>
  )
};

export default ProductDetailscreen

const styles = StyleSheet.create({
  ImageContainer: {
    alignSelf: 'center',
    width: widthToDp(100),
    height: widthToDp(90),
    backgroundColor: Colors.white,
    elevation: 10,
  },
  Icons: {
    elevation: 5,
    borderRadius: 20,
    padding: 10,
    backgroundColor: Colors.primary
  },
  IconsImageTxt: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.light_txt
  },
  DesCover: {
    marginTop: heightToDp(10),
    backgroundColor: Colors.white,
    width: widthToDp(90),
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: widthToDp(5),
    alignItems: 'center',
    paddingVertical: heightToDp(5)
  }
})