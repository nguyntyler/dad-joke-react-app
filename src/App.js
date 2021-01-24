// import logo from './logo.svg';
import './App.css';
import {JokeContainer, Header, GetJoke} from './components'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <JokeContainer/>
      </header>
    </div>
  );
}

export default App;
