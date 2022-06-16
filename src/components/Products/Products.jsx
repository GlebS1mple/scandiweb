import React, { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import gql from 'graphql-tag';
import s from "../Products/Products.module.css";
import { compose } from 'redux';
import NewProduct from './newProduct.jsx';
import { connect } from 'react-redux';



const getProductsQuery = gql`query($input:CategoryInput){
    category(input:$input){
    name
      products{
        id
      }
    }
    }
  `;

class Products extends Component {
    render() {
        if (this.props.data.loading) {
            return "loading"
        }
        let products = this.props.data.category.products.map(el =>
            <NewProduct id={el.id} key={el.id} />
        );
        return (
            <main className={s.main}>
                <h1 className={s.title}>
                    {this.props.category}
                </h1>
                <div className={s.products}>
                    {products}
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.main.currentCategory
    }
}



export default compose(
    graphql(getProductsQuery, { options: { variables: { input: { "title": "tech" } } } }),
    connect(mapStateToProps, {})
)(Products);