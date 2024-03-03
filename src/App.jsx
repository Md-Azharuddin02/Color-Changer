import { useState } from 'react'

function App() {
  const [color, setColor]= useState('bg-red-300')
  const changeColor=(newColor)=>{
    setColor(newColor)
  }
  return (
    <>
      <div id='btn-container' className={`flex items-end justify-center gap-5 p-5 min-h-screen ${color}`}>
      <button className="bg-green-500 text-white text-2xl w-32 p-2 rounded" onClick={()=>changeColor('bg-green-500')}>Green</button>
      <button className="bg-red-500 text-white text-2xl w-32 p-2 rounded" onClick={()=>changeColor('bg-red-500')}>Red</button>
      <button className="bg-yellow-500 text-white text-2xl w-32 p-2 rounded" onClick={()=>changeColor('bg-yellow-500')}>Yellow</button>
      <button className="bg-blue-900 text-white text-2xl w-32 p-2 rounded" onClick={()=>changeColor('bg-blue-500')}>Blue</button>
      <button className="bg-pink-500 text-white text-2xl w-32 p-2 rounded" onClick={()=>changeColor('bg-pink-500')}>Pink</button>
      <button className="bg-orange-500 text-white text-2xl w-32 p-2 rounded" onClick={()=>changeColor('bg-orange-500')}>Orange</button>
      <button className="bg-purple-500 text-white text-2xl w-32 p-2 rounded" onClick={()=>changeColor('bg-purple-300')}>Purple</button>
  
      </div>
    </>
  )
}

export default App
