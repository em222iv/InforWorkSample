import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CartItem from './cartItem';
import actions from '../actions/cartActions';

class Cart extends Component {

    constructor(props){
        super(props)
        console.log('a');
    }

    load(i) {
        this.props.getItems();
    }

    removeItemFromCart(i) {
        this.props.removeItem(this.props.cart,i);
    }

    onInc(i) {
        this.props.increaseItem(this.props.cart,i);
    }

    render() {
        console.log('s');
        return (
            <div id="cart">
                <button onClick={this.load.bind(this)}></button>
                <div className="items">
                    {this.props.cart
                        .reduce((cartItems, currentItem) => {
                                console.log(cartItems);
                            let exists = cartItems.find(item => item.productNumber === currentItem.productNumber);
                            if (exists) {

                                exists.count++;
                                exists.price = currentItem.price * exists.count;
                            }
                            else {
                                cartItems.push({'title': currentItem.productName,
                                    'price': currentItem.price,
                                    'count': 1,
                                    'image': currentItem.productImageName,
                                    'available': currentItem.productAvailable,
                                    'number': currentItem.productNumber
                                });
                            }
                            console.log(cartItems);
                            return cartItems;
                        }, [])
                        .map(function(item, i) {
                            return (
                                <CartItem onRemove={this.removeItemFromCart.bind(this, item.number)}
                                          onInc={this.onInc.bind(this, item)}
                                          total={5}
                                          amount={1}
                                          available={item.available}
                                          image={item.image}
                                          price={item.price}
                                          name={item.title}
                                          key={i}
                                />
                            );
                        }, this)
                    }
                </div>
                <div className="cart-footer">
                    <h2>{this.props.totalAmount}</h2>
                </div>
            </div>
        );
    }
}

Cart.propTypes = {
    getItems: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart.items,
        totalAmount: state.cart.totalAmount
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getItems: () => {
            dispatch(actions.getAllItems());
        },
        removeItem: (cart,item) => {
            dispatch(actions.removeItem(cart,item));
        },
        increaseItem: (cart,item) => {
            dispatch(actions.increaseItem(cart,item));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);