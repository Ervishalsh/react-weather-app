import React, { Component } from 'react'

import "./App.css"
import AddForm from './AddForm'
import CurrentCity from './CurrentCity'
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { WeatherContext } from './weather-context';

// import { Provider } from 'react-redux'


// import {
//   createStore
// } from 'redux';
// // import clientMiddleware from '../middlewares/clientMiddleware';

// export const changeCity = city => {
//   return { type: 'CHANGE_CITY', payload: city }
// }
// const initialState = { city: 'Delhi', formShown: false }
// const rootReducer = (state = initialState, action) => {
//   console.log(action)
//   switch (action.type) {
//     case 'CHANGE_CITY':
//       return {
//         ...state,
//         city: action.payload,
//         formShown: false
//       };
//     default:
//       return state;
//   }
// }
// const store = createStore(rootReducer) // global store 

export default class App extends Component {

  constructor(props) {
    super(props)
    this.changeCity = city => {
      this.setState({ city, formShown: false })
    }
  this.state = { formShown: false, city: 'Delhi', changeCity: this.changeCity }

  }


  submit = (city) => {
    this.setState({ city, formshown: false })
  }

  render() {

    return (
      <WeatherContext.Provider value={this.state}>
        <Router>
          <div>

            <div className="App">
              <Header
                formshown={this.state.formshown}
                city={this.state.city}
                toggleForm={() => this.setState({ formshown: !this.state.formshown })}
              />

              <Switch>
                <Route exact path="/" component={CurrentCity}>
                  {/* <CurrentCity city={this.state.city} /> */}
                  
                </Route>
                <Route path="/search" component={AddForm}>
                  {/* <AddForm onSubmit={this.submit} /> */}
                </Route>

              </Switch>
            </div>

          </div>
        </Router>
      </WeatherContext.Provider>

    )
  }
}
