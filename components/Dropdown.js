import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
const Dropdown = ({
  label = "",
  values = [],
  onPress = () => {},
  curval = 0,
  optionLabel = "",
  optionValue = "",
}) => {
  const [currentSelectedItem, setCurrentSelectedItem] = useState(curval || 0);
  const _onPress = (idx) => {
    onPress(idx);
    setCurrentSelectedItem(idx);
  };

  return (
    <View style={styles.viewContainer}>
      <View style={{ flex: 1, fontSize: 15 }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.textStyle}>{label}</Text>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            mode="dropdown"
            itemStyle={styles.itemStyle}
            style={styles.pickerStyle}
            selectedValue={currentSelectedItem}
            onValueChange={(itemValue, itemIndex) => _onPress(itemValue)}
          >
            {values.map((data, index) => (
              <Picker.Item
                color="#000"
                label={data[optionLabel]}
                value={data[optionValue]}
                key={index}
                style={{ textAlign: "right", alignSelf: "flex-end" }}
                // style={styles.itemStyle}
              />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    width: "98%",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "byekan",
  },
  itemStyle: {
    fontSize: 18,
    backgroundColor: "#325cfd",
    alignContent: "center",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "flex-end",
    fontFamily: "byekan",
  },
  pickerContainer: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
    marginVertical: 15,
    textAlign: "right",
    borderRadius: 8,
    justifyContent: "center",
  },
  pickerStyle: {
    fontFamily: "byekan",
    width: "100%",
    height: 40,
    color: "#000",
    fontSize: 16,
  },
  textStyle: {
    fontSize: 16,
    fontFamily: "byekan",
  },
});
export default Dropdown;
