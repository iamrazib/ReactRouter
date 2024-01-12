import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"

export const Layout = () => {
  return (
      <div>
          <Navbar/>
          <main className="h-[100vh] w-[100%]">
              <Outlet/>
          </main>
          {/* <Footer/> */}
      </div>
  )
}
