import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from '../styles/Home.module.css';
import Searchbar from "@/components/searchbar";
import FolderList from "@/components/folder/folderList";
import FileList from "@/components/file/fileList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "@/config/firebase";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {data:session} =useSession()
  const router = useRouter();

  const db=getFirestore(app)
  const [folderList, setFolderList] = useState([])
  
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
  
  const getFolderList=async()=>{
    setFolderList([]);
    const q=query(collection(db,"Folders"),
    // where("parentFolderId",'==',0),
    where("createBy",'==',session.user.email));
    
    const querySnapshot = await getDocs(q);
    //  console.log("object,",querySnapshot)
    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    //  console.log(doc.id, " => ", doc.data());
    setFolderList(folderList=>([...folderList,doc.data()]))
    console.log("folder", folderList)
}); 
}
  return (
    <div className=" p-5">
      <Searchbar/>
      <FolderList folderList={folderList} />
      <FileList/>
    </div>
  );
}
