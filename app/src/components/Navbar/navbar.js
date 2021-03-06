import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

const index = () => {
    return (
         <div>
        <Navbar expand="md" color="light" light>
        <NavbarBrand href="/"><img src={require('./droppin.png')} alt="Trip Planner logo" width="100" height="80"/></NavbarBrand>
            <Nav navbar>
              <NavItem>
                Find popular things to do!
              </NavItem>
            </Nav>
        </Navbar> 
      </div>
    );
};

export default index;