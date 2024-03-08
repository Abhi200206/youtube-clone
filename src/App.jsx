import { useState } from 'react'

import Rendervideo from './components/Rendervideo';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Play from './components/Play';
import Landing from './pages/Landing';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/video' element={<Play/>}/>
      </Routes>
      </BrowserRouter>
   
  )
}

export default App
