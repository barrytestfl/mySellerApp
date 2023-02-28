import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Pressable,
  Switch,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AccordinItem from "../../components/AccordionItem";
import { Context as AuthContext } from "../../context/AuthContext";
import styles from "./styles";
import { Icon } from "react-native-elements";
import { RadioButtonGroup } from "../../components/RadioButton";

function currencyFormat(num) {
  return "" + num?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
const Orders = () => {
  const { state, showOrders } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [SentConditions, setSentConditions] = React.useState(0);
  const [PayType, setPayType] = React.useState(0);
  const [start, setStart] = React.useState(0);
  const [length, setLengtth] = React.useState(20);
  const data = [
    {
      text: "در صف بررسی",
      value: 0,
    },
    {
      text: "تایید شده",
      value: 1,
    },
    {
      text: "تحویل به انبار",
      value: 3,
    },
    {
      text: "مرجوعی",
      value: 7,
    },
  ];

  const onRadioButtonPress = (itemIdx) => {
    setSentConditions(itemIdx);
  };
  useEffect(() => {
    showOrders({ PayType, SentConditions, start, length });
  }, [start]);
  const showResult = () => {
    setModalVisible(!modalVisible);
    showOrders({ PayType, SentConditions, start, length });
  };
  const renderFooter = () => {
    return state.orders?.recordsTotal >= length ? (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 50,

          shadowColor: "#00000021",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
          elevation: 12,
          margin: 20,
          backgroundColor: "#00CED1",
          padding: 10,

          borderRadius: 38,
        }}
      >
        <TouchableOpacity
          disabled={state.orders?.data.length < length}
          style={{
            flex: 1,
            flexDirection: "row",
            paddingLeft: 2,
            paddingRight: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setStart(start + length)}
        >
          <Icon
            name={"arrow-back-circle-outline"}
            type="ionicon"
            size={30}
            color={state.orders?.data.length < length ? "gray" : "blue"}
          />
          <Text
            style={state.orders.data.length < length ? { color: "gray" } : {}}
          >
            صفحه بعد
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={{ color: "#FFF", textAlign: "center" }}>
            {start + state.orders.data.length} از {state.orders.recordsTotal}
          </Text>
        </View>
        <TouchableOpacity
          disabled={start == 0}
          style={[
            {
              flex: 1,
              flexDirection: "row",
              paddingLeft: 2,
              paddingRight: 2,
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
          onPress={() => setStart(start - 20)}
        >
          <Text style={start == 0 ? { color: "gray" } : {}}>صفحه قبل </Text>
          <Icon
            name={"arrow-forward-circle-outline"}
            type="ionicon"
            size={30}
            color={start == 0 ? "gray" : "blue"}
          />
        </TouchableOpacity>
      </View>
    ) : (
      state.orders?.recordsTotal == 0 && (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,

            shadowColor: "#00000021",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
            margin: 20,
            backgroundColor: "#C0CCD1",
            padding: 10,

            borderRadius: 38,
          }}
        >
          <Text>سفارش وجود ندارد</Text>
        </View>
      )
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  flexDirection: "row-reverse",
                  justifyContent: "flex-start",
                  alignContent: "flex-end",
                }}
              >
                <Text style={styles.modalText}> فیلتر</Text>
                <TouchableOpacity
                  style={styles.closebutton}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Icon
                    name={"close-outline"}
                    type="ionicon"
                    size={30}
                    color={"red"}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.modalForm}>
                <ScrollView
                  style={styles.contentList}
                  StickyHeaderComponent={() => {
                    return (
                      <View>
                        <Text>Orders</Text>
                      </View>
                    );
                  }}
                >
                  <RadioButtonGroup
                    values={data}
                    curval={SentConditions}
                    onPress={onRadioButtonPress}
                  />
                </ScrollView>
              </View>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => showResult()}
              >
                <Text style={styles.textStyle}>جستجو</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <View style={styles.card}>
          <View style={[styles.cardItem, { flex: 1, borderRightWidth: 2 }]}>
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>فیلتر </Text>
              <Icon
                name={"filter-outline"}
                type="ionicon"
                size={30}
                color={"blue"}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.cardItem, { flex: 1, paddingLeft: 10 }]}>
            <TouchableOpacity
              style={[styles.cardButton]}
              onPress={() =>
                showOrders({ PayType, SentConditions, start, length })
              }
            >
              <Icon
                name={"sync-outline"}
                type="ionicon"
                size={30}
                color={"green"}
              />
              <Text>بازخوانی </Text>
            </TouchableOpacity>
          </View>
        </View>
        {state.isLoading && <ActivityIndicator size="large" color="green" />}
        {!state.isLoading && (
          <FlatList
            style={{ marginLeft: 10, marginRight: 10 }}
            pagingEnabled={true}
            data={state.orders?.data}
            keyExtractor={(item) => item.OrderDetailID.toString()}
            ListFooterComponent={renderFooter}
            renderItem={({ item, index }) => (
              <AccordinItem
                open={index == 0}
                title={
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      justifyContent: "center",
                      fontFamily: "byekan",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        flex: 1,
                        justifyContent: "space-between",
                        overflow: "hidden",
                      }}
                    >
                      <Text style={{ padding: 4, fontFamily: "byekan" }}>
                        کد سفارش : {item.OrderCode}
                      </Text>
                      <Text style={{ padding: 2, fontFamily: "byekan" }}>
                        {" "}
                      </Text>

                      <Text
                        style={{
                          fontFamily: "byekan",
                          color: "#37cde0",
                          alignSelf: "flex-end",
                          padding: 1,
                          paddingRight: 5,
                        }}
                      >
                        {item.Date}
                      </Text>
                    </View>
                  </View>
                }
                bodyText={
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      borderTopWidth: 1,
                      borderColor: "#C1C1C1",
                    }}
                  >
                    <View style={[styles.contentList]}>
                      <Image
                        style={{
                          width: 90,
                          height: 90,
                          borderRadius: 45,
                          borderWidth: 2,
                          borderColor: "#ebf0f7",
                        }}
                        source={{
                          uri:
                            "https://nikgallery.com/uploads/products/larg/" +
                            item?.Image,
                        }}
                      />
                    </View>
                    <View style={styles.listContainer}>
                      <Text
                        style={{
                          color: "#33000E",
                          marginTop: 15,
                          fontFamily: "byekan",
                        }}
                      >
                        {item.ProductName.substring(0, 30)}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "byekan",
                          color: "#33000E",
                          marginTop: 10,
                        }}
                      >
                        تعداد : {item.Count}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "byekan",
                          color: "#33000E",
                          marginTop: 10,
                        }}
                      >
                        قیمت : {currencyFormat(item.Price)}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "byekan",
                          color: "#33000E",
                          marginTop: 10,
                        }}
                      >
                        کد کالا : {item.Refrance}
                      </Text>
                    </View>
                  </View>
                }
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
export default Orders;
