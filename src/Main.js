import React from 'react';
import axios from 'axios';
import moment from 'moment';

// 컴포넌트
import Hourly from './Hourly';


class Main extends React.Component {
  state = {
    isLoading : true,
    hourly : []
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition( (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      this.getWeathers(lat,lon);
    })
  }

  getWeathers = async(lat,lon) => {
    const key = "3a237a3203cd2370a362baf609a7c734";
    const {
      data : {hourly}
    } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=${key}&units=metric`);

    console.log(lat,lon);

    this.setState({
      hourly,
      isLoading : false
    });
    
  }

  render() {
    const {isLoading, hourly} = this.state;
    return (
      <div className="box">{isLoading ? 'Loading...' :

        hourly.map((weather) => {

          const time = new Date(Number(weather.dt+'000'));
          return (
            <Hourly             
              key={weather.dt}
              time={moment(time).format('MM/DD ddd h A')}
              temp={weather.temp.toFixed(1)}
              humidity={weather.humidity}
              wind_speed={weather.wind_speed.toFixed(1)}
              icon={'https://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'}
              description={weather.weather[0].description}

              feels_like={weather.feels_like}
              pressure={weather.pressure}
              dew_point={weather.dew_point}
              clouds={weather.clouds}
              visibility={weather.visibility}
              wind_deg={weather.wind_deg}
              pop={weather.pop}
            />
          )

        })

      }</div>
    );
  }

  componentDidMount() {
    this.getLocation();
    this.getWeathers();
  }

}

export default Main;