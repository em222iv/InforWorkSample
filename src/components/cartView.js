import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class CartView extends Component {
    render() {
        return (
            <div className="checkout">
                <h1>This is where the cart would be!</h1>
            </div>
        );
    }
}

CartView.propTypes = {};

export default CartView;