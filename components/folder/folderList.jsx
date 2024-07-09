import React from 'react'
import FolderItem from './folderItem'

const FolderList = () => {

    const folderlist=[
        {
            id: 1,
            name: 'folder 1'
        },
        {
            id: 2,
            name: 'folder 2'
        },
        {
            id: 3,
            name: 'folder 3'
        },
        {
            id: 4,
            name: 'folder 4'
        },
        {
            id: 5,
            name: 'folder 5'
        },
    ]

  return (
    <div className=' p-5 mt-5 bg-white  rounded-sm'>
        <h2 className=' text-[17px] font-semibold items-center '>Recent Folders  <span className=' float-right text-blue-400 font-normal text-[13px] '> View All</span></h2>
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3 gap-4 '>
            {folderlist.map((item,index)=>(
                <FolderItem folder={item} />
            ))}
        </div>
    </div>
  )
}

export default FolderList