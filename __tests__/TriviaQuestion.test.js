// import React from 'react';
// import { mount, shallow } from 'enzyme';
// import { MockedProvider } from 'react-apollo/test-utils';
// import renderer from 'react-test-renderer';
// import { Text, TouchableHighlight, ActivityIndicator } from 'react-native';
// import wait from 'waait';

// import TriviaQuestion, { TriviaQuestionWithoutHocs } from '../src/screens/TriviaQuestion';
// import { QUERY_GET_TRIVIA } from '../src/apollo/queries';

// import { TriviaStartWithoutHocs } from '../src/screens/TriviaStart';

// describe('TriviaQuestion screen', () => {
//     beforeEach(() => {
//         const fakeResults = () => {
//             return {
//                 response_code: 0,
//                 results: [
//                     {
//                         category: "History",
//                         correct_answer: "True",
//                         difficulty: "hard",
//                         incorrect_answers: ["False"],
//                         question: "Japan was part of the Allied Powers during World War I.",
//                         type: "boolean"
//                     },
//                     {
//                         category: "Arts",
//                         correct_answer: "True",
//                         difficulty: "hard",
//                         incorrect_answers: ["False"],
//                         question: "Salvador was originally from Spain?",
//                         type: "boolean"
//                     }
//                 ] 
//             };
//         };
        
        
//         const mocks = [
//             {
//               request: {
//                 query: QUERY_GET_TRIVIA
//               },
//               result: {
//                 data: {
//                     getTrivia: fakeResults(),
//                 },
//               },
//             },
//         ];

//         const navigationMock = {
//             navigate: jest.fn()
//         };

//         this.mocks = mocks;
//         this.navigationMock = navigationMock;

//     });

//     it('handles loading and renders a question', async () => {

//         const screen = renderer.create(
//             <MockedProvider mocks={this.mocks} addTypename={false}>
//                 <TriviaQuestionWithoutHocs navigation={this.navigationMock} />
//             </MockedProvider>
//         )

//         expect(screen.root.findByType(ActivityIndicator).props.size).toBe('large');
//         await wait(0);

//         expect(screen.root.findAllByType(Text)[0].props.children)
//             .toContain('History');
//         expect(screen.root.findAllByType(Text)[1].props.children)
//             .toContain('Japan was part of the Allied Powers during World War I');
//         expect(screen.root.findAllByType(TouchableHighlight).length)
//             .toEqual(2);
//         expect(screen.root.findAllByType(TouchableHighlight)[0].props.children.props.children)
//             .toBe('False')
//         expect(screen.root.findAllByType(TouchableHighlight)[1].props.children.props.children)
//             .toBe('True')

//     });

//     it('navigates to next question', async () => {
//         const screen = renderer.create(
//             <MockedProvider mocks={this.mocks} addTypename={false}>
//                 <TriviaQuestionWithoutHocs navigation={this.navigationMock} />
//             </MockedProvider>
//         )

//         await wait(0);
//         expect(screen.root.findAllByType(Text)[0].props.children)
//             .toContain('History');

//         screen.root.findAllByType(TouchableHighlight)[0].props.onPress();
//         // ADD_ANSWER mutation should be called
//         await wait(0);
//         console.log(screen.root.findAllByType(Text))
//         expect(screen.root.findAllByType(Text)[0].props.children)
//             .toContain('Arts');
//     })

//     //it('navigates to next screen when answering last question')
// });