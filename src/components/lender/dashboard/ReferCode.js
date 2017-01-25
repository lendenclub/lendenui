import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Card } from 'material-ui/Card';
import { styleConstants } from '../../../utils/StyleConstants';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import TermsAndConditionsModal from './TermsAndConditionsModal';
import Avatar from 'material-ui/Avatar';

const cardStyle = {
    backgroundColor: styleConstants.cardBGColor
}

const containerStyle = {
    height: '100%'
}

const headerStyle = {
    padding: '15px',
    color: styleConstants.textHeaderGrey
}

const iconSelectedStyle = {
    color: styleConstants.accentGreen
}

const iconStyle = {
    color: styleConstants.lightGreyBGColor
}

const textFieldStyle = {
    marginTop: '-30px',
    flex: '1 90%'
}

const sendIconStyle = {
    color: "white"
}

const noPadding = {
    padding: 0
}

const inputBarStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}

class ReferCode extends Component {
    constructor () {
        super();
        this.state = { selectedMode: 'email', inviteInfo: '', tcModalOpen: false};
    }

    toggleMode = (e) => {
        let clickedIcon = e.target.innerText.trim();

        if (this.state.selectedMode === 'email' && clickedIcon !== 'email') {
            this.setState({
                selectedMode: 'phone',
                inviteInfo: ''
            });
        } else if (this.state.selectedMode === 'phone' && clickedIcon !== 'phone') {
            this.setState({
                selectedMode: 'email',
                inviteInfo: ''
            });
        }
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    toggleTCModel = () => {
        this.setState({
            tcModalOpen: !this.state.tcModalOpen
        });
    }

    render () {
        let selectedMode = this.state.selectedMode,
            inputLabel = this.state.selectedMode === 'email' ? 'Email ID' : 'Mobile Number',
            emailStyle = selectedMode === 'email' ? iconSelectedStyle : iconStyle,
            phoneStyle = selectedMode === 'phone' ? iconSelectedStyle : iconStyle,
            props = this.props;


        return (
            <Card className="refer-and-earn" style={cardStyle} containerStyle={containerStyle}>
                <div style={headerStyle}>Refer Code</div>

                <div className="refer-code">
                    LDC1
                </div>

                <div className="invite" style={headerStyle}>
                    Invite Via

                    <div className="mode-selector">
                        <IconButton onClick={this.toggleMode} iconStyle={emailStyle}>
                            <FontIcon className="material-icons">email</FontIcon>
                        </IconButton>

                        <IconButton onClick={this.toggleMode} iconStyle={phoneStyle}>
                            <FontIcon className="material-icons">phone</FontIcon>
                        </IconButton>
                    </div>

                    <Row style={ {width: '100%', alignItems: 'flex-end'} }>
                        <Col lg={11}>
                            <TextField
                                floatingLabelText={inputLabel}
                                name="inviteInfo"
                                value={this.state.inviteInfo}
                                onChange={this.handleInputChange}
                                fullWidth={true}
                                style={textFieldStyle}
                            />
                        </Col>
                        <Col lg={1} style={noPadding}>
                            <IconButton style={noPadding}>
                                <Avatar size={30} icon={<FontIcon className="material-icons" style={sendIconStyle}>send</FontIcon>} backgroundColor={styleConstants.accentBlue}/>
                            </IconButton>
                        </Col>
                    </Row>
                </div>
                <div className="footer">
                    <div className="t-and-c"> *T&C Applied </div>
                    <div className="more-info-link" onClick={this.toggleTCModel}> More Info </div>
                </div>

                <TermsAndConditionsModal open={this.state.tcModalOpen} closeModal={this.toggleTCModel} />
            </Card>
        );
    }
}

export default ReferCode;
