import hotBg from './assets/hot.jpg';
import coldBg from './assets/cold.jpg';
import Descriptions from '../components/Descriptions';
import { useEffect, useState } from 'react';
import { getFormattedWeatherData } from './weatherService';
import { getTimeZone } from './TimeZone';
import Error from './Error';

function App() {

  const [city, setCity] = useState('Paris')
  const [weather, setWeather] = useState({
    description: "description",
    iconURL: "iconURL",
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
    speed: 0,
    country: "country",
    name: "name"
  });
  const [units, setUnits] = useState('metric');
  const [bg, setBg] = useState(hotBg);
  const [time, setTime] = useState("Fetching local time...")

  useEffect( () => {
    const fetchWeatherData = async() => {
      const data = await getFormattedWeatherData(city, units);
      console.log("data from weather api: ",data)
      setWeather(data);

      //dynamic bg
      const threshold = units === 'metric' ? 20 : 68;
      if(data.temp <= threshold) 
        setBg(coldBg)
      else
        setBg(hotBg)
    };
    fetchWeatherData();

    const fetchTime = async() => {
      const time = await getTimeZone(city);
      const formattedTime = time.datetime.toString().replace(/(:\d{2}| [AP]M)$/, "")
      setTime(formattedTime);
    };
    fetchTime();

  }, [units, city] )
  
  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === 'C';
    button.innerText = isCelsius ? '°F' : '°C';
    setUnits(isCelsius ? 'metric' : 'imperial')
  }

  const enterKeyPressed = (e) => {
    if(e.keyCode === 13) {
      setCity(e.currentTarget.value)
      setWeather(null)
      setTime("Fetching local time...")
      e.currentTarget.blur()
    }
  }

  //const statusCode = `${weather.cod}`
  //console.log("statusCode is: ", statusCode)

  return (
    <>
        <div className="overlay">
          {
            (weather != null) ? (
              <div className="app" style={{backgroundImage: `url(${bg})`}}>
              <div className="container">
                <div className="section section__inputs">
                  <input className="icon" type="text" name="city" placeholder='Entery city...' onKeyDown={enterKeyPressed} />
                  <button onClick={ (e) => handleUnitsClick(e) }>°F</button>
                </div><br />

                <div className="section section__temperature">
                  <div className="icon">
                    <h3>{`${weather.name}, ${weather.country}`}</h3>
                    <img src={weather.iconURL} alt="Weather icon"/>
                    <h3>{weather.description}</h3>
                  </div>

                  <div className="timestamp">
                    <p>{time}</p>
                    <h1 className='temp'>{ `${weather.temp.toFixed()} °${
                      units === "metric" ? "C" : "F"
                    }` }</h1>
                  </div>
                </div>

                {/* Cards */}
                <Descriptions weather={weather} units={units}/>
              </div>
              <div>
                
              </div>
            </div>
              
          ) : <Error /> }
        </div>
      
    </>
  )
}

export default App













