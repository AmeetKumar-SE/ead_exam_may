import logo from './logo.svg';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import TestCom from './testComponent';
import Timer from './TaskBFile';
import UserParti, { PollDisplay, ThankYouCom } from './TaskAFile';
import { useState } from 'react';


function App() {

  return (
    <div>
       <Routes>
        <Route path='/' element={<PollDisplay/>} />
        <Route path='/context' element={<UserParti/>} />
        <Route path='/thankyou' element={<ThankYouCom/>} />
      </Routes>
      
      {/* <Timer/> */}

      {/* <PollDisplay/> */}
    </div>
  );
}

export default App;
