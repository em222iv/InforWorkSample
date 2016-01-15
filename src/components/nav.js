import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import { Link }  from 'react-router';
import Cart from './cart'

class Nav extends Component {

    render() {
        return (
            <nav>
                <div className="row">
                    <div id="logo">
                        <a href="">LOGO</a>
                    </div>
                    <div className="nav-items">
                        <div className="nav-item"><Link to="/">BRANDS</Link></div>
                        <div className="nav-item"><Link to="/">ABOUT US</Link></div>
                        <div className="nav-item"><Link to="/">CAMPAIGNS & PROMOTIONS</Link></div>
                        <div className="nav-item">
                            <Link to="products">PRODUCTS</Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

Nav.propTypes = {
};

export default Nav;