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
  ActivityIndicator
} from "react-native";
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { AMOUNT } from 'react-native-dotenv';

import { ApolloConsumer } from "react-apollo";

import ApplicationStyles from "../styles/ApplicationStyles";
import Buttons from "../styles/Buttons";
import { logo } from '../assets';
import { style } from "../themes/Fonts";
import { Colors, Metrics } from '../themes';
import { QUERY_GET_TRIVIA } from '../apollo/queries';
import { ADD_ANSWER } from '../apollo/mutations';

import QuestionCard from '../components/QuestionCard';


class TriviaQuestion extends Component {
    state = {
        step: 0,
        answer: ""
    };

    _nextStep = async (client, userAnswer) => {
        const response = await client.mutate({
            mutation: ADD_ANSWER,
            variables: {
                userAnswer
            }
        });

        if (this.state.step < AMOUNT - 1) {
            this.setState({step: this.state.step + 1})

        } else {
            this.props.navigation.navigate("TriviaResults")

        }
        
    };

    render() {
        return(
            <Query query={QUERY_GET_TRIVIA}>
                {({data, loading, client, refetch}) => {
                    if (loading) {

                        return (
                            <SafeAreaView style={ApplicationStyles.mainContainer}>
                                <ActivityIndicator size="large" color={Colors.white}/>
                            </SafeAreaView>
                        )
                    };

                    const questionData = data.getTrivia.results[this.state.step]

                    return (
                        <SafeAreaView style={ApplicationStyles.mainContainer}>
                            <QuestionCard
                                category={questionData.category}
                                question={questionData.question.replace(/&quot;/g,'"')}
                            />
                            <View style={styles.buttonWrapper}>
                                <TouchableHighlight
                                    style={Buttons.standardButton}
                                    onPress={() => this._nextStep(client, "False" === questionData.correct_answer)}
                                >
                                    <Text style={styles.buttonText}>False</Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={Buttons.standardButton}
                                    onPress={() => this._nextStep(client, "True" === questionData.correct_answer)}
                                >
                                    <Text style={styles.buttonText}>True</Text>
                                </TouchableHighlight>
                            </View>
                        </SafeAreaView>
                    )
                }}
            </Query>
        );
    }
}

export const TriviaQuestionWithoutHocs = TriviaQuestion;

export default withNavigation(TriviaQuestion);

const styles = StyleSheet.create({
    questionCard: {
        flex: 6
    },
    buttonWrapper: {
        flex: 4,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: Colors.blue,
    }
});