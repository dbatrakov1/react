import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a","b"])
    return (
        <div>
            {messages.length > 0 &&  <h1>You have {messages.length} unread messages!</h1>}//if(messages.length > 0) is true then render <h1> element
        </div>
    )
}
