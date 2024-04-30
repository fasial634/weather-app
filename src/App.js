import './App.css';
import WeatherApp from './Components/WeatherApp/WeatherApp.js';


function App() {

  const url = "https://picsum.photos/1920/1080/?random"

  return (
    <div className="App"> 
      <WeatherApp />
    </div>
  );
}

export default App;
