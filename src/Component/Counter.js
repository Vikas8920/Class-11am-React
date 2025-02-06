import React, { Component } from 'react'
import './Counter.css'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {count: 0}
    }
    increment = () => {
        this.setState((prevState)=> ({
            count: prevState.count+1
        }))
    }
  render() {
    return (
      <>
        <p>Count: {this.state.count}</p>
        <button className='btn' onClick={this.increment}>increment</button>
      </>
    )
  }
}
