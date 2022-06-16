import React, { Component } from 'react';
import s from "../Currency/Currency.module.css"

class Currency extends Component {
    render() {
        return (
            <option value={this.props.label} className={s.currency}>{this.props.label}</option>
        );
    }
}

export default Currency;