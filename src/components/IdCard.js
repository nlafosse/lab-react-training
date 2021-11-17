import React from 'react';

const IdCard = (props) => {
    return (
        <div className='idCard'>
          <span>
            {props.picture}
          </span>
          <span>
            <p><b>First Name:</b> {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth date: {props.birth}</p>
          </span>
        </div>
      )
    };

export default IdCard;