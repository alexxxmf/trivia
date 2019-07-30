import React from 'react';
import { mount, shallow } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import renderer from 'react-test-renderer';
import { Text, TouchableHighlight, ActivityIndicator } from 'react-native';
import wait from 'waait';
import { InMemoryCache } from "apollo-cache-inmemory";

import { TriviaResultsWithoutHocs } from '../src/screens/TriviaResults';
import { QUERY_GET_TRIVIA, GET_ANSWERS } from '../src/apollo/queries';


describe('TriviaResults screen', () => {
    beforeEach(async() => {
        const fakeResults = () => {
            return {
                response_code: 0,
                results: [
                    {
                        category: "History",
                        correct_answer: "True",
                        difficulty: "hard",
                        incorrect_answers: ["False"],
                        question: "Japan was part of the Allied Powers during World War I.",
                        type: "boolean"
                    },
                    {
                        category: "Arts",
                        correct_answer: "True",
                        difficulty: "hard",
                        incorrect_answers: ["False"],
                        question: "Salvador was originally from Spain?",
                        type: "boolean"
                    }
                ] 
            };
        };
        
        
        const mocks = [
            {
              request: {
                query: QUERY_GET_TRIVIA
              },
              result: {
                data: {
                    getTrivia: fakeResults(),
                },
              },
            },
        ];

        const navigationMock = {
            navigate: jest.fn()
        };

        this.mocks = mocks;
        this.navigationMock = navigationMock;
        this.cache = new InMemoryCache();

    });

    it('renders results', async () => {
        await this.cache.writeQuery({
            query: GET_ANSWERS,
            data: {
              userAnswers: ["False", "True"]
            }
        });
    
        const screen = renderer.create(
            <MockedProvider mocks={this.mocks} addTypename={false}>
                <TriviaResultsWithoutHocs navigation={this.navigationMock} />
            </MockedProvider>
        )
        await wait(0);
        console.log(screen.root.findAllByType(Text))
    });

    // it('navigates back to the beginning', () => {

    // });
});

