import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const COLORS = {
  primary: "#00CED1",
  secondary: "#00acc1",

  black: "#1E1F20",
  white: "#FFFFFF",
  lightGray: "#eff2f5",
  gray: "#8b9097",
  dark: false,
};
export const SIZE = {
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  largTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  width,
  height,
};
export const FONTS = {
  largTitle: {
    fontSize: SIZE.largTitle,
    lineHeight: 50,
  },
  h1: { fontSize: SIZE.h1, lineHeight: 36 },
  h2: { fontSize: SIZE.h2, lineHeight: 30 },
  h3: { fontSize: SIZE.h3, lineHeight: 22 },
  h4: { fontSize: SIZE.h4, lineHeight: 22 },
  body1: { fontSize: SIZE.body1, lineHeight: 36 },
  body2: { fontSize: SIZE.body2, lineHeight: 30 },
  body3: { fontSize: SIZE.body3, lineHeight: 22 },
  body4: { fontSize: SIZE.body4, lineHeight: 22 },
};
const appTheme = { COLORS, SIZE, FONTS };
export default appTheme;
