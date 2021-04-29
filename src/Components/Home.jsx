import React from 'react'

const Home = (props) => {
    console.warn("Home" ,props);
    return (
        <div className="home">
            <h1>Hoem Comp</h1>
            <button onClick={() => props.addToCardHandler({price: 1000, iphone: "11 Pro"})}>Click here</button>
        </div>
    )
}
export default Home;