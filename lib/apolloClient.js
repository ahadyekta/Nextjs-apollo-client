import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache, from, ApolloLink } from "@apollo/client";
import _merge from 'lodash/merge';
import apolloLogger from 'apollo-link-logger';

let apolloClient;

const httpLink = new HttpLink({
  uri: "https://countries.trevorblades.com",  // Add your Slash endpoint here 
});


const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: null,
    }
  }));

  return forward(operation);
})


function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: from([authMiddleware, apolloLogger, httpLink ]),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore(_merge(existingCache, initialState));
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}