import React from 'react';

const Greetings = (props) => {
    if (props.lang === 'de'){
        return <p>Hallo {props.children} </p>
    }
    else {
        return <p>Bonjour {props.children}</p>
    }
};

export default Greetings;