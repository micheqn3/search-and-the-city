// Import dependencies
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import components and styles
import Nav from './components/Nav/Nav';
import './app.css';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import Results from './pages/Results';

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
      <Router>
        <>
        <div className="my-container">
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/createaccount" component={CreateAccount}/>
            <Route exact path="/results" component={Results}/>
            <Route render={() => <div className="container"><h1 className='center-align'>404 Error: This page does not exist.</h1></div>} />
          </Switch>
        </div>
        </>
      </Router>
    </ApolloProvider>
  )
}

export default App;
