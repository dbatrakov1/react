import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            
            // && is great if you want display or not display
            {isShown && <button onClick={toggleShown}>Hide Punchline</button>}
            {!isShown && <button onClick={toggleShown}>Show Punchline</button>}
            
            //ternary is  great if you want to chose one of two things
            //Conditional rendering: ternary, it will do the same as two lines above
            <button onClick={toggleShown}>{isShown ? "Hide"  :  "Shown"} Punchlin</button>    
             
            <hr />
        </div>
    )
}
