import gql from "graphql-tag";

export const ADD_ANSWER = gql`
    mutation addAnswer($userAnswer: Boolean!) {
        addAnswer (userAnswer: $userAnswer) @client 
    }
`;

export const WIPEOUT_ANSWERS = gql`
    mutation wipeOutAnswers {
        wipeOutAnswers @client 
    }
`;