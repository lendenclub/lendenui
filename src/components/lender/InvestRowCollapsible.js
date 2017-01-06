import React, { Component } from 'react';
import Collapse, { Panel } from 'rc-collapse';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import 'rc-collapse/assets/index.css';
import { Row, Col } from 'react-flexbox-grid';
import ReactHighcharts from 'react-highcharts';

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

const config = {
    chart: {
        plotBackgroundColor: null,
        backgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: 100,
        margin: 0,
        width: 300
    },
    title: {
        text: ''
    },
    tooltip: {
        headerFormat: 'Loan History <br>',
        pointFormat: '{point.name}: <b>{point.y}</b>'
    },
    legend: {
        layout: 'vertical',
	    align: 'right',
  	    verticalAlign: 'middle',
    	floating: true,
        backgroundColor: null,
        itemStyle: { color: '#B9B8B8', padding: '10px' },
        squareSymbol: true,
        symbolRadius: 0,
        labelFormatter: function () {
            return `${this.name} ${this.series.data.find( (item) => item.name === this.name ).y}`
        }
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            borderWidth: 0,
            dataLabels: {
                enabled: false
            },
            showInLegend: true,
            innerSize: '80%',
            center: ['15%', '50%']
        }
    },
    series: [{
        colorByPoint: true,
        data: [{
            name: 'Total Loan',
            y: 18,
            color: '#EA7D3C'
        }, {
            name: 'Current Loans',
            y: 9,
            color: '#5D9AD1'
        }]
    }]
}

class InvestRowCollapsible extends Component {
    render () {
        let loan = this.props.loan;

        return (
            <Collapse accordion={true}>
                <Panel showArrow={false} header={ <AccordionHeader headerText="Loan Details" /> }>
                    <Row>
                        <Col lg={9}>
                            <Row className="padding-top-bottom-15">
                                <Col lg={3} className="text-header-grey"> Time Remaining </Col>
                                <Col lg={4}> 29 Days </Col>
                                <Col lg={3} className="text-header-grey"> No. of Lenders </Col>
                                <Col lg={1}> 6 </Col>
                            </Row>
                            <Row className="padding-top-bottom-15">
                                <Col lg={3} className="text-header-grey"> Description </Col>
                                <Col lg={4}> To consolidate old debts </Col>
                                <Col lg={3} className="text-header-grey"> EMI </Col>
                                <Col lg={1}> 9476 </Col>
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <ReactHighcharts config={config} ></ReactHighcharts>
                        </Col>
                    </Row>
                </Panel>
                <Panel showArrow={false} header={ <AccordionHeader headerText="Personal Details" /> } >
                    <Row className="padding-top-bottom-15">
                        <Col lg={2} className="text-header-grey">Gender </Col>
                        <Col lg={1}> Male </Col>

                        <Col lg={2} className="text-header-grey"> Marital Status </Col>
                        <Col lg={1}> Married </Col>

                        <Col lg={2} className="text-header-grey"> Age </Col>
                        <Col lg={1}> 41 </Col>

                        <Col lg={2} className="text-header-grey"> City </Col>
                        <Col lg={1}> Thane </Col>
                    </Row>
                    <Row className="padding-top-bottom-15">
                        <Col lg={2} className="text-header-grey">Qualification </Col>
                        <Col lg={1}> Other </Col>

                        <Col lg={2} className="text-header-grey"> Specialization </Col>
                        <Col lg={1}> Engineering </Col>

                        <Col lg={2} className="text-header-grey"> Total Family Member </Col>
                        <Col lg={1}> 4 </Col>

                        <Col lg={2} className="text-header-grey"> Earning Family Members </Col>
                        <Col lg={1}> 3 </Col>
                    </Row>
                    <Row className="padding-top-bottom-15">
                        <Col lg={2} className="text-header-grey"> Stay Type </Col>
                        <Col lg={1}> Rented </Col>

                        <Col lg={2} className="text-header-grey"> Monthly Income </Col>
                        <Col lg={1}> ₹80000.00 </Col>

                        <Col lg={2} className="text-header-grey"> Total Family Member </Col>
                        <Col lg={1}> Car </Col>

                        <Col lg={2} className="text-header-grey"> Current EMI </Col>
                        <Col lg={1}> ₹9000 </Col>
                    </Row>
                </Panel>
                <Panel showArrow={false} header={ <AccordionHeader headerText="Credit Details" /> } >
                    <Row className="padding-top-bottom-15">
                        <Col lg={2} className="text-header-grey"> Total Number of Credit Cards </Col>
                        <Col lg={1}> 2 </Col>

                        <Col lg={2} className="text-header-grey"> Total Credit Limit </Col>
                        <Col lg={1}> ₹89000 </Col>

                        <Col lg={2} className="text-header-grey"> First Loan Availment Date </Col>
                        <Col lg={1}> 01/03/2006 </Col>
                    </Row>
                    <Row className="padding-top-bottom-15">
                        <Col lg={2} className="text-header-grey"> Credit Bureau Score </Col>
                        <Col lg={1}> Below 640 </Col>

                        <Col lg={2} className="text-header-grey"> Credit Score </Col>
                        <Col lg={1}> 67 </Col>
                    </Row>
                </Panel>
                <Panel showArrow={false} header={ <AccordionHeader headerText="Professional Details" /> } >
                    <Row className="padding-top-bottom-15">
                        <Col lg={2} className="text-header-grey"> Employer Name </Col>
                        <Col lg={3}> Technimont Pvt. Ltd. </Col>

                        <Col lg={2} className="text-header-grey"> Working Since </Col>
                        <Col lg={3}> 9 years </Col>
                    </Row>
                    <Row className="padding-top-bottom-15">
                        <Col lg={2} className="text-header-grey"> Designation </Col>
                        <Col lg={3}> Designer Civil </Col>

                        <Col lg={2} className="text-header-grey"> Total Experience </Col>
                        <Col lg={3}> 16 years </Col>
                    </Row>
                </Panel>
                <Panel showArrow={false} header={ <AccordionHeader headerText="Delinquency Details" /> } >
                    <Row className="padding-top-bottom-15">
                        <Col lg={2} className="text-header-grey"> Current Delinquency Amount </Col>
                        <Col lg={3}> ₹0 </Col>

                        <Col lg={2} className="text-header-grey"> Month Since Last Delinquency </Col>
                        <Col lg={3}> NA </Col>
                    </Row>
                </Panel>
                <Panel showArrow={false} header={ <AccordionHeader headerText="Default History" /> } >
                    <Row className="padding-top-bottom-15">
                        <Col lg={2} className="text-header-grey"> Bank Defaulter </Col>
                        <Col lg={3}> Yes </Col>

                        <Col lg={2} className="text-header-grey"> Default Date </Col>
                        <Col lg={3}> 2013-09-01 </Col>
                    </Row>
                </Panel>
            </Collapse>
        )
    }
}

export default InvestRowCollapsible;
