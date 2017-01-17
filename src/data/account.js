const mockData = {
    account_balance: 175000,
    addition_in_process: 25000,
    withdrawal_in_process: 25000,
    total_balance: 125000
}

const history = [{
    date: '25/12/2016',
    description: 'Funds Added',
    credit: 25000,
    debit: 0
}, {
    date: '26/12/2016',
    description: 'Funds Debited',
    credit: 0,
    debit: 25000
}]

mockData.history = [...history, ...history, ...history, ...history];

const AccountMockData = mockData;

export default AccountMockData;
