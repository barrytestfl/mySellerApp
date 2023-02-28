import { getToken } from "../../helpers/AuthToken";
import react, { useContext, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";

import styles from "./styles";
import { Context as AuthContext } from "../../context/AuthContext";
import DashboardItem from "../../components/DashboardItem";
import HeaderHome from "../../components/Header";
function currencyFormat(num) {
  return "" + (num || 0).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
const Home = ({ navigation }) => {
  const { state, dashboard, Brands, Groups } = useContext(AuthContext);
  const modalVisible = false;
  const userSelected = [];

  useEffect(() => {
    dashboard();
    Brands();
    Groups();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ height: 100 }}>
        <View style={[styles.header, { height: "100%", padding: 15 }]}>
          <HeaderHome item={state.profile} />
        </View>
      </View>
      <ScrollView
        style={styles.contentList}
        StickyHeaderComponent={() => {
          return (
            <View>
              <Text>Products</Text>
            </View>
          );
        }}
      >
        {/*سفارشات */}
        <DashboardItem style={styles.listContainer}>
          <Text style={styles.labeleheader}>سفارشات</Text>
          <View style={styles.row}>
            <Text style={{ flex: 6 }}>کل تعهد ارسال گذشته و امروز </Text>
            <Text style={styles.rowvalue}>
              {state.dashboard?.Tot_Sent_ToDay_And_Befor}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={{ flex: 6 }}>تعهد ارسال فردا به بعد</Text>
            <Text style={styles.rowvalue}>
              {state.dashboard?.Tot_Sent_Tomarrow}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={{ flex: 6 }}>سفارشات امروز شما</Text>
            <Text style={styles.rowvalue}>{state.dashboard?.Tot_ToDay}</Text>
          </View>
        </DashboardItem>
        {/*محصولات */}
        <DashboardItem style={styles.listContainer}>
          <Text style={styles.labeleheader}>محصولات</Text>
          <View style={styles.row}>
            <Text style={{ flex: 6 }}>کالاهای درج شده در ۳۰ روز گذشته </Text>
            <Text style={styles.rowvalue}>{state.dashboard?.Add_Month}</Text>
          </View>
          <View style={styles.row}>
            <Text style={{ flex: 6 }}>کالاهای تأیید شده</Text>
            <Text style={styles.rowvalue}>{state.dashboard?.Accepted}</Text>
          </View>
          <View style={styles.row}>
            <Text style={{ flex: 6 }}>کالاهای در انتظار تأیید</Text>
            <Text style={styles.rowvalue}>{state.dashboard?.InQueu}</Text>
          </View>
          <View style={styles.row}>
            <Text style={{ flex: 6 }}>بررسی مجدد</Text>
            <Text style={styles.rowvalue}>{state.dashboard?.Not_Accepted}</Text>
          </View>
        </DashboardItem>
        {/*وضعیت فروش (ناخالص) */}
        <DashboardItem style={styles.listContainer}>
          <Text style={styles.labeleheader}>وضعیت فروش (ناخالص)</Text>
          <View style={styles.row}>
            <Text style={{ flex: 6 }}>فروش هفته جاری </Text>
            <Text style={styles.rowvalue}>
              {currencyFormat(state.dashboard?.CurWeek)}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={{ flex: 6 }}>فروش هفته گذشته</Text>
            <Text style={styles.rowvalue}>
              {currencyFormat(state.dashboard?.PastWeek)}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={{ flex: 6 }}>فروش ماه گذشته</Text>
            <Text style={styles.rowvalue}>
              {currencyFormat(state.dashboard?.PastMonth)}
            </Text>
          </View>
        </DashboardItem>
        {/*تعداد فروش (ناخالص) */}
        <DashboardItem style={styles.listContainer}>
          <Text style={styles.labeleheader}>تعداد فروش (ناخالص)</Text>
          <View style={styles.row}>
            <Text style={{ flex: 6 }}>فروش هفته جاری </Text>
            <Text style={styles.rowvalue}>{state.dashboard?.CurWeekCount}</Text>
          </View>
          <View style={styles.row}>
            <Text style={{ flex: 6 }}>فروش هفته گذشته</Text>
            <Text style={styles.rowvalue}>
              {state.dashboard?.PastWeekCount}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={{ flex: 6 }}>فروش ماه گذشته</Text>
            <Text style={styles.rowvalue}>
              {state.dashboard?.PastMonthCount}
            </Text>
          </View>
        </DashboardItem>
      </ScrollView>
      {/* <View style={styles.contentList}>
        {state.dashboard && (
          <View style={styles.listContainer}>
            {renderItem({ count: 0, name: "t" })}
          </View>
        )}
      </View> */}
    </View>
  );
};
export default Home;
