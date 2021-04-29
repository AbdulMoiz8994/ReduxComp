import React from 'react';
import './App.css';
// import {User} from './Props/User'

// import components via container
import Home from './Containers/HomeContainer'

function App() {
  return (
    <div className="App">
  {/* <User data={{name:" ABdul Moiz",age:20}}/> */}
  <Home/>
    </div>
  );
}

export default App;
