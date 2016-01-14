import React, { Component } from 'react';
import { Link }  from 'react-router';
import { connect } from 'react-redux';
import Nav from './nav';
import Header from './header';

const mapStateToProps = () => {
    return {
    }
};

export default class Wrap extends Component {

    render() {
        return (
            <div className="content">
               < Header/>
                <div className="main">
                    < Nav/>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Wrap);