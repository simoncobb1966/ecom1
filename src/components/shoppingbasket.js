import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
import Modal from 'react-responsive-modal';
import Register from './register'
import Signin from './signin'
import Checkout from './checkout'


  class Shoppingbasket extends Component {

  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
    // this.Signin()
  };


  handleRemoveFromBasket = (i, event) => {
    this.props.buttonHandlerFunction("removeFromBasket", i)
  }

  register = () => {
    this.handleClose()
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
    if (!this.props.copyState.login) {
      return "hide"
    }
    return "this.props.copyState.displayIfLoggedIn"
  }

  render() {

    const { open } = this.state;

    var IDs = []
    var subTotalCost = 0
    for (let i = 0; i < this.props.copyState.basket.length; i++) {
      for (let j = 0; j < this.props.copyState.jb.length; j++) {
        var a = this.props.copyState.basket[i].sku
        var b = this.props.copyState.jb[j].sku
        if (a === b) {
          var t = { qty: this.props.copyState.basket[i].qty, sku: j, price: this.props.copyState.basket[i].price, format: this.props.copyState.basket[i].format }
          IDs.push(t)
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

          <button onClick={this.onOpenModal} type="button" class="btn btn-primary signOutButton">
            Shopping Basket <span className="badge badge-light ">{numInBasket()}</span>
          </button>

          <Modal open={open} onClose={this.onCloseModal} center>

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


            <Modal open={open} onClose={this.onCloseModal} center>CLOSE MODAL</Modal>


            <div className={this.displayCheckout()}>
              <Checkout copyState={this.props.copyState}
                buttonHandlerFunction={this.props.buttonHandlerFunction} />
            </div>

            <div className={this.props.copyState.displayIfLoggedOut}>
              <Signin
              
                copyState={this.props.copyState}
                buttonHandlerFunction={this.props.buttonHandlerFunction}
              />

<button onClick={(e) => this.onCloseModal(e)}>TEST</button>

           {/* <button onClick={this.onCloseModal} type="button" class="btn btn-primary signOutButton">
            test <span className="badge badge-light ">{numInBasket()}</span>
          </button>  */}


              <Register
                close={this.handleClose}
                copyState={this.props.copyState}
                buttonHandlerFunction={this.props.buttonHandlerFunction}
                displayIfLoggedOut={this.props.copyState.displayIfLoggedOut}
              />
            </div>
          </Modal>

        </element>
      </>
    );
  }

}



export default Shoppingbasket;