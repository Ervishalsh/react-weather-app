import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';
import AddForm from './AddForm';
import { WeatherContext } from './weather-context';
class HistoryCity extends Component {
    state = { weather: { temp: '' } }
    componentDidMount() {

        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.props.city + "&appid=62a1c2ec208f256a7450eb5a3ab739af&units=metric")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        weather: {
                            temp: result.main.temp,
                            temp_min: result.main.temp_min,
                            temp_max: result.main.temp_max,
                        }
                    })
                });
        // this.props.city
        // call weather api
        // set state weather
    }


    removeCity = () => {
        let h = localStorage.getItem('History')
        h = JSON.parse(h)
        h = h.filter(v => v != this.props.city)
        localStorage.setItem("History", JSON.stringify(h))

        this.props.onRemove(h)
    }

    redirect = () => {
        
        this.props.history.push({ pathname: '/', state: { city: this.props.city } })
    }

    render() {
        return (
            <WeatherContext.Consumer>
                {
                    ({ city, formShown, changeCity }) => (
                        <div className="dm" onClick={() => {
                            changeCity(this.props.city)
                            this.redirect()
                        }}>
                            <div className="Mg">
                                <div>
                                    <p style={{ margin: 0, padding: 0 }}>{this.props.city}</p>
                                    <p style={{ fontSize: 15 }}>{this.state.weather.temp_min}<sup>o</sup>/{this.state.weather.temp_max}<sup>o</sup></p>
                                </div>
                                <div>
                                    <span>
                                        {this.state.weather.temp} <sup>o</sup>C
                        </span>
                                    <span style={{ marginLeft: 10 }}>
                                        <button onClick={this.removeCity} type="button" style={{ width: 40, height: 40, borderRadius: 20, borderColor: "gray", backgroundColor: "#FFF" }}>
                                            <FontAwesomeIcon icon={faTrashAlt} color="black" />
                                        </button>
                                    </span>
                                </div>

                            </div>
                        </div>
                    )
                }
            </WeatherContext.Consumer>
        )
    }
}


export default withRouter(HistoryCity)