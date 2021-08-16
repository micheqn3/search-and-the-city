// Import dependencies
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Import components and styles
import Nav from './components/Nav/Nav';
import './app.css';

const App = () => {

  // Construct main GraphQL API endpoint 
  const httpLink = createHttpLink({
    uri: '/graphql'
  })

  // Construct the request middleware that will attach the JWT token to every request as an `authorization` header
  const authLink = setContext((_, { headers }) => {
    // Retrieves the authentication token from local storage
    const token = localStorage.getItem('id_token');
    // Returns the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  // Sets up the apollo client 
  // Link sets up our client to execute the `authLink` middleware before making requests to our GraphQL API
  const client = new ApolloClient({
    link: authLink.concat(httpLink), 
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <div className="my-container">
        <Nav/>
      </div>
    </ApolloProvider>
  )
}

export default App;
