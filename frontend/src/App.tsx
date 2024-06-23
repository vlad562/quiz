import React from 'react';
import Main from './components/main/Main';
import { Route, Routes } from 'react-router-dom';
import Card from './components/card/Card';
import Result from './components/result/Result';

function App() {
  return (
    <Routes>
       <Route path='/' element={<Main/>}/>
       <Route path='/card' element={<Card/>}/>
       <Route path='/result' element={<Result/>}/>
    </Routes>
  );
}

export default App;
