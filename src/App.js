import React, {useState} from 'react';
import Subreddit from './features/subreddit/subreddit';
import Articles from './features/subreddit/articles';

function App() {

  return (
    <div className="App">
      <header className="App-header">
       <h2>Reddit-viewer</h2>
       <nav>
        <Subreddit />
       </nav>
      </header>
      <Articles />
    </div>
  );
}

export default App;
