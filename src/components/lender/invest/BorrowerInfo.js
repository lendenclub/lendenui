import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import WebComponent from '../../WebComponent';
import MobileComponent from '../../MobileComponent';

const cardStyle = {
    backgroundColor: styleConstants.cardBGColor,
    height: '100%'
}

const headerStyle = {
    padding: '20px',
    color: styleConstants.textHeaderGrey
}

const rowBaseStyle = {
    alignItems: 'stretch'
}

const flexHolder = {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1
}

const flexItem = {
    flex: 1
}

const borderBottomStyle = {
    borderBottom: `1px solid ${styleConstants.borderColor}`
}

const contentStyle = {
    ...flexHolder,
    padding: '10px 20px'
}

const keyStyle = {
    color: styleConstants.textHeaderGrey
}

const valueStyle = {
    color: styleConstants.textGrey
}

const descriptionStyle = {
    padding: '10px 20px',
    color: styleConstants.textGrey
}

/* Loan Details */
const LoanDetails = ({isMobile}) => {
    let loanDetailsStyle = isMobile ? {...flexHolder, ...borderBottomStyle, flexDirection: 'column'} : {...flexHolder, ...borderBottomStyle};

    return (
        <Card style={cardStyle} className="loan-details">
            <div style={headerStyle}>Loan Details</div>

            <div style={loanDetailsStyle}>
                <div style={contentStyle}>
                    <div style={keyStyle}>Number of Lenders</div> <div style={valueStyle}>06</div>
                </div>
                <div style={contentStyle}>
                    <div style={keyStyle}>EMI Amount</div> <div style={valueStyle}>2566</div>
                </div>
            </div>

            <div style={headerStyle}>Description</div>

            <div style={descriptionStyle}>
                I was a guarantor for a loan and things went downhill after that.
            </div>
        </Card>
    );
}

/* Personal Details */
const PersonalDetails = ({isMobile}) => {
    let personalItemHolder = isMobile ? {...flexHolder, flexDirection: 'column'} : flexHolder,
        personalItem = isMobile ? flexItem : {...flexItem, borderRight: `1px solid ${styleConstants.borderColor}`};

    return (
        <Card style={cardStyle} className="loan-details">
            <div style={headerStyle}>Personal Details</div>

            <div style={personalItemHolder}>
                <div style={personalItem}>
                    <div style={contentStyle}>  <div style={keyStyle}>Gender</div>  <div style={valueStyle}>Male</div>   </div>
                    <div style={contentStyle}>  <div style={keyStyle}>Marital Status</div>  <div style={valueStyle}>Married</div>    </div>
                    <div style={contentStyle}>  <div style={keyStyle}>Earning Family Members</div>  <div style={valueStyle}>2</div>  </div>
                    <div style={contentStyle}>  <div style={keyStyle}>Qualification</div>   <div style={valueStyle}>Masters</div> </div>
                    <div style={contentStyle}>  <div style={keyStyle}>Specialization</div>  <div style={valueStyle}>Engineering</div>    </div>
                </div>

                <div style={flexItem}>
                    <div style={contentStyle}>  <div style={keyStyle}>Age</div>    <div style={valueStyle}>26</div>   </div>
                    <div style={contentStyle}>  <div style={keyStyle}>Family Members</div>  <div style={valueStyle}>4</div>    </div>
                    <div style={contentStyle}>  <div style={keyStyle}>Monthly Income</div>  <div style={valueStyle}>25,000</div>  </div>
                    <div style={contentStyle}>  <div style={keyStyle}>Assets</div>   <div style={valueStyle}>Icons</div> </div>
                    <div style={contentStyle}>  <div style={keyStyle}>Current EMI</div>  <div style={valueStyle}>12,000</div>    </div>
                </div>
            </div>
        </Card>
    );
}

/* Credit Score */
const data = {
    columns: [
        ['data', 70]
    ],
    type: 'gauge'
}

const color = {
    pattern: ['#15C3C9']
}

const gauge = {
    label: {
        format: function (value, ratio) {
            return value;
        }
    }
}

const tooltip = {
    contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        let value = d[0].value,
            html = `<div class="tooltip-container">
                        <div class="tooltip-header" style="color: ${color(d)}">
                            Credit Score: ${value}
                        </div>
                    </div>`;
        return html;
    }
}

const CreditScore = () => {
    return (
        <Card style={cardStyle} className="loan-details">
            <div style={headerStyle}>Credit Score</div>

            <div style={borderBottomStyle}>
                <C3Chart data={data} gauge={gauge} color={color} tooltip={tooltip} padding={ {bottom: 10} }/>
            </div>

            <div style={contentStyle}>
                <div style={keyStyle}> CIBIL Score </div>    <div style={keyStyle}>650 -750</div>
            </div>
        </Card>
    );
}

/* Professional Details */
const ProfessionalDetails = () => {
    return (
        <Card style={cardStyle} className="loan-details">
            <div style={headerStyle}>Professional Details</div>

            <div style={contentStyle}>
                <div style={keyStyle}>Employer Name</div> <div style={valueStyle}>Google</div>
            </div>
            <div style={contentStyle}>
                <div style={keyStyle}>Working Since</div> <div style={valueStyle}>4 year</div>
            </div>
            <div style={contentStyle}>
                <div style={keyStyle}>Designation</div> <div style={valueStyle}>Software Engineer</div>
            </div>
            <div style={contentStyle}>
                <div style={keyStyle}>Total Experience</div> <div style={valueStyle}>6 Years</div>
            </div>
        </Card>
    );
}

/* Delinquency Details */
const verticalCardStyle = {
    backgroundColor: styleConstants.cardBGColor
}

const delinquencyDetailsCard = {
    ...verticalCardStyle,
    marginBottom: '15px'
}

const DelinquencyDetails = () => {
    return (
        <Card style={delinquencyDetailsCard} className="loan-details">
            <div style={headerStyle}>Delinquency Details</div>

            <div style={contentStyle}>
                <div style={keyStyle}>Current Amount</div> <div style={valueStyle}>11,500</div>
            </div>

            <div style={contentStyle}>
                <div style={keyStyle}>Month Since Last Delinquency</div> <div style={valueStyle}>3 months</div>
            </div>
        </Card>
    );
}

/* Default Details */
const DefaultDetails = () => {
    return (
        <Card style={verticalCardStyle} className="loan-details">
            <div style={headerStyle}>Default Details</div>

            <div style={contentStyle}>
                <div style={keyStyle}>Bank Defaulter</div> <div style={valueStyle}>No</div>
            </div>

            <div style={contentStyle}>
                <div style={keyStyle}>Last Default Date</div> <div style={valueStyle}>N/A</div>
            </div>
        </Card>
    )
}

/* Credit Details */
const CreditDetails = () => {
    return (
        <Card style={cardStyle} className="loan-details">
            <div style={headerStyle}>Credit Card Details</div>

            <div style={contentStyle}>
                <div style={keyStyle}>Total Credit Card</div> <div style={valueStyle}>1</div>
            </div>

            <div style={contentStyle}>
                <div style={keyStyle}>Total Credit Limit</div> <div style={valueStyle}>50,000</div>
            </div>

            <div style={contentStyle}>
                <div style={keyStyle}>First Loan Availment Date</div> <div style={valueStyle}>01/06/2014</div>
            </div>
        </Card>
    )
}

/* LoanDetailsChart */
const loanDetailsData = {
    columns: [
        ['Total Loans', 10],
        ['Current Loans', 20]
    ],
    type: 'donut'
}

const donut = {
    title: '30',
    label: {
        show: false
    }
}

const loanDetailsColor = {
    pattern: ['#D85876', '#69B440']
}

const loanDetailsTooltip = {
    contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        let dataObject = d[0],
            labelColor = `color: ${color(dataObject)}`,
            html = `<div class="tooltip-container">
                <div class="tooltip-header" style="${labelColor}">
                    ${dataObject.name}
                </div>
                <div class="value">
                    ${dataObject.value}
                </div>
            </div>`;

        return html;
    }
}

const legend = {
    item: {
        onclick: function (id) {
            this.api.toggle(id);
            this.isTargetToShow(id) ? this.api.focus(id) : this.api.revert();
            this.api.focus();
        }
    }
}

const LoanDetailsChart = () => {
    return (
        <Card style={cardStyle} className="loan-details">
            <div style={headerStyle}>Loan Details</div>

            <C3Chart data={loanDetailsData} color={loanDetailsColor} tooltip={loanDetailsTooltip} donut={donut} padding={ {bottom: 10} } size={ {height: 200} } legend={legend} />
        </Card>
    )
}

class BorrowerInfo extends Component {
    render () {
        let isMobile = this.props.isMobile,
            rowStyle = isMobile ? rowBaseStyle : {...rowBaseStyle, marginBottom: '20px'},
            colStyle = isMobile ? {marginBottom: '15px'} : {},
            borrowerInfoStyle = isMobile ? {padding: '10px 0'} : {padding: '10px 18px'};

        return (
            <div style={borrowerInfoStyle} className="borrower-info">
                <Row style={rowStyle}>
                    <MobileComponent>
                        <Col lg={2} xs={12} style={colStyle}>    <LoanDetailsChart/>   </Col>
                    </MobileComponent>
                    <Col lg={4} xs={12} style={colStyle}>    <LoanDetails isMobile={isMobile}/>  </Col>
                    <Col lg={6} xs={12} style={colStyle}>    <PersonalDetails isMobile={isMobile}/>  </Col>
                    <WebComponent>
                        <Col lg={2} xs={12} style={colStyle}>    <LoanDetailsChart/>   </Col>
                    </WebComponent>
                </Row>

                <Row style={rowStyle}>
                    <MobileComponent>
                        <Col lg={2} xs={12} style={colStyle}>    <CreditScore/>  </Col>
                    </MobileComponent>
                    <Col lg={4} xs={12} style={colStyle}>    <ProfessionalDetails/>  </Col>
                    <Col lg={3} xs={12} style={colStyle}>    <DelinquencyDetails/>  <DefaultDetails/>    </Col>
                    <Col lg={3} xs={12} style={colStyle}>    <CreditDetails/>   </Col>
                    <WebComponent>
                        <Col lg={2} xs={12} style={colStyle}>    <CreditScore/>  </Col>
                    </WebComponent>
                </Row>
            </div>
        );
    }
}

export default BorrowerInfo;
