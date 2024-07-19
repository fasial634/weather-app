
import { useState, useEffect } from 'react';
import "./WeatherApp.css"; 

import  findLocation  from "./findLocation.js"; 



import search_icon from "../Assets/search.png"; 
import clear_icon from "../Assets/clear.png"; 
import cloud_icon from "../Assets/cloud.png"; 
import drizzle_icon from "../Assets/drizzle.png"; 
import rain_icon from "../Assets/rain.png"; 
import snow_icon from "../Assets/snow.png"; 
import wind_icon from "../Assets/wind.png"; 
import humidity_icon from "../Assets/humidity.png"; 





const WeatherApp =  () => {

 

    useEffect( () => {

        const asyncFn = async () => {

            


            const cityName = await findLocation(); 

            console.log(cityName); 
          


            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=${api_key}`; 

            let response =  await fetch(url); 
            let data =  await response.json(); 


            const humidity = document.getElementsByClassName("humidity-percent"); 
            const wind = document.getElementsByClassName("wind-speed"); 

            const temperature = document.getElementsByClassName("weather-temp"); 
            const location = document.getElementsByClassName("weather-location"); 

            humidity[0].innerHTML = data.main.humidity + " %"; 
            wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h"; 
            temperature[0].innerHTML = Math.floor(data.main.temp) + "°C"; 
            location[0].innerHTML = data.name; 


            if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
                setWicon(clear_icon); 
            }
            else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
                setWicon(cloud_icon); 
            }
            else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
                setWicon(drizzle_icon); 
            }
            else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
                setWicon(drizzle_icon); 
            }
            else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
                setWicon(rain_icon); 
            }
            else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
                setWicon(rain_icon); 
            }
            else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
                setWicon(snow_icon); 
            }
            else if(data.weather[0].icon === "50d" || data.weather[0].icon === "50n"){
                setWicon(snow_icon); 
            }
            else{
                setWicon(clear_icon); 
            }

        }


        asyncFn();
        




       
    }, []);


    

    const [wicon, setWicon] = useState(cloud_icon); 

    const search = async () => {
        const element = document.getElementsByClassName("cityInput"); 
        if (element[0].value === ""){

            return 0; 
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`; 

        let response = await fetch(url); 
        let data = await response.json(); 


        const humidity = document.getElementsByClassName("humidity-percent"); 
        const wind = document.getElementsByClassName("wind-speed"); 

        const temperature = document.getElementsByClassName("weather-temp"); 
        const location = document.getElementsByClassName("weather-location"); 

        humidity[0].innerHTML = data.main.humidity + " %"; 
        wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h"; 
        temperature[0].innerHTML = Math.floor(data.main.temp) + "°C"; 
        location[0].innerHTML = data.name; 


        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
            setWicon(clear_icon); 
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setWicon(cloud_icon); 
        }
        else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            setWicon(drizzle_icon); 
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setWicon(drizzle_icon); 
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            setWicon(rain_icon); 
        }
        else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setWicon(rain_icon); 
        }
        else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
            setWicon(snow_icon); 
        }
        else if(data.weather[0].icon === "50d" || data.weather[0].icon === "50n"){
            setWicon(snow_icon); 
        }
        else{
            setWicon(clear_icon); 
        }
        

    }

    return(
        <div className="container">

            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="search"></input>

                <div className="search-icon" onClick={ () => { search()} }>
                    <img src= {search_icon} alt=""/>
                </div>
            </div>

            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>

            <div className="weather-temp">24c</div>
            <div className="weather-location">London</div>

            <div className="data-container">

                <div className="element">

                    <img src={humidity_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>

                </div>

                <div className="element">

                    <img src={wind_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="wind-speed">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>

                </div>

            </div>

        </div>
    ); 
}

export default WeatherApp;
