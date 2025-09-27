import logo from './logo.svg';
import './App.css';

const QuoteBox = function() {
  return (
    <div id="quote-box">
      <p id="text">
      </p>
      <p id="author">

      </p>
      <button id="new-quote"></button>
      <a id="tweet-quote"></a>



    </div>

  );
}

function App() {
  return (
    <div className="App">
      <QuoteBox />
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
