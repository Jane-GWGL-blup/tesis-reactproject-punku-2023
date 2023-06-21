import "./containerWidget.scss"
import Widget from "../widget/Widget"
import Chart from "../chart/Chart"

const ContainerWidget = () => {
  return (
    <div className="container-widget">
    <div className="row">
        <div className="widgets">
            <Widget type="usuarios"/> 
            <Widget  type="total"/> 
        </div>
        <div className="charts">
            <Chart/>  
        </div>
    </div> 
</div>
  )
}

export default ContainerWidget