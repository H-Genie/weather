import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function Hourly({time,temp,feels_like,pressure,humidity,dew_point,clouds,visibility,wind_speed,wind_deg,icon,description,pop}) {
    return (
        <div className="container">
            <Link to={{pathname:'/detail', state:{time,temp,feels_like,pressure,humidity,dew_point,clouds,visibility,wind_speed,wind_deg,icon,description,pop}}}>
                <h4>{time}</h4>
                <p className="indent">기온 <span className="temp">{temp}</span> ℃</p>
                <p className="indent">습도 {humidity}%</p>
                <p className="indent">풍속 {wind_speed} ㎞/s</p>
                <div className="icon">
                    <img src={icon} alt={time} />
                    <p>{description.toUpperCase()}</p>
                </div>
            </Link>
        </div>
    );
}

export default Hourly;