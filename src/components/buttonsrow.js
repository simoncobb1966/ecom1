import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Register from './register'
import Signin from './signin'
class Buttonsrow extends Component {

    render() {

        return (
            <div>
                    <div className={this.props.displayIfLoggedOut}>
{/*                         
                        <Button type="submit" onClick={() => this.props.buttonHandlerFunction("signIn")} variant="contained" color="primary">Sign in</Button>
                         */}


                        <span>

                        <Signin 
                        copyState={this.props.copyState}
                        buttonHandlerFunction={this.props.buttonHandlerFunction}
                         />
                       
                        <Register 
                        registerHandlerFunction={this.props.registerHandlerFunction}
                        displayIfLoggedOut={this.props.displayIfLoggedOut}

                        /></span>
                    </div>


                <div className={this.props.displayIfLoggedIn}>
                    <Button type="submit" onClick={() => this.props.buttonHandlerFunction("signOut")} variant="contained" color="primary">Sign Out {this.props.copyState.customer.firstName}</Button>
                </div>

            </div>

        )
    }

}
export default Buttonsrow;