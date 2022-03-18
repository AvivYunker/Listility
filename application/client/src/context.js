import React, { Component } from 'react'

const Context = React.createContext()
export default class Provider extends Component {
  
    state = {
        todos: [
            {
                id: 1,
                title: "check emails",
                complete: false,
            },
            {
                id: 2,
                title: "check voicemails",
                complete: false,
            },
            {
                id: 3,
                title: "check report",
                complete: false,
            },
        ]
    }
    render() {
    return (
      <Context.Provider value={this.state}>
          {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer