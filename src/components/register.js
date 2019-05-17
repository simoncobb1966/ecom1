import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
// done with Bootstrap modal
class Register extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      errorMessage: "",
      firstName: '',
      secondName: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const name = event.target.name
    this.setState({
      [name]: event.target.value,
      errorMessage: ''
    })
  }

  handleClose(event) {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit = (event) => {
    var registerData = {
      firstName: this.state.firstName,
      secondName: this.state.secondName,
      email: this.state.email,
      password: this.state.password
    }
    if (registerData.firstName === "" || registerData.secondName === "" || registerData.email === "" || registerData.password === "") {
      this.setState({ errorMessage: "All fields need to be complete" })
    } else {
      this.props.buttonHandlerFunction("register", registerData)
    this.handleClose()
    }

  }

  render() {
    return (
      <>
      <element>
      <element className='buttonRowButton {this.props.displayIfLoggedOut}' >
        <Button onClick={this.handleShow} variant="contained" color="primary">
          Register
        </Button>
        </element>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create an Account</Modal.Title>
          </Modal.Header>

          <form onSubmit={this.handleSubmit} className="createAccount">
            <input type="text" name="firstName"
              placeholder="Enter first name"
              onChange={this.handleChange}
              className="form-control registerTextBox">
            </input>
            <input type="text" name="secondName"
              placeholder="Enter second name"
              onChange={this.handleChange}
              className="form-control registerTextBox">
            </input>
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

            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Cancel
            </Button>
              <Button onClick={this.handleSubmit} variant="primary" >
                Create Account
            </Button>
            </Modal.Footer>
          </form>
        </Modal>
        </element>
      </>
    );
  }
}

export default Register;