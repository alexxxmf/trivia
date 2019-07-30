import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const metrics = {
  section: 25,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === "ios" ? 64 : 54,
  screenHeightSmallDevices: 560,
  margin: {
    smallMargin: 5,
    baseMargin: 10,
    doubleBaseMargin: 20,
    tripleBaseMargin: 30,
  },
  padding: {
    smallPadding: 5,
    basePadding: 10,
    doublePadding: 20,
    triplePadding: 30,
  },
  borderWidth: {
    tiny: 1,
    small: 2,
    medium: 4,
    thick: 8
  },
  buttonRadius: {
    small: 4,
    medium: 8,
    large: 12
  }, 
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 60
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    xlarge: 100,
    xxlarge: 150,
    xxxlarge: 300,
    main: 400
  }
};

export default metrics;