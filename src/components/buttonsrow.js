import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Register from './register'
import Signin from './signin'
import Shoppingbasket from './shoppingbasket'
import Checkout from './checkout'
class Buttonsrow extends Component {

    render() {



        return (
            <div>
                <div className={this.props.copyState.displayIfLoggedOut}>
                    <span>
                        <Signin
                            copyState={this.props.copyState}
                            buttonHandlerFunction={this.props.buttonHandlerFunction}
                        />

                        <Register
                            buttonHandlerFunction={this.props.buttonHandlerFunction}
                            displayIfLoggedOut={this.props.copyState.displayIfLoggedOut}
                        />

                    </span>
                </div>
                <span>
                    <div className={this.props.copyState.displayIfLoggedIn}>
                        <Button className="signOutButton" type="submit" onClick={() => this.props.buttonHandlerFunction("signOut")} variant="contained" color="primary" >Sign Out {this.props.copyState.customer.firstName}</Button>

                        <Checkout copyState={this.props.copyState}
                            buttonHandlerFunction={this.props.buttonHandlerFunction} />
                    </div>

                    <Shoppingbasket copyState={this.props.copyState}
                        buttonHandlerFunction={this.props.buttonHandlerFunction}
                    />

                </span>
            </div>
        )
    }
}
export default Buttonsrow;