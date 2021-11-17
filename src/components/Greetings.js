import React from 'react';

const Greetings = (props) => {
    if (props.lang === 'de'){
        return <div className='greetings'><p>Hallo {props.children} </p></div>
    }
    else {
        return <div className='greetings'><p>Bonjour {props.children}</p></div>
    }
};

export default Greetings;