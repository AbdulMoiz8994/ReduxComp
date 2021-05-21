import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {IncNumber,DecNumber} from './ThapaRedux/Action/Action'
import {Mutiply} from './ThapaRedux/THAPAREDUX2/Mutiply'
import {About} from './Test-Case/About'

function App() {

  const getInitial=useSelector((state) => state.UseReducer)
   const dispatch=useDispatch()
  return (
    <div className="App">
<div>
  <h1>learn React</h1>
  <h1>Increment/Decrment</h1>
  <h2>Using React and Redux</h2>
</div>
    <div>
     <button onClick={() => dispatch(DecNumber(5))}><span>-</span></button>
      <input type="text" name="quantity" value={getInitial}/>
     <button onClick={() => dispatch(IncNumber(5))}><span>+</span></button>
    </div>
{/* sub Div */}
    <div>
<Mutiply/>
    </div>
    <About/>
    </div>
  );
}

export default App;
