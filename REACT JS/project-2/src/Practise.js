import React, { useState } from 'react';

export default function Practise() {
    const [a, setA] = useState();
    console.log("Before", a);
    a=10;
    setA(a)
    console.log("After", a);
    return <div></div>;
}

