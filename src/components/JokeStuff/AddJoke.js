import React from 'react'
import GetJoke from './GetJoke';

function AddJoke({jokeArray, setJokeArray}) {
    return (
        <nav>
        	<button onClick={() => GetJoke(jokeArray, setJokeArray)}>Get a new joke!</button>
        </nav>
    )
}

export default AddJoke;