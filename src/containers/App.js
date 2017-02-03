import React, { Component } from 'react';

const style = {
    height: '100%'
}

class App extends Component {

    // componentDidMount () {
    //     // console.log("Keys length", Object.keys(this.props.app.user).length);
    //     if (Object.keys(this.props.app.user).length === 0) {
    //         this.props.router.push('/');
    //     }
    //
    //     let user = this.props.app.user;
    //     console.log(user);
    //     if (!user.registered) {
    //         if (user.type === 'lender') {
    //             this.props.router.push('/app/register/lender');
    //         } else {
    //             this.props.router.push('/app/register/borrower');
    //         }
    //     } else if (user.type === 'lender' && this.props.router.getCurrentLocation().pathname === '/app') {
    //         this.props.router.push('/app/lender/dashboard');
    //     }
    // }

    render () {
        const { children, ...otherProps } = this.props;
        console.log("rendering component");
        return (
            <div style={style} className="app">
                { children.props.children !== null ? (
                    React.cloneElement(children.props.children, otherProps)
                ): (
                    ''
                )}
            </div>
        );
    }
}

export default App;
