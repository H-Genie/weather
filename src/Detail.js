import React from 'react';
import './style.css';

class Detail extends React.Component {

    componentDidMount() {
        const {location,history} = this.props;
        if(location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const {location} = this.props;
        console.log(location)
        if(location.state) {
            return (
                <div className="details">
                    <h4>{location.state.time}</h4>
                    <div className="detail_icon">
                        <img src={location.state.icon} />
                        <p>{location.state.description.toUpperCase()}</p>
                    </div>

                    <p>기온 : {location.state.temp} ℃</p>
                    <p>체감온도 : {location.state.feels_like.toFixed(1)} ℃</p>
                    <p>대기압 : {location.state.pressure} hPa</p>
                    <p>습도 : {location.state.humidity}%</p>
                    <p>이슬점 : {location.state.dew_point} ℃</p>
                    <p>구름량 : {location.state.clouds}%</p>
                    <p>시정 : {(location.state.visibility/1000).toFixed(1)}km</p>
                    <p>바람 : {location.state.wind_speed} ㎞/s ({location.state.wind_deg}˚)</p>
                    <p>강수확률 : {(location.state.pop*100).toFixed(0)}%</p>
                </div>
            )
        } else {
            return null;
        }
    }

}

export default Detail;