import React from "react"

export default function App() {
    const [isGoingOut, setGoingOut] = React.useState(true)
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    function changeMind(){
        setGoingOut(prevState => !prevState)//(prevState => prevState ? fale : true)
    }
    return (
        <div className="state">
        <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeMind} className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}
