import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class CartItem extends Component {

    componentDidMount(event) {
        this.currentAmount = this.props.amount;
    }

    changeAmount(event) {
        this.currentAmount = this.props.amount;
        if(this.currentAmount < event.target.value){
            this.props.onInc();
        }else {
            this.props.onDec();
        }
    }

    render() {
        return (
            <div className="cart-item">
                <div className="row">
                    <div className="item-image"><img src={'src/utils/ProductImages/'+this.props.image} width="60" height="60" alt=""/></div>
                    <div className="item-title">{this.props.name}</div>
                    <div onClick={this.props.onRemove} className="item-remove">x</div>
                </div>
                <div className="row">
                    <div className="item-price">${this.props.price}</div>
                </div>
                <div className="row">
                    <div className="centered">
                        {(this.props.available
                            ? <input onChange={this.changeAmount.bind(this)} value={this.props.amount} type="number" />
                            : <span>This product is no longer available.</span>
                        )}
                        <div className="item-total">${this.props.total}</div>
                    </div>
                </div>
            </div>
        );
    }
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bargain: PropTypes.number,
    image: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    available: PropTypes.bool.isRequired,
    onRemove: PropTypes.func.isRequired,
    onInc: PropTypes.func.isRequired,
    onDec: PropTypes.func.isRequired
};

export default CartItem;