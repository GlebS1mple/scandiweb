import React, { Component } from 'react';
import s from "../Currency/Currency.module.css";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setCurrentCurrencyAC } from './../../../redux/mainReducer';

class Currency extends Component {

    render() {
        return (
            <option onClick={(e) => { this.props.setCurrentCurrencyAC(e.currentTarget.value) }} value={this.props.label} className={s.currency}>{this.props.label}</option>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currency: state.main.currentCurrency
    }
}

export default compose(connect(mapStateToProps, { setCurrentCurrencyAC }))(Currency);