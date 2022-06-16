import React, { Component } from 'react';
import s from "../Category/Category.module.css";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setCurrentCategoryAC } from '../../../redux/mainReducer';

class Category extends Component {
    render() {
        console.log(this.props)
        return (
            <button className={this.props.category === this.props.name ? s.active : s.btn}
                onClick={() => { this.props.setCurrentCategoryAC(this.props.name) }}>
                {this.props.name}
            </button>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        category: state.main.currentCategory
    }
}

export default compose(
    connect(mapStateToProps, { setCurrentCategoryAC })
)(Category);