import React from 'react'
import {Link,} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <Link to="/">Page1</Link>
      <Link to="/page2">Page2</Link>
      <Link to="/page3">Page3</Link>
    </div>
  );
}

export default Navbar
