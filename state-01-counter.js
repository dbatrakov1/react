import React from "react"

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    const [count, setCount] = React.useState(0)
    
    function add(){
        setCount(prevCount => prevCount + 1)//it means (count + 1) using the callback function (prevCount => prevCount + 1) is a best practice
    }
    function sub(){
        setCount(prevCount => prevCount - 1)//it means (count - 1)
    }
    
    
    
    return (
        <div className="counter">
            <button onClick={sub} className="counter--minus">–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button onClick={add} className="counter--plus">+</button>
        </div>
    )
}
