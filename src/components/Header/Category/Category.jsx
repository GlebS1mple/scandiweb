import React, { Component } from 'react';
import s from "../Category/Category.module.css";

class Category extends Component {
    render() {
        return (
            <button className={s.btn}>
                {this.props.name}
            </button>
        );
    }
}

export default Category;