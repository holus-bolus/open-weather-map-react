import axios from 'axios';

const API_KEY = 'b516c4c8bfaeec744fc11e31d05803a7';

//1st task

// export const fetchWeather = (city) => async (dispatch) => {
//     try {
//         const response = await axios.get(
//             `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
//         );
//
//         dispatch({
//             type: 'FETCH_WEATHER_SUCCESS',
//             payload: response.data,
//         });
//     } catch (error) {
//         dispatch({
//             type: 'FETCH_WEATHER_ERROR',
//             payload: 'Error fetching weather data',
//         });
//     }
// };

//2nd task

export const fetchWeather = (city, country) => async (dispatch) => {
    try {
        const response = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
        );

        dispatch({
            type: 'FETCH_WEATHER_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_WEATHER_ERROR',
            payload: 'Error fetching weather data',
        });
    }
};
