import React, { useState } from 'react'

const Form = ({addColor}) => {
    const [color, setColor] = useState(null);
    const handleSubmit = (e)=> {
        e.preventDefault()
        addColor(color)
    }
  return (
    <section className='flex flex-col md:flex-row justify-center items-center '>
        <h1 className='font-semibold text-xl mr-2'>Color Generator</h1>
        <form action="" className='flex items-center' onSubmit={handleSubmit}>
            <input type="color"value={color} onChange={(e)=>setColor(e.target.value)} 
            name="colorPicker" id="colorPicker"
            className='h-10 rounded-lg border-none outline-none' />
            <input type="text"
            name='color'
            id='color'
            value={color}
            onChange={(e)=>setColor(e.target.value)}
            className='outline-none py-1 px-1 rounded-md w-40 focus:border' />
            <button type='submit' style={{backgroundColor:color}} className='px-2 py-1 rounded-md text-white font-bold bg-slate-600'>Generate</button>
        </form>
    </section>
  )
}

export default Form