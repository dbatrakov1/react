import React from 'react'

export default function Count(props) {

    console.log('count component')
    
    return(
            <div className="counter--count">
                <h1>{props.number}</h1>
            </div>
    )
}
