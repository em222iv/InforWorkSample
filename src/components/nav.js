import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import { Link }  from 'react-router';
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
            <nav>
                <div className="row">
                    <div id="logo">
                        <a href="">LOGO</a>
                    </div>
                    <div className="nav-items">
                        <div className="nav-item">
                            <Link to="products">PRODUCTS</Link>
                        </div>
                        <div className="nav-item"><Link to="/">CAMPAIGNS & PROMOTIONS</Link></div>
                        <div className="nav-item"><a href="">ABOUT US</a></div>
                        <div className="nav-item"><a href="">BRANDS</a></div>
                    </div>
                </div>
            </nav>
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