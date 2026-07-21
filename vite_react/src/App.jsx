import { useState } from 'react'
import './App.css'
function App() {

  let [counter, setCounter] = useState(5)


  //let counter = 5
  const addValue = () =>{
    console.log("value added ")
    // counter = counter + 1
    if (counter == 20){
      setCounter(20)  
    }
    else {
      setCounter(counter + 1)
    }
  }
  const removeValue = () => {
    if (counter == 0) {
      setCounter(0)
    }
    else {
      setCounter(counter - 1)
    }

  }

  const stepCountValue = () => {
    setCounter(counter + 2)
  }

  const resetValue = () => {
    setCounter(0)
  }
  return (
    <>
  <div className="flex flex-col items-center justify-center h-screen gap-10">
  <h1 className="text-5xl italic">Chai aur React</h1>

  <div className="flex justify-center items-center rounded-3xl gap-5 bg-gray-800 p-10">
    <h2 className="text-lg">Counter value: {counter}</h2>

    <button
      className="text-lg bg-sky-400 p-3 rounded-full hover:bg-blue-600"
      onClick={addValue}
    >
      Add value
    </button>

    <button
      className="text-lg bg-sky-400 p-3 rounded-full hover:bg-blue-600"
      onClick={removeValue}
    >
      Remove value
    </button>

    <button
      className="text-lg bg-sky-400 p-3 rounded-full hover:bg-blue-600"
    onClick={stepCountValue}
    >
      Step value
    </button>

    <button
      className="text-lg bg-sky-400 p-3 rounded-full hover:bg-blue-600"
    onClick={resetValue}
    >
      Reset Value
    </button>
  </div>
</div>
    </>
  )
}

export default App
