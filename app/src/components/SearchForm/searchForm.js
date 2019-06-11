import React from 'react';
import {
    Button,
    FormGroup,
    Label,
    Input
  } from 'reactstrap';

const searchForm = props => {
    return (
        <div>
        <form onSubmit={props.getPlaces}>
        <FormGroup>          
            <Label for="locationSearch">Enter Location</Label>
                <Input
                    type="search"
                    name="locationSearch"
                    placeholder="Enter a location to search for results"
                    /> <br />
        </FormGroup> 
        <FormGroup>   
            <Label for="locationCategory">Select Category:</Label>
                <Input type="select" name="locationSelect">
                    <option></option>
                    <option>Food</option>
                    <option>Drinks</option>
                    <option>Coffee</option>
                    <option>Shops</option>
                    <option>Arts</option>
                    <option>Outdoors</option>
                    <option>Sights</option>
                    <option>Trending</option>
                </Input> <br />        
        </FormGroup>  
        <center><Button>Search</Button></center>   
        </form>       
        </div>
    );
};

export default searchForm;