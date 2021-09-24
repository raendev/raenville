import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container App">
      <h1>Welcome to Raenville!</h1>
      <p>
        To get the most from our city,{' '}
        <button className="link" onClick={() => {
          alert("Not hooked up yet! See github.com/chadoh/raenville to help plan this course.")
        }}>sign in</button>.
      </p>
    </div>
  );
}

export default App;
