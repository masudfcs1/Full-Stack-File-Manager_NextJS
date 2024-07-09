import Image from 'next/image'
import React from 'react'

const FolderItem = ({folder}) => {
  return (
    <div className=' w-full flex flex-col justify-center items-center p-3 h-[130px] border-[1px] rounded-lg bg-white hover:shadow-md hover:cursor-pointer hover:shadow-zinc-300 '>
        <Image
        src='/folder.png'
        width={40}
        height={40}
        />
        <h2 className=' line-clamp-2 text-center text-[13px] justify-center'>{folder.name} </h2>
    </div>
  )
}

export default FolderItem