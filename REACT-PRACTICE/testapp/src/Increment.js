import React, { useState, useRef, useMemo, useEffect, useContext, useCallback } from 'react';
import { ClassComponent, TestComp } from './ClassComponent';
import Srihari from './TestAbc';
import { ContactCount } from './ContactCount';

function Increment() {
  const { count1, setCount1 } = useContext(ContactCount)
  const testRef = useRef(null);
  const [count, setCount] = useState(0);
  const [countries, setCountries] = useState(null);
  const val = useMemo(() => {
    console.log("use memi", count);
    return count;
  }, [count]);

  const loadCountriesList = async () => {
    console.log("start")

    try {
      let response = await fetch('https://dev-api-login.licensedtaxi.co.uk/customers/countrycodes/list');
      let data = await response.json();
      setCountries(data);
    } catch (err) {
      console.log(err);
    }

    // Callback method
    // fetch('https://dev-api-login.licensedtaxi.co.uk/customers/countrycodes/list')
    //   .then(item => {
    //     return item.json();
    //   })
    //   .then(item => {
    //     console.log(item);
    //     setCountries(item);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })

    //console.log(data);
    console.log("end");
  };

  useEffect(() => {
    loadCountriesList();
  }, []);

  const v = useCallback(() => {

  }, [count]);
  const x = 10;
  const focusInp = () => {
    testRef.current.focus();
  };
  useEffect(() => {
    console.log("useEffect triggers", count);
  }, [count]);
  return (
    <>
      <ClassComponent />
      <TestComp />
      {count1}
      <Srihari />
      <h1>COUNT:{count} {x}</h1>
      <input type="text" ref={testRef} name="test" />
      <button onClick={focusInp}>FOcus</button>
      <button onClick={() => { setCount(count + 1); }}>increment+</button>
      <button onClick={() => setCount(count - 1)}>Decrement-</button>
      test
      {countries && false && countries.data.map((item, index) =>
        <div key={index}>{item.country_name}</div>
      )}
    </>
  )
}

export default Increment;