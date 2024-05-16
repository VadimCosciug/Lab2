import logo from './logo.svg';
import './App.css';

function App() {
  const myName = "Vadim Cosciug CR-221"; // Înlocuiește "Numele Tău" cu numele tău

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             {myName}!
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
