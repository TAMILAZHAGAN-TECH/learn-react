import React from 'react';
import styled from 'styled-components';

import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    @media (min-width: 500px) {
        width: 450px;
    }
`;

const Person = props => {
    return (
        // <div className="Person">
        <StyledDiv>
            <p
                onClick={props.click}>
                I'm a {props.name}, and {props.age} years old!
            </p>
            {props.children && <p>{props.children}</p>}
            <input type="text" onChange={props.changed} value={props.value} />
        </StyledDiv>
        // </div>
    )
};

export default Person;