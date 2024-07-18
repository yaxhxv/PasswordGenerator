import { useState, useCallback, useEffect} from 'react'
 

function App() {
const [length, setLength] = useState(6);
const[numbersAllowed, setNumbersAllowed] = useState(false)
const[charAllowed, setCharAllowed] = useState(false);
const[password, setPassword] = useState("");

const generatePass = useCallback(()=>{
let pass= ''
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
if(setNumbersAllowed) str += '0123456789';
if(charAllowed) str += '!@#$%^&*(){}';

for(let i=0; i<=length; i++){
 let char = Math.floor( Math.random() * str.length +1 )
 pass += str.charAt(char)
}

setPassword(pass);

},[length, numbersAllowed, charAllowed, setPassword])

useEffect(()=>{
  generatePass();
} 
, [length, charAllowed, numbersAllowed, generatePass])

  return (
    <>
    
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'><h3 className='text-center '>Password Generator</h3>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      />
      <button className='bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={50}
        value={length}
        className='cursor-pointer' 
        onChange={(e)=>{setLength(e.target.value)}}/>
        <label>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked= {numbersAllowed}
        id="numberInput"
        onChange={(prev) =>{!prev}}  />
        <label>Numbers</label>
        <input type="checkbox"
        defaultChecked= {charAllowed}
        id="numberInput"
        onChange={(prev) =>{!prev}}  />
        <label>Characters</label>
      </div>
    </div>
  </div>
    </>
  )
}

//chai aur react ep 10 43:00

export default App
