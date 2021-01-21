async function GetJoke(jokeArray, setJokeArray) {
    const jokePromise = fetch("https://icanhazdadjoke.com", {
      headers: {
      Accept: "application/json",
      },
    });
    const response = await jokePromise;
    const jokeData = await response.json();
    setJokeArray([...jokeArray, jokeData.joke])
  }

export default GetJoke;