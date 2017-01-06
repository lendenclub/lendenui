// These actions are typically called from the components
// You need to make api calls, get the data and pass it on to the reducers so that the reducer will update the states which inturn will cause a re-render of relevant components
export const requestLogin = () => ({
    type: 'NEED_LOGIN'
})

export const setUserLoggedIn = (loggedInStatus) => ({
    type: 'USER_LOGGEDIN',
    loggedInStatus
})

export const setUserCreds = (responseObj) => ({
    type: 'SET_USER_CREDS',
    username: responseObj.username,
    token: responseObj.token
})

export const loginUser = (username, password) => (dispatch, getState) => {
    //make api call here and on response set the user credentials
    console.log('Make Api Call');
    var responseObj = {
        username: 'Arjun Sasikumar',
        token: 'asdfsadfasdfasdfsadfasdff'
    }
    console.log('Dispatching action on user authentication');
    dispatch(setUserLoggedIn(true));    // dispatching an action with relevant params
    dispatch(setUserCreds(responseObj));
}

/*
    Invest Actions
*/
export const receiveLoans = (loans) => ({
    type: 'UPDATE_LOANS',
    loans
})

const tempData = {
    loans: [{
	"user": {
		"user_id": "88GRM7PPTV",
		"first_name": "gilbert",
		"middle_name": null,
		"last_name": "chinappa",
		"gender": "MALE",
		"email": "chinappagilbert.@gmail.com",
		"email_verification": true,
		"mobile_number": "9819399181",
		"dob": "1989-05-05",
		"marital_status": "MARRIED",
		"aadhar": "425554835283",
		"pan": "ALOPC3985H",
		"occupation": "SALARIED",
		"personal_reference_name": "ALISON CHINAPPA",
		"personal_reference_mobile_number": "9819399181",
		"permanent_address": {
			"email": "chinappagilbert.@gmail.com",
			"address_type": "PERMANENT",
			"stay_type": "FAMILY OWNED",
			"address": "5 UMAR KHAN CHAWL MAPKHAN NAGAR M.M ROAD MAROL VILLAGE J.B NAGAR ANDHERI EAST",
			"city": "MUMBAI",
			"state": "Maharashtra",
			"country": "India",
			"pin": "400059",
			"landmark": "BEHIND MAROL FIRE BRIGADE",
			"created_date": "2016-11-09T10:42:10.683646Z",
			"updated_date": "2016-11-09T12:27:48.759827Z"
		},
		"communication_address": {
			"email": "chinappagilbert.@gmail.com",
			"address_type": "COMMUNICATION",
			"stay_type": "FAMILY OWNED",
			"address": "5 UMAR KHAN CHAWL MAPKHAN NAGAR M.M ROAD MAROL VILLAGE J.B NAGAR ANDHERI EAST",
			"city": "MUMBAI",
			"state": "Maharashtra",
			"country": "India",
			"pin": "400059",
			"landmark": "BEHIND MAROL FIRE BRIGADE",
			"created_date": "2016-11-09T10:42:10.705660Z",
			"updated_date": "2016-11-09T12:27:48.771210Z"
		},
		"registration_fees": "1500",
		"registration_fees_confirmation": true
	},
	"required_loan_id": "4F57CT4K",
	"amount": 125000.0,
	"purpose": "HOME RENOVATION",
	"tenure": 15,
	"description": "I wan this loan for home renovation work.",
	"lenden_comment": "",
	"status": "LISTED",
	"status_date": "2016-11-10",
	"repayment_day_of_month": "9",
	"listing_date": "2016-11-10",
	"processing_date": "2017-01-04",
	"processing_fees": "0",
	"processing_fees_confirmation": false,
	"processing_fees_confirmation_date": null,
	"risk_category": null,
	"interest_rate": 22.0,
	"remark": "PROFILE COMPLETE",
	"task": {}
}, {
	"user": {
		"user_id": "RKCX1EL8B6",
		"first_name": "aarti",
		"middle_name": null,
		"last_name": "more",
		"gender": "FEMALE",
		"email": "aartis2107@rediffmail.com",
		"email_verification": true,
		"mobile_number": "9167170080",
		"dob": "1981-11-18",
		"marital_status": "MARRIED",
		"aadhar": null,
		"pan": "CDLPM4938B",
		"occupation": "SALARIED",
		"personal_reference_name": "sachin dhuri",
		"personal_reference_mobile_number": "9920591592",
		"permanent_address": {
			"email": "aartis2107@rediffmail.com",
			"address_type": "PERMANENT",
			"stay_type": "FAMILY OWNED",
			"address": "ROOM NO 11 RADHA NIWAS GANESH NAGAR S.S ROAD BHANDUP WEST",
			"city": "MUMBAI",
			"state": "Maharashtra",
			"country": "India",
			"pin": "400078",
			"landmark": "NEAR GANESH MANDIR",
			"created_date": "2016-10-27T09:34:53.049634Z",
			"updated_date": "2016-10-27T13:49:04.084912Z"
		},
		"communication_address": {
			"email": "aartis2107@rediffmail.com",
			"address_type": "COMMUNICATION",
			"stay_type": "FAMILY OWNED",
			"address": "ROOM NO 11 RADHA NIWAS GANESH NAGAR S.S ROAD BHANDUP WEST",
			"city": "MUMBAI",
			"state": "Maharashtra",
			"country": "India",
			"pin": "400078",
			"landmark": "NEAR GANESH MANDIR",
			"created_date": "2016-10-27T09:34:53.071948Z",
			"updated_date": "2016-10-27T13:49:04.089945Z"
		},
		"registration_fees": "1500",
		"registration_fees_confirmation": true
	},
	"required_loan_id": "VTL3ORU3",
	"amount": 75000.0,
	"purpose": "BUSINESS PURPOSE",
	"tenure": 18,
	"description": "I need this loan for new side business of stationary start with my friend.",
	"lenden_comment": "- Apart from the job, borrower also runs tuition classes and earn around Rs. 15,000 from that business. However, borrower assessment is only based on her salary.\r\n- No EMI delay has been observe in previous credit limits.",
	"status": "DISBURSED",
	"status_date": "2016-11-14",
	"repayment_day_of_month": "5",
	"listing_date": "2016-10-28",
	"processing_date": "2016-10-30",
	"processing_fees": "3720",
	"processing_fees_confirmation": true,
	"processing_fees_confirmation_date": "2016-11-04",
	"risk_category": "",
	"interest_rate": 26.5,
	"remark": "PROFILE COMPLETE",
	"task": {}
}]}

export const fetchLoans = () => (dispatch, getState) => {
    // return fetch(`http://192.168.0.104:8000/invest-api`)
    // .then( response => response.json() )
    // .then( json => dispatch(receiveLoans(tempData)) )
    dispatch(receiveLoans(tempData.loans))
}

export const updateRowActive = (loan_id) => ({
    type: 'UPDATE_ROW_ACTIVE',
    loan_id
})
