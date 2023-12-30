import { Dimensions, StyleSheet, Text, View, SafeAreaView, ImageBackground } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import Button from "../../components/Button.component.js";
import image1 from '../../assets/on1.jpg';
import image2 from '../../assets/on2.png';
import image3 from '../../assets/on3.jpg';

import OnboardingItem from "../../components/OnboardingItem.component.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../../constants/Color.js";
import { heightToDp, widthToDp } from "../../constants/DimensionsApi.js";
import Header1 from "../../components/Header1.component.js";

const Steps = ({ steps, currentIndex }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: heightToDp(4),
        justifyContent: "center",
      }}
    >
      {steps.map((step, index) => (
        <View
          key={index}
          style={{
            height: 5,
            borderRadius: 10,
            width: currentIndex == index ? 20 : 5,

            backgroundColor:
              currentIndex == index ? Colors.primary : "#EBEEF2",
          }}
        ></View>
      ))}
    </View>
  );
};

const viewconfigRef = { viewAreaCoveragePercentThreshold: 95 };

const OnBoarding = ({ navigation, route }) => {
  let flatListRef = React.useRef();

  // current index of element in the flat list
  const [currentIndex, setCurrentIndex] = React.useState(0);
  // changing the viewable area will trigger this
  const onViewRef = React.useRef(({ changed }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  //================= Onboarding Steps =================
  const onboardingSteps = [
    // Flat list ref
    { id: 1, Txt: 'Orders from your favorite stores or vendors', Txt2: 'Order with Ease...!', Txt3: 'Scroll the dishes and choose what you like, or customize your meal while hovering.', Image: image1 },
    { id: 3, Txt: 'Hover around the menu and select to fulfil your hunger', Txt2: 'Fast Delivery...!', Txt3: 'Book whatever you want to eat and get your meal on your table within time.', Image: image2 },
    { id: 2, Txt: 'Enjoy instant delivery and payment', Txt2: 'Get your Orders...!', Txt3: 'Sign Up to become our cutomer, order and enjoy your meal at home.', Image: image3 },
  ];

  // ==================== handle next step ================
  const handleNextStep = () => {
    if (currentIndex < onboardingSteps.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      AsyncStorage.setItem("onBoarding", "true");
      navigation.navigate("SignIn");
    }
  };

  //========================================================

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={{ flex: 1 }}>

        <Header1 onRightPress={() => { navigation.navigate('SignUp') }} />


        {/* Carosel Images View */}
        <View style={{ alignItems: 'center' }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            ref={(ref) => {
              flatListRef.current = ref;
            }}
            onViewableItemsChanged={onViewRef.current}
            scrollEnabled={false}
            horizontal
            data={onboardingSteps}
            renderItem={({ item }) => (<OnboardingItem Item={item} />)}
          />

        </View>
      </View>

      <View style={{ paddingBottom: heightToDp(5) }}><Steps steps={[1, 2, 3]} currentIndex={currentIndex} /></View>

      <Button
        style={{ paddingHorizontal: widthToDp(5), paddingVertical: heightToDp(5) }}
        title={currentIndex === onboardingSteps.length - 1 ? "Get Started" : "Next"}
        onPress={handleNextStep}
        postTextLogo={currentIndex === onboardingSteps.length - 1 ? null : null}
        disabled={false}
      />
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {},
});