import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import pactions from '../actions/productsActions';
import cactions from '../actions/cartActions';


class Products extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    addToCart(item){
        console.log(item);
        this.props.addItem(this.props.cart,item)
    }

    render() {
        return (
            <div>
                <h1>Products Page</h1>
                <div className="products">
                    <ul>
                    {this.props.products .map(function(item, i) {
                        return <li key={i}>{item.productName}
                            <button onClick={this.addToCart.bind(this, item)}></button></li>;
                        }, this)
                    }
                    </ul>
                </div>
            </div>

        );
    }
}

Products.propTypes = {
};

const mapStateToProps = (state) => {
    return {
        products: state.products.items,
        cart: state.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getItems: () => {
            dispatch(pactions.getAllItems());
        },
        addItem: (cart,item) => {
            dispatch(cactions.addItem(cart,item));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);