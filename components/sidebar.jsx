import menu from '@/menu/menu'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Sidebar = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className=' w-[200px] p-5 items-center gap-2 bg-white h-screen sticky top-0 z-10 shadow-blue-200 shadow-md '>

            <div className=' flex justify-center'>
                <Link href='/'>
                    <Image
                        src='/logo.png'
                        alt='logo'
                        width={130}
                        height={60}
                    />
                </Link>
            </div>

            <button className=' w-[150px] flex mt-10 gap-2 text-[15px] items-center text-white bg-blue-500 p-2 rounded-sm hover:scale-105 '> Add New File
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                </svg>
            </button>

            <button className=' w-[150px] flex mt-3 gap-5 text-[15px] items-center text-white bg-sky-400 p-2 rounded-sm hover:scale-105 '>  New Folder
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V10.5Z" clipRule="evenodd" />
                </svg>
            </button>

            <div className=' mt-5'>
                {menu.list.map((item,index) => (
                    <h2 
                    onClick={()=>setActiveIndex(index)}
                    className={`w-[150px] flex gap-1 items-center p-2 rounded-sm hover:cursor-pointer transition-all hover:text-white hover:bg-blue-400 hover:shadow-md hover:shadow-slate-500
                      ${activeIndex === index ? 'bg-blue-500 text-white hover:cursor-pointer shadow-md shadow-slate-500' : null } `}
                     
                     >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d={item.logo}
                            />
                        </svg>
                        {item?.name}
                    </h2>

                ))}
            </div>

        </div>

    )
}

export default Sidebar