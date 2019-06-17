import React from 'react';
import { Jumbotron } from 'reactstrap';
import ReactTable from 'react-table';

const results = (props) => {
    const columns = [
        {
            Header: "name",
            accessor: "name"
        },
        {
            Header: "Address",
            accessor: "address"
        },
        {
            Header: "Directions",
            accessor: "directions"
        },
        {
            Header: "FourSquare",
            accessor: "foursquare"
        }
    ]
    return (
        <div>
            <Jumbotron>
                <ReactTable
                    data={props.venues}
                    columns={columns}
                    noDataText={"Please enter location to begin search"}
                    defaultPageSize={8}
                />
            </Jumbotron>
        </div>
    );
};

export default results;