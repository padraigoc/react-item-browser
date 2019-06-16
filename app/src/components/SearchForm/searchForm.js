import React from 'react';
import {
    Button,
    ButtonGroup,
    FormGroup,
    Label,
    Input
  } from 'reactstrap';

const searchForm = props => {
    return (
        <div>
        <form onSubmit={props.searchSubmit}>
        <FormGroup>          
            <Label for="locationSearch">Enter Location</Label>
                <Input
                    type="search"
                    name="locationSearch"
                    placeholder="Enter a location to search for results"
                    /> <br />
        </FormGroup> 
        <FormGroup>
         <center>
             <p>Quick Search</p>
            
            <ButtonGroup>
            <Button >Food</Button>{' '}
            <Button >Drinks</Button>{' '}
            <Button  >Coffee</Button>{' '}
            <Button >Shops</Button>{' '}
            <Button >Arts</Button>{' '}
            <Button >Outdoors</Button>{' '}
            <Button >Sights</Button>{' '}
            <Button >Trending</Button>{' '}
            </ButtonGroup>
            </center>
        </FormGroup>
        <FormGroup>   
            <Label for="locationCategory">Select Category:</Label>
                <Input type="select" name="locationActivity">
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