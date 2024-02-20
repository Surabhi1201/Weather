import React, { useState } from 'react';
import Weather from './Component/Weather';
import './App.css';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  const search = async (event) => {
    event.preventDefault();
    setInput('');
    setWeather({ ...weather, loading: true });
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=1728593169ccc7fdba6bd8a399865430`;

    try {
      const res = await axios.get(url);
      setWeather({ data: res.data, loading: false, error: false });
    } catch (error) {
      setWeather({ ...weather, data: {}, error: true });
      setInput('');
      console.log('error', error);
    }
  };

  return (
    <div className="App">
      <Weather input={input} setInput={setInput} weather={weather} search={search} />
    </div>
  );
}

export default App;
