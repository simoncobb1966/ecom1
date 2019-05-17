import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
// import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

// done with Bootstrap modal
class FinaliseOrder extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,

        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        const name = event.target.name
        this.setState({
          [name]: event.target.value,
          errorMessage: ''
        })
      }

    handleClose(event) {
        this.setState({
            show: false,
            errorMessage: ''
        });
    }

    handleShow() {
        this.setState({
            show: true,
            errorMessage: ''
        });
    }

    handleSubmit = (event) => {
 
    }

    
    render() {

        return (
            <>
                <element>

                    < Button onClick={this.handleShow} variant="primary" >
                        Confirm Order
                    </Button>


                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Order Confirmation</Modal.Title>
                        </Modal.Header>

<div>
    {this.props.copyState.customer.firstName}
</div>
 


                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>

                            {/* <Button onClick={this.handleSubmit} variant="primary" >
                                Create Account
            </Button> */}

                        </Modal.Footer>

                    </Modal>
                </element>
            </>
        );
    }

}


export default FinaliseOrder;