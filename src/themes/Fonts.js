import { TextStyle } from "react-native";

export const size = {
  sectionHeaderLarge: 22,
  sectionHeaderMedium: 18,
  sectionHeaderSmall: 16,
  large: 20,
  medium: 18,
  small: 16,
  tiny: 14
};

export const style = {
  sectionHeaderLarge: {
    fontSize: size.sectionHeaderLarge,
    fontWeight: "bold"
  },
  sectionHeaderMedium: {
    fontSize: size.sectionHeaderMedium
  },
  sectionHeaderSmall: {
    fontSize: size.sectionHeaderSmall
  },
  normal: {
    fontSize: size.medium
  },
  listSubtitle: {
    fontSize: size.tiny,
    fontWeight: "bold"
  },
  description: {
    fontSize: size.small
  },
  navigationTabs: {
    fontWeight: "bold",
    fontSize: size.tiny
  },
  buttons: {
    fontWeight: "bold",
    fontSize: size.medium
  }
};