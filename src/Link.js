import React, { Component } from 'react'
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsappSquare, faInstagram, faStripeS } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faCloudMoon } from '@fortawesome/free-solid-svg-icons'

export default class Link extends Component {
    render() {
        return (
            <div>
            <div className="B">
            <div style={{ borderRadius: 20,backgroundColor: "#0BC29A"}}>
            <div className="cl">
              <h1 style={{ fontSize: 80, color: "white", margin: 0, marginTop: 35 }}>32</h1>
              <h3 style={{ color: "white" }}>Cloudy</h3>
              <button >AQI138</button>
            </div>
            <div className="cm" >
              <div> <FontAwesomeIcon color="white" size="lg" icon={faCloudMoon} /> Today <sup>.</sup> Cloudy</div>
              <div>40<sup>o</sup>/26<sup>o</sup></div>

            </div>
            <div className="cm">
              <div> <FontAwesomeIcon color="white" size="lg" icon={faCloudMoon} />Tomorrow <sup>.</sup> Cloudy</div>
              <div>34<sup>o</sup>/27<sup>o</sup></div>
            </div>

            <div className="cm">
              <div> <FontAwesomeIcon color="white" size="lg" rotation={90} icon={faStripeS} /> Sat <sup>.</sup> Haze </div>
              <div>35 <sup>o</sup>/27<sup>o</sup></div>

            </div>
            </div>
            </div>
          </div>
          
        )
    }
}
