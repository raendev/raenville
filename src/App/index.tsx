import React from 'react';
import './App.css';
import { login } from '../utils';

function App() {
  return (
    <main className="container App">
      <header style={{ display: 'flex', justifyItems: 'space-between' }}>
        <h1>Welcome to Raenville!</h1>
        <button onClick={login}>sign in</button>.
      </header>
      <h2>Hey Developer!</h2>
      <p>If you're feeling a little lost, here's what just happened:</p>
      <ul>
        <li>...</li>
      </ul>
      <p>When you're ready, go ahead and click the "sign in" button above to get to the next step of the tutorial.</p>
    </main>
  );
}

export default App;
