import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Ticket from './pages/Ticket'
import BlogPage from './pages/BlogPage'

function App() {
  // const [count, setCount] = useState(0) 

  return (
    <>
    <Header/>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/blog' element={<BlogPage/>}/>  
     </Routes>
     </BrowserRouter>
     <Footer/>
    </>
    
  )
}

export default App
