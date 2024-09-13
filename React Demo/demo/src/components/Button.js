import React, { useState } from 'react';

export const Button = () => {
    const [count, setCount] = useState(0);
    return (
        <>
        <p>You clicked {count} times</p>
       <button onClick={() => setCount(count + 1)}>Click Me</button>
       </>
    );
};