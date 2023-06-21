import Layout from "../layout/Layout"
import Header from "../../components/header/Header"
import Search from "../../components/search/Search"
import ContainerWidgetList from "../../components/container-widget-list/ContainerWidgetList"
import ContainerWidget from "../../components/container-widget/ContainerWidget"
import "./home.scss"

const Home = () => {
    return (
        
        <Layout>
            <div>
                <Header/>
                <Search/>
            </div>
            <main className="home">
                <div className="container-widgets">
                    <ContainerWidget/>
                </div>
                <div className="container-widgets-list">
                    <ContainerWidgetList/>
                </div>
            </main>
        </Layout>
       
    )
}

export default Home;

/*const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Header />
                <Search />
                <div className="row">
                    <div className="col-8">
                        <div className="widgets">
                            <Widget type="usuarios"/> 
                            <Widget  type="total"/> 
                        </div>
                        <div className="widgets">
                        <Widget type="descargas"/> 
                        </div>
                    </div>
                    <div className="col">
                        <div className="widgets">
                            <div className="widgets-list">
                            <ListTopWidget /> 
                            </div>
                        </div>
                    </div>
                    <div className="charts">
                        <Chart/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;*/