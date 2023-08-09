import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import ViewLanding from './views/ViewLanding';
import { useState } from 'react'
import DisplayPeople from './components/DisplayPeople';
import DisplayPlanets from './components/DisplayPlanets';
import DisplayError from './components/DisplayError';

function App() {
  // const {value, setValue} = useState()

  // const updateValue =(newValue) => {
  //   setValue(newValue)
  // }

  return (
    <div className="App">
      <ViewLanding />


      <Routes>
        <Route path='/people/:id' element={ <DisplayPeople/>} />
        <Route path='/planets/:id' element={ <DisplayPlanets/>} />
        <Route path='/error' element={<DisplayError/>} />




      </Routes>
    </div>
  );
}

export default App;
