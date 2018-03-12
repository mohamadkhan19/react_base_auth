import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Auth from '../../modules/Auth';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.navBarToggle = this.navBarToggle.bind(this);
    this.state = {
      isOpen: false,
      authenticated: Auth.isUserAuthenticated()
    };
  }
  
  navBarToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.props.toggleAuthenticateStatus()
  }
  
  render() {
    return(
      <div>
        <Navbar color="" light expand="md">
          <NavbarBrand href="/">The Explorer.io</NavbarBrand>
          <NavbarToggler onClick={this.navBarToggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            
              {!this.state.authenticated ? (
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/login">Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/register">Register</NavLink>
                  </NavItem>
                </Nav>
                ) : (
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/logout">Logout</NavLink>
                  </NavItem>
                </Nav>
                )}
            
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;