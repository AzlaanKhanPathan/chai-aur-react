import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#808000")

  return (
    <div className='h-screen w-screen duration-200'style={{backgroundColor: color}}>
    <div
    className='fixed flex flex-wrap bg-black rounded-2xl bottom-12 justify-center inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl'>
        <button onClick={()=> setColor("red")}
        className='outline-none px-3 rounded-full text-white' style={{backgroundColor: "red"}}>Red</button>
        <button onClick={()=> setColor("blue")}
        className='outline-none px-3 rounded-full text-white' style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick={()=> setColor("lime")}
        className='outline-none px-3 rounded-full text-white' style={{backgroundColor: "lime"}}>Lime</button>
      </div>
      </div>
    </div>
  )
}

export default App
