import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  ActivityIndicator,
  Pressable,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";

import styles from "./styles";
import { Context as AuthContext } from "../../context/AuthContext";
import Dropdown from "./../../components/Dropdown";
function currencyFormat(num) {
  return "" + num?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
function cammaFormat(num) {
  return "" + num?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
const FindProducts = () => {
  const { state, findProducts, addsellerproduct } = useContext(AuthContext);
  const [start, setStart] = useState(0);
  const [length, setLengtth] = useState(20);

  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalEditVisible, setModalEditVisible] = React.useState(false);
  const [GroupID, setGroupID] = React.useState(0);
  const [BrandID, setBrandID] = React.useState(0);
  const [searchText, setsearchText] = useState("");
  const onGroupIDButtonPress = (itemIdx) => {
    setGroupID(itemIdx);
  };
  const onBrandIDButtonPress = (itemIdx) => {
    setBrandID(itemIdx);
  };
  useEffect(() => {
    findProducts({ start, length, BrandID, GroupID, searchText });
  }, [start, length]);
  const showResult = () => {
    setModalVisible(false);
    setModalEditVisible(false);
    setStart(0);
    findProducts({ start, length, BrandID, GroupID, searchText });
  };
  const renderFooter = () => {
    return state.sellerproducts?.recordsTotal >= length ? (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 50,
          width: "100%",
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
          disabled={state.sellerproducts?.data.length < length}
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
            color={state.sellerproducts?.data.length < length ? "gray" : "blue"}
          />
          <Text
            style={
              state.sellerproducts.data.length < length ? { color: "gray" } : {}
            }
          >
            صفحه بعد
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={{ color: "#FFF", textAlign: "center" }}>
            {cammaFormat(start + state.sellerproducts.data.length)} از{" "}
            {cammaFormat(state.sellerproducts.recordsTotal)}
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
      state.sellerproducts?.recordsTotal == 0 && (
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
            width: "100%",
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
          <Text>کالا وجود ندارد</Text>
        </View>
      )
    );
  };
  const [ProductID, setProductID] = useState(0);
  const [Price, setPrice] = useState(0);
  const [OrderQuantityLimit, setOrderQuantityLimit] = useState(0);
  const [PostageInterval, setPostageInterval] = useState(0);
  const [InStock, setInStock] = useState(0);
  const [Garranty, setGarranty] = useState("");
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [messagePriceVal, setMessagePriceVal] = useState("");
  const onPostageIntervalButtonPress = (itemIdx) => {
    setPostageInterval(itemIdx);
  };
  const ShowADD = (item) => {
    setModalEditVisible(!modalEditVisible);
    setProductID(item.ProductID);
    setPrice(item.Price);
    setOrderQuantityLimit(item.OrderQuantityLimit);
    setPostageInterval(item.PostageInterval);
    setInStock(item.InStock);
    setGarranty(item.Garranty);
    setMax(item.Price + 0.2 * item.Price);
    setMin(item.Price - 0.2 * item.Price);
    setMessagePriceVal("");
  };

  const changePrice = (text) => {
    setMessagePriceVal("");
    let price = parseInt(text);
    if (min > price) {
      setMessagePriceVal(cammaFormat(min) + "حداقل قیمت مجاز برای این کالا");
    } else if (price > max) {
      setMessagePriceVal(cammaFormat(max) + "بالاترین قیمت مجاز برای این کالا");
    }
    setPrice(price);
  };
  const ADDProduct = () => {
    setModalEditVisible(!modalEditVisible);
    addsellerproduct({
      ProductID,
      Price,
      InStock,
      Garranty,
      PostageInterval,
      OrderQuantityLimit,
    });
  };
  const ProductForm = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalEditVisible}
        onRequestClose={() => {
          setModalEditVisible(!modalEditVisible);
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
              <Text style={styles.modalText}> افزودن کالا</Text>
              <TouchableOpacity
                style={styles.closebutton}
                onPress={() => setModalEditVisible(!modalEditVisible)}
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
                style={{
                  width: "100%",
                  margin: 10,
                  marginBottom: 45,
                }}
              >
                <View style={styles.dataContainer}>
                  <Text style={styles.labelInput}>قیمت کالا (تومان) </Text>
                  <TextInput
                    keyboardType="number-pad"
                    placeholder="قیمت کالا (تومان)"
                    placeholderTextColor={"#fff"}
                    style={styles.textInput}
                    onChangeText={changePrice}
                    value={Price.toString()}
                  />

                  <Text
                    style={{
                      alignContent: "flex-end",
                      alignSelf: "flex-end",
                      color: "red",
                      fontSize: 14,
                      textAlign: "right",
                      fontFamily: "byekan",
                    }}
                  >
                    {/* {messagePriceVal} */}
                  </Text>
                </View>
                <View style={styles.dataContainer}>
                  <Text style={styles.labelInput}>حداکثر سفارش </Text>
                  <TextInput
                    placeholder="حداکثر سفارش	"
                    keyboardType="number-pad"
                    placeholderTextColor={"#fff"}
                    style={styles.textInput}
                    onChangeText={setOrderQuantityLimit}
                    value={OrderQuantityLimit.toString()}
                  />
                </View>
                <View style={styles.dataContainer}>
                  <Text style={styles.labelInput}>موجودی </Text>
                  <TextInput
                    placeholder="موجودی	"
                    keyboardType="number-pad"
                    placeholderTextColor={"#fff"}
                    style={styles.textInput}
                    onChangeText={setInStock}
                    value={InStock.toString()}
                  />
                </View>

                <Dropdown
                  label={"بازه ارسال (روز)	"}
                  values={[
                    { value: 0, text: " آماده ارسال      " },
                    { value: 1, text: "1 روز         " },
                    { value: 2, text: "2 روز         " },
                    { value: 3, text: "3 روز         " },
                    { value: 4, text: "4 روز         " },
                    { value: 5, text: "5 روز         " },
                    { value: 6, text: "6 روز         " },
                    { value: 7, text: "7 روز         " },
                    { value: 8, text: "8 روز         " },
                    { value: 9, text: "9 روز         " },
                    { value: 10, text: "10 روز         " },
                  ]}
                  curval={PostageInterval}
                  optionValue="value"
                  optionLabel="text"
                  onPress={onPostageIntervalButtonPress}
                />
                <View style={styles.dataContainer}>
                  <Text style={styles.labelInput}>گارانتی </Text>
                  <TextInput
                    placeholder="گارانتی	"
                    placeholderTextColor={"#fff"}
                    style={styles.textInput}
                    onChangeText={setGarranty}
                    value={Garranty}
                  />
                </View>
              </ScrollView>
              <Pressable
                style={[
                  styles.button,
                  styles.buttonClose,
                  {
                    backgroundColor: "#00CED1",
                    position: "absolute",
                    zIndex: 1,
                    elevation: 1,
                    bottom: 0,
                    marginTop: 10,
                    width: "85%",
                  },
                ]}
                // disabled={min > Price || max < Price}
                onPress={() => ADDProduct()}
              >
                <Text style={styles.textStyle}>ثبت</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <View style={styles.container}>
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
                style={{
                  width: "100%",
                  margin: 10,
                  marginBottom: 45,
                }}
              >
                <Dropdown
                  label={"گروه کالا"}
                  values={state.groups}
                  curval={GroupID}
                  optionValue="GroupID"
                  optionLabel="GroupName"
                  onPress={onGroupIDButtonPress}
                  key={0}
                />

                <View style={styles.dataContainer}>
                  <Text style={styles.labelInput}>نام کالا /کد کالا </Text>
                  <TextInput
                    placeholder="عبارت مورد نظر را وارد کنید..."
                    placeholderTextColor={"#fff"}
                    style={styles.textInput}
                    onChangeText={setsearchText}
                    value={searchText}
                  />
                </View>
                <Dropdown
                  label={"برند کالا"}
                  values={state.brands}
                  curval={BrandID}
                  optionValue="BrandID"
                  optionLabel="BrandName"
                  onPress={onBrandIDButtonPress}
                  key={1}
                />
              </ScrollView>
              <Pressable
                style={[
                  styles.button,
                  styles.buttonClose,
                  {
                    position: "absolute",
                    zIndex: 1,
                    elevation: 1,
                    bottom: 0,
                    marginTop: 10,
                    width: "100%",
                  },
                ]}
                onPress={() => showResult()}
              >
                <Text style={styles.textStyle}>جستجو</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {modalEditVisible == true && ProductForm()}
      <View style={styles.Hcard}>
        <View style={[styles.HcardItem, { flex: 1, borderRightWidth: 2 }]}>
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
              findProducts({ start, length, BrandID, GroupID, searchText })
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
      {state.isLoading && (
        <ActivityIndicator
          size="large"
          color="green"
          style={{ marginTop: 90 }}
        />
      )}
      {!state.isLoading && (
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={state.sellerproducts?.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.ProductID.toString();
          }}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
          ListFooterComponent={renderFooter}
          //ListHeaderComponent={renderFooter}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <View
                    style={{
                      width: "100%",
                      overflow: "hidden",
                      maxHeight: 80,
                      height: 78,
                    }}
                  >
                    <Text style={styles.title}>{item.ProductName}</Text>
                  </View>
                </View>

                <Image
                  style={styles.cardImage}
                  source={{
                    uri:
                      "https://nikgallery.com/uploads/products/larg/" +
                      item.Image,
                  }}
                />

                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <Text style={styles.price}>
                        {currencyFormat(item.Price)}
                      </Text>
                    </View>
                    <View style={styles.socialBarSection}>
                      <Text style={styles.socialBarLabel}>
                        {item.GroupName}
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{ flex: 1, justifyContent: "center" }}>
                  <TouchableOpacity
                    style={{
                      padding: 1,
                      elevation: 0,
                      borderColor: "#787474",
                      borderWidth: 1,
                      borderRadius: 5,
                      flexDirection: "row",
                      justifyContent: "space-around",
                      marginVertical: 10,
                      marginHorizontal: 10,
                      backgroundColor: "#FFF",
                    }}
                    disabled={item.IsSeller > 0}
                    onPress={() => ShowADD(item)}
                  >
                    <Icon
                      name={
                        item.IsSeller > 0
                          ? "checkmark-done-outline"
                          : "add-circle-outline"
                      }
                      type="ionicon"
                      size={30}
                      color={item.IsSeller > 0 ? "blue" : "red"}
                    />
                    <Text
                      style={{
                        alignSelf: "flex-end",
                        marginBottom: 5,
                        justifyContent: "center",
                      }}
                    >
                      {item.IsSeller > 0 ? "فروشنده هستید" : "شما هم بفروشید"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};
export default FindProducts;
