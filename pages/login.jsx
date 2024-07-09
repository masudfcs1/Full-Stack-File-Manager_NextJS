import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const login = () => {
    const {data:session} =useSession()
  const router = useRouter();

  useEffect(() => {
    console.log("session", session)

    if(session){
      router.push("/")
    }
   
  }, [session])
  

  return (
    <div className=' flex justify-center items-center mt-[30%]'>
        <button className=' bg-blue-600 p-2 rounded-sm px-3 text-white'
        onClick={()=>signIn()} > Sign In With Google</button>
    </div>
  )
}

export default login