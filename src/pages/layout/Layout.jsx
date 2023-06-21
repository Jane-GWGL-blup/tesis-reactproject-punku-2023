import Sidebar from "../../components/sidebar/Sidebar"

import "./layout.scss"

const Layout =({ header, sidebar, children}) =>{
  return(
      <div className="layout">
          <Sidebar/>
          <div className="layoutContainer">
                <div>
                  {header}
                  {sidebar}
                </div>
                
            <div className="container">
              <main>{children}</main>
            </div>
          </div>
      </div>
  )
}

export default Layout

