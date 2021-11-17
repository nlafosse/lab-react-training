import React from 'react';

const BoxColor = (props) => {
    return <p style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>rgb: {props.r}{props.g}{props.b}</p>
}

export default BoxColor;