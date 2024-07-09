import Image from "next/image";
import { Inter } from "next/font/google";
import style from '../styles/Home.module.css'
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {data:session} =useSession()
  const router = useRouter();

  useEffect(() => {
    if(!session){
      router.push('/login')
    }
  }, [session])
  

  return (
    <div className={style.container}>
      
    </div>
  );
}
