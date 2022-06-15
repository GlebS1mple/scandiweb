import './App.css';
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from "@apollo/client";
import Product from './Product';

//import { HashRouter } from "react-router-dom";
const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
})

class App extends React.Component {
  render() {

    return (
      //<HashRouter basename={process.env.PUBLIC_URL}>
      <ApolloProvider client={client}>
        <div className="App">
          <ul className="product__list">
            <Product />
          </ul>
        </div>
      </ApolloProvider>
      //</HashRouter>
    )

  };
}
export default App;
