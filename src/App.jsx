import { useState } from 'react';
import './App.css'
import Listagem from './assets/pages/Listagem'
import { Routes, Route } from 'react-router-dom';

const App = () => {


     const [color] = useState("#0000ff")
     document.body.style.background = color
     
     return (
      <Routes>
        <Route path="/" element={<Listagem/>} />
      </Routes>
     )

}

export default App;