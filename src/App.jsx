import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import User from './components/User'
import Story from './components/Story'
import AboutMe from './components/AboutMe'
import Food from './components/Food'
import Hobbies from './components/Hobbies'
import FreeTime from './components/FreeTime'
import Technologies from './components/Technologies'
import swal from 'sweetalert'

function App() {
  const [count, setCount] = useState(0)
  const sayHi = () => {
    alert("Hello World")
  }

  return (
    <div className="App">
      <AboutMe />
      <Hobbies />
      <FreeTime />
      <Food />
      <Technologies />
    </div>
  )
}

export default App
