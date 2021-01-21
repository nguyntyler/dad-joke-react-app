async function GetJoke(setJoke) {
    const jokePromise = fetch("https://icanhazdadjoke.com", {
      headers: {
      Accept: "application/json",
      },
    });
    const response = await jokePromise;
    const jokeData = await response.json();
    console.log("This is inside the main func", jokeData.joke)
    setJoke(jokeData.joke)
  }

export default GetJoke;