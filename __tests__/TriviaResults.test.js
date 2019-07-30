import React from 'react';
import { mount, shallow } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import renderer from 'react-test-renderer';
import { Text, TouchableHighlight, ActivityIndicator } from 'react-native';
import wait from 'waait';
import { InMemoryCache } from "apollo-cache-inmemory";

import { TriviaResultsWithoutHocs } from '../src/screens/TriviaResults';
import { QUERY_GET_TRIVIA, GET_ANSWERS } from '../src/apollo/queries';
import { WIPEOUT_ANSWERS } from '../src/apollo/mutations';


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
            {
                request: {
                  query: GET_ANSWERS
                },
                result: {
                  data: {
                      userAnswers: [false, true]
                  },
                },
            },
            {
                request: {
                  query: WIPEOUT_ANSWERS
                },
                result: {
                  data: {
                      wipeOutAnswers: null,
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
    
        const screen = renderer.create(
            <MockedProvider mocks={this.mocks} addTypename={false}>
                <TriviaResultsWithoutHocs navigation={this.navigationMock} />
            </MockedProvider>
        )
        await wait(0);

        expect(screen.root.findAllByType(Text)[0].props.children)
            .toContain("Results");
        expect(screen.root.findAllByType(Text)[1].props.children)
            .toBe("1/2")

        expect(screen.root.findAllByType(Text)[2].props.children)
            .toContain("WRONG");
        expect(screen.root.findAllByType(Text)[4].props.children)
            .toContain("RIGHT");

        expect(screen.root.findAllByType(Text)[3].props.children)
            .toContain("Japan was part of the Allied Powers during World War I")
        expect(screen.root.findAllByType(Text)[5].props.children)
            .toContain("Salvador was originally from Spain?")
        
        expect(screen.root.findAllByType(TouchableHighlight)[0].props.children.props.children)
            .toContain('Try Again')
        
    });

    it('navigates back to the beginning', async () => {
        const screen = renderer.create(
            <MockedProvider mocks={this.mocks} addTypename={false}>
                <TriviaResultsWithoutHocs navigation={this.navigationMock} />
            </MockedProvider>
        )
        await wait(0);
        
        screen.root.findAllByType(TouchableHighlight)[0].props.onPress();
        expect(this.navigationMock.navigate.mock.calls.length).toBe(1);
    });
});

