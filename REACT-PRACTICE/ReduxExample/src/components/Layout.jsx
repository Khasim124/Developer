import React from 'react'
import Navbar from './Navbar'
import { Routes,Route } from 'react-router';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
function Layout() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
        <Route path="/page3" element={<Page3 />}></Route>
      </Routes>
      <Navbar />
    </div>
  );
}

export default Layout
