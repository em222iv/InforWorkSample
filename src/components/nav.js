import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavMenu from 'material-ui/lib/svg-icons/navigation/expand-less';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

//import actions from '../actions';


class Nav extends Component {

    render() {
        return (
            <nav>
                <AppBar
                    title="Title"
                    iconElementLeft={<IconButton><NavMenu /></IconButton>}
                    iconElementRight={
                      <IconMenu
                        iconButtonElement={
                          <IconButton><MoreVertIcon /></IconButton>
                        }
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                      >
                        <MenuItem primaryText="Refresh" />
                        <MenuItem primaryText="Help" />
                        <MenuItem primaryText="Sign out" />
                      </IconMenu>
                    }
                />
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