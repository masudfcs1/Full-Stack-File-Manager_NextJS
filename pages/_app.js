import Sidebar from "@/components/sidebar";
import Toast from "@/components/Toast";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <div className=" flex bg-teal-100">
        <Sidebar />
        <div className=" grid grid-cols-1 md:grid-cols-3 w-full">
          <div className=" col-span-2">
          <Component {...pageProps} />
          </div>
          <div className=" bg-white p-5">Storage</div>
        </div>
      </div>
        <Toast/>
    </SessionProvider>
  )
}