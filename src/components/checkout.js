import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
    render() {
        return (
            <div className="checkout">
                <h1>This is where the checkout would be!</h1>
            </div>
        );
    }
}

Checkout.propTypes = {};

export default Checkout;