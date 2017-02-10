import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import WebComponent from '../../components/WebComponent';
import MobileComponent from '../../components/MobileComponent';
import UltimatePaginationMaterialUi from '../../components/Pagination';
import InvestRow from '../../components/lender/invest/InvestRow';
import BorrowerFilter from '../../components/lender/invest/BorrowerFilter';
import InvestModal from '../../components/lender/invest/InvestModal';
import InvestHeaderRow from '../../components/lender/invest/InvestHeaderRow';
import InvestCard from '../../components/lender/invest/mobile/InvestCard';

const floatingFilter = {
    position: 'fixed',
    bottom: '20px',
    right: '15px',
    zIndex: 100
}

// Note: If you are changing these column widths - you need to change in the row component also
class Invest extends Component {
    constructor (props) {
        super();
        this.state = {
            filterDrawerState: false,
            investModalOpen: false,
            selectedLoan: null,
            investAmount: '',
            password: '',
            offset: 0,
            limit: 15,
            totalRecords: 0,
            currentPage: 1,
            totalPages: 1,
            totalLoans: 0
        };
    }

    componentWillMount () {
        this.fetchLoans();
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            totalRecords: nextProps.lender.totalLoans,
            totalPages: Math.ceil(nextProps.lender.totalLoans / this.state.limit)
        })
    }

    componentDidUpdate (prevProps, prevState) {
        if ((this.state.offset !== prevState.offset) || (this.state.filterQuery !== prevState.filterQuery)) {
            this.fetchLoans();
        }
    }

    // toggleRowActive = (required_loan_id) => {
    //     this.props.updateRowActive(required_loan_id);
    // }

    toggleFilterDrawer = () => {
        this.setState({ filterDrawerState: !this.state.filterDrawerState})
    }

    showInvestModal (loan) {
        this.setState({ investModalOpen: true, selectedLoan: loan });
    }

    closeInvestModal () {
        this.setState({ investModalOpen: false, selectedLoan: null, investAmount: '', password: ''});
    }

    handleInvestInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onInvest = (loan) => {
        console.log(loan);
        console.log(this.state.investAmount, this.state.password);
    }

    onPageNumberChange = (pageNumber) => {
        this.setState({
            currentPage: pageNumber,
            offset: (pageNumber - 1) * this.state.limit
        });
    }

    applyFilter = (filterQuery = '') => {
        this.setState({
            filterQuery: filterQuery,
            offset: 0,
            limit: 20,
            totalRecords: 0,
            currentPage: 1,
            totalPages: 1,
            totalLoans: 0,
            filterDrawerState: false
        });
    }

    fetchLoans = () => {
        var query = `l=${this.state.limit}&o=${this.state.offset}`;
        if (this.state.filterQuery) {
            query += `&${this.state.filterQuery}`;
        }
        this.props.fetchLoans(query);
    }


    //TODO: Change the .bind(this) to arrow functions
    //TODO: Change key to loan ID
    render () {
        return (
            <div>
                <WebComponent>
                    <div className="lender-invest">
                        <InvestHeaderRow showFilterIcon={true} filterQuery={this.state.filterQuery} toggleFilterDrawer={this.toggleFilterDrawer}/>

                        <BorrowerFilter filterDrawerState={this.state.filterDrawerState} applyFilter={this.applyFilter} toggleFilterDrawer={this.toggleFilterDrawer.bind(this)} />

                        <div className="invest-table">
                            {this.props.lender.loans.map( (loan, idx) => {
                                return (
                                    <InvestRow key={idx} loan={loan} rowActive={loan.active} invest={this.showInvestModal.bind(this)} isMobile={this.props.isMobile}/>
                                )
                            })}
                        </div>

                        <UltimatePaginationMaterialUi currentPage={this.state.currentPage} totalPages={this.state.totalPages} onChange={this.onPageNumberChange.bind(this)} />

                    </div>
                </WebComponent>

                <InvestModal
                    loan={this.state.selectedLoan}
                    open={this.state.investModalOpen}
                    closeModal={() => this.closeInvestModal()}
                    investAmount={this.state.investAmount}
                    password={this.state.password}
                    handleInvestInputChange={this.handleInvestInputChange}
                    onInvest={(loan) => this.onInvest(loan)}
                    isMobile={this.props.isMobile}
                />

                <MobileComponent>
                    <div className="lender-invest">
                        <FloatingActionButton zDepth={2} backgroundColor='#1976D2' className="filter-floating-button" onClick={this.toggleFilterDrawer.bind(this)} style={floatingFilter}>
                            <FontIcon className="material-icons">filter_list</FontIcon>
                        </FloatingActionButton>

                        <BorrowerFilter filterDrawerState={this.state.filterDrawerState} applyFilter={this.applyFilter} toggleFilterDrawer={this.toggleFilterDrawer.bind(this)} isMobile={this.props.isMobile}/>

                        {this.props.lender.loans.map( (loan, idx) => {
                            return (
                                <InvestCard key={idx} loan={loan} rowActive={loan.active} invest={this.showInvestModal.bind(this)} isMobile={this.props.isMobile}/>
                            )
                        })}
                    </div>
                </MobileComponent>
            </div>
                    );
    }
}

export default Invest;
