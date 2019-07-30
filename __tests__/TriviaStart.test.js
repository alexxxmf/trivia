// import React from 'react';
// import renderer from 'react-test-renderer';
// import { Text, TouchableHighlight } from 'react-native';

// import { TriviaStartWithoutHocs } from '../src/screens/TriviaStart';

// describe('TriviaStart screen', () => {
//     beforeEach(() => {
//         const navigationMock = {
//             navigate: jest.fn()
//         };

//         const screen = renderer.create(
//             <TriviaStartWithoutHocs navigation={navigationMock} />
//         );
//         this.screen = screen;
//         this.navigationMock = navigationMock;
//     });

//     it('renders the different elements', () => {
//         const navigationMock = {
//             navigate: jest.fn()
//         };

//         const screen = renderer.create(
//             <TriviaStartWithoutHocs navigation={navigationMock} />
//         );


//         expect(this.screen.root.findAllByType(Text)[0].props.children)
//             .toContain('Welcome to the Trivia Challenge!');
//         expect(this.screen.root.findAllByType(Text)[1].props.children)
//             .toContain('You will be presented with 10 True or False questions');
//         expect(this.screen.root.findAllByType(Text)[2].props.children)
//             .toContain('Can you score 100%?');
//         expect(this.screen.root.findAllByType(TouchableHighlight)[0].props.children.props.children)
//             .toContain('Let\'s Start!');
//     });

//     it('navigates to next screen when button is tapped', () => {
//         this.screen.root.findAllByType(TouchableHighlight)[0].props.onPress();
//         expect(this.navigationMock.navigate.mock.calls.length).toBe(1);
//     });
// });