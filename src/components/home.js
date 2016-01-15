import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Home extends Component {
    render() {
        return (
            <div id="home">
                <h1>HomePage Content</h1>
            </div>
        );
    }
}

Home.propTypes = {
};

export default Home;