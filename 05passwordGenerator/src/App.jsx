import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

// useRef hook
const passwordRef = useRef(null)

const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (numberAllowed) str+= "0123456789"
  if (charAllowed) str+= "!#$%&'()*+,-./:;<=>?@"

  for (let i = 1; i < length; i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
    setPassword(pass)
1   
  }

},[length,numberAllowed,charAllowed,setPassword])

const copyPasswordToClipBoard = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,25)
  window.navigator.clipboard.writeText(password)
},[password])

  useEffect(()=>{passwordGenerator()},[length, numberAllowed,charAllowed, passwordGenerator])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
  <div className="w-full max-w-md h-50 bg-gray-800 shadow-xl rounded-2xl p-6 space-y-6">
    
    <div className="text-center text-2xl font-semibold text-orange-400">
      Password Generator
    </div>

    <div className="flex items-center rounded-lg shadow-md overflow-hidden">
      <input
        type="text"
        value={password}
        readOnly
        placeholder="Password"
        className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 outline-none"
      ref={passwordRef}
     />
      <button className='text-white bg-gray-600 h-full p-3 cursor-pointer hover:bg-gray-800' onClick={copyPasswordToClipBoard}>Copy</button>
 
  </div> 
     <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-2'>
    <input 
    type="range" 
    min={6} 
    max={25}
    value={length}
    className='cursor-pointer'
    onChange={(e)=>{setLength(e.target.value)}}/> 
    <label className='flex content-between justify-center text-orange-400'>
        <span>Length: </span>
        <span>{length}</span>
      </label>
    <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
    <label htmlFor="numberInput" className='text-orange-400'>Numbers</label>
    <input type="checkbox" defaultChecked={charAllowed} id="numberInput" onChange={()=>{setCharAllowed((prev)=>!prev)}} />
    <label htmlFor="numberInput" className='text-orange-400'>Characters</label>
    </div>
    </div>
      </div>

</div>
)
}

export default App
