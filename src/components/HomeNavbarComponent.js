import React, { Component } from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

class HomeNavbarComponent extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top pull-right" expand="md">
                    <div className="container">
                    <NavbarBrand className="mr-auto" href="/"><img src="WhiteCircleLogo.png" height="30" width="30" alt="White Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/">
                                         Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/">
                                         About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        Contact Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                         Start Planning!
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <div>
                                <Button className="StartButton" type="submit" style={{ marginRight: 75}}>Sign In</Button>
                            </div>
                        </Collapse>
                    </div>
                </Navbar>
                <img src="WhiteCircleLogo.png" class="WhiteLogo" alt="Hanna Khan Photography logo" />
            </React.Fragment>
        );
    }
}


export default HomeNavbarComponent;
