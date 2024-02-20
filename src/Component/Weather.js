
import React from 'react';

const Weather = ({ input, setInput, weather, search }) => {
  return (
    <div className="search">
      <div className="search-div">
        <input type="text" name="city" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="btn-image" type="submit" onClick={search}>
          Search...
        </button>
      </div>
      {weather.error && <p>Error fetching weather data.</p>}
      {weather.loading && !weather.error && <p>Loading...</p>}
      {weather.data && !weather.error && weather.data.weather && weather.data.weather.length > 0 && (
        <div className="result">
          <p>{weather.data.name}</p>
          <p>
            <img src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`} className="icon" alt="" />
          </p>
          <p>Temperature: {weather.data.main.temp}°C</p>
          <p>Humidity: {weather.data.main.humidity}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
