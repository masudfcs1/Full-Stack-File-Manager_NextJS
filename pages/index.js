import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import style from '../styles/Home.module.css';
import Searchbar from "@/components/searchbar";
import FolderList from "@/components/folder/folderList";
import FileList from "@/components/file/fileList";
import { getFirestore } from "firebase/firestore";
import { app } from "@/config/firebase";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {data:session} =useSession()
  const router = useRouter();

  const db=getFirestore(app)
  
  useEffect(() => {
    if(!session){
      router.push("/login")
    }
    else{
    console.log("session", session)
    }
  }, [session])
  

  return (
    <div className=" p-5">
      <Searchbar/>
      <FolderList/>
      <FileList/>
    </div>
  );
}
