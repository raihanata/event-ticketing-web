import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'

function App() {
  // const [count, setCount] = useState(0) 

  return (
    <>
     hhjjjjjj
     <BrowserRouter>
     <Routes>
      <Route path='/header' element={<Header/>}/>
     </Routes>
     </BrowserRouter> 

    </>
  )
}

export default App
