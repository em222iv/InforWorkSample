import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from '../actions/cartActions';

class CartFooter extends Component {

    handleToggle(){
        this.props.toggle(this.props.cart)
    };

    render() {
        return (
            <div id="cart-footer">
                <div id="item-quantity">you have {this.props.cart.totalQuantity} item in your cart</div>
                <div id="cart-subtotal">
                    <div id="subtotal-text"><h4>Subtotal(USD)</h4></div>
                    <div id="subtotal-price"><h4>${this.props.cart.subtotalAmount}</h4></div>
                </div>
                <div id="cart-buttons">
                    <div id="viewcart" className="cart-button">
                        <Link onClick={this.handleToggle.bind(this)} to="/cartview">View Cart</Link>
                    </div>
                    <div id="checkout" className="cart-button">
                        <Link onClick={this.handleToggle.bind(this)} to="/checkout">Checkout</Link>
                    </div>
                </div>
            </div>
        );
    }
}

CartFooter.propTypes = {
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (cart) => {
            dispatch(actions.toggle(cart));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CartFooter);