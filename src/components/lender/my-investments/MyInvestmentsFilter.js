import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import { styleConstants } from '../../../utils/StyleConstants';
import MobileComponent from '../../MobileComponent';
import WebComponent from '../../WebComponent';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';

const myInvestmentFilters = ['All', 'In Process', 'Active', 'Closed']

const myInvestmentFilterStyle = {
    color: styleConstants.textGrey
}

const myInvestmentFilterStyleActive = {
    backgroundColor: styleConstants.bodyBackgroundColor,
    borderRight: `4px solid ${styleConstants.accentGreen}`,
    color: 'white'
}

const listStyle = {
    padding: 0
}

const FilterListComponent = ({selectedFilter, filterMyInvestments}) => {
    return (
        <List style={listStyle}>
            {myInvestmentFilters.map( (myInvestment, idx) => {
                let activeStyle = (myInvestment === selectedFilter) ? {...myInvestmentFilterStyle, ...myInvestmentFilterStyleActive} : myInvestmentFilterStyle;

                return (
                    <ListItem key={idx} style={activeStyle} className="nav-bar" primaryText={myInvestment} onClick={filterMyInvestments} />
                )
            })}
        </List>
    )
}

class MyInvestmentsFilter extends Component {
    filterMyInvestments = (e) => {
        this.props.filterMyInvestments(e);
        if (this.props.isMobile) {
            this.props.toggleFilterDrawer();
        }
    }

    render () {
        let selectedFilter = this.props.selectedFilter;

        return (
            <div >
                <WebComponent>
                    <FilterListComponent selectedFilter={selectedFilter} filterMyInvestments={this.filterMyInvestments}/>
                </WebComponent>

                <MobileComponent>
                    <Drawer width={300} openSecondary={true} docked={false} open={this.props.filterDrawerState} className="my-investments-drawer-filter">
                        <div className="main-header">
                            <span>Filter My Investments</span>
                            <FontIcon className="material-icons close-icon" onClick={this.props.toggleFilterDrawer}>close</FontIcon>
                        </div>

                        <FilterListComponent selectedFilter={selectedFilter} filterMyInvestments={this.filterMyInvestments}/>
                    </Drawer>
                </MobileComponent>
            </div>
        )
    }
}

export default MyInvestmentsFilter;
