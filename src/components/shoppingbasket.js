import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
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


handleRemoveFromBasket = (i,event)=>{
  //  alert('remove in shopbask ' + i)
   this.props.buttonHandlerFunction("removeFromBasket", this.props.copyState.basket[i].sku)

  // this.handleClose()
}


  render() {

    var IDs = []
    var subTotalCost = 0
    for (let i = 0; i < this.props.copyState.basket.length; i++) {
      for (let j = 0; j < this.props.copyState.jb.length; j++) {
        var a = this.props.copyState.basket[i].sku
        var b = this.props.copyState.jb[j].sku
        if (a === b) {
          var t = { qty: this.props.copyState.basket[i].qty, sku: j }
          IDs.push(t)
          subTotalCost = subTotalCost + this.props.copyState.basket[i].qty * this.props.copyState.jb[j].price
        }
      }
    }


    return (
      <>
        <element>

          <button name="addtobasket" onClick={this.handleShow} type="button" class="btn btn-primary">
            Shopping Basket <span class="badge badge-light">{this.props.copyState.basket.length}</span>
          </button>


          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Your Shopping Basket</Modal.Title>
            </Modal.Header>

{/* 
            onClick={(evt) => this.handleRemoveFromBasket(id, evt)} */}

            {
              IDs.map((item, i) => {
                return <element className="buttonright">
                {item.qty} x {this.props.copyState.jb[item.sku].title}
                <button onClick={(evt) => this.handleRemoveFromBasket(i, evt)} type="button" name="remove" class="buttonRowButton btn btn-danger btn-smt">Remove</button>
                 </element>
                
              })
            }

            {/* {
              IDs.map((item, i) => {
                return <element className="buttonright">
                {item.qty} x {this.props.copyState.jb[item.sku].title}
                <button onClick={this.handleRemoveFromBasket} type="button" name="remove" class="buttonRowButton btn btn-danger btn-smt">Remove</button>
                 </element>
                
              })
            } */}

            <div className="shoppingbasket-right">Cost of goods = £{subTotalCost}</div>




            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
            </Button>
              <Button onClick={this.handleSubmit} variant="primary" >
                Checkout Now
            </Button>
            </Modal.Footer>

          </Modal>
        </element>
      </>
    );
  }

}


export default Shoppingbasket;