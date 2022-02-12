import React from 'react';
import { Collapse } from 'react-bootstrap';

const Filters = (props) => {

    console.log(props.param);

    return (
        <Collapse in={props.open}>
            <div id="example-collapse-text">
                Filters
            </div>
        </Collapse>
    );
};

export default Filters;