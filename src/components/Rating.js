import React from 'react';

const Rating = (props) => {
    let stars = ''
    if (props.children === 0){
        return <div><p>{stars += '☆☆☆☆☆'}</p></div>
    }
    else {
        return <div><p>{stars = stars + "★".repeat(Math.round(props.children)) + "☆".repeat(5 - Math.round(props.children))}</p></div>
    }

    // let emptyStars = '☆☆☆☆☆'
    // let filledStars = '★★★★★'
    // if (props.children === '0'){
    //     return <div><p>{emptyStars}</p></div>
    // }
    // else {
    //     return <div><p>{filledStars.slice(0, Math.round(props.children)) + emptyStars.slice(0, -(Math.round(props.children)))}</p></div>
    // }
};

export default Rating;