import React from 'react'
import { toast } from 'react-toastify';

const SIngleColor = ({color, index}) => {
    const isDark = index >= 7;
    const {hex, weight} = color

    const copyToClipBoard = async()=>{
        if(navigator.clipboard){
            try {
                await navigator.clipboard.writeText(`#${hex}`)
                toast.success(`Color copied to clipboard`)
            } catch (error) {
                
            }
        }else{
            toast.error('Clipboard access not available')
        }
    }
  
  return (
    <button className='w-full h-16 md:h-28 flex justify-center items-center flex-col gap-2'onClick={copyToClipBoard} style={{backgroundColor: `#${hex}`}}>
        <h1 style={{color:`${isDark? 'white': '#000000'}`}}>{weight}%</h1>
        <h1 style={{color:`${isDark? 'white': '#000000'}`}}>#{hex}</h1>
    </button>
  )
}

export default SIngleColor