import { useState } from 'react'
import './App.css'
import { Route, Routes, NavLink } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex sticky bg-black text-white top-0 justify-between  items-center px-4 py-2'>
      <div className='text-2xl tracking-wide font-bold'>
        Smazon
      </div>
      <div className='flex text-lg gap-4'>
        <NavLink className={({ isActive }) => isActive ? "underline" : ""} to={"/"}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "underline" : ""} to={"/cart"}>Cart</NavLink>
      </div>
    </div>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App
