import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CartItem from './cartItem';
import Warning from './warning';
import actions from '../actions/cartActions';
import store from '../store';
import CartFooter from './cartFooter';

class Cart extends Component {

    removeItemFromCart(i) {
        this.props.removeItem(this.props.cart,i);
    }

    onInc(i) {
        this.props.increaseItemAmount(this.props.cart,i);
    }

    onDec(i) {
        for(let item in this.props.cart.items){
            if(this.props.cart.items[item].productNumber == i){
                if(this.props.cart.items[item].amount == 1)
                    return this.props.removeItem(this.props.cart,i);
            }
        };
        this.props.decreaseItemAmount(this.props.cart,i);
    }

    handleToggle(){
        this.props.toggle(this.props.cart)
    };

    render() {
        return (
            <div id="cart">
                {(this.props.cart.items.length <= 0
                        ? <div id="empty-cart-message">
                            <div id="empty-cart-text">You have no items your cart</div>
                            <div id="empty-cart-link">
                                <Link onClick={this.handleToggle.bind(this)} to="products">Continue Shopping</Link>
                            </div>
                          </div>
                        : <div>
                            {(this.props.cart.unavailableItems.length >= 1
                                ? <Warning />
                                : <span></span>
                            )}
                          </div>
                    )}
                <div className="items">
                    {this.props.cart.items
                        .map(function(item, i) {
                            return (
                                <CartItem
                                    onInc={this.onInc.bind(this, item)}
                                    onRemove={this.removeItemFromCart.bind(this, item.productNumber)}
                                    onDec={this.onDec.bind(this, item.productNumber)}
                                    total={5}
                                    amount={item.amount}
                                    total={item.total}
                                    available={item.productAvailable}
                                    image={item.productImageName}
                                    price={item.price}
                                    name={item.productName}
                                    key={i}
                                />
                            );
                        }, this)
                    }
                </div>
                {(this.props.cart.items.length <= 0
                    ? <div id="empty-cart-footer">
                        <div id="item-quantity">you have {this.props.cart.totalQuantity} item in your cart</div>
                        <div id="cart-subtotal">
                            <div id="subtotal-text"><h4>Subtotal(USD)</h4></div>
                            <div id="subtotal-price"><h4>${this.props.cart.subtotalAmount}</h4></div>
                        </div>
                    </div>
                    : <CartFooter />
                )}
            </div>
        );
    }
}

Cart.propTypes = {
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        unavailableItems: state.cart.unavailableItems
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (cart,item) => {
            dispatch(actions.removeItemFromCart(cart,item));
        },
        increaseItemAmount: (cart,item) => {
            dispatch(actions.addItem(cart,item));
        },
        decreaseItemAmount: (cart,item) => {
            dispatch(actions.removeItem(cart,item));
        },
        toggle: (cart) => {
            dispatch(actions.toggle(cart));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);