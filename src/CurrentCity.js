import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCloudMoon } from '@fortawesome/free-solid-svg-icons'
import { WeatherContext } from './weather-context'
class CurrentCity extends Component {

  state = { weather: { temp: '', weather_type: '' } }

  componentDidMount() {

    const {city} = this.context

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=62a1c2ec208f256a7450eb5a3ab739af&units=metric")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            city,
            weather: {
              temp: result?.main?.temp,
              temp_min: result?.main?.temp_min,
              temp_max: result?.main?.temp_max,
              weather_type: result.weather ? result.weather[0]?.main : ''
            }
          })
        });


    // this.props.city
    // call weather api
    // set state weather
  }




  render() {
    return (
      <WeatherContext.Consumer>
        {
          ({ city, formShown, changeCity }) => (
            <div id="body" style={{ backgroundColor: "#0BC29A" }}>
              <div className="cl">
                <h1 style={{ fontSize: 80, color: "white", margin: 0, marginTop: 35 }}>{this.state.weather.temp}</h1>
                <h3 style={{ color: "white" }}>Cloudy</h3>
              </div>
              <div className="cm" >
                <div> <FontAwesomeIcon color="white" size="lg" icon={faCloudMoon} /> Today <sup>.</sup> {this.state.weather.weather_type}</div>
                <div>{this.state.weather.temp_max}<sup>o</sup>/{this.state.weather.temp_min}<sup>o</sup></div>
              </div>
            </div>
          )
        }

      </WeatherContext.Consumer>
    )
  }
}

CurrentCity.contextType = WeatherContext

export default CurrentCity