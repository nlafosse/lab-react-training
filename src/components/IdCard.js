import React from 'react';

const IdCard = (props) => {
    return (
        <div>
          {props.picture}
          <p>First Name: {props.firstName}</p>
          <p>Last Name: {props.lastName}</p>
          <p>Gender: {props.gender}</p>
          <p>Height: {props.height}</p>
          <p>Birth date: {props.birth}</p>
        </div>
      )
    };

export default IdCard;