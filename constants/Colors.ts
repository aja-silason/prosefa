const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const primaryColor = "#0d3053";
const white = "#fff";
const gray = "#888";
const black = "#222";

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    primary: primaryColor,
    black: black,
    white: {
      100: white
    },
    gray: {
      100: gray
    },
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
