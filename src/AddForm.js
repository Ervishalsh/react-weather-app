import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import HistoryCity from './HistoryCity'

export default class AddForm extends Component {

    state = { city: '',cities:['Basti'] , History: ''}
    submit = (e) => {
        e.preventDefault()

        // TODO: 
        let h = localStorage.getItem("History")
        if(h == null){
            h = [this.state.city];
        }
        else{
            h = JSON.parse(h)
            h.push(this.state.city)
            h = h.filter((v,i) => h[i] == v )
        }

        localStorage.setItem( "History", JSON.stringify(h))

        this.props.onSubmit(this.state.city)
    }

    updateHisotry = (cities) => this.setState({cities}) 

    componentDidMount() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=62a1c2ec208f256a7450eb5a3ab739af&units=metric")
        .then(res => res.json())
        .then(
         (result) => {
           this.setState({
            
           })
         });
         

        // read history 
        let h = localStorage.getItem("History")

        // set state for the cities
        if(h == null){
            h = []
        }
        else{
            h = JSON.parse(h)
        }
        this.setState({cities: h })
}

    render() {
        return (
            <div>
                <div>
                    <h1 style={{ fontSize: 35, textAlign: "left" }}>Manage cities</h1>
                    <form style={{ fontSize: 25, borderRadius: 10, textAlign: "left", padding: 10 }} onSubmit={this.submit}>
                        <input onChange={e => { this.setState({ city: e.target.value }) }} type="text" value={this.state.city} placeholder="Search.." name="search" style={{ fontSize: 25, width: "30rem", height: "2rem" }} />
                        <button type="submit" style={{ lineHeight: "2rem" }}> <FontAwesomeIcon color="white" size="2x" icon={faSearch} /></button>
                    </form>
                    
                    {this.state.cities.map( (v,i) => <HistoryCity key={i} city={v} onclick={this.updateHisotry} onRemove={this.updateHisotry} /> )} 
                
                </div>
            </div>
        )
    }
}
