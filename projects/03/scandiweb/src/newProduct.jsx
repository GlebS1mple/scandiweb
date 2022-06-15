import React, { Component } from 'react';

class NewProduct extends Component {
    render() {
        return (
            <li>
                {this.props.id}
            </li>
        );
    }
}

export default NewProduct;