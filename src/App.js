import logo from './logo.svg';
import './App.css';

const QuoteBox = function() {
  return (
    <div id="quote-box">
      <p id="text">
        quote goes here
      </p>
      <p id="author">
          ~ author
      </p>
      <button id="new-quote">New Quote</button>
      <a id="tweet-quote" href="twitter.com/intent/tweet"></a>



    </div>

  );
}

function App() {
  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

export default App;
