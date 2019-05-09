import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Register from './register'
class Buttonsrow extends Component {

    render() {

        return (
            <div>
                    <div className={this.props.displayIfLoggedOut}>
                        <Button type="submit" onClick={() => this.props.buttonHandlerFunction("signIn")} variant="contained" color="primary">Sign in!</Button>
                        <span className="buttonRowButton"><Register 
                        registerHandlerFunction={this.props.registerHandlerFunction}
                        displayIfLoggedOut={this.props.displayIfLoggedOut}
                        /></span>
                    </div>


                <div className={this.props.displayIfLoggedIn}>
                    <Button type="submit" onClick={() => this.props.buttonHandlerFunction("signOut")} variant="contained" color="primary">Sign Out {this.props.customer.name}</Button>
                </div>

            </div>

        )
    }

}
export default Buttonsrow;