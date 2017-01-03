import React, { Component } from 'react';
import Header from './Header';
import LeftNav from './LeftNav';
import { Row, Col } from 'react-flexbox-grid';

const style = {
    height: '100%',
    marginRight: 0
}

const columnStyle = {
    paddingRight: 0,
    marginRight: 0,
    marginLeft: 0
}

class Lender extends Component {
    render () {
        return (
            <div style={style}>
                <Header/>

                <Row style={style}>
                    <Col lg={2} style={columnStyle}>
                        <LeftNav />
                    </Col>
                    <Col lg={10} style={columnStyle}>
                        {this.props.children}
                    </Col>

                </Row>
            </div>
        );
    }
}

export default Lender;
