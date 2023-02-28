import { useContext } from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
 
import { useFonts } from "expo-font";

import Home from "./pages/home/index";
import Products from "./pages/products/index";
import FindProducts from "./pages/findproducts/index";
import Orders from "./pages/orders/index";
import Profile from "./pages/profile/index";
import LogIn from "./pages/login/index";
import ResetPass from "./pages/forgetpassword/index";

import Toasts from "./components/Toast";
import { Provider as AuthProvider } from "./context/AuthContext.js";
import { Context as AuthContext } from "./context/AuthContext";

const AuthStack = createNativeStackNavigator();
function AuthFlow() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="LogIn"
        component={LogIn}
      />

      <AuthStack.Screen
        name="ResetPass"
        component={ResetPass}
        options={{
          headerBackTitle: "فراموشی کلمه عبور",
          title: "فراموشی کلمه عبور",
        }}
      />
    </AuthStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
function HomeFlow() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          // // marginTop: 120,
          // position: "absolute",
          // bottom: 5,
          // // left: 10,
          // // right: 10,
          // marginLeft: 10,
          // marginRight: 10,
          marginBottom: 5,
           
          backgroundColor: "#FFFFFF",

          // borderRadius: 15,
          height: 65,
          ...styles.shadow,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Icon
                name={focused ? "home-outline" : "home"}
                type="ionicon"
                size={25}
                color={focused ? "#00CED1" : "#748c94"}
              />
              <Text
                style={{
                  color: focused ? "#00CED1" : "#748c94",
                  fontSize: 14,
                  fontFamily: "byekan",
                }}
              >
                خانه
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Icon
                name={focused ? "grid-outline" : "grid"}
                type="ionicon"
                size={25}
                color={focused ? "#00CED1" : "#748c94"}
              />
              <Text
                style={{
                  color: focused ? "#00CED1" : "#748c94",
                  fontSize: 14,
                  fontFamily: "byekan",
                }}
              >
                سفارشات
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Icon
                name={focused ? "options-outline" : "options"}
                type="ionicon"
                size={25}
                color={focused ? "#00CED1" : "#748c94"}
              />
              <Text
                style={{
                  color: focused ? "#00CED1" : "#748c94",
                  fontSize: 14,
                  fontFamily: "byekan",
                }}
              >
                محصولات
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="FindProducts"
        component={FindProducts}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Icon
                name={focused ? "search-outline" : "search"}
                type="ionicon"
                size={25}
                color={focused ? "#00CED1" : "#748c94"}
              />
              <Text
                style={{
                  color: focused ? "#00CED1" : "#748c94",
                  fontSize: 14,
                  fontFamily: "byekan",
                }}
              >
                جستجو
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Icon
                name={focused ? "person-outline" : "person"}
                type="ionicon"
                size={25}
                color={focused ? "#00CED1" : "#748c94"}
              />
              <Text
                style={{
                  color: focused ? "#00CED1" : "#748c94",
                  fontSize: 14,
                  fontFamily: "byekan",
                }}
              >
                پروفایل
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
 
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#95cf12",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
const App = () => {
  const { state } = useContext(AuthContext);
  let [loaded] = useFonts({
    byekan: require("./assets/fonts/byekan.ttf"),
  });
  if (!loaded) {
    return null;
  }
  StatusBar.setBarStyle("dark-content", true);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.userToken === null ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Auth"
              component={AuthFlow}
            />
          </>
        ) : (
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeFlow"
            component={HomeFlow}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default () => {
  return (
    <AuthProvider>
      <App />
      <Toasts />
    </AuthProvider>
  );
};
