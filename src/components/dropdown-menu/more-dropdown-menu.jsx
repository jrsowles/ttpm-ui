import React, { Component, PropTypes } from 'react';
import ActionIconDropdownMenu from './action-icon-dropdown-menu';

class MoreDropdownMenu extends Component {
    render() {
        return (
            <ActionIconDropdownMenu
                glyph="ellipsis-h"
                {...this.props}
            >
                {this.props.children}
            </ActionIconDropdownMenu>
        );
    }
}

MoreDropdownMenu.defaultProps = {
    tooltip: 'more'
};

export default MoreDropdownMenu;
