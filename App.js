import React from "react";
import { View } from "react-native";
import MainStackNav from "./screens/Navigations/MainStackNav";
import { Provider } from "react-redux";
import Store from "./redux/Store";

const App = () => {

  return (
    <Provider store={Store}>
      <View style={{ flex: 1 }}>
        <MainStackNav />
      </View>
    </Provider>
  )
};


export default App;