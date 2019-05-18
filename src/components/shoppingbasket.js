import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
import Register from './register'
import Signin from './signin'
import Checkout from './checkout'
// done with Bootstrap modal
class Shoppingbasket extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // checkout = () => {

  // }

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


  handleRemoveFromBasket = (i, event) => {
    this.props.buttonHandlerFunction("removeFromBasket", i)
  }

  register = () => {
    this.handleClose()
    // <register />
  }

  basketempty = () => {
    if (this.props.copyState.basket.length === 0) {
      return (<li className="customerName">Basket empty</li>)
    }
  }

  displayCheckout = () => {
    if (this.props.copyState.basket.length === 0) {
      return "hide"
    }
    return "this.props.copyState.displayIfLoggedIn"
  }

  render() {

    var IDs = []
    var subTotalCost = 0
    for (let i = 0; i < this.props.copyState.basket.length; i++) {
      for (let j = 0; j < this.props.copyState.jb.length; j++) {
        var a = this.props.copyState.basket[i].sku
        var b = this.props.copyState.jb[j].sku
        if (a === b) {
          var t = { qty: this.props.copyState.basket[i].qty, sku: j, price: this.props.copyState.basket[i].price, format: this.props.copyState.basket[i].format }
          IDs.push(t)
          // subTotalCost = subTotalCost + this.props.copyState.basket[i].qty * this.props.copyState.jb[j].price
          subTotalCost = subTotalCost + this.props.copyState.basket[i].qty * this.props.copyState.basket[i].price
        }
      }
    }

    const numInBasket = () => {
      var total = 0
      for (let i = 0; i < this.props.copyState.basket.length; i++) {
        total = total + this.props.copyState.basket[i].qty
      }
      return total
    }

    return (
      <>
        <element>

          <button onClick={this.handleShow} type="button" class="btn btn-primary signOutButton">
            {/* Shopping Basket <span className="badge badge-light ">{this.props.copyState.basket.length}</span> */}
            Shopping Basket <span className="badge badge-light ">{numInBasket()}</span>
          </button>


          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Your Shopping Basket</Modal.Title>
            </Modal.Header>

            {this.basketempty()}

            {
              IDs.map((item, i) => {
                return <element className="buttonright">
                  {item.qty} x {this.props.copyState.jb[item.sku].title}{" ("}
                  {item.format}{") @ £"}
                  {" "}{item.price}{" each."}
                  <button onClick={(evt) => this.handleRemoveFromBasket(i, evt)} type="button" name="remove" class="buttonRowButton btn btn-danger btn-smt">Remove</button>
                </element>

              })
            }

            <div className="shoppingbasket-right">Cost of goods = £{subTotalCost.toFixed(2)}</div>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
            </Button>

              {/* <div className={this.props.copyState.displayIfLoggedIn}> */}
              {/* <div className={this.basketEmptycss}> */}
              <div className={this.displayCheckout()}>
                <Checkout copyState={this.props.copyState}
                  buttonHandlerFunction={this.props.buttonHandlerFunction} />
              </div>

              <div className={this.props.copyState.displayIfLoggedOut}>
                <Signin
                  close={this.handleClose}
                  copyState={this.props.copyState}
                  buttonHandlerFunction={this.props.buttonHandlerFunction}
                />

                <Register
                  close={this.handleClose}
                  copyState={this.props.copyState}
                  buttonHandlerFunction={this.props.buttonHandlerFunction}
                  displayIfLoggedOut={this.props.copyState.displayIfLoggedOut}
                />
              </div>

            </Modal.Footer>

          </Modal>
        </element>
      </>
    );
  }

}



export default Shoppingbasket;