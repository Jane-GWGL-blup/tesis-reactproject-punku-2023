import Header from "../../components/header/HeaderTransportista"
import Search from "../../components/search/Search"
import Layout from '../layout/Layout'
import './transportistas.scss'

const Transportistas = () => {
  return (
    <Layout>
      <div>
          <Header/>
          <Search/>
      </div>
      <main className="transportistas">
        <div></div>
      </main>
    </Layout>
  )
}

export default Transportistas