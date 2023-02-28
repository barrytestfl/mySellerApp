import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { toggleAnimation } from "./../animations/toggleAnimation";

const AccordinItem = ({ title, bodyText, open = false }) => {
  //console.log({ title, bodyText });
  const [showContent, setShowContent] = useState(open || false);
  const AnimationController = useRef(new Animated.Value(0)).current;
  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(AnimationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation);
    setShowContent(!showContent);
  };
  const arrowTransform = AnimationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => toggleListItem()}>
        <View style={style.titleContainer}>
          {title}
          <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
            <MaterialIcons name="keyboard-arrow-right" size={30} />
          </Animated.View>
        </View>
      </TouchableOpacity>
      {showContent && <View style={style.body}>{bodyText}</View>}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    padding: "2%",
    borderRadius: 12,
    backgroundColor: "#FFF",
    marginBottom: "2%",
    overflow: "hidden",
    shadowColor: "#95cf12",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#bfbaba",
  },
  title: {
    fontSize: 16,
    color: "#2d2d2d",
    fontWeight: "bold",
    fontFamily: "byekan",
  },
  body: {
    paddingHorizontal: "2%",
    fontFamily: "byekan",
    paddingVertical: "3%",
  },
  titleContainer: {
    fontFamily: "byekan",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default AccordinItem;
