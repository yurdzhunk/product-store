import React from 'react';
import { Collapse } from 'react-bootstrap';

const Filters = (props) => {

    console.log(props.param);

    return (
        <Collapse in={props.open}>
            <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
            </div>
        </Collapse>
    );
};

export default Filters;