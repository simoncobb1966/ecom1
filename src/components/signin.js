import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
// done with Bootstrap modal
class SignIn extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      errorMessage: "",
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
      email: this.state.email,
      password: this.state.password
    }
    if (registerData.email === "" || registerData.password === "") {
      this.setState({ errorMessage: "All fields need to be complete" })
    } else {
      this.props.registerHandlerFunction(registerData)
    this.handleClose()
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

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign in to James Bond Shop</Modal.Title>
          </Modal.Header>

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

            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Cancel
            </Button>
              {/* <Button type="submit" value="Submit" name="submit" variant="primary" onClick={this.handleClose}> */}
              <Button onClick={this.handleSubmit} variant="primary" >
                Sign In
            </Button>
            </Modal.Footer>
          </form>
        </Modal>
        </element>
      </>
    );
  }
}

export default SignIn;





// import React, { Component } from 'react';



// class SignIn extends Component {



  
//     render() {
//   return (
// <div>

// <form>
//             <p className="h4 text-center mb-4">Sign in</p>
//             <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
//               Your email
//             </label>
//             <input
//               type="email"
//               id="defaultFormLoginEmailEx"
//               className="form-control"
//             />
//             <br />
//             <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
//               Your password
//             </label>
//             <input
//               type="password"
//               id="defaultFormLoginPasswordEx"
//               className="form-control"
//             />
//             <div className="text-center mt-4">
//             </div>
//           </form>

// </div>







//   );
// };
// }

// export default SignIn;