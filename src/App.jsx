import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Values from 'values.js'
import Form from './Form'
import ColorList from './ColorList'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [colors, setColors] = useState(new Values("#124123").all(10))
  
  const addColor = async(color)=> {
      try {
        const newColor = new Values(color).all(10);
        setColors(newColor)
      } catch (error) {
        toast.error(`Invalid Color Entered: ${color}`)
      }
  }
  return (
    <>
     <section>
        <Form addColor={addColor}/>
        <ColorList colors={colors}/>
        <ToastContainer position='top-center' />
     </section>
    </>
  )
}

export default App
