import React, { TouchableOpacity, Text, Animated, View } from "react-native";
import { Icon } from "react-native-elements";
import { useEffect, useContext } from "react";
import { Context as AuthContext } from "./../context/AuthContext";
const Toasts = () => {
  const { state } = useContext(AuthContext);
  const animatedValue = new Animated.Value(3000);

  function callToast() {
    Animated.timing(animatedValue, {
      toValue: 70,
      duration: 350,
      useNativeDriver: false,
    }).start(closeToast());
  }

  function closeToast() {
    setTimeout(() => {
      Animated.timing(animatedValue, {
        toValue: 270,
        duration: 350,
        useNativeDriver: false,
      }).start();
    }, 1000);
  }
  function closeToastForce() {
    Animated.timing(animatedValue, {
      toValue: 270,
      duration: 350,
      useNativeDriver: false,
    }).start();
  }
  useEffect(() => {
    if (state.showToast == true && !state.isLoading) {
      callToast();
    }
  }, [state.showToast]);

  return (
    <Animated.View
      style={{
        // display: state.showToast == true ? "flex" : "none",
        transform: [{ translateY: animatedValue }],
        height: 80,
        backgroundColor: "gray",
        position: "absolute",
        left: 0,
        bottom: 110,
        right: 0,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          paddingTop: 15,
          alignItems: "baseline",
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            marginBottom: 15,
            padding: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 4,
            borderRadius: 15,
          }}
          onPress={() => closeToast()}
        >
          <Icon name={"close-outline"} type="ionicon" size={30} color={"red"} />
        </TouchableOpacity>
        <Text
          onPress={() => closeToast()}
          style={{
            flex: 8,
            marginLeft: 10,
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {state.message ?? " CAN NOT CONNECT !"}
        </Text>
      </View>
    </Animated.View>
  );
};

export default Toasts;
