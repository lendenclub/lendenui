import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import { styleConstants } from '../../../utils/StyleConstants';
import { Card } from 'material-ui/Card';
import { Row, Col } from 'react-flexbox-grid';

const modalStyle = {
    backgroundColor: styleConstants.bodyBackgroundColor,
    padding: '15px',
    overflowY: 'auto'
}

const cardStyle = {
    backgroundColor: styleConstants.cardBGColor,
    height: '100%'
}

const headerStyle = {
    padding: '15px',
    color: styleConstants.textHeaderGrey
}

const flexHolder = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    color: styleConstants.textGrey,
    alignItems: 'stretch'
}

const rowStyle = {
    marginBottom: '15px'
}

const ReferralDetails = () => {
    let claimableAmountStyle = { ...flexHolder, borderTop: `1px solid ${styleConstants.borderColor}` };

    return (
        <Card className="refer" style={cardStyle}>
            <div style={headerStyle}>Referral Details</div>

            <div style={flexHolder}>
                <div>Converted</div> <div>0</div>
            </div>

            <div style={flexHolder}>
                <div>Investments</div> <div>0</div>
            </div>

            <div style={flexHolder}>
                <div>Bonus Earned</div> <div>0</div>
            </div>

            <div style={flexHolder}>
                <div>Bonus Credited</div> <div>0</div>
            </div>

            <div style={claimableAmountStyle}>
                <div>Claimable Amount</div> <div>0</div>
            </div>
        </Card>
    )
}

const ReferralBonus = () => {
    return (
        <Card className="refer" style={cardStyle}>
            <div style={headerStyle}>Referral Bonus For Lenders</div>

            <div style={flexHolder}>
                <div>Upto ₹1,00,000</div> <div>0.50%</div>
            </div>

            <div style={flexHolder}>
                <div>₹1,00,000 - ₹2,00,000</div> <div>0.75%</div>
            </div>

            <div style={flexHolder}>
                <div>Above ₹2,00,000</div> <div>1.00%</div>
            </div>
        </Card>
    );
}

const TermsAndConditions = () => {
    let listStyle = { color: styleConstants.textGrey },
        listItem = { paddingBottom: '5px' };

    return (
        <Card className="refer" style={cardStyle}>
            <div style={headerStyle}>Terms And Conditions</div>

            <ul style={listStyle}>
                <li style={listItem}> Referee lender has to be invested lender at the time of introducing lender or claiming the amount </li>
                <li style={listItem}> Referee lender will get referral bonus on the investment made by the referred lender between listing date till 6 months </li>
                <li style={listItem}> Referral bonus will not be applicable when referred lender is immediate family members or people with blood relationship or entity owned by the referee lender </li>
                <li style={listItem}> LenDenClub retains rights to call off this refferal bonus offer by giving intimation to lender members </li>
                <li style={listItem}> Lender can claim his referral amount within 6 months of realisation. After 6 months, if any amount is unclaimed, it will be considered zero </li>
                <li style={listItem}> If lender has zero investments at any point of time, all the previous referral amount will be considered zero </li>
                <li style={listItem}> If lender has not offered any loan in last 3 months, he will not be eligible to earn referral bonus </li>
                <li style={listItem}> "Invested lender" is the one who has active investments through LenDenClub and has at least 1 outstanding EMI/s as on date </li>
                <li style={listItem}> Maximum referral bonus per referred members cannot be more than Rs. 10,000 </li>
            </ul>
        </Card>
    );
}

class TermsAndConditionsModal extends Component {
    render () {
        let props = this.props;

        return (
            <Dialog open={props.open} bodyStyle={modalStyle} className="terms-conditions-modal" onRequestClose={props.closeModal}>
                <Row style={rowStyle}>
                    <Col lg={6}> <ReferralDetails /> </Col>
                    <Col lg={6}> <ReferralBonus /> </Col>
                </Row>
                <Row>
                    <Col lg={12}> <TermsAndConditions /> </Col>
                </Row>
            </Dialog>
        );
    }
}

export default TermsAndConditionsModal;
