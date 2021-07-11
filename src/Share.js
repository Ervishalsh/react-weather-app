import React, { Component } from 'react'
import Link from './Link'

export default class Share extends Component {
    state={get:false}
    render() {
        return (
            <div style={{textAlign: "left",padding: 10}}>
            {!this.state.get && <div>
                <a href="javascript:;" style={{ marginLeft: 10 }} onClick={() => this.setState({ get: true })}>

                <button style={{fontSize: 25}}>Share</button>
                </a>
                </div>}
                {!this.state.get && <div style={{marginTop:10}}>
                <button style={{fontSize: 25}}>Settings</button>
            </div>}
            </div>
        )
    }
}
