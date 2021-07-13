import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectCity } from './App'
import { withRouter } from 'react-router-dom';
import { WeatherContext } from './weather-context'

class Header extends Component {
  render() {

    const pathn=this.props.location.pathname
    console.log(pathn=='/search')
    return (
      <WeatherContext.Consumer>
        {({city, formShown, changeCity}) => (
          <header>
            { (pathn == '/') && 
            <div className="he">
              <Link to="/search" style={{ marginLeft: 10, flexBasis: "2%" }}>
                <FontAwesomeIcon color="white" size="lg" icon={faPlus}/>
              </Link>
              <h2 style={{ color: "#FFF", flexBasis: '98%' }}>{city}</h2>
            </div>}
            {(pathn == '/search') && <div className="he">
              <Link to="/" style={{ marginLeft: 10 }}>
                <FontAwesomeIcon color="white" size="lg" icon={faChevronLeft}/>
              </Link>
            </div>
            }
            

            
          </header>
        )}

      </WeatherContext.Consumer>
    )
  }
}

export default withRouter(Header);