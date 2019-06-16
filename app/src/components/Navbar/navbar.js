import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';

//creating a react statless component, we do not require state for now
const index = () => {
    return (
         <div>
        <Navbar expand="md" color="light" light>
        <NavbarBrand href="/"><img src={require('./droppin.png')} alt="Trip Planner logo" width="100" height="80"/></NavbarBrand>
            <Nav navbar>
              <NavItem>
                Activity Finder
              </NavItem>
            </Nav>
        </Navbar> 
      </div>
    );
};

export default index;