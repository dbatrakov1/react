import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    
    // console.log("Component rendered")
    
    // 1. Get the data(fetch)
    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
    // 2. Save the data to state
        .then(data => setStarWarsData(data))//it seting the state then component rerendering, it is running the fetch and it begun again and again,(infinit  loop)

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
