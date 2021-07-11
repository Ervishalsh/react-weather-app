import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default class Header extends Component {
    render() {
        return (
            <header>
            {!this.props.formshown && <div className="he">
              <a href="javascript:;" style={{ marginLeft: 10, flexBasis: "2%" }} onClick={this.props.toggleForm}>
                <FontAwesomeIcon color="white" size="lg" icon={faPlus} />
              </a>
              <h2 style={{ color: "#FFF", flexBasis: '98%' }}>{this.props.city}</h2>

            </div>}

            {this.props.formshown && <div className="he">
              <a href="javascript:;" style={{ marginLeft: 10 }} onClick={this.props.toggleForm}>
                <FontAwesomeIcon color="white" size="lg" icon={faChevronLeft} />
              </a>
            </div>
            }
          </header>
        )
    }
}
