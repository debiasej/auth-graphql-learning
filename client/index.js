import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'

import App from './components/App'

const client = new ApolloClient({
  // Every single record that comes back from the server, will have a ID.
  // This will allow Apollo client to uniquely identify every fetched record
  dataIdFromObject: record => record.id
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'))
