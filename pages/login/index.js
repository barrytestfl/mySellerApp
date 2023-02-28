import React, { useState, useContext } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import styles from "./styles";
import { Context as AuthContext } from "../../context/AuthContext";
// You can use your custom background image
import BackgroundImage from "../../assets/images/Time.png";

// npm install react-native-elements
import { Icon } from "react-native-elements";

// npm install react-native-animatable
import * as Animatable from "react-native-animatable";
import { Time } from "./../../constants/icons";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsvalid] = useState(false);

  const validationUserName = (text) => {
    setUsername(text);
    if (username.length > 10 && password.length > 5) {
      setIsvalid(true);
    } else {
      setIsvalid(false);
    }
  };
  const validationPassword = (text) => {
    setPassword(text);
    if (username.length > 10 && password.length > 5) {
      setIsvalid(true);
    } else {
      setIsvalid(false);
    }
  };
  const { state, signin } = useContext(AuthContext);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Animatable.Text
          style={styles.titleText}
          animation="fadeInUp"
          delay={1200}
        >
          مرکز فروشندگان نیک گالری
        </Animatable.Text>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",

            height: 250,
            width: "100%",
            top: 60,
            left: 25,
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}
        >
          <Animatable.Image
            animation="zoomInUp"
            resizeMode="stretch"
            style={{ width: "85%", height: 150 }}
            delay={1000}
            source={BackgroundImage}
          ></Animatable.Image>
        </View>

        <View style={styles.bottomView}>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name="person"
              type="ionicons"
              color="#00CED1"
            />
            <TextInput
              style={styles.input}
              placeholder="نام کاربری "
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={validationUserName}
              value={username}
            />
          </View>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name="lock"
              type="ionicons"
              color="#00CED1"
            />
            <TextInput
              style={styles.input}
              placeholder="کلمه عبور"
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={validationPassword}
              value={password}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ResetPass");
            }}
          >
            <Text style={styles.fpText}>یادآوری کلمه عبور</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.loginButton,
              !isValid && { backgroundColor: "gray" },
              state.isLoading && {
                backgroundColor: "gray",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              },
            ]}
            onPress={() => {
              signin({ username, password });
            }}
            disabled={state.isLoading || !isValid}
          >
            {state.isLoading && (
              <ActivityIndicator size="small" color="yellow" />
            )}
            <Text style={styles.loginButtonText}>
              {state.isLoading ? "درحال برقراری ارتباط" : "ورود"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;
