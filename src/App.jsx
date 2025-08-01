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
      <Route path='/ticket' element={<Ticket/>}/>  
     </Routes>
     </BrowserRouter>
     <Footer/>
    </>
    
  )
}

export default App
