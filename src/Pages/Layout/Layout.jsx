import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { useState } from "react";

export const Layout = () => {

    let time = new Date().toLocaleTimeString();
    const [ctime, setTime] = useState(time);
    const UpdateTime = () => {
      time = new Date().toLocaleTimeString();
      setTime(time);
    };
    setInterval(UpdateTime);

  return (
      <div>
          <Navbar />
          <div className="text-right me-4">Local Time: {ctime}</div>
          <main className="h-[100vh] w-[100%]">
              <Outlet/>
          </main>
          {/* <Footer/> */}
      </div>
  )
}
