import { React, useState, useEffect } from 'react';
import './Quote.css';

const Quote = () => {
  const [quoteObject, setQuoteObject] = useState({ author: '', quote: '' });

  const getQuote = async () => {
    const response = await fetch('https://random-math-quote-api.herokuapp.com/');
    const data = await response.json();
    setQuoteObject(data);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="container">
      <div className="quote">
        <p>
          &quot;
          {quoteObject.quote}
          &quot;
        </p>
        <p>{quoteObject.author}</p>
      </div>
      <button type="button" onClick={getQuote}>Generate new quote</button>
    </div>
  );
};

export default Quote;
