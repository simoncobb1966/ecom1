import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
import 'react-flags-select/css/react-flags-select.css';

var customer = []


// done with Bootstrap modal
class Checkout extends Component {


    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            customer: {
                firstName: this.props.copyState.customer.firstName,
                secondName: this.props.copyState.customer.secondName,
                email: this.props.copyState.customer.email,
                address1: this.props.copyState.customer.address1,
                address2: this.props.copyState.customer.address2,
                address3: this.props.copyState.customer.address3,
                address4: this.props.copyState.customer.address4,
                address5: this.props.copyState.customer.address5,
                address6: "United Kingdom"
            },
            mode: 0,
            customerLines: 0
        };

        customer[0] = this.props.copyState.customer.firstName + " " + this.props.copyState.customer.secondName
        customer[1] = this.props.copyState.customer.address1
        customer[2] = this.props.copyState.customer.address2
        customer[3] = this.props.copyState.customer.address3
        customer[4] = this.props.copyState.customer.address4
        customer[5] = this.props.copyState.customer.address5
        customer[6] = this.props.copyState.customer.address6
        customer[7] = this.props.copyState.email

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }



    confirmOrder = () => {
        this.setState({
            mode: 1
        })
        customer = []
        customer[0] = this.props.copyState.customer.firstName + " " + this.props.copyState.customer.secondName
        customer[1] = this.props.copyState.customer.address1
        customer[2] = this.props.copyState.customer.address2
        customer[3] = this.props.copyState.customer.address3
        customer[4] = this.props.copyState.customer.address4
        customer[5] = this.props.copyState.customer.address5
        customer[6] = this.props.copyState.customer.address6
        customer[7] = this.props.copyState.customer.email
        for (let i = 0; i < customer.length; i++) {
            if (customer[i].length < 1) {
                customer[i] = "BCFC"
            }
        }
        do {
            var flag = 0
            let i = customer.indexOf("BCFC")
            if (i > -1) {
                customer.splice(i, 1)
                flag = 1
            }
        } while (flag === 1);
    }


    handleChange = (event) => {
        this.props.copyState.customer[event.target.name] = event.target.value
        this.setState({
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
        this.props.copyState.customer.firstName = this.state.customer.firstName
        this.props.copyState.customer.secondName = this.state.customer.secondName
        this.props.copyState.customer.email = this.state.customer.email
        this.props.copyState.customer.address1 = this.state.customer.address1
        this.props.copyState.customer.address2 = this.state.customer.address2
        this.props.copyState.customer.address3 = this.state.customer.address3
        this.props.copyState.customer.address4 = this.state.customer.address4
        this.props.copyState.customer.address5 = this.state.customer.address5
        this.props.copyState.customer.address6 = this.state.customer.address6
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

    checkForNull = (temp) => {
        if (temp === "") { return <li className="null returned">{temp}</li> }
        if (temp === undefined) { return <li className="undefined returned">{temp}</li> }
        return (<li className="customerName">{temp}</li>)
    }

    pay = () => {
        this.props.copyState.basket = []
        this.props.buttonHandlerFunction("pay")
        this.handleClose()
    }

    render() {

        const tprice = this.totalPrice()

        const displayCustomerDetails = customer.map(item => {
            return this.checkForNull(item)
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
                            <pre className="createAccount">
                                Page 1 of 2.{"\n"}
                                Check/amend your account details before checking out.

                        </pre>
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
                                <input type="text" name="address6"
                                    placeholder={this.props.copyState.customer.address6}
                                    onChange={this.handleChange}
                                    className="form-control registerTextBox">
                                </input>



                                <p className="redText centered">{this.state.errorMessage}</p>

                            </form>
                        </div>


                        <div className={this.showmode1()}>

                            <h1 className="centered"> Confirm Order </h1>
                            <p className="createAccount">Page 2 of 2.</p>

                            {displayCustomerDetails}
                            <p></p>
                            <hr></hr>
                            {displayCustomerOrder}
                            <p></p>
                            <hr></hr>
                            {tprice}
                            <p></p>
                            <div className="centered">
                                <Button onClick={this.pay} variant="contained" color="secondary" >
                                    PAY NOW
                                </Button>
                                <p></p>
                            </div>

                        </div>

                        <Modal.Footer>

                            <button variant="secondary" className={this.showmode0()} onClick={this.confirmOrder}>
                                Confirm Order
                            </button>

                        </Modal.Footer>

                    </Modal>
                </element>
            </>
        );
    }

}


export default Checkout;