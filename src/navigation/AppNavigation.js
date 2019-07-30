import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import TriviaStart from '../screens/TriviaStart';
import TriviaQuestion from '../screens/TriviaQuestion';
import TriviaResults from '../screens/TriviaResults'

export const persistenceKey = "newKey10";

const AppNavigator = createSwitchNavigator({
    TriviaStart,
    TriviaQuestion,
    TriviaResults
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;