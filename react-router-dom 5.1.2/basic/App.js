import React from "react"

import {Switch, Route, Link} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contacts from "./Contacts"

function App() {    
    return (
        <div>
            <Link to="/"><Home/></Link>
            <Link to="/about"><About/></Link>
            <Link to="/contacts"><Contacts/></Link>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/about"><About/></Route>
                <Route path="/contacts"><Contacts/></Route>
            </Switch>
        </div>
    )
}

export default App
