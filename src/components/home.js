import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Home extends Component {
    render() {
        return (
            <div id="home">
                <h1>Home Content</h1>
            </div>
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