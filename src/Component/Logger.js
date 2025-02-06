import React, { Component } from 'react'

export default class Logger extends Component {
    componentDidMount(){
        console.log('Componet has been mounted')
    }
    componentWillUnmount(){
        console.log('Componet is about to be unmounted')
    }
  render() {
    return (
      <>
       <h1>This component logs </h1> 
      </>
    )
  }
}
