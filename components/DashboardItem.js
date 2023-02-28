import { View } from "react-native";

import React from "react";
export default class DashboardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          fontFamily: "byekan",
          flex: 1,
          backgroundColor: "white",
          margin: 10,
          textAlign: "center",
          fontSize: 20,
          paddingTop: 15,
          borderRadius: 23,
          shadowColor: "#00000021",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
          elevation: 12,
          padding: 20,
        }}
      >
        {this.props.children}
      </View>
    );
  }
}
