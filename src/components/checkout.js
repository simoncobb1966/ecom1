import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import FinaliseOrder from './finaliseorder'
import { number } from 'prop-types';

// done with Bootstrap modal
class Checkout extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            firstName: this.props.copyState.customer.firstName,
            secondName: this.props.copyState.customer.secondName,
            email: this.props.copyState.customer.email,
            address1: this.props.copyState.customer.address1,
            address2: this.props.copyState.customer.address2,
            address3: this.props.copyState.customer.address3,
            address4: this.props.copyState.customer.address4,
            address5: this.props.copyState.customer.address5,
            address6: "GB",
            mode: 0,
            customer: [],
            customerLines: 0
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }



    confirmOrder = () => {
        this.setState({
            mode: 1
        })
        var customer = []
        customer[0] = this.state.firstName + " " + this.state.secondName
        customer[1] = this.state.address1
        customer[2] = this.state.address2
        customer[3] = this.state.address3
        customer[4] = this.state.address4
        customer[5] = this.state.address5
        customer[6] = this.state.address6
        customer[7] = this.state.email
        var newCustomer = []
        let count = 0
        for (let i = 0; i < 9; i++) {
            if (customer[i] !== "") {
                newCustomer[count] = customer[i]
                count = count + 1
            }
        }
        this.setState({
            customer: newCustomer,
            customerLines: count
        })
    }




    flagSelect = (country) => {
        this.setState({
            address6: country,
            errorMessage: ''
        })
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
            errorMessage: '',
            mode: 0
        });
    }

    handleShow() {
        this.setState({
            show: true,
            errorMessage: ''
        });
    }

    handleSubmit = (event) => {
        this.props.copyState.customer.firstName = this.state.firstName
        this.props.copyState.customer.secondName = this.state.secondName
        this.props.copyState.customer.email = this.state.email
        this.props.copyState.customer.address1 = this.state.address1
        this.props.copyState.customer.address2 = this.state.address2
        this.props.copyState.customer.address3 = this.state.address3
        this.props.copyState.customer.address4 = this.state.address4
        this.props.copyState.customer.address5 = this.state.address5
        this.props.copyState.customer.address6 = this.state.address6
        this.props.buttonHandlerFunction("checkout", this.props.copyState)
        this.handleClose(event)
    }

    showmode0 = () => {
        if (this.state.mode === 0) {
            return ""
        }
        return "hide"
    }

    showmode1 = () => {
        if (this.state.mode === 1) {
            return ""
        }
        return "hide"
    }

    totalPrice = () => {
        let totalCost = 0
        let numberOfItems = 0
        for (let i = 0; i < this.props.copyState.basket.length; i++) {
            totalCost = totalCost + (this.props.copyState.basket[i].qty * this.props.copyState.basket[i].price)              
            numberOfItems = numberOfItems + this.props.copyState.basket[i].qty
        }
        return (<li className="customerName">Number of Items {numberOfItems}, Total Cost £{totalCost} - FREE SHIPPING</li>)
    }



    render() {

        const tprice = this.totalPrice()

        const displayCustomerDetails = this.state.customer.map(item => {
            return (<li className="customerName">{item}</li>)
        })

        const displayCustomerOrder = this.props.copyState.basket.map(item => {
            const sku = this.props.copyState.basket.findIndex(productItem => {
                return productItem.sku === item.sku
            })
            return (<li className="customerName">{item.qty}{" x "}{this.props.copyState.jb[sku].title} 
            {" ("}{item.format}{") "}
            {" @ £"}{item.price}{" each = £"}
                {item.qty * item.price}
            </li>)

        })


        return (
            <>
                <element>

                    < Button onClick={this.handleShow} variant="primary" >
                        Checkout Now
                    </Button>


                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Checkout</Modal.Title>
                        </Modal.Header>

                        <div className={this.showmode0()}>
                            <form onSubmit={this.handleSubmit} className="createAccount">
                                <span>
                                    <input type="text" name="firstName"
                                        placeholder={this.props.copyState.customer.firstName}
                                        onChange={this.handleChange}
                                        className="form-control registerTextBox">
                                    </input>
                                    <input type="text" name="secondName"
                                        placeholder={this.props.copyState.customer.secondName}
                                        onChange={this.handleChange}
                                        className="form-control registerTextBox">
                                    </input>
                                </span>
                                <input type="text" name="email"
                                    placeholder={this.props.copyState.customer.email}
                                    onChange={this.handleChange}
                                    className="form-control registerTextBox">
                                </input>
                                <input type="text" name="address1"
                                    placeholder={this.props.copyState.customer.address1}
                                    onChange={this.handleChange}
                                    className="form-control registerTextBox">
                                </input>
                                <input type="text" name="address2"
                                    placeholder={this.props.copyState.customer.address2}
                                    onChange={this.handleChange}
                                    className="form-control registerTextBox">
                                </input>
                                <input type="text" name="address3"
                                    placeholder={this.props.copyState.customer.address3}
                                    onChange={this.handleChange}
                                    className="form-control registerTextBox">
                                </input>
                                <input type="text" name="address4"
                                    placeholder={this.props.copyState.customer.address4}
                                    onChange={this.handleChange}
                                    className="form-control registerTextBox">
                                </input>
                                <input type="text" name="address5"
                                    placeholder={this.props.copyState.customer.address5}
                                    onChange={this.handleChange}
                                    className="form-control registerTextBox">
                                </input>

                                <ReactFlagsSelect
                                    name="address6"
                                    defaultCountry={this.props.copyState.customer.address6}
                                    onSelect={this.flagSelect}
                                />


                                <p className="redText centered">{this.state.errorMessage}</p>
                            </form>
                        </div>


                        <div className={this.showmode1()}>

                            <h1 centered> Confirm Order </h1>

                            {displayCustomerDetails}
                            <p></p>
                            <hr></hr>
                            {displayCustomerOrder}
                            <p></p>
                            <hr></hr>
                            {tprice}
                            <hr></hr>



                        </div>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>


                            <Button variant="secondary" onClick={this.confirmOrder}>
                                Confirm Order
                            </Button>

                            {/* <FinaliseOrder
                                copyState={this.props.copyState}
                                buttonHandlerFunction={this.props.buttonHandlerFunction} 
                                />  */}

                            <Button onClick={this.handleSubmit} variant="primary" >
                                Create Account
            </Button>

                        </Modal.Footer>

                    </Modal>
                </element>
            </>
        );
    }

}


export default Checkout;