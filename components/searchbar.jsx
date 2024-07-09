import React from 'react'

const Searchbar = () => {
    return (
        <div className=' w-full flex bg-white gap-3 p-2 rounded-sm items-center '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input type="text"
            placeholder='Search ....'
            className=' bg-transparent outline-none text-black w-full text-[14px]'
            onKeyDown={(e)=>e.key === 'Enter' && console.log(e.target.value) }
            />

        </div>
    )
}

export default Searchbar