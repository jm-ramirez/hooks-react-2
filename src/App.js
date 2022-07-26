import logo from './logo.svg';
import './App.css';
import { MyVideoGames } from './components/MyVideoGames';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyVideoGames/>
      </header>
    </div>
  );
}

export default App;
