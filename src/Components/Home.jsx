import React from 'react';

const Home =(props) =>{
    console.log(props)
    return(
        <div>
     <h1>This is Home</h1>
     {/* {props.Data.length} */}
     <br/>
     <button onClick={() => {props.addToCard({name: "Abdul Moiz"})}}>Click Here</button>
     <br/>
     <button onClick={() => {props.removeTOCard({})}}>Remove Cart</button>
        </div>
    )
}

export default Home;