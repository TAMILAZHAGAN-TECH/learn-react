import React from 'react';

const Validation = props => {
    return (
        <p>
            {props.length < 5 ? 'Text to short' : 'Text long enough'}
        </p>    
    );
}

export default Validation;