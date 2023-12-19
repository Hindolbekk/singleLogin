import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './companents/Container/Container';
import Show from './companents/Show/Show';
import Sign from './companents/Sign/Sign';
import Hero from './page/Hero/Hero';
import { useEffect, useState } from 'react';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/hero' element={<Hero/>}/>
     </Routes>
     <Container>
      <Show/>
      <Sign/>
      </Container>
    </div>
  );
}

export default App;
