import React from "react";
import { View } from "react-native";
import MainStackNav from "./screens/Navigations/MainStackNav";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import ProductsApiCall from "./hook/DataCall";

const App = () => {

  return (
    <Provider store={Store}>
      <View style={{ flex: 1 }}>
        <ProductsApiCall/>
        <MainStackNav />
      </View>
    </Provider>
  )
};


export default App;