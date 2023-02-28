import react, { useState, useContext } from "react";

import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../constants/theme";
import styles from "./styles";
import { Context as AuthContext } from "../../context/AuthContext";
const ProfileScreen = ({ navigation }) => {
  const { state, signin, signout } = useContext(AuthContext);
  const [UserName, setUserName] = useState(state.profile?.UserName);
  const [Password, setPassword] = useState(state.profile?.Password);
  const [FirstName, setFirstName] = useState(state.profile?.FirstName);
  const [LastName, setLastName] = useState(state.profile?.LastName);
  const [SellerName, setSellerName] = useState(state.profile?.SellerName);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topContainer}>
          <Text style={styles.title}>پروفایل </Text>
          <Text style={styles.subTitle}>ویرایش اطلاعات فروشگاه</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.labelInput}>نام و نام خانوادگی </Text>
          <TextInput
            placeholder="نام و نام خانوادگی فروشنده"
            placeholderTextColor={COLORS.white}
            style={styles.textInput}
            onChangeText={setUserName}
            value={UserName}
          />

          <Text style={styles.labelInput}>نام فروشگاه </Text>
          <TextInput
            placeholder="فروشگاه"
            placeholderTextColor={COLORS.white}
            style={styles.textInput}
            onChangeText={setSellerName}
            value={SellerName}
          />
          {/* <Text style={styles.labelInput}> شماره موبایل </Text>
          <TextInput
            placeholder="09123456789"
            placeholderTextColor={COLORS.white}
            style={styles.textInput}
            onChangeText={setEmail}
            value={email}
          /> */}
          <Text style={styles.labelInput}> ایمیل </Text>
          <TextInput
            placeholder="Email.Email.com"
            placeholderTextColor={COLORS.white}
            style={styles.textInput}
            onChangeText={setUserName}
            value={UserName}
          />
          <Text style={styles.labelInput}>کلمه عبور </Text>
          <TextInput
            placeholder="PassWord"
            placeholderTextColor={COLORS.white}
            style={styles.textInput}
            onChangeText={setPassword}
            value={Password}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={signout}>
            <Text style={styles.text}>خروج</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
