import Header from "../../components/header/HeaderSolicitud"
import Search from "../../components/search/Search"
import Layout from '../layout/Layout'
import './solicitudes.scss'

const Solicitudes = () => {
  return (
    <Layout>
      <div>
          <Header/>
          <Search/>
      </div>
      <main className="solicitudes">
        <div></div>
      </main>
    </Layout>
  )
}

export default Solicitudes