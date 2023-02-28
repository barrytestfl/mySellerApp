import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const RadioButton = ({ isChecked, text, onRadioButtonPress }) => {
  const _renderCheckedView = () => {
    return isChecked ? (
      <View style={[styles.radioButtonIconInnerIcon]} />
    ) : null;
  };

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onRadioButtonPress}>
      <View style={[styles.radioButtonIcon]}>{_renderCheckedView()}</View>
      <View style={[styles.radioButtonTextContainer]}>
        <Text style={styles.radioButtonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
export const RadioButtonGroup = ({ values, onPress, curval }) => {
  const [currentSelectedItem, setCurrentSelectedItem] = useState(curval || 0);

  const _onPress = (idx) => {
    onPress(idx);
    setCurrentSelectedItem(idx);
  };

  const _renderRadioButtons = () => {
    return (values || []).map((listItem, idx) => {
      let isChecked =
        currentSelectedItem === (listItem.value || idx) ? true : false;
      return (
        <RadioButton
          key={idx}
          onRadioButtonPress={() => _onPress(listItem.value || idx)}
          isChecked={isChecked}
          text={listItem.text}
        />
      );
    });
  };
  return <View>{_renderRadioButtons()}</View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 0.5,
    borderColor: "#00CED1",
    flexDirection: "row",
    alignItems: "center",
  },
  radioButtonIcon: {
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "#00CED1",
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIconInnerIcon: {
    height: 25,
    width: 25,
    backgroundColor: "#00CED1",
    borderRadius: 25 / 2,
    borderWidth: 3,
    borderColor: "white",
  },
  radioButtonTextContainer: {
    flex: 5,
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
    fontFamily: "byekan",
  },
  radioButtonText: {
    fontSize: 18,
    fontFamily: "byekan",
  },
});
