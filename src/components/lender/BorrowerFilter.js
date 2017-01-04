import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';

class BorrowerFilter extends Component {
    render () {
        return (
            <Drawer width={300} openSecondary={true} open={this.props.filterDrawerState} className="filter-drawer">
                <FontIcon className="material-icons close-icon" onClick={this.props.toggleFilterDrawer}>close</FontIcon>

                <div className="drawer-content">
                    <div className="header">
                        Borrower Filter
                    </div>
                </div>
            </Drawer>
        )
    }
}

export default BorrowerFilter;
