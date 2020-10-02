import React from 'react';
import axios from 'axios';

class Header extends React.Component {
    state = {
        timezone : []
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
            data : {timezone}
        } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=${key}&units=metric`);

        this.setState({timezone});
    }

    render() {
        const {timezone} = this.state;
        return(
            <header>
                <p>{timezone}</p>
            </header>
        )
        
    }

    componentDidMount() {
        this.getLocation();
        this.getWeathers();
    }

}

export default Header;