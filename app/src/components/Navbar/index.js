import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class index extends Component {
    render() {
        return (
        <div>
        <Navbar expand="md" color="light" light>

        <NavbarBrand href="/"><img src={require('./droppin.png')} alt="Trip Planner logo" width="100" height="80"/></NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink href="/"><p>Home</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/itinerary"><p>Itinerary</p></NavLink>
              </NavItem>
            </Nav>
        </Navbar> 
      </div>
        );
    }
}

export default index;