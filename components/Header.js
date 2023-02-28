import { Icon } from "react-native-elements";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import react, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";
const HeaderHome = ({ item }) => {
  const { state, dashboard, signout } = useContext(AuthContext);
  return (
    <View style={styles.card}>
      {/* <Image style={styles.image} source={{ uri: item?.Image }} /> */}
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.SellerName}</Text>
        {/* <Text style={styles.count}>{item.count?.toString()}</Text> */}

        <TouchableOpacity
          disabled={state.isLoading}
          style={[
            styles.followButton,
            state.isLoading && {
              backgroundColor: "green",
            },
          ]}
          onPress={() => {
            dashboard();
          }}
        >
          {state.isLoading && (
            <ActivityIndicator size="small" color="#FFFFFF" />
          )}
          {!state.isLoading && (
            <Icon
              name={"sync-outline"}
              type="ionicon"
              size={30}
              color={"green"}
              style={{ flex: 1, paddingRight: 10 }}
            />
          )}
          <Text
            style={[styles.followButtonText, { flex: 4, textAlign: "center" }]}
          >
            {(item.FirstName || "") + "  " + (item.LastName || item.SellerName)}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderRadius: 22,
          justifyContent: "flex-end",
          alignItems: "baseline",
          alignContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            signout();
          }}
        >
          <Icon
            name={"log-out-outline"}
            type="ionicon"
            size={40}
            color={"red"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    backgroundColor: "transparent",
    elevation: 0,
    //elevation: 0,

    //backgroundColor: "#00CED1",
    padding: 10,
    flexDirection: "row",
    fontFamily: "byekan",
    justifyContent: "space-between",
  },

  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#ebf0f7",
  },

  name: {
    fontFamily: "byekan",
    fontSize: 20,
    height: 20,
    flex: 1,
    marginTop: -10,
    textAlign: "center",
    color: "#3399ff",
    fontWeight: "bold",
    width: "100%",
  },
  count: {
    fontSize: 14,
    flex: 1,
    alignSelf: "center",
    color: "#6666ff",
    fontFamily: "byekan",
  },
  followButton: {
    marginTop: 10,
    height: 55,
    width: "95%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#dcdcdc",
    fontFamily: "byekan",
  },
  followButtonText: {
    fontFamily: "byekan",
    color: "#2d2d2d",
    fontSize: 12,
    textAlign: "center",
    overflow: "hidden",
  },
});
export default HeaderHome;
