import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import Config from "react-native-config";
import { RestLink } from "apollo-link-rest";
import { AMOUNT, DIFFICULTY, TYPE } from 'react-native-dotenv';
import gql from "graphql-tag";

import { GET_ANSWERS } from './queries';

const restLink = new RestLink({
    uri: `https://opentdb.com/api.php?amount=${AMOUNT}&difficulty=${DIFFICULTY}&type=${TYPE}`,
});

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError)
      console.warn(`[Network error onboardingClient]: ${networkError}`);
})

const client = new ApolloClient({
    link: ApolloLink.from([
      errorLink,
      restLink
    ]),
    cache,
    resolvers: {
      Mutation: {
        addAnswer: (_, args, { cache }) => {
          const previousState = cache.readQuery({ query: GET_ANSWERS });
          cache.writeQuery({
            query: GET_ANSWERS,
            data: {
              userAnswers: [...previousState.userAnswers, args.userAnswer]
            }
          });
          
          return 
        },
        wipeOutAnswers: async (_, args, { cache, client }) => {
          await client.resetStore();

          await cache.writeQuery({
            query: GET_ANSWERS,
            data: {
              userAnswers: []
            }
          });
          
          return 
        }
      }
    }
});

/* This is the equivalent of using defaults within clientState in prev versions */
cache.writeData({
  data: {
    userAnswers: [],
  },
});

export default client