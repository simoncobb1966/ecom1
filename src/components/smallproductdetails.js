import React, { Component } from 'react';
import Productsmall from './productSmall';

class Smallproductdetails extends Component {

    render() {
        return <>
            <div class="container maindiv">
                <div class="row justify-content-md-center">
                    {
                        this.props.copyState.jb.map((item, i) => {
                            return <Productsmall
                                indexkey={item.sku}
                                jb={this.props.copyState.jb[i]}
                                buttonHandlerFunction={this.buttonHandler}
                            />
                        })
                    }
                </div>
            </div>
        </>
    }
}

export default Smallproductdetails;