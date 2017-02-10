const mockData = [{
    "user": {
        "user_id": "88GRM7PPTV",
        "first_name": "gilbert",
        "middle_name": null,
        "last_name": "chinappa"
    },
    "required_loan_id": "4F57CT4K",
    "amount": 125000.0,
    "tenure": 15,
    "interest_rate": 22.0,
    emi: 123456,
    statusText: 'processing',
    statusPercentage: 20,
    cheque: false,
    agreement: true,
    disbursementDate: '5/9/2016',
    repaymentStartDate: '7/9/2016',
    loanCloseDate: '10/0/2017',
    repayments: [{
        emiDate: '5/10/2016',
        emiAmount: 25000,
        emiStatus: 'received'
    }, {
        emiDate: '6/10/2016',
        emiAmount: 25000,
        emiStatus: 'received'
    }, {
        emiDate: '7/10/2016',
        emiAmount: 25000,
        emiStatus: 'received'
    }, {
        emiDate: '8/10/2016',
        emiAmount: 25000,
        emiStatus: 'NA'
    }, {
        emiDate: '8/10/2016',
        emiAmount: 25000,
        emiStatus: 'NA'
    }]
}];

const myInvestmentsMockData = [ ...mockData, ...mockData, ...mockData, ...mockData, ...mockData, ...mockData, ...mockData ];

export default myInvestmentsMockData;
