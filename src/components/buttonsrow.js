import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Register from './register'
import Signin from './signin'
import Shoppingbasket from './shoppingbasket'
class Buttonsrow extends Component {

    render() {



        return (
            <div>
                <div className={this.props.displayIfLoggedOut}>
                    <span>
                        <Signin
                            copyState={this.props.copyState}
                            buttonHandlerFunction={this.props.buttonHandlerFunction}
                        />

                        <Register
                            registerHandlerFunction={this.props.registerHandlerFunction}
                            displayIfLoggedOut={this.props.displayIfLoggedOut}
                        />

                        {/* <Shoppingbasket copyState={this.props.copyState}
                        buttonHandlerFunction={this.props.buttonHandlerFunction}
                        /> */}

                    </span>
                </div>

                <div className={this.props.displayIfLoggedIn}>
                    <Button type="submit" onClick={() => this.props.buttonHandlerFunction("signOut")} variant="contained" color="primary" className="buttonRowButton">Sign Out {this.props.copyState.customer.firstName}</Button>
                </div>
                <Shoppingbasket copyState={this.props.copyState}
                        buttonHandlerFunction={this.props.buttonHandlerFunction}
                        />
            </div>
        )
    }
}
export default Buttonsrow;