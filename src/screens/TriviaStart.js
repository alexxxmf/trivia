import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableHighlight,
  StyleProp,
  TextStyle,
  FlatList,
  ListRenderItem,
  ImageSourcePropType,
  TouchableOpacity,
  TextInput,
  Button,
  SafeAreaView
} from "react-native";
import { withNavigation } from 'react-navigation';

import ApplicationStyles from '../styles/ApplicationStyles';
import Buttons from '../styles/Buttons';
import { logo } from '../assets';
import { style } from '../themes/Fonts';
import { Colors, Metrics } from '../themes';

class TriviaStart extends Component {
    _onPressHandler = async () => {
        this.props.navigation.navigate("TriviaQuestion");
    }

    render() {
        return(
            <SafeAreaView style={ApplicationStyles.mainContainer}>
                <View style={styles.header}>
                    <Text style={ApplicationStyles.sectionTitle}>
                        Welcome to the Trivia Challenge!
                    </Text>
                </View>
                <View style={styles.mainText}>
                    <Text style={ApplicationStyles.sectionSubTitle}>
                        {"You will be presented with 10 True or False questions \n"}
                    </Text>
                    <Text style={ApplicationStyles.sectionSubTitle}>
                        Can you score 100%?
                    </Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableHighlight
                        style={Buttons.standardButton}
                        onPress={this._onPressHandler}
                    >
                        <Text style={styles.buttonText}>Let's Start!</Text>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        );
    }
}

export const TriviaStartWithoutHocs = TriviaStart;

export default withNavigation(TriviaStart);

const styles = StyleSheet.create({
    header: {
        flex: 3,
        justifyContent: "flex-end",
    },
    mainText: {
        flex: 4,
        justifyContent: "flex-end",
        marginBottom: Metrics.margin.tripleBaseMargin
    },
    buttonWrapper: {
        flex: 6,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    buttonText: {
        color: Colors.blue,
    }
});