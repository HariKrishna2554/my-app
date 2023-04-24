import logo from './logo.svg';
import logo192 from './logo512.png'
import './App.css';
import NewComponent from './Component/NewComponent';

function Car() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo192}  className="car-logo"  alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am a software developer
          <p>
            Hari
          </p>
        </p>
      </header>
      <NewComponent/>
    </div>
  );
}

export default Car;
