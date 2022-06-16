/* import React from 'react';
import { graphql } from '@apollo/client/react/hoc';
import gql from 'graphql-tag';
import NewProduct from './components/Products/newProduct';
const title = "tech";
const getProductsQuery = gql`query($input:CategoryInput){
    category(input:$input){
    name
      products{
        id
      }
    }
    }
  `;

class Product extends React.Component {
    render() {
        if (this.props.data.loading) {
            return "loading"
        }
        let products = this.props.data.category.products.map(el =>
            <NewProduct id={el.id} key={el.id} />
        );
        return (
            <ul className="s">
                {products}
            </ul>
        );
    }
};

export default graphql(getProductsQuery, { options: { variables: { input: { "title": title } } } })(Product); */