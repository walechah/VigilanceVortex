import React, { useState } from 'react';
import './Feature.css';
import areas from './areas.json';

function Features({ setCurrentLocation }) {
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setCurrentLocation(value);

    if (value) {
      const filteredSuggestions = areas.filter(area =>
        area.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="features">
      <input 
        type="text" 
        placeholder='Enter your location' 
        value={input}
        onChange={handleChange} 
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => {
              setInput(suggestion);
              setSuggestions([]);
              setCurrentLocation(suggestion);
            }}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <button>Check the vulnerability</button>
    </div>
  );
}

export default Features;
