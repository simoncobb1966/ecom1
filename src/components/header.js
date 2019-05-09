import React, { Component } from 'react';
class Header extends Component {




    render() {
        const banner = require('./images/jb_banner.png');


        return (

            <div>
                <div class="container.fluid">

                    <div className="row ">
                        <div className="banner">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 centered">
                            <img className="img-fluid borderdiv bannerrow" src={banner} alt="banner"></img>
                        </div>
                    </div>
                    </div>



                </div>
            </div>
        )
    }
}
export default Header;