import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Color'
import Header2 from '../../components/Header2.component'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { heightToDp, widthToDp } from '../../constants/DimensionsApi'
import Button from '../../components/Button.component'
import Entypo from 'react-native-vector-icons/Entypo'
import { useDispatch, useSelector } from 'react-redux'
import { DecreaseQty, IncreaseQty, RemovefromCart } from '../../redux/Slices/CartSlice'
import CartItemCard from '../../components/CartCard.component'




const Cartscreen = ({ navigation }) => {


  //Redux State Data
  const Cart = useSelector((state) => state.Cart);

  //constansts
  const dispatch = useDispatch();


  //functions
  function handlegoBack() {
    navigation.goBack()
  };

  function handleonCardPress(item) {
    //navigate to detail screen
    navigation.navigate('ProductDetail',  {item} )
  };


  //Cart Functions
  function handleIncreaseQty(item) {
    dispatch(IncreaseQty(item))
  };

  function handleDecreaseQty(item) {
    if (item.Qty > 0) { dispatch(DecreaseQty(item)) }
    else { dispatch(RemovefromCart(item)) }
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={{ flex: 1 }}>

        <Header2
          HeaderTxt={'Your Cart'}
          style={{ paddingHorizontal: widthToDp(6) }}
          btn={<MaterialIcons name='arrow-back-ios-new' size={20} color={Colors.black} />}
          RightIcon={<Entypo size={20} color={Colors.light_red} name='bell' />}
          onLeftBtnPress={() => { handlegoBack() }} />


        {/* Cart Items */}
        <View style={styles.ItemsContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: heightToDp(5), rowGap: 20 }}
            data={Cart}
            renderItem={({ item }) => (
              <CartItemCard
                item={item}
                onPress={() => { handleonCardPress(item) }}
                onPlusPress={() => { handleIncreaseQty(item) }}
                onMinusPress={() => { handleDecreaseQty(item) }} />
            )} />
        </View>


        <View style={styles.BottomButtonContainer}>
          <Button
            onPress={() => { navigation.navigate('Checkout') }}
            title={'Confirm Order'}
            style={styles.Button} />
        </View>

      </View>
    </SafeAreaView>
  )
};

export default Cartscreen;

const styles = StyleSheet.create({
  ImageContainer: {
    width: widthToDp(20),
    height: widthToDp(20),
    borderRadius: 20,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    elevation: 10
  },
  BottomButtonContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  ItemsContainer: {
    flex: 1,
    paddingTop: heightToDp(5)
  },
  Button: {
    paddingHorizontal: widthToDp(6),
    paddingVertical: heightToDp(5)
  }
});