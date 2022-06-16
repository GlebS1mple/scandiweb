import './App.css';
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from "@apollo/client";
import Product from './Product';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import { HashRouter } from "react-router-dom";
const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
})

class App extends React.Component {
  render() {
    return (
      //<HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <div className="App">
            <Header />
            {/* <ul className="product__list">
            <Product />
          </ul> */}
          </div>
        </ApolloProvider>
      </Provider>
      //</HashRouter>
    )
  };
}
export default App;
