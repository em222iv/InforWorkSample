import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import Cart from './cart'

//import actions from '../actions';


class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <header>
                <div className="row">
                    <div className="header-item"><a href="">Logo</a></div>
                    <div className="header-item"><a href="">My Account</a></div>
                    <div className="header-item"><a href="">Currency($)</a></div>
                    <div className="header-item"><a href="">Language(EN)</a></div>
                </div>
                <Cart />
            </header>
        );
    }
}

Nav.propTypes = {
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);