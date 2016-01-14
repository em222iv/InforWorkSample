import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Warning extends Component {

    render() {
        return (
            <div id="warning">
                <div id="warning-message">
                    <span>Warning</span>
                </div>
                <div id="warning-products">
                    {this.props.unavailableItems.map(function(item,i) {
                        return <div key={i} >{item}</div>
                    })}
                </div>
            </div>
        );
    }
}

Warning.propTypes = {
    unavailableItems: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Warning);