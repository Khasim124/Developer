// import logo from './logo.svg';
import './App.css';
import { ClassComponent } from './ClassComponent';
// import Contact from './Component';
// import Increment from './Increment';
// import IncSubComponent from './IncSubComponent';
// import { Routes, Route, Link } from "react-router";
// import SendingData from './SendingData';

function App() {
  return (
    <div className="App">
      {/* <SendingData/> */}
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Routes>
        <Route index element={<Increment />} />
        <Route path="about" element={<IncSubComponent />} />
        <Route path="contact" element={<IncSubComponent />} />
      </Routes> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <Contact>Test Data</Contact> */}
      <ClassComponent/>
    </div>
  );
}

export default App;
