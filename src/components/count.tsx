import React, { useState, useEffect } from 'react';

const CountButtonComponent = () => {

    const [count, setCount] = useState(0);

    const onButtonClick = () => {
        // increment the count by one
        setCount(count + 1);
    }

    return (
        <div className=''>
            <button
                className="f6 link dim ba ph3 pv2 mb2 dib b" 
                onClick={onButtonClick}
            >
                Click
            </button>
            <p className='white b'>{count}</p>
        </div>
    )
}

export default CountButtonComponent;