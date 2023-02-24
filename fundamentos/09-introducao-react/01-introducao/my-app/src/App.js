import logo from './logo.svg';
import './App.css';
import list from './components/list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='phrase'>Hello World!!</h1>
       { list }
      </header>
    </div>
  );
}

export default App;
