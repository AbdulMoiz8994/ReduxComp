import React from 'react';
import './App.css';

// import home
import Home from './Containers/HomeContainer'
import CartValue from './Containers/HeaderContainer'

function App() {
  return (
    <div className="App">
<h1>Hello Wolrd</h1>
<Home/>
<CartValue/>
    </div>
  );
}

export default App;
