import React from 'react';

const TopHeader = () => (

        <div className="top-bar animate-dropdown">
            <div className="container">
                <div className="header-top-inner">
                    <div className="cnt-account">
                        <ul className="list-unstyled">
                            <li><a href="#"><i className="icon fa fa-user"></i>My Account</a></li>
                            <li><a href="#"><i className="icon fa fa-heart"></i>Wishlist</a></li>
                            <li><a href="#"><i className="icon fa fa-shopping-cart"></i>My Cart</a></li>
                            <li><a href="#"><i className="icon fa fa-check"></i>Checkout</a></li>
                            <li><a href="#"><i className="icon fa fa-lock"></i>Login</a></li>
                        </ul>
                    </div>


                    <div className="cnt-block">
                        <ul className="list-unstyled list-inline">
                            <li className="dropdown dropdown-small"><a href="#" className="dropdown-toggle"
                                                                       data-hover="dropdown"
                                                                       data-toggle="dropdown"><span
                                className="value">USD </span><b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">USD</a></li>
                                    <li><a href="#">INR</a></li>
                                    <li><a href="#">GBP</a></li>
                                </ul>
                            </li>
                            <li className="dropdown dropdown-small"><a href="#" className="dropdown-toggle"
                                                                       data-hover="dropdown"
                                                                       data-toggle="dropdown"><span
                                className="value">English </span><b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">French</a></li>
                                    <li><a href="#">German</a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>

                    <div className="clearfix"></div>
                </div>

            </div>

        </div>

);
export default TopHeader;