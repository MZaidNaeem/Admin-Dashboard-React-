import { Fragment } from "react"
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';

export const Pyramid = () => {
    return <Fragment>
        <div className="stackedChart lineChart" >
            <AccumulationChartComponent
                id="pyramid-chart"
                legendSettings={{ background: 'white' }}
                tooltip={{ enable: true }}
                width="250px"
            >
                <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
                <AccumulationSeriesCollectionDirective>
                    <AccumulationSeriesDirective
                        name="Food"
                        dataSource={PyramidData}
                        xName="x"
                        yName="y"
                        type="Pyramid"
                        width="45%"
                        height="80%"
                        neckWidth="15%"
                        gapRatio={0.03}
                        explode
                        emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
                        dataLabel={{
                            visible: true,
                            position: 'Inside',
                            name: 'text',
                        }}
                    />
                </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
        </div>
    </Fragment>
}