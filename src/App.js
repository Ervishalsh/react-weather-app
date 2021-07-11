import React, { Component } from 'react'

import "./App.css"
import AddForm from './AddForm'
import CurrentCity from './CurrentCity'
import Header from './Header';

const onSearch = value => console.log(value);

export default class App extends Component {
  state = { formshown: false, shown: false, city: 'Delhi' }

  submit = (city) => {
    this.setState({ city, formshown: false })
  }

  render() {

    return (
      <div>
        <div className="App">

          <Header
            formshown={this.state.formshown}
            city={this.state.city}
            toggleForm={() => this.setState({ formshown: !this.state.formshown })}
          />
          {!this.state.formshown && <CurrentCity city={this.state.city} />}

          {this.state.formshown && <AddForm onSubmit={this.submit} />}
        </div>

      </div>
    )
  }
}
