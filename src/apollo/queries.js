import gql from "graphql-tag";

export const QUERY_GET_TRIVIA = gql`
    query queryGetTrivia {
        getTrivia @rest(path: "", type: "Trivia") {
            response_code
            results
        }
    }
`;

export const GET_ANSWERS = gql`
    query GetAnswers {
        userAnswers @client
    }
`;