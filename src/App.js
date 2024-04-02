import React from 'react';
import './App.css';
import TemperatureConverter from './components/TemperatureConverter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Temperature Converter</h1>
      </header>
      <main>
        <TemperatureConverter />
      </main>
    </div>
  );
}

export default App;
