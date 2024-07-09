import { signIn } from 'next-auth/react'
import React from 'react'

const login = () => {
  return (
    <div className=' flex justify-center items-center mt-[30%]'>
        <button className=' bg-blue-600 p-2 rounded-sm px-3 text-white'
        onClick={()=>signIn} > Sign In With Google</button>
    </div>
  )
}

export default login