import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faPlus, faCloudMoon, faChevronLeft, faSearch, faChevronRight, faCog } from '@fortawesome/free-solid-svg-icons'
import { faStripeS } from '@fortawesome/free-brands-svg-icons'

export default class CurrentCity extends Component {

  state = { weather: { temp: '', weather_type: '' } }

  componentDidMount() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=62a1c2ec208f256a7450eb5a3ab739af&units=metric")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            weather: {
              temp: result.main.temp,
              temp_min: result.main.temp_min,
              temp_max: result.main.temp_max,
              weather_type: result.weather[0].main
            }
          })
        });


    // this.props.city
    // call weather api
    // set state weather
  }




  render() {
    return (
      <div id="body" style={{ backgroundColor: "#0BC29A" }}>
        <div className="cl">
          <h1 style={{ fontSize: 80, color: "white", margin: 0, marginTop: 35 }}>{this.state.weather.temp}</h1>
          <h3 style={{ color: "white" }}>Cloudy</h3>
          <button >AQI138</button>
        </div>
        <div className="cm" >
          <div> <FontAwesomeIcon color="white" size="lg" icon={faCloudMoon} /> Today <sup>.</sup> {this.state.weather.weather_type}</div>
          <div>{this.state.weather.temp_max}<sup>o</sup>/{this.state.weather.temp_min}<sup>o</sup></div>

        </div>

      </div>
    )
  }
}
