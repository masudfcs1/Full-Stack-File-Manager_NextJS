import Image from 'next/image'
import React, { useState } from 'react'

const SidebarModal = () => {
    const [inputField, setinputField] = useState()

    const onCreate=()=>{
        console.log(inputField);
    }

    return (
        <div>
            <form method="dialog" className=' modal-box p-9 bg-white items-center'>
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className=' w-full flex flex-col justify-center items-center gap-2'>
                    <Image
                    src='/folder.png'
                    width={50}
                    height={50}
                    />
                    <input
                     type="text"
                     placeholder='Folder Name '
                     className=' w-full outline-none p-2 bg-white border-[1px] rounded-sm'
                     onChange={(e)=>setinputField(e.target.value)}
                     />
                     <button onClick={()=>onCreate()} type='submit' className=' p-2 bg-blue-500 text-white mt-3 w-full rounded-sm hover:bg-blue-600 '>Create</button>
                </div>
            </form>
        </div>
    )
}

export default SidebarModal