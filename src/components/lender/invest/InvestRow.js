import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import numeral from 'numeral';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { RiskColors } from '../../../utils/RiskColors';
import ProgressBar from '../../ProgressBar';
import InvestRowCollapsible from './InvestRowCollapsible';

const paperStyle = {
    color: 'inherit',
    position: 'relative'
}

const investButtonStyle = {
    minWidth: '75px'
}

const riskIndicator = {
    position: 'absolute',
    width: 0,
	height: 0,
    left: '-8px',
	borderTopWidth: '20px',
    borderTopStyle: 'solid',
	borderRight: '20px solid transparent'
}

//TODO: Make risk indicator a component
//TODO: Move the bg color to a css class
const paperCollapsibleStyle = {
    color: 'inherit',
    backgroundColor: '#OD222B'
}

class InvestRow extends Component {
    constructor (props) {
        super(props);
        this.state = { investmentAmount: '', buttonDisabled: true};
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    computeRiskStyle = (interest) => {
        return RiskColors(interest);
    }

    onRowClicked = (e) => {
        // Dont open the accordion if the invest button is clicked
        //TODO: Figure out a better solution - this will break if the button label changes
        if (e.target.parentElement.innerText.trim() !== 'INVEST') {
            this.props.toggleRowAction(this.props.loan.required_loan_id);
            this.setState({
                buttonDisabled: this.props.rowActive
            });
        }
    }

    enableButton = (event) => {
        this.setState({
            buttonDisabled: false
        })
    }

    disableButton = (event) => {
        if (!this.props.rowActive) {
            this.setState({
                buttonDisabled: true
            })
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            buttonDisabled: !nextProps.rowActive
        });
    }

    render () {
        let loan = this.props.loan,
            collapsiblePaperState = this.props.rowActive ? 'show-collapsible' : 'hide-collapsible',
            collapsiblePaperStyle = `collapsible-pane ${collapsiblePaperState}`;

        riskIndicator.borderTopColor = this.computeRiskStyle(loan.interest_rate);

        return (
            <div className="invest-row">
                <Paper style={paperStyle} zDepth={1} className="invest-paper">

                    <div style={riskIndicator}></div>

                    <Row className="row-item" onClick={this.onRowClicked}>
                        <Col lg={1} className="invest-loan-column interest-column"> {loan.interest_rate}% </Col>

                        <Col lg={1} className="invest-loan-column"> {loan.tenure} months </Col>

                        <Col lg={1} className="invest-loan-column text-capitalize"> {loan.required_loan_id} </Col>

                        <Col lg={2} className="invest-loan-column text-capitalize"> {loan.user.first_name} </Col>

                        <Col lg={2} className="invest-loan-column">
                            ₹ {numeral(loan.amount).format('0,0.00')}
                            <div className="progress-bar-container">
                                <ProgressBar max={loan.amount} value={loan.amount - 50000} />
                            </div>
                        </Col>

                        <Col lg={2} className="invest-loan-column"> ₹ {numeral(50000).format('0,0.00')} </Col>

                        <Col lg={2} className="invest-loan-column flex-child-ellipsis text-capitalize"> {loan.purpose.toLowerCase()} </Col>

                        <Col lg={1} className="invest-button-column text-align-center">
                            <RaisedButton
                                style={investButtonStyle}
                                label="Invest" primary={true}
                                disabled={this.state.buttonDisabled}
                                onMouseLeave={this.disableButton}
                                onMouseEnter={this.enableButton}
                                type="submit"
                                onClick={() => this.props.invest(loan)}
                                className="invest-button"
                            />
                        </Col>
                    </Row>
                </Paper>

                <Paper zDepth={1} style={paperCollapsibleStyle} className={collapsiblePaperStyle}>
                    <div className="collapsible-content">
                        <InvestRowCollapsible loan={loan} isMobile={this.props.isMobile}/>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default InvestRow;
