import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
// done with Bootstrap modal
class SignIn extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      errorMessage: '',
      email: '',
      password: '',
      mode: this.props.copyState.mode
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleShow = () => {
    this.props.copyState.mode = "signin"
    // this.setState({ mode: this.props.copyState.mode })
    // this.props.changeModeHandler(this.props.copyState)
    this.props.buttonHandlerFunction("signin", this.props.copyState)
  }

  handleChange = (event) => {
    const name = event.target.name
    this.setState({
      [name]: event.target.value,
      errorMessage: ''
    })
  }

  handleSubmit = (event) => {
    var data = {
      email: this.state.email,
      password: this.state.password
    }
    if (data.email === "" || data.password === "") {
      this.setState({ errorMessage: "All fields need to be complete" })
    } else {
      var em = "Email Address Not Found"
      var j = this.props.copyState.customerList.length - 1
      for (let i = 0; i < j; i++) {
        let e = this.props.copyState.customerList[i].email
        let p = this.props.copyState.customerList[i].password
        if (e === data.email) {
          em = "Password Incorrect"
          if (p === data.password) {
            this.props.copyState.customer.firstName = this.props.copyState.customerList[i].firstName
            this.props.copyState.customer.secondName = this.props.copyState.customerList[i].secondName
            this.props.copyState.customer.email = this.props.copyState.customerList[i].email
            this.props.copyState.customer.password = this.props.copyState.customerList[i].password
            this.props.copyState.customer.address1 = this.props.copyState.customerList[i].address1
            this.props.copyState.customer.address2 = this.props.copyState.customerList[i].address2
            this.props.copyState.customer.address3 = this.props.copyState.customerList[i].address3
            this.props.copyState.customer.address4 = this.props.copyState.customerList[i].address4
            this.props.copyState.customer.address5 = this.props.copyState.customerList[i].address5
            this.props.copyState.customer.address6 = this.props.copyState.customerList[i].address6
            this.props.buttonHandlerFunction("signIn", this.props.copyState)
            this.handleClose()
          }
        }
        this.setState({ errorMessage: em })
      }
    }
  }

  render() {
    return (
      <>
        <element>
          <element className='buttonRowButton {this.props.displayIfLoggedOut}' >
            <Button onClick={this.handleShow} variant="contained" color="primary">
              Sign In
        </Button>
          </element>

          {this.state.mode === "signin" &&
            <div>
              <form onSubmit={this.handleSubmit} className="createAccount">
                <input type="text" name="email"
                  placeholder="Enter your email"
                  onChange={this.handleChange}
                  className="form-control registerTextBox">
                </input>
                <input type="text" name="password"
                  placeholder="Enter your password"
                  onChange={this.handleChange}
                  className="form-control registerTextBox">
                </input>
                <p className="redText centered">{this.state.errorMessage}</p>
              </form>
            </div>
          }

        </element>
      </>
    );
  }
}

export default SignIn;