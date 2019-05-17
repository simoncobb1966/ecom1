import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
// import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
// done with Bootstrap modal
import { CountryDropdown } from 'react-country-region-selector';
class Register extends Component {

  constructor(props, context) {
    super(props, context);


    this.state = {
      show: false,
      errorMessage: "",
      firstName: '',
      secondName: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      address3: '',
      address4: '',
      address5: '',
      address6: '',
    };
    this.state = { country: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  selectCountry(val) {
    this.setState({ country: val });
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

  handleSubmit = () => {
    var errorMessage = ""
    var registerData = {
      firstName: this.state.firstName,
      secondName: this.state.secondName,
      email: this.state.email,
      password: this.state.password,
      address1: this.state.address1,
      address2: this.state.address2,
      address3: this.state.address3,
      address4: this.state.address4,
      address5: this.state.address5,
      address6: this.state.country,
    }

    if (this.checkAlreadyRegistered(registerData.email) !== undefined) 
    { errorMessage = this.checkAlreadyRegistered(registerData.email) }
    else {
    if (registerData.address6 === "") { errorMessage = "Please specify the country" }
    if (registerData.address5 === undefined) { errorMessage = "Please specify the post code" }
    if (registerData.address2 === undefined) { errorMessage = "Please specify the second line of your address" }
    if (registerData.address1 === undefined) { errorMessage = "Please specify the first line of your address" }
    if (registerData.password === undefined) { errorMessage = "Please specify your password" }
    if (registerData.email === undefined) { errorMessage = "Please specify your email address" }
    if (registerData.secondName === undefined) { errorMessage = "Please specify your second name" }
    if (registerData.firstName === undefined) { errorMessage = "Please specify your first name" }
   if (this.checkAlreadyRegistered(registerData.email) !== undefined) { errorMessage = this.checkAlreadyRegistered(registerData.email) }
    } 
   if (errorMessage !== "") {
      this.setState({
        errorMessage: errorMessage
      })
    } else {
      this.props.buttonHandlerFunction("register", registerData)
      this.setState({
      errorMessage: "",
      firstName: '',
      secondName: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      address3: '',
      address4: '',
      address5: '',
      address6: '',
      })
      this.handleClose()
    }
  }


  checkAlreadyRegistered = (email) => {
    for (let i = 0; i < this.props.copyState.customerList.length; i++) {
      if (this.props.copyState.customerList[i].email === email) {
        return "Already registered, please use the SIGN IN button to log in"
      }
    }
    return ''
  }

  render() {
    const { country } = this.state;

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

            <form className="createAccount">
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
                placeholder="Enter your email address"
                onChange={this.handleChange}
                className="form-control registerTextBox">
              </input>
              <input type="text" name="password"
                placeholder="Enter your password"
                onChange={this.handleChange}
                className="form-control registerTextBox">
              </input>
              <input type="text" name="address1"
                placeholder="Enter the first line of your address"
                onChange={this.handleChange}
                className="form-control registerTextBox">
              </input>
              <input type="text" name="address2"
                placeholder="Enter the second line of your address"
                onChange={this.handleChange}
                className="form-control registerTextBox">
              </input>
              <input type="text" name="address3"
                placeholder="Enter the third line of your address"
                onChange={this.handleChange}
                className="form-control registerTextBox">
              </input>
              <input type="text" name="address4"
                placeholder="Enter the fourth line of your address"
                onChange={this.handleChange}
                className="form-control registerTextBox">
              </input>
              <input type="text" name="address5"
                placeholder="Enter your post code"
                onChange={this.handleChange}
                className="form-control registerTextBox">
              </input>
              <div>
                <CountryDropdown
                  //  priorityOptions={"United Kingdom"}
                  value={country}
                  onChange={(val) => this.selectCountry(val)} />
              </div>

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