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
                <div className="products">
                    <h1>Products Page</h1>
                    <div className="products-grid">
                        {this.props.products .map(function(item, i) {
                            return <div className="col-1-2">
                                <div key={i}>
                                    <img src={'src/utils/ProductImages/'+item.productImageName} width="100" height="100" alt=""/>
                                    <img id="add" onClick={this.addToCart.bind(this,item)} src="src/utils/cart.png" alt=""/>
                                </div>
                                <span>{item.productName}</span>

                            </div>
                            }, this)
                        }
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