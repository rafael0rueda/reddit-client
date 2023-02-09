import React from 'react';
import Subreddit from './features/subreddit/subreddit';
import Articles from './features/subreddit/articles';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <nav>
        <Subreddit />
      </nav>
      <h2>Reddit-viewer</h2>
      </header>
        <Articles />
    </div>
  );
}

export default App;
