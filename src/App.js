// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import {JokeContainer, Header, GetJoke} from './components'


function App() {

  const [joke, setJoke] = useState('')
  useEffect(()=> {
    GetJoke(setJoke)
  }, [])

  const runGetJoke = () => {
    GetJoke(setJoke)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <JokeContainer title={joke} func={runGetJoke}/>
      </header>
    </div>
  );
}

export default App;
