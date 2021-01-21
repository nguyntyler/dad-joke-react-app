import React from 'react'
import {useState} from 'react'
import {AddJoke, Joke} from './'

function JokeContainer({title}) {

    const [jokeArray, setJokeArray] = useState([])

    return (
        <div>
            Joke Container
            <p>{title}</p>
            <AddJoke jokeArray={jokeArray} setJokeArray={setJokeArray}/>
            <Joke jokeArray={jokeArray}/>
        </div>
    )
}

export default JokeContainer;