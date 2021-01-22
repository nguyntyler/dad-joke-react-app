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
            {jokeArray.map((j, idx) => <Joke
                                        key={idx}
                                        joke={j} />)}
        </div>
    )
}

export default JokeContainer;