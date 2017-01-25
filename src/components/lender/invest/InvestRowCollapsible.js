import React, { Component } from 'react';
import Collapse, { Panel } from 'rc-collapse';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import 'rc-collapse/assets/index.css';
import { Row, Col } from 'react-flexbox-grid';
import { styleConstants } from '../../../utils/StyleConstants';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

const AccordionHeader = ({headerText}) => {
    return (
        <div>
            <KeyboardArrowRight />
            <span>
                {headerText}
            </span>
        </div>
    )
}


const rowPaddingDesktop = {
    padding: '10px 0'
}

const colPaddingMobile = {
    padding: '10px 0'
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

const headerStyle = {
    padding: '20px',
    color: styleConstants.textHeaderGrey,
    textAlign: 'center'
}

const LoanDetailsChart = () => {
    return (
        <div>
            <div style={headerStyle}>Loan Details</div>
            <C3Chart data={loanDetailsData} color={loanDetailsColor} tooltip={loanDetailsTooltip} donut={donut} padding={ {bottom: 10} } size={ {height: 200} } legend={legend} />
        </div>
    )
}

class InvestRowCollapsible extends Component {
    render () {
        let loan = this.props.loan,
            rowPadding = this.props.isMobile ? {} : rowPaddingDesktop,
            colPadding = this.props.isMobile ? colPaddingMobile : {},
            colValueStyle = this.props.isMobile ? {...colPaddingMobile, textAlign: 'right'} : {};

        return (
            <Row>
                <Col lg={9} sm={12}>
                    <Collapse accordion={true}>
                        <Panel showArrow={false} header={ <AccordionHeader headerText="Loan Details" /> }>
                            <Row>
                                <Col lg={12} sm={12}>
                                    <Row style={rowPadding}>
                                        <Col lg={3} sm={6} xs={6} style={colPadding} className="text-header-grey"> Time Remaining </Col>
                                        <Col lg={4} sm={6} xs={6} style={colValueStyle}> 29 Days </Col>
                                        <Col lg={3} sm={6} xs={6} style={colPadding} className="text-header-grey"> No. of Lenders </Col>
                                        <Col lg={1} sm={6} xs={6} style={colValueStyle}> 6 </Col>
                                    </Row>
                                    <Row style={rowPadding}>
                                        <Col lg={3} sm={6} xs={6} style={colPadding} className="text-header-grey"> Description </Col>
                                        <Col lg={4} sm={6} xs={6} style={colValueStyle}> To consolidate old debts </Col>
                                        <Col lg={3} sm={6} xs={6} style={colPadding} className="text-header-grey"> EMI </Col>
                                        <Col lg={1} sm={6} xs={6} style={colValueStyle}> 9476 </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel showArrow={false} header={ <AccordionHeader headerText="Personal Details" /> } >
                            <Row style={rowPadding}>
                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey">Gender </Col>
                                <Col lg={1} sm={6} xs={6} style={colValueStyle}> Male </Col>

                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Marital Status </Col>
                                <Col lg={1} sm={6} xs={6} style={colValueStyle}> Married </Col>

                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Age </Col>
                                <Col lg={1} sm={6} xs={6} style={colValueStyle}> 41 </Col>

                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> City </Col>
                                <Col lg={1} sm={6} xs={6} style={colValueStyle}> Thane </Col>
                            </Row>
                            <Row style={rowPadding}>
                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey">Qualification </Col>
                                <Col lg={1} sm={6} xs={6} style={colValueStyle}> Other </Col>

                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Specialization </Col>
                                <Col lg={1} sm={6} xs={6} style={colValueStyle}> Engineering </Col>

                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Total Family Member </Col>
                                <Col lg={1} sm={6} xs={6} style={colValueStyle}> 4 </Col>

                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Earning Family Members </Col>
                                <Col lg={1} sm={6} xs={6} style={colValueStyle}> 3 </Col>
                            </Row>
                            <Row style={rowPadding}>
                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Stay Type </Col>
                                <Col lg={1} sm={6} xs={6} style={colValueStyle}> Rented </Col>

                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Monthly Income </Col>
                                <Col lg={1} sm={6} xs={6} style={colValueStyle}> ₹80000.00 </Col>

                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Total Family Member </Col>
                                <Col lg={1} sm={6} xs={6} style={colValueStyle}> Car </Col>

                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Current EMI </Col>
                                <Col lg={1} sm={6} xs={6} style={colValueStyle}> ₹9000 </Col>
                            </Row>
                        </Panel>
                        <Panel showArrow={false} header={ <AccordionHeader headerText="Credit Details" /> } >
                            <Row style={rowPadding}>
                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Total Number of Credit Cards </Col>
                                <Col lg={1} sm={6} xs={6} style={colValueStyle}> 2 </Col>

                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Total Credit Limit </Col>
                                <Col lg={1} sm={6} xs={6} style={colValueStyle}> ₹89000 </Col>

                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> First Loan Availment Date </Col>
                                <Col lg={1} sm={6} xs={6} style={colValueStyle}> 01/03/2006 </Col>
                            </Row>
                            <Row style={rowPadding}>
                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Credit Bureau Score </Col>
                                <Col lg={1} sm={6} xs={6} style={colValueStyle}> Below 640 </Col>

                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Credit Score </Col>
                                <Col lg={1} sm={6} xs={6} style={colValueStyle}> 67 </Col>
                            </Row>
                        </Panel>
                        <Panel showArrow={false} header={ <AccordionHeader headerText="Professional Details" /> } >
                            <Row style={rowPadding}>
                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Employer Name </Col>
                                <Col lg={3} sm={6} xs={6} style={colValueStyle}> Technimont Pvt. Ltd. </Col>

                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Working Since </Col>
                                <Col lg={3} sm={6} xs={6} style={colValueStyle}> 9 years </Col>
                            </Row>
                            <Row style={rowPadding}>
                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Designation </Col>
                                <Col lg={3} sm={6} xs={6} style={colValueStyle}> Designer Civil </Col>

                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Total Experience </Col>
                                <Col lg={3} sm={6} xs={6} style={colValueStyle}> 16 years </Col>
                            </Row>
                        </Panel>
                        <Panel showArrow={false} header={ <AccordionHeader headerText="Delinquency Details" /> } >
                            <Row style={rowPadding}>
                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Current Delinquency Amount </Col>
                                <Col lg={3} sm={6} xs={6} style={colValueStyle}> ₹0 </Col>

                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Month Since Last Delinquency </Col>
                                <Col lg={3} sm={6} xs={6} style={colValueStyle}> NA </Col>
                            </Row>
                        </Panel>
                        <Panel showArrow={false} header={ <AccordionHeader headerText="Default History" /> } >
                            <Row style={rowPadding}>
                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Bank Defaulter </Col>
                                <Col lg={3} sm={6} xs={6} style={colValueStyle}> Yes </Col>

                                <Col lg={2} sm={6} xs={6} style={colPadding} className="text-header-grey"> Default Date </Col>
                                <Col lg={3} sm={6} xs={6} style={colValueStyle}> 2013-09-01 </Col>
                            </Row>
                        </Panel>
                    </Collapse>
                </Col>
                <Col lg={3} sm={12}>
                    <LoanDetailsChart />
                </Col>
            </Row>
        )
    }
}

export default InvestRowCollapsible;
