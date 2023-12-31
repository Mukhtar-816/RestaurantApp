import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header2 from '../../components/Header2.component'
import Colors from '../../constants/Color'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { heightToDp, widthToDp } from '../../constants/DimensionsApi'
import Tab from '../../components/Tab.component'
import sausage from '../../assets/Svgs/sausage'
import samosa from '../../assets/Svgs/samosa'
import burger from '../../assets/Svgs/burger'
import TextLine from '../../components/TextLine.component'
import ProductCard from '../../components/ProductCard.component'
import SearchBar from '../../components/SearchBar.component'
import { useDispatch, useSelector } from 'react-redux'
import { AddtoCart } from '../../redux/Slices/CartSlice/CartSlice'


const Homescreen = ({ navigation }) => {

  //States
  const [currentTab, setCurrentTab] = useState(1);

  //constants
  const dispatch = useDispatch();
  const img_user = 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png';
  const Product = useSelector((state) => state.Products);
  const Cart = useSelector((state) => state.Cart);

  
  //functions
  function handleLeftIconPress(e) { navigation.navigate('Cart') };

  function handleRightIconPress(e) { navigation.navigate('Profile') };

  function handleCardPress(item) { navigation.navigate('ProductDetail', { item }) };

  function handleItemHeartPress(item) { };

  function handleItemPlusPress(item) { dispatch(AddtoCart(item)) };



  function ShoppingCartLength() {
    return (
      <View>
        <MaterialIcons name={'shopping-cart'} color={Colors.light_red} size={25} />
        {Cart.length > 0 ? <Text style={styles.ShoppingCartLengthTxt}>{Cart.length}</Text> : null}
      </View>
    )
  };



  //Tabs
  const Tabs = [
    { id: 1, name: 'burger', icon: burger },
    { id: 2, name: 'Samosa', icon: samosa },
    { id: 3, name: 'Sausages', icon: sausage },
    { id: 4, name: 'burger', icon: burger },
    { id: 5, name: 'Suasages', icon: sausage },
    { id: 6, name: 'Samosa', icon: samosa }
  ];


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView style={{ flex: 1, }} showsVerticalScrollIndicator={false} bounces={false}>

        <View style={{ justifyContent: 'center', paddingBottom: heightToDp(5) }}>
          <Header2
            TxtColor={Colors.white}
            onLeftBtnPress={() => { handleLeftIconPress() }}
            onRightIconPress={() => { handleRightIconPress() }}
            style={{ paddingHorizontal: widthToDp(5) }}
            btn={ShoppingCartLength()}
            RightIcon={<Image resizeMode='contain' style={{ height: 25, width: 25 }} source={{ uri: img_user }} />} />

          <SearchBar style={{ paddingHorizontal: widthToDp(12), paddingTop: 20, }} />
        </View>


        <View style={{ paddingLeft: widthToDp(6), }}>
          <Text style={styles.Txt}>Enjoy Delicious Food</Text>
        </View>



        {/* Materal Top Tabs */}
        <View style={{ paddingVertical: heightToDp(5) }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={{ columnGap: 20, paddingHorizontal: 20, paddingVertical: 5 }}
            horizontal
            data={Tabs}
            renderItem={({ item }) => (
              <Tab
                tabTitle={item.name}
                tabIcon={item.icon}
                onPress={() => { setCurrentTab(item.id) }}
                active={currentTab === item.id ? true : false}
              />)} />
        </View>


        <TextLine Text={'Popular restaurants'} btnTxt={'View all'} style={{ paddingHorizontal: widthToDp(6) }} />


        {/* Products List # 1 */}
        <View style={{ flex: 1, paddingVertical: heightToDp(5), paddingBottom: heightToDp(10) }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={{ columnGap: 30, paddingHorizontal: widthToDp(5) }}
            horizontal
            data={Product}
            renderItem={({ item }) => (
              <ProductCard
                IsPresentInCart={Cart.some((Items) => Items.id === item.id) ? true : false}
                onPress={() => { handleCardPress(item) }}
                onHeartPress={() => { handleItemHeartPress(item) }}
                onPlusPress={() => { handleItemPlusPress(item) }}
                item={item} />)} />
        </View>


        <TextLine Text={'Suggested restaurants'} btnTxt={'View all'} style={{ paddingHorizontal: widthToDp(6) }} />


        {/* Products List # 2 */}
        <View style={{ flex: 1, paddingVertical: heightToDp(5), paddingBottom: heightToDp(40) }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={{ columnGap: 30, paddingHorizontal: widthToDp(5) }}
            horizontal
            data={Product}
            renderItem={({ item }) => (
              <ProductCard
                onPress={() => { handleCardPress(item) }}
                onHeartPress={() => { handleItemHeartPress(item) }}
                onPlusPress={() => { handleItemPlusPress(item) }}
                item={item} />)} />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
};

export default Homescreen;

const styles = StyleSheet.create({
  Txt: {
    color: Colors.black,
    fontSize: 22,
    fontWeight: '600'
  },
  ShoppingCartLengthTxt: {
    color: Colors.white,
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 4,
    alignSelf: 'flex-end',
    fontSize: 10,
    marginTop: -2,
  }
})