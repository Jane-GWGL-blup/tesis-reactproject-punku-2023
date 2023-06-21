import Sidebar from "../../components/sidebar/Sidebar"
import Header from "../../components/header/Header"
import Search from "../../components/search/Search"

import "./layout.scss"

const Layout =({children}) =>{
  return(
      <div className="layout">
          <Sidebar/>
          <div className="layoutContainer">
                <Header />
                <Search />
            <div className="container">
              <main>{children}</main>
            </div>
          </div>
      </div>
  )
}

export default Layout