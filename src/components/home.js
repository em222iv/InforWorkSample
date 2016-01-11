import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Home extends Component {
    render() {
        return (
            <div className="main header">
               <h1>Home</h1>
            </div>
        );
    }
}

Home.propTypes = {
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth.loggedIn
    }

};

const mapDispatchToProps = () => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);