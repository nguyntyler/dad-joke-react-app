import React from 'react'
// import AddJoke from './AddJoke'
// import Joke from './Joke'
import {AddJoke, Joke} from './'

function JokeContainer({title, func}) {
    return (
        <div>
            Joke Container
            <p>{title}</p>
            <AddJoke func={func}/>
            <Joke />
        </div>
    )
}

export default JokeContainer;