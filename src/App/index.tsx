import React from 'react';
import { login } from '../utils';
import HeyDeveloper from '../components/HeyDeveloper';

export default function App() {
  return (
    <main className="container App">
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Welcome to Raenville</h1>
        <button onClick={login}>sign in</button>
      </header>
      <HeyDeveloper>
        <h2>Hey Developer!</h2>
        <p>Feeling lost? Here's what just happened: The <code>yarn start</code> command ran the <code>start</code> script defined in <code>package.json</code>. Go ahead and take a look! It does a few things:</p>
        <ul>
          <li>Uses <code>nodemon</code> (think: "NodeJS Monitoring") to watch for changes in the <code>contracts</code> directory. We'll take a closer look at this directory soon!</li>
          <li>Compiles all the contracts using the <code>build:contracts</code> script, also defined in that <code>scripts</code> section.</li>
          <li>Deploys the contracts to NEAR's <a href="https://docs.near.org/docs/concepts/networks">testnet</a> (test network) using <code>deploy:contracts</code>, also defined in <code>scripts</code>. Again, no need to understand all of this too deeply yet!</li>
          <li>Starts a server for your frontend code using <code>react-script start</code>, which comes from <a href="https://create-react-app.dev/">create-react-app</a>. This project uses opinionated ReactJS with TypeScript to give you a stable and speedy development experience. The frontend code lives in the <code>src</code> folder, and this file lives in <code>???(TODO: fill in when code structure stabilizes)???</code>.</li>
        </ul>
        <p>When you're ready, go ahead and click the "sign in" button above to get to the next step of the tutorial.</p>
      </HeyDeveloper>
    </main>
  );
}
