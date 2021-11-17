import React from 'react';

const CreditCard = (props) => {
    return (
        <div style={{backgroundColor: props.bgColor}}>
            <p style={{textAlign: `right`}}>{props.type}</p>
            <p>{props.number}</p>
            <p>Expires: {props.expirationMonth}/{props.expirationYear}   {props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard;