import logo from './logo.svg';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import TestCom from './testComponent';
import Timer from './TaskBFile';
import { PollDisplay } from './TaskAFile';


function App() {
  return (
    //className="App"
    <div>
      
      
      <Timer/>
      {/* <PollDisplay/> */}
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
    </div>
  );
}

export default App;




// import './App.css';

// import {  Routes, Route } from 'react-router-dom';
// import Forms from './CRUD/Forms';
// import Showdata from './CRUD/Showdata'
// import { useState } from 'react';


// function App() {
//   const [array, setArray] = useState([]);
//   const addDataToArr = (obj) => {
//     setArray(prevArray => [...prevArray, obj]);
//   }

//   return (<>
//     <Routes>
//       <Route index path='/' element={<Forms arr={addDataToArr}/>} />
//       <Route path='showpage' element={<Showdata arr={array}/>} />
//     </Routes>
//     {/* <ComponentDidMount initial={1} min={1} max={10}/> */}
//     {/* <FetchData/> */}
//     </>   
//   );
// }

// export default App;
