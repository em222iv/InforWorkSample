import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import Cart from './cart'
import actions from '../actions/cartActions'

//import actions from '../actions';


class Nav extends Component {

    handleToggle(){
        this.props.toggle(this.props.cart)
    };

    render() {

        var styles = {
            background:'white',
            color:'black'
        };
        return (
            <header>
                <div className="row">
                    {(this.props.cart.open
                            ? <div style={styles} onClick={this.handleToggle.bind(this)} className="header-item">My Cart</div>
                            : <div onClick={this.handleToggle.bind(this)} className="header-item">My Cart</div>
                    )}
                    <div className="header-item"><a href="">My Account</a></div>
                    <div className="header-item"><a href="">Currency($)</a></div>
                    <div className="header-item"><a href="">Language(EN)</a></div>
                </div>
                {(this.props.cart.open
                        ? <Cart />
                        : <span></span>
                )}

            </header>
        );
    }
}

Nav.propTypes = {

};

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (cart) => {
            dispatch(actions.toggle(cart));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);