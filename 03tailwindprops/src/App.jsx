import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Azlaan Khan",
    age: 21,
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-3'>Tailwind test</h1>
    <Card username="Azlaan Khan" btnText="Click Me"/>
    <Card username="Harry" btnText="Visit Me"/>
    </>
  )
}

export default App
