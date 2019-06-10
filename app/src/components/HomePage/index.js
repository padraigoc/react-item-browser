import React, { Component } from 'react';
import Navbar from '../Navbar/index.js';
import {
    Row,
    Col,
    FormGroup,
    Label,
    Input
  } from 'reactstrap';

class index extends Component {
    render() {
        return (
            <div>
            <Navbar /><br /><br />
            <Row>
                <Col xs="6" sm="4"></Col>

                <Col xs="6" sm="4">
                    <FormGroup>
                        <Label for="exampleSearch">Enter Location</Label>
                            <Input
                                type="search"
                                name="search"
                                id="exampleSearch"
                                placeholder="Enter a location to search for results"
                                />
                    </FormGroup>
                </Col>

                <Col sm="4"></Col>
            </Row>
            </div>
        );
    }
}

export default index;