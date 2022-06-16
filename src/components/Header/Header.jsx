import React, { Component } from 'react';
import s from "../Header/Header.module.css";
import { graphql } from '@apollo/client/react/hoc';
import { flowRight as compose } from 'lodash';
import gql from 'graphql-tag';
import Currency from './Currency/Currency';
import logo from "../../../src/img/logo.png";
import cart from "../../../src/img/cart.png";
import arrow from "../../../src/img/arrow.png";
import Category from './Category/Category';

const getCurrencies = gql`{
    currencies{
        label
        symbol
    }
}`
const getCategories = gql`{
    categories{
        name
      }
}`

class Header extends Component {

    render() {
        if (this.props.data.loading) {
            return "loading"
        }
        console.log(this.props.getCategories)
        let currencies = this.props.getCurrencies.currencies.map((el, index) =>
            <Currency key={index} label={el.label} symbol={el.symbol} />
        );
        let categories = this.props.getCategories.categories.map((el, index) =>
            <Category key={index} name={el.name} />
        );
        return (
            <header className={s.header}>
                <nav className={s.nav}>
                    {categories}
                </nav>
                <img src={logo} alt="Logo" className={s.logo} />
                <div className={s.options}>
                    <div className={s.currencies}>
                        <select className={s.currency}>
                            {currencies}
                        </select>
                        <img src={arrow} alt="Arrow" className={s.arrow} />
                    </div>
                    <img src={cart} alt="Cart" className={s.cart} />
                </div>
            </header>

        );
    }
}

export default compose(graphql(getCurrencies), graphql(getCategories))(Header);