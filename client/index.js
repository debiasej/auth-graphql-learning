import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'

import App from './components/App'
import LoginForm from './components/LoginForm'

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
})

const client = new ApolloClient({
  // Set a custom network interface to tell apollo client that have to send the session cookie
  networkInterface,
  // Every single record that comes back from the server, will have a ID.
  // This will allow Apollo client to uniquely identify every fetched record
  dataIdFromObject: record => record.id
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='login' component={LoginForm} />
        </Route>
      </Router>
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'))
