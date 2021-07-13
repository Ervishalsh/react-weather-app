import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import HistoryCity from './HistoryCity'
import { connect } from 'react-redux'
import { WeatherContext } from './weather-context'
class AddForm extends Component {

    state = { city: '', cities: ['Basti'], History: '' }
    submit = (e) => {
        e.preventDefault()

        // TODO: 
        let h = localStorage.getItem("History")
        if (h == null) {
            h = [this.state.city];
        }
        else {
            h = JSON.parse(h)
            h.push(this.state.city[0].toUpperCase() + this.state.city.substring(1))
            h = [...new Set(h)]
            console.log(h)
        }

        localStorage.setItem("History", JSON.stringify(h))
        // console.log(this.props.history)
        this.context.changeCity(this.state.city)

        this.props.history.push({ pathname: '/', state: { city: this.state.city } })
    }

    updateHisotry = (cities) => this.setState({ cities })

    componentDidMount() {

        // read history 
        let h = localStorage.getItem("History")

        // set state for the cities
        if (h == null) {
            h = []
        }
        else {
            h = JSON.parse(h)
        }
        this.setState({ cities: h })
    }

    render() {
        return (
            <WeatherContext.Consumer>
                {({ city, formShown, changeCity }) => (
                    <div>
                        <div>
                            <h1 style={{ fontSize: 35, textAlign: "left" }}>Manage cities</h1>
                            <form style={{ fontSize: 25, borderRadius: 10, textAlign: "left", padding: 10 }} onSubmit={this.submit}>
                                <input onChange={e => { this.setState({ city: e.target.value }) }} type="text" value={this.state.city} placeholder="Search.." name="search" style={{ fontSize: 25, width: "30rem", height: "2rem" }} />
                                <button type="submit" style={{ lineHeight: "2rem" }}> <FontAwesomeIcon color="white" size="2x" icon={faSearch} /></button>
                            </form>

                            {this.state.cities.map((v, i) => <HistoryCity key={i} city={v} onclick={this.updateHisotry} onRemove={this.updateHisotry} />)}

                        </div>
                    </div>
                )}
            </WeatherContext.Consumer>
        )
    }
}

AddForm.contextType = WeatherContext;

export default AddForm