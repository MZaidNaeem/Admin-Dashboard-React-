import { Fragment } from "react"
import { pieChartData } from "../../data/dummy"
import { PiChart } from "../../Components/Charts/PiChart"

export const Pi = () => {
    return <Fragment>
        <div className="stackedChart lineChart" >
            <PiChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
        </div>
    </Fragment>
}