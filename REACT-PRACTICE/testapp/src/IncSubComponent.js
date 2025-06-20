import React from 'react'
import Button from './Button';

function IncSubComponent() {
    const [count, setCount] = React.useState(0);

    const updateVal = (val) => {
        setCount(val);
    };
    return (
        <div>
            <h1>COUNT: {count}</h1>
            <Button count={count} type="inc" label="Increment" updateVal={updateVal} />
            <Button count={count} type="dec" label="Decrement" updateVal={updateVal} />
        </div>
    )
}

export default IncSubComponent
