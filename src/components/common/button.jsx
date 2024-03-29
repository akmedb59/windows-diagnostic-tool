import React from 'react'

const Button = ({button="Button",action, customClass="text-white bg-black "}) => {
  return (
    <div className={customClass+' text-sm font-semibold py-2 px-6 rounded-xl text-center hover:bg-opacity-90 cursor-pointer'}>
        <button className='z-50'>{button}</button>
    </div>
  )
}

export default Button;