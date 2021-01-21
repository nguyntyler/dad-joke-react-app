import React from 'react'

function AddJoke({func}) {
    return (
        <nav>
        	<button onClick={func}>Get a new joke!</button>
        </nav>
    )
}

export default AddJoke;