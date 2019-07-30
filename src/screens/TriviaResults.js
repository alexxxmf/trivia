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
  SafeAreaView,
  ScrollView,
  ActivityIndicator 
} from "react-native";
import { withNavigation } from 'react-navigation';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { AMOUNT } from 'react-native-dotenv';
import { adopt } from 'react-adopt';

import ApplicationStyles from "../styles/ApplicationStyles";
import Buttons from "../styles/Buttons";
import { logo } from '../assets';
import { style } from "../themes/Fonts";
import { GET_ANSWERS, QUERY_GET_TRIVIA } from '../apollo/queries';
import { WIPEOUT_ANSWERS } from '../apollo/mutations';
import { Metrics, Colors, Fonts } from "../themes";

class TriviaResults extends Component {

    _booleanMapping = (value) => {
        if (value) {
            return (
                <Text style={[styles.correctness, styles.right]}>
                    RIGHT
                </Text>
            );
        } else {
            return (
                <Text style={[styles.correctness, styles.wrong]}>
                    WRONG
                </Text>
            );
        }
    };

    _computeOverallScore = (userAnswers) => {
        let score = 0;
        userAnswers.forEach((userAnswer) => {
            if (userAnswer) {
                score += 1;
            }
        })
        
        return `${score}/${userAnswers.length}`;
    }

    _onPressHandler = (wipeoutAnswers) => {
        this.props.navigation.navigate("TriviaStart");
        wipeoutAnswers();
    }

    render() {

        const Composed = adopt({
            getTrivia: ({ render }) => <Query query={QUERY_GET_TRIVIA}>{render}</Query>,
            getAnswers: ({ render }) => <Query query={GET_ANSWERS}>{render}</Query>,
            wipeoutAnswers: ({ render }) => <Mutation mutation={WIPEOUT_ANSWERS}>{render}</Mutation>
        });

        return (
            <Composed>
                {({ getTrivia, getAnswers, wipeoutAnswers }) => {
                    if (getTrivia.loading || getAnswers.loading) {
                        return (
                            <SafeAreaView style={ApplicationStyles.mainContainer}>
                                <ActivityIndicator size="large" color={Colors.white}/>
                            </SafeAreaView> 
                        );
                    }

                    return (
                        <SafeAreaView style={ApplicationStyles.mainContainer}>
                                <View style={styles.resultsHeader}>
                                    <Text style={ApplicationStyles.sectionTitle}>
                                        Results
                                    </Text>
                                </View>
                                <View style={styles.overallScoreWrapper}>
                                    <Text style={styles.overallScore}>
                                        {this._computeOverallScore(getAnswers.data.userAnswers)}
                                    </Text>
                                </View>
                                <View style={styles.resultsWrapper}>
                                    {getAnswers.data.userAnswers.map((userAnswer, index) => {
                                        const question = getTrivia.data.getTrivia.results[index].question;
                                        return (
                                            <View style={styles.resultWrapper} key={`${index}-${userAnswer}`}>
                                                {this._booleanMapping(userAnswer)}
                                                <Text style={styles.question}>{question.replace(/&quot;/g,'"')}</Text>
                                            </View>
                                        );
                                    })}
                                </View>
                                <View style={styles.buttonWrapper}>
                                    <TouchableHighlight
                                            style={Buttons.standardButton}
                                            onPress={() => this._onPressHandler(wipeoutAnswers)}
                                        >
                                            <Text style={styles.buttonText}>Try Again</Text>
                                    </TouchableHighlight>
                                </View>
                        </SafeAreaView>    
                    );
                }}
            </Composed>
            
        );

    }
}

export const TriviaResultsWithoutHocs = TriviaResults;

export default withNavigation(TriviaResults);

const styles = StyleSheet.create({
    overallScoreWrapper: {
        width: 80,
        height: 40,
        borderRadius: Metrics.buttonRadius.small,
        borderWidth: Metrics.borderWidth.small,
        borderColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    overallScore: {
        color: Colors.white,
        fontSize: Fonts.size.medium
    },
    resultsHeader: {
        flex: 1
    },
    resultsWrapper: {
        flex: 9,
        width: 0.95 * Metrics.screenWidth,
        justifyContent: 'center',
        alignContent: 'center'
    },
    resultWrapper: {
        flexDirection: 'row',
        margin: Metrics.margin.smallMargin,
    },
    correctness: {
        flex: 2,
        justifyContent: 'center',
        marginLeft: Metrics.margin.smallMargin
    },
    right: {
        color: Colors.success
    },
    wrong: {
        color: Colors.error
    },
    question: {
        flex: 10,
        color: Colors.white,
    },
    buttonText: {
        color: Colors.blue,
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'center',
    }
});