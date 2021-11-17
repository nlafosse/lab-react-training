import React, {useState} from 'react';

const LikeButton = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>{count} Likes</p>
            <button onClick={() => setCount(count+1)}>Like</button>
        </div>
        
    )
}

export default LikeButton;