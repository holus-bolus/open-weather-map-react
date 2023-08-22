import './App.css';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import {Provider} from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <WeatherDisplay/>
            </div>
        </Provider>
    );
}

export default App;
