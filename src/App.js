// Today's Topics: Class Component, Lifecycle methods

import React, { Component } from 'react'
// import Greeting from './Component/Greeting'
import Counter from './Component/Counter'
// import Logger from './Component/Logger'
// import Counter2 from './Component/Counter2'
import Heading from './Component/Heading'

export default class App extends Component {
  render() {
    return (
      <>
        {/* <Greeting name={'Vikas'}/> */}
        <Counter/>
        {/* <Logger/> */}

        {/* <Counter2/> */}
        <Heading name={'Vikas'}/>
        <Heading name={'Rohit'}/>
      </>
    )
  }
}
