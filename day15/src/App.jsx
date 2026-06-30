import React from 'react';
import CustomButton from './components/button/CustomButton';
import Home from './pages/Home';
import './App.css';


export default function App() {
  return (
    <>
      <Home />
      <h1>Welcome to My React App</h1>
      <p>This is simple react application</p>
      <button className='custombutton'>Main Button</button>
      <CustomButton />
    </>
  )
}
