import React from 'react';
import Header from './Header';
import Products from './Products';
//import './App.css';

//https://web-ge8buw2ff-bird-and-be.vercel.app/api/interview

function App() {
  return (
    <div className='body-colour'>
      <div className='container'>
        <Header />
      </div>
      <div className='container'>
        <Products />
      </div>
    </div>
  );
}

export default App;
