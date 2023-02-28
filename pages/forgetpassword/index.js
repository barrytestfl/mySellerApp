import react, { useState, useContext } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";

import { Context as AuthContext } from "../../context/AuthContext";
const ForgetPasswordScreen = ({ navigation }) => {
  const { state, forgetpassword } = useContext(AuthContext);
  const IrMobileValid = (Mob = "") => {
    if (Mob == null || Mob == "") return true;
    Mob = Mob.toString();

    var patt1 = /[^0-9]/g;
    var result = Mob.match(patt1);
    if (result != null) {
      return false;
    }
    if (Mob.length == 10) Mob = "0" + Mob;
    if (Mob.length != 11) return false;
    if (parseInt(Mob[0]) != 0 || parseInt(Mob[1]) != 9) return false;
    if (parseInt(Mob[2]) > 3 && parseInt(Mob[2]) < 9) return false;
    return true;
  };

  const [mobile, setMobile] = useState(null);
  const [messageForm, setmessageForm] = useState("");
  const checkMobile = (Mob = "") => {
    if (!IrMobileValid(Mob)) {
      setmessageForm("شماره موبایل صححیح وارد کنید");
    } else {
      setmessageForm("");
    }
    setMobile(Mob);
  };

  const SendMobile = () => {
    if (IrMobileValid(mobile) && mobile) {
      forgetpassword({ mobile });
    } else {
      setmessageForm("لطفا شماره  موبایل صحیح وارد کنید");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>بازیابی رمز عبور</Text>
      <View
        style={{
          marginTop: 25,
          borderRadius: 15,
          borderWidth: 1,
          backgroundColor: "#FFFFFF",
          paddingVertical: 2,
          marginVertical: 2,
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder="   شماره موبایل خود را وارد کنید : 09123456789"
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={11}
          spellCheck={true}
          onChangeText={checkMobile}
          value={mobile}
        />
      </View>
      <View>
        <Text style={{ color: "red", fontFamily: "byekan", marginTop: 10 }}>
          {messageForm}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          SendMobile();
        }}
        disabled={state.isLoading}
        style={[
          styles.button,
          state.isLoading && {
            backgroundColor: "gray",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          },
        ]}
      >
        {state.isLoading && <ActivityIndicator size="small" color="yellow" />}
        <Text style={styles.textButton}>
          {state.isLoading ? "درحال برقراری ارتباط" : "تایید"}
        </Text>
      </TouchableOpacity>
      <View>
        <Text style={{ color: "green", fontFamily: "byekan", marginTop: 10 }}>
          {state.message}
        </Text>
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;
