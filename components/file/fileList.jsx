import React from 'react'
import FileItem from './fileItem'

const FileList = () => {
    const filelist = [
        {
            id: 1,
            name: "DSA",
            type: "pdf",
            size: "345 kB",
            modifiedAt: "Jan 21,2023"
        },
        {
            id: 2,
            name: "Progrming",
            type: "pdf",
            size: "945 kB",
            modifiedAt: "Jan 21,2023"
        },
        {
            id: 3,
            name: "img-1.png",
            type: "image",
            size: "745 kB",
            modifiedAt: "Jan 21,2023"
        },
        {
            id: 4,
            name: "Routine",
            type: "doc",
            size: "345 kB",
            modifiedAt: "Jan 21,2023"
        },
    ]
    return (
        <div className=' bg-white mt-5 p-5 rounded-sm '>
            <h2 className=' font-bold text-[18px] '>Recent files</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 text-[13px] font-semibold  border-b-[1px] mt-3 pb-1  border-gray-300 text-gray-400'>
                <h2>Name</h2>
                <div className=' grid grid-cols-3'>
                    <h2> Modified</h2>
                    <h2> Size</h2>
                </div>
            </div>

            {filelist && filelist.map((item, index) => (
                <FileItem file={item} key={index} />
            ))}

        </div>
    )
}

export default FileList