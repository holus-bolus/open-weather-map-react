import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../../actions';

const WeatherDisplay = () => {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather);
    const error = useSelector((state) => state.error);

    const handleFetchWeather = (city) => {
        dispatch(fetchWeather(city));
    };

    return (
        <div>
            <h1>Weather Information</h1>
            <input
                type="text"
                placeholder="Enter city name"
                onChange={(e) => handleFetchWeather(e.target.value)}
            />
            {error && <p>{error}</p>}
            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

//2nd task

// const WeatherDisplay = () => {
//     const dispatch = useDispatch();
//     const weather = useSelector((state) => state.weather);
//     const error = useSelector((state) => state.error);
//
//     const [city, setCity] = useState('');
//     const [country, setCountry] = useState('');
//
//     const handleFetchWeather = () => {
//         dispatch(fetchWeather(city, country));
//     };
//
//     return (
//         <div>
//             <h1>Weather Information</h1>
//             <input
//                 type="text"
//                 placeholder="Enter city name"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Enter country code"
//                 value={country}
//                 onChange={(e) => setCountry(e.target.value)}
//             />
//             <button onClick={handleFetchWeather}>Get Weather</button>
//             {error && <p>{error}</p>}
//             {weather && (
//                 <div>
//                     <h2>{weather.name}, {weather.sys.country}</h2>
//                     <p>Temperature: {weather.main.temp}°C</p>
//                     <p>Weather: {weather.weather[0].description}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

//3rd task

//  const WeatherDisplay = () => {
//     const dispatch = useDispatch();
//     const weather = useSelector((state) => state.weather);
//     const error = useSelector((state) => state.error);
//
//     const [city, setCity] = useState('');
//     const [country, setCountry] = useState('');
//
//     const handleFetchWeather = () => {
//         dispatch(fetchWeather(city, country));
//     };
//
//     return (
//         <div>
//             <h1>Weather Information</h1>
//             <input
//                 type="text"
//                 placeholder="Enter city name"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Enter country code"
//                 value={country}
//                 onChange={(e) => setCountry(e.target.value)}
//             />
//             <button onClick={handleFetchWeather}>Get Weather</button>
//             {error && <p>{error}</p>}
//             {weather && (
//                 <div>
//                     <h2>{weather.name}, {weather.sys.country}</h2>
//                     <p>Temperature: {weather.main.temp}°C</p>
//                     <p>Weather: {weather.weather[0].description}</p>
//                     <p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
//                     <p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
//                 </div>
//             )}
//         </div>
//     );
// };
//
//
// export default WeatherDisplay

//4th task

// const WeatherDisplay = () => {
//     const dispatch = useDispatch();
//     const weather = useSelector((state) => state.weather);
//     const error = useSelector((state) => state.error);
//
//     const [city, setCity] = useState('');
//     const [country, setCountry] = useState('');
//
//     const handleFetchWeather = () => {
//         dispatch(fetchWeather(city, country));
//     };
//
//     const sunriseTime = weather?.sys?.sunrise * 1000;
//     const sunsetTime = weather?.sys?.sunset * 1000;
//     const currentTime = Date.now();
//
//     const isDaytime = currentTime >= sunriseTime && currentTime <= sunsetTime;
//
//     return (
//         <div>
//             <h1>Weather Information</h1>
//             <input
//                 type="text"
//                 placeholder="Enter city name"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Enter country code"
//                 value={country}
//                 onChange={(e) => setCountry(e.target.value)}
//             />
//             <button onClick={handleFetchWeather}>Get Weather</button>
//             {error && <p>{error}</p>}
//             {weather && (
//                 <div>
//                     <h2>{weather.name}, {weather.sys.country}</h2>
//                     <p>Temperature: {weather.main.temp}°C</p>
//                     <p>Weather: {weather.weather[0].description}</p>
//                     <p>Sunrise: {new Date(sunriseTime).toLocaleTimeString()}</p>
//                     <p>Sunset: {new Date(sunsetTime).toLocaleTimeString()}</p>
//                     {isDaytime ? (
//                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-sun" viewBox="0 0 16 16"> <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/> </svg>
//                     ) : (
//                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path fill-rule="nonzero" d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"/> </g> </svg>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default WeatherDisplay;

//5th task
// const WeatherDisplay = () => {
//     const dispatch = useDispatch();
//     const weather = useSelector((state) => state.weather);
//     const error = useSelector((state) => state.error);
//
//     const [city, setCity] = useState('');
//     const [country, setCountry] = useState('');
//     const sunriseTime = weather?.sys?.sunrise * 1000;
//     const sunsetTime = weather?.sys?.sunset * 1000;
//     const currentTime = Date.now();
//
//     const isDaytime = currentTime >= sunriseTime && currentTime <= sunsetTime;
//
// const [textColor, setTextColor] = useState(localStorage.getItem('textColor') || 'black');
// const [bgColor, setBgColor] = useState(localStorage.getItem('bgColor') || 'white');
// const [favoriteCity, setFavoriteCity] = useState(localStorage.getItem('favoriteCity') || '');
//
// const handleFetchWeather = () => {
//     dispatch(fetchWeather(city, country));
// };
//
// const handleSaveSettings = () => {
//     localStorage.setItem('textColor', textColor);
//     localStorage.setItem('bgColor', bgColor);
//     localStorage.setItem('favoriteCity', favoriteCity);
// };
//
// return (
//     <div style={{ color: textColor, backgroundColor: bgColor }}>
//         <h1>Weather Information</h1>
//         <input
//             type="text"
//             placeholder="Enter city name"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//         />
//         <input
//             type="text"
//             placeholder="Enter country code"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//         />
//         <button onClick={handleFetchWeather}>Get Weather</button>
//         {error && <p>{error}</p>}
//         {weather && (
//             <div>
//                 <h2>{weather.name}, {weather.sys.country}</h2>
//                 <p>Temperature: {weather.main.temp}°C</p>
//                 <p>Weather: {weather.weather[0].description}</p>
//                 <p>Sunrise: {new Date(sunriseTime).toLocaleTimeString()}</p>
//                 <p>Sunset: {new Date(sunsetTime).toLocaleTimeString()}</p>
//                 {isDaytime ? (
//                     <img src="sun-image-path.png" alt="Sun" />
//                 ) : (
//                     <img src="moon-image-path.png" alt="Moon" />
//                 )}
//             </div>
//         )}
//         <h2>Settings</h2>
//         <label>
//             Text Color:
//             <input
//                 type="color"
//                 value={textColor}
//                 onChange={(e) => setTextColor(e.target.value)}
//             />
//         </label>
//         <label>
//             Background Color:
//             <input
//                 type="color"
//                 value={bgColor}
//                 onChange={(e) => setBgColor(e.target.value)}
//             />
//         </label>
//         <label>
//             Favorite City:
//             <input
//                 type="text"
//                 value={favoriteCity}
//                 onChange={(e) => setFavoriteCity(e.target.value)}
//             />
//         </label>
//         <button onClick={handleSaveSettings}>Save Settings</button>
//     </div>
// );
// };
//
export default WeatherDisplay;