import React from 'react';

const Home =(props) =>{
    console.log(props.Data)
    return(
        <div>
     <h1>This is Home</h1>
     <button onClick={() => props.addToCard({name: "Abdul Moiz"})}>Click Here</button>
        </div>
    )
}

export default Home;