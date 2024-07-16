import { app } from '@/config/firebase';
import { collection, doc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { ShowToastContext } from '../ShowToastContext';
import { useRouter } from 'next/router';

const SidebarModal = () => {
    const { data: session } = useSession()
    const {showToastMsg, setShowToastMsg} = useContext(ShowToastContext)
    const router=useRouter();
    const [inputField, setinputField] = useState()
    const docId = Date.now().toString();

    const db = getFirestore(app);
    useEffect(()=>{
        console.log("User Session",)
        if(!session)
        {
          router.push("/login")
        }
        else{
        //   setFolderList([]); 
          getFolderList();
        //   getFileList();
    
          console.log("User Session",session.user)
        }
        // setParentFolderId(0);
    
      },[session])

    const onCreate = async () => {
        console.log(inputField);
        await setDoc(doc(db, "Folders", docId), {
            name: inputField,
            id: docId,
            createBy: session.user.email
        })
        setShowToastMsg("Create folder successfully.")
    }

    const getFolderList=async()=>{
        // setFolderList([]);
        const q=query(collection(db,"Folders"),
        // where("parentFolderId",'==',0),
        where("createBy",'==',session.user.email));
        
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
         console.log(doc.id, " => ", doc.data());
        // setFolderList(folderList=>([...folderList,doc.data()]))
    }); 
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
                        onChange={(e) => setinputField(e.target.value)}
                    />

                    <button onClick={() => onCreate()} type='submit' className=' p-2 bg-blue-500 text-white mt-3 w-full rounded-sm hover:bg-blue-600 '>Create</button>
                </div>
            </form>
        </div>
    )
}

export default SidebarModal