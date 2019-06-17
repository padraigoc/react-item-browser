import React from 'react';
import { Jumbotron,Button,FormGroup, Label, Input} from 'reactstrap';

const searchForm = props => {
    return (
        <div>
            <Jumbotron>
            <form onSubmit={props.searchSubmit}>
                <FormGroup>
                    <Label for="locationSearch">I am at:</Label>
                    <Input type="search"
                           name="locationSearch"
                           placeholder="Enter any location"/> <br />
                </FormGroup>
                <FormGroup>
                    <Label for="locationCategory">I want to:</Label>
                    <Input type="search" name="locationActivity" placeholder="Enter an activity" />
                    <br />
                </FormGroup>
                <center><Button>Search</Button></center>
            </form>
            </Jumbotron>
        </div>
    );
};

export default searchForm;