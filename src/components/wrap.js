import React, { Component } from 'react';
import { Link }  from 'react-router';
import { connect } from 'react-redux';
import Nav from './nav';

const mapStateToProps = () => {
    return {
    }
};

export default class Wrap extends Component {

    render() {
        return (
            <div className="content">
               <Nav/>
                <div className="main">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Wrap);