import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import { styleConstants } from '../../../utils/StyleConstants';

const floatingButtonStyle = {
    backgroundColor: styleConstants.accentOrange
}

class InvestHeaderRow extends Component {
    render () {
        return (
            <div className="invest-header-row">
                <Row className="row">
                    <Col lg={1}>
                        Interest
                    </Col>
                    <Col lg={1}>
                        Tenure
                    </Col>
                    <Col lg={1}>
                        Loan ID
                    </Col>
                    <Col lg={2} md={5}>
                        Borrowers Name
                    </Col>
                    <Col lg={2}>
                        Loan Amount
                    </Col>
                    <Col lg={2}>
                        Remaining Amount
                    </Col>
                    <Col lg={2}>
                        Loan Purpose
                    </Col>
                    <Col lg={1} className="text-align-right position-relative">

                        {this.props.showFilterIcon ? (
                            <FloatingActionButton style={floatingButtonStyle} backgroundColor={styleConstants.accentOrange} className="filter-floating-button" onClick={this.props.toggleFilterDrawer}>
                                <FontIcon className="material-icons">filter_list</FontIcon>
                            </FloatingActionButton>
                        ) : ''}

                    </Col>
                </Row>
            </div>
        );
    }
}
export default InvestHeaderRow;
