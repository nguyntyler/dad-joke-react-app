import React from 'react'

function Joke({jokeArray}) {
    return (
        <section>
            {jokeArray.map(j=>(<p>{j}</p>))}
        </section>
    )
}

export default Joke;