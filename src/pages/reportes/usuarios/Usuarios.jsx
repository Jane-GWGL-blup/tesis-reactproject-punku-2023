import Header from "../../../components/header/HeaderReporteUsuario"
import Search from "../../../components/search/Search"
import Layout from '../../layout/Layout'
import './usuarios.scss'

const Usuarios = () => {
  return (
    <Layout>
        <div>
            <Header/>
            <Search/>
        </div>
        <main className="usuario">
          <div></div>
        </main>
    </Layout>
  )
}

export default Usuarios