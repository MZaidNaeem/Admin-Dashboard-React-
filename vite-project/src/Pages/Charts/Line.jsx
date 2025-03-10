import { Fragment } from "react"
import { LineChart } from "../../Components/Charts/LineChart"
import { SparklineAreaData } from "../../data/dummy"
import { SparkLine } from "../../Components/Charts/SparkLine"

export const Line = () => {
    return <Fragment>
        <div className="lineChart chartPage">
            <SparkLine currentcolor="blue" id="line-sparkline" type="Line" height="100%" width="250px" data={SparklineAreaData} color="blue"></SparkLine>
        </div>
    </Fragment>
}