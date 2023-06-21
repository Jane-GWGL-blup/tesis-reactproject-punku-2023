import Header from "../../../components/header/HeaderReportePublicacion"
import Search from "../../../components/search/Search"
import Layout from "../../layout/Layout"
import './publicaciones.scss'

const Publicaciones = () => {
  return (
    <Layout>
        <div>
            <Header/>
            <Search/>
        </div>
        <main className="publicaciones">
          <div></div>
        </main>
    </Layout>
  )
}

export default Publicaciones