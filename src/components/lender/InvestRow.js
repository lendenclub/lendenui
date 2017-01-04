import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import numeral from 'numeral';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { RiskColors } from '../../utils/RiskColors';
import ProgressBar from '../ProgressBar';

const paperStyle = {
    backgroundColor: '#192930',
    color: 'inherit',
    marginRight: '10px',
    position: 'relative',
    marginLeft: '5px'
}

const paperCollapsibleStyle = {
    color: 'inherit',
    backgroundColor: '#081B24'
}

const inputTextStyle = {
    top: '-5px',
    color: '#6E7580'
}

const floatingLabelStyle = {
    color: '#6E7580'
}

const inputStyle = {
    color: '#6E7580'
}

class InvestRow extends Component {
    constructor (props) {
        super(props);
        this.state = { investmentAmount: ''};
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    computeRiskStyle = (interest) => {
        let color = RiskColors(interest);
        return {
            backgroundColor: color
        };
    }

    onRowClicked = (e) => {
        console.log(e.target);
        this.props.toggleRowAction(this.props.data.borrowerId);
    }

    render () {
        let data = this.props.data,
            riskStyle = this.computeRiskStyle(data.interest),
            collapsiblePaperState = this.props.rowActive ? 'show-collapsible' : 'hide-collapsible',
            collapsiblePaperStyle = `collapsible-pane ${collapsiblePaperState}`;

        return (
            <div className="invest-row">
                <Paper style={paperStyle} zDepth={1}>

                    <div className="risk-indicator" style={riskStyle}></div>

                    <Row className="row-item" onClick={this.onRowClicked}>
                        <Col lg={1} className="invest-data-column">
                            {data.interest}%
                        </Col>

                        <Col lg={1} className="invest-data-column">
                            {data.tenure} months
                        </Col>

                        <Col lg={1} className="invest-data-column">
                            {numeral(data.loan).format('₹0,0.00')}
                            <div className="progress-bar-container">
                                <ProgressBar max={data.loan} value={data.loan - data.remaining} />
                            </div>
                        </Col>

                        <Col lg={1} className="invest-data-column">
                            {numeral(data.remaining).format('₹0,0.00')}
                        </Col>

                        <Col lg={2} className="invest-data-column flex-child-ellipsis">
                            {data.loan_purpose}
                        </Col>

                        <Col lg={2} className="invest-data-column">
                            {data.borrowerId} {data.borrower_name}
                        </Col>

                        <Col lg={2}>
                            <TextField
                                floatingLabelText="Investment Amount"
                                fullWidth={true}
                                name="investmentAmount"
                                value={this.state.investmentAmount}
                                onChange={this.handleChange}
                                style={inputTextStyle}
                                floatingLabelStyle={floatingLabelStyle}
                                inputStyle={inputStyle}
                            />
                        </Col>

                        <Col lg={2} className="invest-button-column text-align-center">
                            <RaisedButton label="Invest" primary={true} type="submit" disabled={!this.props.rowActive}/>
                        </Col>
                    </Row>
                </Paper>

                <Paper zDepth={1} style={paperCollapsibleStyle} className={collapsiblePaperStyle}>
                    <div className="collapsible-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit, eros eu rhoncus pretium, ex purus vehicula nisi, a consectetur elit ex ut felis. Morbi sit amet augue sit amet lectus sagittis efficitur vehicula non eros. Fusce lacinia nisi ut dolor porttitor, sit amet pretium mauris vestibulum. Vivamus enim massa, tempor quis volutpat non, varius a dui. Suspendisse volutpat pulvinar lorem ac imperdiet. Proin eu tempor libero, non auctor metus. Nunc porttitor urna sed pellentesque placerat. Morbi turpis nisl, imperdiet id quam eget, luctus tristique nisl.

                        Maecenas ac placerat elit. Phasellus pretium, sapien eget aliquam cursus, lectus ipsum consectetur risus, ac molestie orci ex vitae tortor. Quisque elementum neque non purus facilisis ultricies. Cras commodo nibh tempor ex condimentum, at commodo augue tristique. Proin sit amet erat eget sapien vestibulum lobortis et eget est. In dolor risus, feugiat id libero nec, congue suscipit neque. Vivamus ac libero ac velit sodales faucibus quis in nibh. Nulla congue mollis ipsum, eu gravida ligula pharetra eu. Donec maximus tortor id vestibulum iaculis. In sagittis diam bibendum libero sodales laoreet. Aliquam sed aliquet erat, eu porta elit. Fusce ultrices eleifend ante sit amet porta. Aenean quis augue ac justo vehicula euismod. In nec cursus enim. Quisque laoreet magna nisl, id interdum nulla elementum et.

                        Duis nibh sem, fermentum eget placerat id, sodales sit amet nibh. Quisque id magna elit. Maecenas sed neque blandit, aliquet dui vitae, blandit felis. Aliquam porttitor aliquam dolor a facilisis. Suspendisse sed nisl sapien. Sed dapibus placerat nisl, a suscipit lectus varius vel. Donec lacinia convallis sollicitudin. Vivamus pulvinar est nec malesuada elementum. Nunc et arcu sed risus commodo volutpat.
                    </div>
                </Paper>
            </div>
        );
    }
}

export default InvestRow;
