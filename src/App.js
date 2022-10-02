import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting.jsx';
import GreetingF from './components/GreetingF.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio Greeting.jsx*/}
        {/*<Greeting name={"Axl"}></Greeting>*/}
        <GreetingF name={"Axl"}></GreetingF>
      </header>
    </div>
  );
}

export default App;
