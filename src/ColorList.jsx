import React from 'react'
import SIngleColor from './SIngleColor'
import {nanoid} from 'nanoid'

const ColorList = ({colors}) => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mt-4'>
        {colors.map((color, index)=> <SIngleColor key={nanoid()} index={index} color={color}/>)}
    </section>
  )
}

export default ColorList