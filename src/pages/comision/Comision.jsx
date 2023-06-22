import Header from "../../components/header/HeaderComision"
import Search from "../../components/search/Search"
import Layout from '../layout/Layout'
import './comision.scss'

const Comision = () => {
  return (
    <Layout>
      <div>
          <Header/>
          <Search/>
      </div>
      <main className="contenedor">
        <div></div>
      </main>
    </Layout>
  )
}

export default Comision