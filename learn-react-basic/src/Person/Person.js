import React from 'react';
import './Person.css';

const Person = props => {
    return (
        <div className="Person">
            <p
                onClick={props.click}>
                I'm a {props.name}, and {props.age} years old!
            </p>
            {props.children && <p>{props.children}</p>}
            <input type="text" onChange={props.changed} value={props.value} />
        </div>
    )
};

export default Person;