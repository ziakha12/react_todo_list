import React from 'react'

function Header(props:any) {
  return (
    <div className='bg-slate-800 p-5'>
        <h1 className=' text-white text-4xl text-cente'>{props.title}</h1>
        </div>
  )
}

export default Header