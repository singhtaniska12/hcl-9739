/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import SampleCode from './component/SampleCode'
import Products from './component/UseFetchApi'
import {BrowserRouter , Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Registration from './component/Registration'

function App() {
  // const employee = [
  //   {
  //     ename: "Amit",
  //     empid: "4567"
  //   },
  //   {
  //     ename: "John",
  //     empid: "12345"
  //   },
  //   {
  //     ename: "Rohit",
  //     empid: "7890"
  //   },
  //   {
  //     ename: "Ramesh",
  //     empid: "5678"
  //   }
  // ]; 
      // const [counter , setCounter] = useState(20);
      // const [pointer , setPointer] = useState(100);

      // useEffect(() => {

      //   console.log("Counter", counter);
      //   console.log("Pointer", pointer);
      // },[counter]);

  return (
    <div>
      {/* <h2>Counter: {counter}</h2>
      <h2>Pointer: {pointer}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setPointer(pointer + 1)}>Increment Pointer</button>
      <button onClick={() => setPointer(pointer - 1)}>Decrement Pointer</button> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/registration" element={<Registration/>} />

      </Routes>
      </BrowserRouter>
      
      

    </div>
  );
} 

export default App;