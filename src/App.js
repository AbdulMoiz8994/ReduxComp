import React from 'react';
import './App.css';



function App() {
  return (
    <div className="App">
<div>
  <h1>Increment/Decrment</h1>
  <h2>Using React and Redux</h2>
</div>
    <div>
     <button><span>-</span></button>
      <input type="text" name="quantity" value="0"/>
     <button><span>+</span></button>
    </div>
    </div>
  );
}

export default App;
