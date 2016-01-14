import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Home extends Component {
    render() {
        return (
           <h1>Home</h1>
        );
    }
}

Home.propTypes = {
};

const mapStateToProps = (state) => {
    return {
    }

};

const mapDispatchToProps = () => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);