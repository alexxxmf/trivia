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
  Alert,
  SafeAreaView
} from "react-native";
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Metrics, Colors } from "../themes";
import ApplicationStyles from "../styles/ApplicationStyles";

export default class QuestionCard extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View
                    style={styles.questionCategory}
                >
                    <Text style={ApplicationStyles.sectionTitle}>
                        {this.props.category}
                    </Text>
                </View>

                <View
                    style={styles.questionWrapper}
                >
                    <View style={styles.upperBorder}/>
                    <Text style={ApplicationStyles.sectionSubTitle}>
                        {this.props.question}
                    </Text>
                    <View style={styles.lowerBorder}/>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 6
    },
    questionCategory: {
        flex: 4,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: Metrics.margin.doubleBaseMargin
    },
    questionWrapper: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: Metrics.padding.doublePadding
    },
    upperBorder: {
        width: Metrics.screenWidth - 30,
        height: 20,
        marginBottom: Metrics.margin.tripleBaseMargin,
        borderWidth: Metrics.borderWidth.thick,
        borderBottomWidth: 0,
        borderColor: Colors.white
    },
    lowerBorder: {
        width: Metrics.screenWidth - 30,
        height: 20,
        marginTop: Metrics.margin.tripleBaseMargin,
        borderWidth: Metrics.borderWidth.thick,
        borderTopWidth: 0,
        borderColor: Colors.white
    }
});