import "./App.css";

import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Pages/Login';
import Schedule from './Pages/Schedule';

const App: React.FC = () => {
  return (
    <div className="App">
      
      <header className="App-header">Hello world!</header>

      <Login />
    </div>
  );
}

const Apps = () => {
  return (
    <div className="App">
      <header className="App-header">Hello world!</header>
    </div>
  );
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Hello world!
      </header>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


export default App;
