import React, { Component, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
 const [value, setValue] = useState(0)
 const [visible, setVisible] = useState(true)

 if (visible) {
   return (
     <div>
       <button
        onClick={() => setValue((v) => v + 1)}>+</button>
      <button
        onClick={() => setVisible(false)}>hide</button>
      <ClassCounter value={value} />
      <HookCounter value={value} />
     </div>
   )
 } else {
   return (
     <button onClick={() => setVisible(true)}>show</button>
   )
 }
}

const HookCounter = ({ value }) => {

  useEffect(() => {
    console.log('useEffect()')
    return () => console.log('clear')
  })

  return <p> {value} </p>
}

class ClassCounter extends Component {

  componentDidMount() {
    console.log('class: mount')
  }

  componentDidUpdate() {
    console.log('class: update')
  }

  componentDidCatch() {
    console.log('class: unmount')
  }

  render() {
    return <p>{this.props.value}</p>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))