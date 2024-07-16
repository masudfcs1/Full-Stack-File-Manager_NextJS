import React from 'react'
import FolderItem from './folderItem'

const FolderList = ({folderList}) => {
    
  return (
    <div className=' p-5 mt-5 bg-white  rounded-sm'>
        <h2 className=' text-[17px] font-semibold items-center '>Recent Folders  <span className=' float-right text-blue-400 font-normal text-[13px] '> View All</span></h2>
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3 gap-4 '>
            {folderList.map((item,index)=>(
                <FolderItem folder={item} />
            ))}
        </div>
    </div>
  )
}

export default FolderList