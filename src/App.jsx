import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Ticket from './pages/Ticket'
import BlogPage from './pages/BlogPage'
import Login from './pages/Login'
import Regitrastion from './pages/Regitrastion'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {
  // const [count, setCount] = useState(0) 

  return (
    <>
     <BrowserRouter>
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<BlogPage/>}/>  
      <Route path='/ticket' element={<Ticket/>}/>  
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Regitrastion/>}/>
       <Route path='/Cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
     </Routes>
      <Footer/>
     </BrowserRouter>
    </>
    
  )
}

export default App
