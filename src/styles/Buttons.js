import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../themes";

export default StyleSheet.create({
    standardButton: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        margin: Metrics.margin.tripleBaseMargin,
        width: 100,
        borderRadius: Metrics.buttonRadius.large,
        backgroundColor: Colors.white,
    }
});