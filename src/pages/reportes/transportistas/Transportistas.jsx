import Layout from "../../layout/Layout"
import Header from "../../../components/header/HeaderReporteTransportista"
import Search from "../../../components/search/Search"
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